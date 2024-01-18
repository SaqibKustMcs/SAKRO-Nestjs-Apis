import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Chat } from './schemas/chat.schema';
import { Message } from './schemas/message.schema';
import { UserToken } from './schemas/userTokens.schema';
import { defaultApp } from './auth/firebaseAdmin';
import { UserChatDTO, MessageDTO, ChatHistoryQueryDTO, CreateChatDTO, UserStatusDTO, AddUserDTO, PaginationDTO, AllChatQueryDTO, FavouriteChatDTO, ReadChatDTO, MessageHistoryQueryDTO, AddUserToChatDTO, UserProfileDTO, UpdateChatDTO, GetAllUsersDTO } from './dto/chat.dto';
import { UserData } from './schemas/user.schema';
import { UserChat, UserChatDocument } from './schemas/userChat.schema';
import { UserMessage, UserMessageDocument } from './schemas/userMessage.schema';
import { UserSocket } from './interface/socket.interface';
import { Socket, Server } from 'socket.io';
import { WebSocketServer } from '@nestjs/websockets';
import { MessageEventEnum } from './enum/message-evetn.enum';
var cron = require('node-cron');

@Injectable()
export class ChatService {

    private userSockets: UserSocket[];
    private server: Server;

    constructor(
        @InjectModel(Chat.name) private chatModel: Model<Chat>,
        @InjectModel(UserChat.name) private userChatModel: Model<UserChat>,
        @InjectModel(Message.name) private messageModel: Model<Message>,
        @InjectModel(UserMessage.name) private userMessageModel: Model<UserMessage>,
        @InjectModel(UserToken.name) private userTokenModel: Model<UserToken>,
        @InjectModel(UserData.name) private userModel: Model<UserData>,


    ) {
        this.initializeChatConnections();
        this.userSockets = [];
    }

    async initializeChatConnections() {
        try {
            await this.userModel.updateMany({}, { isOnline: false });
            await this.userTokenModel.updateMany({}, { isConnected: false });
            console.log("Done: initializeChatConnections()")
        } catch (error) {
            console.log(error?.message);
        }
    }

    async removeDisconnectedUsers(server: Server) {

        this.server = server;

        cron.schedule('*/20 * * * *', async () => {
            console.log("socket job")
            //       debugger;

            this.userSockets = this.userSockets.filter((userSocket, index) => {
                console.log(userSocket.userId, userSocket.socket.id, userSocket.socket.rooms);
                if (userSocket?.socket?.rooms?.size > 0) {
                    return true
                } else {
                    this.userDisconnected(userSocket?.socket);
                    return false;
                }
            });
        });
    }

    async userConnected(socket: Socket) {
        try {
            const query = socket?.handshake?.query;
            const userId = query?.userId?.toString();
            const registrationToken = query?.registrationToken?.toString();
            console.log(registrationToken);
            const name = query?.name?.toString();
            const pic = query?.pic?.toString();
            const color = query?.color?.toString();

            if (registrationToken) {
                await this.userTokenModel.updateMany({ userId: { $ne: userId }, registrationToken: registrationToken, isDeleted: false }, {
                    isDeleted: true,
                });
                let userToken = await this.userTokenModel.findOne({ userId: userId, registrationToken: registrationToken, isDeleted: false });
                if (userToken) {
                    await userToken.updateOne({ isConnected: true });
                } else {
                    userToken = await new this.userTokenModel({ userId: userId, registrationToken: registrationToken, isConnected: true, isDeleted: false }).save();
                }
            }

            let userDocument = await this.userModel.findOne({ userId: userId, isDeleted: false });
            if (userDocument) {
                if (name && pic && color) {
                    await userDocument.updateOne({
                        name: name,
                        pic: pic,
                        color: color,
                    })
                }
            } else {
                userDocument = await new this.userModel({
                    userId: userId,
                    name: name,
                    pic: pic,
                    color: color,
                }).save();
            }

            await this.userModel.updateOne({ userId: userId, isDeleted: false }, { isOnline: true });

            this.userSockets.push({
                userId: userId,
                socket: socket,
            })
        } catch (error) {
            console.log(error);
            throw new Error(error?.message);
        }
    }

    async userDisconnected(socket: Socket) {
        try {

            const query = socket?.handshake?.query;
            const userId = query?.userId?.toString();
            const registrationToken = query?.registrationToken?.toString();

            if (registrationToken) {
                let userToken = await this.userTokenModel.updateMany({ userId: userId, registrationToken: registrationToken, isDeleted: false },
                    { isConnected: false });
                let onlineDevies = await this.userTokenModel.count({
                    userId: userId,
                    isConnected: true,
                    isDeleted: false
                });
                await this.userModel.updateOne({ userId: userId, isDeleted: false }, { isOnline: onlineDevies > 0 });
            }

        } catch (error) {
            console.log(error);
            throw new Error(error?.message);
        }
    }

    async create(createChatDTO: CreateChatDTO): Promise<Chat> {
        try {

            debugger;
            createChatDTO.userIds = [...new Set(createChatDTO.userIds)];

            if (createChatDTO.userIds.length < 2 || !createChatDTO.userIds.includes(createChatDTO.ownerUserId)) {
                throw new BadRequestException("Invalid UserIds");
            }

            if (createChatDTO.userIds.length > 2 && !createChatDTO.isMultiple) {
                throw new BadRequestException("Invalid UserIds");
            }

            const userIdsString = createChatDTO.userIds.sort().join(',');

            let chatDocument = await this.chatModel.findOne({
                //                ownerUserId: createChatDTO.ownerUserId,
                userIds: userIdsString,
                isMultiple: createChatDTO.isMultiple,
                isDeleted: false
            });

            if (!chatDocument) {
                chatDocument = await new this.chatModel({
                    title: createChatDTO.title,
                    ownerUserId: createChatDTO.ownerUserId,
                    userIds: userIdsString,
                    isMultiple: createChatDTO.isMultiple,
                }).save();


                const userChatDocuments: UserChatDocument[] = createChatDTO.userIds.map(userId => {
                    return new this.userChatModel({
                        chatId: chatDocument.id,
                        userId: userId,
                        isModerator: !chatDocument.isMultiple || userId == chatDocument.ownerUserId ? true : false,
                        isDeleted: false,
                    })
                })

                await this.userChatModel.bulkSave(userChatDocuments);

                let sockets = this.userSockets.filter(user => createChatDTO.userIds.includes(user.userId)).map(user => user.socket);

                sockets.forEach(socket => socket.join(chatDocument.id));

                if (chatDocument.isMultiple) {

                    debugger;

                    const messageDTO: MessageDTO = {
                        chatId: chatDocument.id,
                        message: chatDocument.title + " created",
                        messageBody: { chatDocument },
                        userId: null,
                        eventType: MessageEventEnum.NEWCHAT,
                        eventId: null
                    };
                    try {
                        this.server.to(chatDocument.id).emit('message', messageDTO);
                    }
                    catch (error) {
                        console.log(error.message);
                    }
                }
            }

            return chatDocument;

        } catch (error) {
            console.log(error);
            throw new BadRequestException(error?.message);
        }
    }

    async addUserToChat(addUserToChatDTO: AddUserToChatDTO): Promise<Chat> {
        try {
            debugger;
            let userChatDocument = await this.userChatModel.findOne({
                chatId: addUserToChatDTO.chatId,
                userId: addUserToChatDTO.moderatorId,
                isModerator: true,
                isDeleted: false,
            });

            if (!userChatDocument) {
                throw new Error("Invalid moderator id");
            }

            let chatDocument = await this.chatModel.findOne({
                _id: addUserToChatDTO.chatId,
                isDeleted: false,
            });

            if (!chatDocument) {
                throw new Error("Invalid chat id");
            }

            if (!chatDocument.isMultiple) {
                throw new Error("Not allowed for single chat.");
            }

            let userIds = chatDocument.userIds.split(",");

            if (userIds.includes(addUserToChatDTO.userId)) {
                throw new Error("User Already Exists");
            }

            userIds.push(addUserToChatDTO.userId);

            const userIdsString = userIds.sort().join(',');

            await chatDocument.updateOne({
                userIds: userIdsString,
                //     isMultiple: userIds.length > 2 ? true : false,
            })

            await new this.userChatModel({
                chatId: chatDocument.id,
                userId: addUserToChatDTO.userId,
                isDeleted: false,
            }).save();

            chatDocument = await this.chatModel.findOne({
                _id: addUserToChatDTO.chatId,
                isDeleted: false,
            });

            await this.sendJoinNotification(addUserToChatDTO);

            let sockets = this.userSockets.filter(user => user.userId == addUserToChatDTO.userId).map(user => user.socket);

            sockets.forEach(socket => socket.join(addUserToChatDTO.chatId));

            const userDocument = await this.userModel.findOne({ userId: addUserToChatDTO.userId, isDeleted: false, })
            const moderatorDocument = await this.userModel.findOne({ userId: addUserToChatDTO.moderatorId, isDeleted: false, })
            const userName = userDocument.name ? userDocument.name : addUserToChatDTO.userId;
            const moderatorName = moderatorDocument.name ? moderatorDocument.name : moderatorDocument.userId;

            const messageDTO: MessageDTO = {
                chatId: chatDocument.id,
                message: userName + " has been added to chat by " + moderatorName,
                messageBody: { chatDocument },
                userId: addUserToChatDTO.userId,
                eventType: MessageEventEnum.JOINCHAT,
                eventId: null
            };
            try {
                this.server.to(chatDocument.id).emit('message', messageDTO);
            }
            catch (error) {
                console.log(error.message);
            }

            return chatDocument;

        } catch (error) {
            console.log(error);
            throw new BadRequestException(error?.message);
        }
    }

    async removeUserFromChat(addUserToChatDTO: AddUserToChatDTO): Promise<Chat> {
        try {
            debugger;
            let userChatDocument = await this.userChatModel.findOne({
                chatId: addUserToChatDTO.chatId,
                userId: addUserToChatDTO.moderatorId,
                isModerator: true,
                isDeleted: false,
            });

            if (!userChatDocument) {
                throw new Error("Invalid moderator id");
            }

            let chatDocument = await this.chatModel.findOne({
                _id: addUserToChatDTO.chatId,
                isDeleted: false,
            });

            if (!chatDocument) {
                throw new Error("Invalid chat id");
            }

            if (!chatDocument.isMultiple) {
                throw new Error("Not allowed for single chat.");
            }

            let userIds = chatDocument.userIds.split(",");

            if (!userIds.includes(addUserToChatDTO.userId)) {
                throw new Error("User Does Not Exist");
            }

            userIds = userIds.filter(userId => userId != addUserToChatDTO.userId);

            const userIdsString = userIds.sort().join(',');

            await chatDocument.updateOne({
                userIds: userIdsString,
                //     isMultiple: userIds.length > 2 ? true : false,
            })

            await this.userChatModel.updateOne({
                chatId: chatDocument.id,
                userId: addUserToChatDTO.userId
            }, {
                isDeleted: true,
            });

            chatDocument = await this.chatModel.findOne({
                _id: addUserToChatDTO.chatId,
                isDeleted: false,
            });

            const userDocument = await this.userModel.findOne({ userId: addUserToChatDTO.userId })
            const moderatorDocument = await this.userModel.findOne({ userId: addUserToChatDTO.moderatorId })
            const userName = userDocument.name ? userDocument.name : addUserToChatDTO.userId;
            const moderatorName = moderatorDocument.name ? moderatorDocument.name : moderatorDocument.userId;

            const messageDTO: MessageDTO = {
                chatId: chatDocument.id,
                message: userName + " has been removed from chat by " + moderatorName,
                messageBody: { chatDocument },
                userId: addUserToChatDTO.userId,
                eventType: MessageEventEnum.REMOVECHAT,
                eventId: null
            };
            try {
                this.server.to(chatDocument.id).emit('message', messageDTO);
            }
            catch (error) {
                console.log(error.message);
            }

            let sockets = this.userSockets.filter(user => user.userId == addUserToChatDTO.userId).map(user => user.socket);

            sockets.forEach(socket => socket.leave(addUserToChatDTO.chatId));

            return chatDocument;

        } catch (error) {
            console.log(error);
            throw new BadRequestException(error?.message);
        }
    }

    async leaveChat(userChatDTO: UserChatDTO): Promise<Chat> {
        try {
            debugger;
            let userChatDocument = await this.userChatModel.findOne({
                chatId: userChatDTO.chatId,
                userId: userChatDTO.userId,
                isDeleted: false,
            });

            if (!userChatDocument) {
                throw new Error("Invalid user id");
            }

            let chatDocument = await this.chatModel.findOne({
                _id: userChatDTO.chatId,
                isDeleted: false,
            });

            if (!chatDocument) {
                throw new Error("Invalid chat id");
            }

            if (!chatDocument.isMultiple) {
                throw new Error("Not allowed for single chat.");
            }

            let userIds = chatDocument.userIds.split(",");

            if (!userIds.includes(userChatDTO.userId)) {
                throw new Error("User Does Not Exist");
            }

            userIds = userIds.filter(userId => userId != userChatDTO.userId);

            const userIdsString = userIds.sort().join(',');

            await chatDocument.updateOne({
                userIds: userIdsString,
                //     isMultiple: userIds.length > 2 ? true : false,
            })

            await this.userChatModel.updateOne({
                chatId: chatDocument.id,
                userId: userChatDTO.userId
            }, {
                isDeleted: true,
            });

            chatDocument = await this.chatModel.findOne({
                _id: userChatDTO.chatId,
                isDeleted: false,
            });

            const userDocument = await this.userModel.findOne({ userId: userChatDTO.userId, isDeleted: false, })
            const userName = userDocument.name ? userDocument.name : userChatDTO.userId;
            const messageDTO: MessageDTO = {
                chatId: chatDocument.id,
                message: userName + " has left the chat.",
                messageBody: { chatDocument },
                userId: userChatDTO.userId,
                eventType: MessageEventEnum.LEAVECHAT,
                eventId: null
            };
            try {
                this.server.to(chatDocument.id).emit('message', messageDTO);
            }
            catch (error) {
                console.log(error.message);
            }

            let sockets = this.userSockets.filter(user => user.userId == userChatDTO.userId).map(user => user.socket);

            sockets.forEach(socket => socket.leave(userChatDTO.chatId));

            return chatDocument;

        } catch (error) {
            console.log(error);
            throw new BadRequestException(error?.message);
        }
    }

    async makeModerator(addUserToChatDTO: AddUserToChatDTO): Promise<any> {
        try {

            let userChatDocument = await this.userChatModel.findOne({
                chatId: addUserToChatDTO.chatId,
                userId: addUserToChatDTO.moderatorId,
                isDeleted: false,
                isModerator: true
            });

            if (!userChatDocument) {
                throw new Error("Invalid moderator id");
            }

            let chatDocument = await this.chatModel.findOne({
                _id: addUserToChatDTO.chatId,
                isDeleted: false,
            });

            if (!chatDocument) {
                throw new Error("Invalid chat id");
            }

            if (!chatDocument.isMultiple) {
                throw new Error("Not allowed for single chat.");
            }

            await this.userChatModel.updateOne({
                chatId: addUserToChatDTO.chatId,
                userId: addUserToChatDTO.userId,
                isDeleted: false,
            }, {
                isModerator: true
            }
            );

            return "updated";

        } catch (error) {
            console.log(error);
            throw new BadRequestException(error?.message);
        }
    }

    async getChatIds(userId): Promise<String[]> {
        try {
            let userChatDocuments = await this.userChatModel.find({ userId: userId, isDeleted: false });

            let chatIds = userChatDocuments.map(userChatItem => {
                return userChatItem.chatId;
            })
            return chatIds;
        } catch (error) {
            console.log(error);
            throw new Error(error?.message);
        }
    }

    async createMessage(payload: MessageDTO) {

        try {
            let chatDocument = await this.chatModel.findOne(
                {
                    _id: payload.chatId,
                    isDeleted: false,
                }
            );

            if (!chatDocument) {
                throw new Error("Invalid chat id");
            }

            let messageDocument = await new this.messageModel({
                chatId: chatDocument?.id,
                userId: payload.userId,
                message: payload.message,
                messageBody: payload.messageBody,
                attachments: payload.attachments,
                time: payload.time,
                eventId: payload.eventId,
                eventType: payload.eventType,
            }).save();

            await this.userChatModel.updateMany({ chatId: chatDocument?.id, userId: { $ne: payload.userId }, isDeleted: false }, {
                $inc: { unreadCount: 1 },
            })

            const userChatDocuments = await this.userChatModel.find({
                chatId: chatDocument?.id,
                userId: { $ne: payload.userId },
                isDeleted: false
            });

            const userMessageDocuments: UserMessageDocument[] = userChatDocuments.map(userChatDocument => {
                return new this.userMessageModel({
                    chatId: userChatDocument.chatId,
                    userId: userChatDocument.userId,
                    messageId: messageDocument.id,
                    time: messageDocument.time,
                    readTime: null,
                    isDeleted: false,
                })
            })

            await this.userMessageModel.bulkSave(userMessageDocuments);

            this.sendMessageNotification(payload);

            return messageDocument;
        } catch (error) {
            console.log(error);
            throw new Error(error?.message);
        }
    }

    async resetUnreadCount(readChatDTO: ReadChatDTO) {
        try {
            const messageDocument = await this.messageModel.findOne({ _id: readChatDTO.messageId, chatId: readChatDTO.chatId, isDeleted: false });
            await this.userChatModel.updateMany(
                {
                    chatId: readChatDTO.chatId,
                    userId: readChatDTO.userId,
                    isDeleted: false
                },
                {
                    unreadCount: 0,
                    lastMessageReadId: readChatDTO.messageId,
                    lastMessageReadTime: messageDocument?.time,
                }
            );
            await this.userMessageModel.updateMany({
                chatId: readChatDTO.chatId,
                userId: readChatDTO.userId,
                messageId: readChatDTO.messageId,
                readTime: null,
                isDeleted: false,
            }, {
                readTime: new Date(),
            })
        } catch (error) {
            console.log(error);
            throw new Error(error?.message);
        }
    }

    async markChatFavourtie(favouriteChatDTO: FavouriteChatDTO) {
        try {
            await this.userChatModel.updateMany(
                {
                    chatId: favouriteChatDTO.chatId,
                    userId: favouriteChatDTO.userId,
                    isDeleted: false
                },
                {
                    isFavourite: favouriteChatDTO.isFavourite,
                }
            );

            return "updated";
        } catch (error) {
            console.log(error);
            throw new BadRequestException(error?.message);
        }
    }

    async sendMessageNotification(payload: MessageDTO) {
        try {
            debugger;
            // let messagePayload: { data: object, tokens: string[] } = {
            //     data: {
            //         type: "CHAT",
            //         title: 'chat',
            //         message: payload.message ? payload.message.toString() : '',
            //         eventType: payload.eventType ? payload.eventType : '',
            //         eventId: payload.eventId ? payload.eventId : '',
            //         chatId: payload.chatId,
            //         time: payload.time.toUTCString(),
            //     },
            //     tokens: [],
            // };

            let messagePayload: { notification: object, data: object, tokens: string[] } = {
                notification: {
                    title: 'chat',
                    body: payload.message ? payload.message.toString() : ''
                },
                data: {
                    type: "CHAT",
                    title: 'chat',
                    message: payload.message ? payload.message.toString() : '',
                    eventType: payload.eventType ? payload.eventType : '',
                    eventId: payload.eventId ? payload.eventId : '',
                    chatId: payload.chatId,
                    time: payload.time.toUTCString(),
                },
                tokens: [],
            };
            const userChatData = await this.userChatModel.aggregate(
                [
                    {
                        $match: {
                            chatId: payload?.chatId,
                            userId: { $ne: payload?.userId }
                        }
                    },
                    {
                        $lookup: {
                            from: "usertokens",
                            localField: 'userId',
                            foreignField: 'userId',
                            pipeline: [
                                {
                                    $match: { isConnected: false, isDeleted: false }
                                }
                            ],
                            as: 'usertokens'
                        }
                    }

                ]

            );

            const userTokens = []
            userChatData.forEach(userChatItem => {
                userChatItem?.usertokens?.forEach(
                    userToken => {
                        if (userToken && userToken?.registrationToken != '') {
                            userTokens.push(userToken?.registrationToken)
                        }
                    });

            });
            if (userTokens.length == 0) {
                return;
            }
            messagePayload.tokens = userTokens;
            console.log(messagePayload);
            try {
                if (messagePayload.tokens.length > 0) {
                    const response = await defaultApp.messaging().sendMulticast(messagePayload);
                    console.log("reposne: sendMulticast")
                    console.log(JSON.stringify(response));
                }
            } catch (ex) {
                console.log("error: sendMulticast");
                throw new Error(ex);
            }
        } catch (error) {
            console.log(error);
            throw new Error(error?.message);
        }
    }

    async sendJoinNotification(payload: UserChatDTO) {
        try {
            debugger;
            let messagePayload: { data: object, tokens: string[] } = {
                data: {
                    type: "JOIN",
                    title: 'Join Chat',
                    message: "You are invited to join chat",
                    chatId: payload.chatId,
                    time: new Date().toUTCString(),
                },
                tokens: [],
            };
            const userChatData = await this.userChatModel.aggregate(
                [
                    {
                        $match: {
                            chatId: payload?.chatId,
                            userId: payload?.userId
                        }
                    },
                    {
                        $lookup: {
                            from: "usertokens",
                            localField: 'userId',
                            foreignField: 'userId',
                            pipeline: [
                                {
                                    $match: { isConnected: false, isDeleted: false }
                                }
                            ],
                            as: 'usertokens'
                        }
                    }

                ]

            );

            const userTokens = []
            userChatData.forEach(userChatItem => {
                userChatItem?.usertokens?.forEach(
                    userToken => {
                        if (userToken && userToken?.registrationToken != '') {
                            userTokens.push(userToken?.registrationToken)
                        }
                    });

            });
            if (userTokens.length == 0) {
                return;
            }
            messagePayload.tokens = userTokens;
            console.log(messagePayload);
            try {
                if (messagePayload.tokens.length > 0) {
                    const response = await defaultApp.messaging().sendMulticast(messagePayload);
                    console.log(response);
                }
            } catch (ex) {
                console.log(JSON.stringify(ex));
            }
        } catch (error) {
            console.log(error);
            throw new Error(error?.message);
        }
    }

    async getAllUsers(getAllUsersDTO: GetAllUsersDTO, userId) {
        try {
            let pagination = [];
            if (getAllUsersDTO?.limit && getAllUsersDTO?.offset) {
                pagination = [
                    { $skip: parseInt(getAllUsersDTO.offset) },
                    { $limit: parseInt(getAllUsersDTO.limit) }
                ]
            }

            let filterUserIds = [];
            if (getAllUsersDTO.excludeUsersChatId) {
                const userChatDocuments = await this.userChatModel.find({ chatId: getAllUsersDTO.excludeUsersChatId });
                filterUserIds = userChatDocuments.map(userChat => {
                    return userChat.userId;
                })
            }

            const userDocuments = await this.userModel.aggregate([
                {
                    $match: { isDeleted: false, userId: { $ne: userId } },
                },
                {
                    $lookup:
                    {
                        from: 'userchats',
                        localField: 'userId',
                        foreignField: 'userId',
                        pipeline: [
                            {
                                $lookup:
                                {
                                    from: 'userchats',
                                    localField: 'chatId',
                                    foreignField: 'chatId',
                                    pipeline: [
                                        {
                                            $match: {
                                                userId: userId,
                                                //      isMultiple: false,
                                            }
                                        },
                                        {
                                            $lookup:
                                            {
                                                from: 'chats',
                                                localField: 'chatId',
                                                foreignField: '_id',
                                                pipeline: [
                                                    {
                                                        $match: {
                                                            isMultiple: false,
                                                        }
                                                    },
                                                    {
                                                        $project: {
                                                            _id: 0,
                                                            id: "$_id",
                                                            isMultiple: 1,
                                                        }
                                                    }
                                                ],
                                                as: 'chat'
                                            },
                                        },
                                        {
                                            $unwind: {
                                                path: '$chat',
                                                preserveNullAndEmptyArrays: false
                                            }
                                        },
                                        {
                                            $project: {
                                                _id: 0,
                                                chat: 1,
                                                userId: 1,
                                                chatId: 1,
                                                isModerator: 1,
                                            }
                                        }
                                    ],
                                    as: 'userChatExists'
                                }
                            },
                            {
                                $project: {
                                    _id: 0,
                                    userId: 1,
                                    chatId: 1,
                                    isModerator: 1,
                                    userChatExists: 1,
                                }
                            }
                        ],
                        as: 'userchats'
                    }
                },
                {
                    $project: {
                        _id: 0,
                        userId: 1,
                        name: 1,
                        pic: 1,
                        color: 1,
                        status: 1,
                        isOnline: 1,
                        isDeleted: 1,
                        createdAt: 1,
                        updatedAt: 1,
                        userchats: 1,

                    }
                },
                ...pagination,
            ]);

            const userDocumentsReturn = userDocuments.map(userDocument => {
                let userChatsMapped = userDocument.userchats.filter(userChat => userChat.userChatExists.length > 0)
                userDocument.isSingleChatExists = userChatsMapped.length > 0;
                // delete userDocument.userchats;
                return userDocument;
            }).filter(userDocument => {
                return !filterUserIds.includes(userDocument.userId);
            })
            return userDocumentsReturn;
        } catch (error) {
            console.log(error);
            throw new BadRequestException(error?.message);
        }
    }

    async addUser(addUserDTO: AddUserDTO) {
        try {

            const userDocument = await this.userModel.updateOne({
                userId: addUserDTO.userId,
                isDeleted: false,
            }, {
                name: addUserDTO.name,
                pic: addUserDTO.pic,
                color: addUserDTO.color,
            }, { upsert: true });

            return userDocument;
        } catch (error) {
            console.log(error);
            throw new BadRequestException(error?.message);
        }
    }

    async getAllChats(allChatQueryDTO: AllChatQueryDTO) {
        try {
            let pagination = [];
            if (allChatQueryDTO?.limit && allChatQueryDTO?.offset) {
                pagination = [
                    { $skip: parseInt(allChatQueryDTO.offset) },
                    { $limit: parseInt(allChatQueryDTO.limit) }
                ]
            }

            let searchFilter = [];

            if (allChatQueryDTO.filterSearch) {
                searchFilter = [
                    {
                        '$match': {
                            '$or': [
                                { title: { $regex: '.*' + allChatQueryDTO.filterSearch + '.*' } },
                                { titleUser: { $regex: '.*' + allChatQueryDTO.filterSearch + '.*' } },
                                { userNames: { $regex: '.*' + allChatQueryDTO.filterSearch + '.*' } },
                                { userIds: { $regex: '.*' + allChatQueryDTO.filterSearch + '.*' } }
                            ]
                        }
                    }
                ]
            }

            let filter = { userId: allChatQueryDTO.userId };

            if (typeof allChatQueryDTO.filterIsFavourite !== 'undefined') {
                filter['isFavourite'] = (allChatQueryDTO.filterIsFavourite === 'true' || allChatQueryDTO.filterIsFavourite === true)
                    ? true : false;
            }

            if (typeof allChatQueryDTO.filterIsUnread !== 'undefined') {
                filter['unreadCount'] = (allChatQueryDTO.filterIsFavourite === 'true' || allChatQueryDTO.filterIsFavourite === true)
                    ? { $gt: 0 } : 0;
            }

            console.log(filter);

            let chatDocuments = await this.userChatModel.aggregate([
                {
                    $match: filter,
                },
                {
                    $lookup:
                    {
                        from: 'chats',
                        localField: 'chatId',
                        foreignField: '_id',
                        pipeline: [
                            {
                                $lookup:
                                {
                                    from: 'userchats',
                                    localField: '_id',
                                    foreignField: 'chatId',
                                    pipeline: [
                                        {
                                            $lookup:
                                            {
                                                from: 'userdatas',
                                                localField: 'userId',
                                                foreignField: 'userId',
                                                pipeline: [
                                                    {
                                                        $project: {
                                                            userId: 1,
                                                            name: 1,
                                                            color: 1,
                                                            pic: 1,
                                                            status: 1,
                                                            isOnline: 1,
                                                        }
                                                    }
                                                ],
                                                as: 'user'
                                            }
                                        },
                                        {
                                            $unwind: {
                                                path: '$user',
                                                preserveNullAndEmptyArrays: true
                                            }
                                        },
                                        {
                                            $project: {
                                                _id: 0,
                                                userId: 1,
                                                isModerator: 1,
                                                name: '$user.name',
                                                pic: '$user.pic',
                                                color: '$user.color',
                                                status: '$user.status',
                                                isOnline: '$user.isOnline',
                                            }
                                        }
                                    ],
                                    as: 'userchats'
                                }
                            },
                            {
                                $lookup: {
                                    from: 'messages',
                                    localField: '_id',
                                    foreignField: 'chatId',
                                    pipeline: [
                                        {
                                            $sort: { createdAt: -1 },
                                        },
                                        {
                                            $limit: 1
                                        },
                                        {
                                            $project: { _id: 0, id: '$_id', message: 1, time: 1 }
                                        }
                                    ],
                                    as: 'message'
                                }
                            },
                            {
                                $unwind: {
                                    path: '$message',
                                    preserveNullAndEmptyArrays: true
                                }
                            },
                            {
                                $project: {
                                    title: 1, image: 1, purposeDetail: 1, userchats: 1, message: 1,
                                    isMultiple: 1,
                                }
                            }
                        ],
                        as: 'chat'
                    }
                },
                {
                    $unwind: '$chat'
                },
                {
                    $addFields: {

                    }
                },
                {
                    $addFields: {
                        userOpponent: {
                            $arrayElemAt: [{
                                $filter:
                                {
                                    input: '$chat.userchats',
                                    as: "user",
                                    cond: { $ne: ["$$user.userId", allChatQueryDTO.userId] },
                                    limit: 1
                                }
                            }, 0]
                        },
                        userNames:
                        {
                            $reduce: {
                                input: '$chat.userchats',
                                initialValue: "",
                                in:
                                {
                                    $concat:
                                        [
                                            "$$value",
                                            { '$cond': [{ '$eq': ['$$value', ''] }, '', ', '] },
                                            "$$this.name"
                                        ]
                                }
                            }
                        }
                        ,
                        userIds:
                        {
                            $reduce: {
                                input: '$chat.userchats',
                                initialValue: "",
                                in:
                                {
                                    $concat:
                                        [
                                            "$$value",
                                            { '$cond': [{ '$eq': ['$$value', ''] }, '', ', '] },
                                            "$$this.userId"
                                        ]
                                }
                            }
                        }
                    }
                },
                {
                    $project: {
                        _id: 0,
                        chatId: 1,
                        unreadCount: 1,
                        isFavourite: 1,
                        isModerator: 1,
                        title: '$chat.title',
                        image: '$chat.image',
                        purposeDetail: '$chat.purposeDetail',
                        titleUser: '$userOpponent.name',
                        titleUserPic: '$userOpponent.pic',
                        titleUserColor: '$userOpponent.color',
                        userNames: 1,
                        userIds: 1,
                        lastMessage: '$chat.message',
                        lastMessageTime: {
                            $cond: {
                                if: { $gt: ['$chat.message', null] },
                                then: '$chat.message.time',
                                else: '$createdAt',
                            }
                        },
                        //     lastMessageTime: '$chat.message.time',
                        users: '$chat.userchats',
                        usersCount: { $size: '$chat.userchats' },
                        isMultiple: '$chat.isMultiple',
                    },
                },
                ...searchFilter,
                {
                    $sort: {
                        lastMessageTime: -1
                    }
                },
                ...pagination,
            ]);
            return chatDocuments;
        } catch (error) {
            console.log(error);
            throw new BadRequestException(error?.message);
        }
    }

    async getChatMessages(chatHistoryQueryDTO: ChatHistoryQueryDTO) {
        try {
            let pagination = [];
            if (chatHistoryQueryDTO?.limit && chatHistoryQueryDTO?.offset) {
                pagination = [
                    { $skip: parseInt(chatHistoryQueryDTO.offset) },
                    { $limit: parseInt(chatHistoryQueryDTO.limit) }
                ]
            }

            let userChatDocument = await this.userChatModel.findOne(
                {
                    chatId: chatHistoryQueryDTO.chatId,
                    userId: chatHistoryQueryDTO.userId,
                    isDeleted: false,
                }
            );

            let messageDocuments = await this.messageModel.aggregate([
                {
                    $match: {
                        chatId: userChatDocument?.chatId,
                        isDeleted: false,
                    },
                },
                {
                    $lookup:
                    {
                        from: 'userdatas',
                        localField: 'userId',
                        foreignField: 'userId',
                        pipeline: [
                            {
                                $project: {
                                    _id: 0,
                                    id: '$_id',
                                    userId: 1,
                                    name: 1,
                                    color: 1,
                                    pic: 1,
                                    status: 1,
                                    isOnline: 1,
                                }
                            }
                        ],
                        as: 'user'
                    }
                },
                {
                    $unwind: '$user'
                },
                {
                    $sort: { createdAt: -1 }
                },
                {
                    $project: {
                        _id: 0,
                        id: '$_id',
                        chatId: 1,
                        userId: 1,
                        message: 1,
                        messageBody: 1,
                        attachments: 1,
                        time: 1,
                        eventType: 1,
                        eventId: 1,
                        user: 1,
                        isSelf: {
                            $cond: {
                                if: { $eq: ['$userId', userChatDocument.userId] },
                                then: true,
                                else: false
                            }
                        },
                        isRead: {
                            $cond: {
                                if: { $lte: ['$time', userChatDocument.lastMessageReadTime] },
                                then: true,
                                else: false
                            }
                        },
                    }
                },
                ...pagination
            ])

            return messageDocuments;
        } catch (error) {
            console.log(error);
            throw new BadRequestException(error?.message);
        }
    }

    async getReadMessages(messageHistoryQueryDTO: MessageHistoryQueryDTO) {
        try {
            let pagination = [];
            if (messageHistoryQueryDTO?.limit && messageHistoryQueryDTO?.offset) {
                pagination = [
                    { $skip: parseInt(messageHistoryQueryDTO.offset) },
                    { $limit: parseInt(messageHistoryQueryDTO.limit) }
                ]
            }

            let messageDocument = await this.messageModel.findOne(
                {
                    chatId: messageHistoryQueryDTO?.chatId,
                    _id: messageHistoryQueryDTO?.messageId,
                    userId: messageHistoryQueryDTO?.userId,
                    isDeleted: false,
                }
            );

            if (!messageDocument) {
                throw new Error("Not allowed");
            }

            let userMessageDocuments = await this.userMessageModel.aggregate(
                [
                    {
                        $match: {
                            messageId: messageHistoryQueryDTO.messageId,
                            chatId: messageHistoryQueryDTO?.chatId,
                            userId: { $ne: messageHistoryQueryDTO?.userId },
                            isDeleted: false,
                        }
                    },
                    {
                        $lookup:
                        {
                            from: 'userdatas',
                            localField: 'userId',
                            foreignField: 'userId',
                            pipeline: [
                                {
                                    $project: {
                                        userId: 1,
                                        name: 1,
                                        color: 1,
                                        pic: 1,
                                        status: 1,
                                        isOnline: 1,
                                    }
                                }
                            ],
                            as: 'user'
                        },
                    },

                    {
                        $unwind: {
                            path: '$user',
                            preserveNullAndEmptyArrays: true
                        }
                    },
                    {
                        $project: {
                            _id: 0,
                            userId: 1,
                            messageId: 1,
                            time: 1,
                            readTime: 1,
                            name: '$user.name',
                            color: '$user.name',
                            pic: '$user.name',
                            status: '$user.name',
                            isOnline: '$user.name',
                        }
                    },
                    ...pagination
                ]
            );

            return userMessageDocuments;

        } catch (error) {
            console.log(error);
            throw new BadRequestException(error?.message);
        }
    }

    async updateUserStatus(userStatusDTO: UserStatusDTO) {
        try {
            await this.userModel.updateOne({ userId: userStatusDTO.userId, isDeleted: false }, { status: userStatusDTO.status });
            const userDocument = await this.userModel.findOne({ userId: userStatusDTO.userId, isDeleted: false });
            return userDocument;
        } catch (error) {
            console.log(error);
            throw new BadRequestException(error?.message);
        }
    }

    async getUserProfile(userId: string) {
        try {

            const userDocument = await this.userModel.findOne({ userId: userId, isDeleted: false, });

            return userDocument;
        } catch (error) {
            console.log(error);
            throw new BadRequestException(error?.message);
        }
    }

    async updateUserProfile(userId, userProfileDTO: UserProfileDTO) {
        try {
            await this.userModel.updateOne({ userId: userId, isDeleted: false },
                {
                    name: userProfileDTO.name,
                    pic: userProfileDTO.pic,
                    color: userProfileDTO.color
                });
            const userDocument = await this.userModel.findOne({ userId: userId, isDeleted: false });
            return userDocument;
        } catch (error) {
            console.log(error);
            throw new BadRequestException(error?.message);
        }
    }

    async updateChat(updateChatDTO: UpdateChatDTO) {
        try {
            let userChatDocument = await this.userChatModel.findOne({
                chatId: updateChatDTO.chatId,
                userId: updateChatDTO.moderatorId,
                isModerator: true,
                isDeleted: false,
            });

            if (!userChatDocument) {
                throw new Error("Invalid moderator id");
            }

            let chatDocument = await this.chatModel.findOne({
                _id: updateChatDTO.chatId,
                isDeleted: false,
            });

            if (!chatDocument) {
                throw new Error("Invalid chat id");
            }

            if (!chatDocument.isMultiple) {
                throw new Error("Not allowed for single chat.");
            }

            await chatDocument.updateOne({
                title: updateChatDTO.title,
                image: updateChatDTO.image,
                purposeDetail: updateChatDTO.purposeDetail
            });

            chatDocument = await this.chatModel.findOne({
                _id: updateChatDTO.chatId,
                isDeleted: false,
            });

            return chatDocument;
        } catch (error) {
            console.log(error);
            throw new BadRequestException(error?.message);
        }
    }

}
