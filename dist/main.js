/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./libs/chat/src/auth/firebaseAdmin.ts":
/*!*********************************************!*\
  !*** ./libs/chat/src/auth/firebaseAdmin.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.defaultApp = void 0;
var admin = __webpack_require__(/*! firebase-admin */ "firebase-admin");
const defaultApp = admin.initializeApp({
    credential: admin.credential.cert({
        "type": "service_account",
        "project_id": "chat-notification-a338e",
        "private_key_id": "995b7528867d7cc2d322f3bfc892975d7ccf9724",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCaGvABGbh6+G3y\n9bhU+gRzi2KuOGMt8/vZ+dtpNDF3vXompWUkkSh/WQ0X24yBtEsN3m6KY+uwnWrC\nnRYarkJ07EtbI8yFkKrrf6UCo4kt8fs5gyvImA8feAp01tNXrsrgv72Od7GQQwgd\n5p1t2CDsPweQmx9qn++doW2Hl5y47Dsl6CbP9Kt7JL+E1QD98HtwjOrL/4d/Waim\nnHpWQSC3IO8hxrDtgI/vwrYEpNaUOUOrDfSqAvHVBRZMNKuybw3Q4bL9owX5Rxgj\nuLuouX4FTpmYe2Y/P2pjvVZn+xYWdHh4z/KtXfZv0bnc2j/th96jEm5GYUYhAyZ4\nZE4ENoMNAgMBAAECggEAR8apJ5IPwzLHnySEnQuwHBL9PNElnKcplC6UW61EJxW4\n+ZwKflwfxSS4fPa0vEq5tHV3/fwpMCM5sPhSbc3hRS0zsfj8Du/BNBvJQu/hemVd\nEj3+nBj63jjegen3GL1gYAreYqdsLBmUg7zAcYN7Xh3DS758hQCGLeCcr81VYSlp\nFgblXY08d0NhtuILUUulRoE1YPhy4PEatwIYtewYWGmMIi2BCHU0DrOztjH8Ce9z\n7msBTgvMiASb/aLt1UB94vImIIfQwZTO01LH5yflpwzNLT8/3ZBwxlzmFcglAjLS\nio49Oav0lfwEiOqkso3xKDycSvLmfv2kgst6EC+BPwKBgQDLWYXJOlqzsIDt43qc\ngLgPjhhoXggQdLBi438FaqT0bg8jiutCFxnyG1mkJ4k7aga09lJ7oQwg01Fu/tsC\nvE0Oen9K7jaBpVGN9qYioP+k/LywTDRU048s8EbrlwwNQNau19VQCi1rTDvn6vjl\nqcTwHHjRqbI5RSSyiz32BPnMAwKBgQDCAWFGtLT13NT7X3X1PJSGDMMRmPZp6tit\nUw/WzSr9/aHKWbEXRbDBP2F0k3qzdSU2DAjFbMYAPw20qPz9yYrK1lGw8HCPo2fm\n0qm+yrbgVaTo1QPcOJ1yYIHU/YYfbfZYU1DYFjDY84ysmoTHeHQ2XFD0Cv8oBBPu\nPzsGy6qvrwKBgEstpKV5enD2LyRDtl/HwsSVbvae1PJogZF9s8cn3yYyzkwAnutH\nKSN18xUaPMUHdMVQT7w/FQHJvlB/zi5buU1CAm+MVABoQxdt+YvR49F2UrgG5E38\nDPG7Pyz4Ic+Aih4H02gM6y/A9mDOYQhfVFzE2fIBf89mfaO4kMa0njlLAoGAQtwq\n5C0++ESk+gTKKDw6i4A2cggfVB1lk0Y+/S40FNimO5Bxoa2Y3uCy+3QgI1zJ+Dhp\nhXCZRFh2pr5egjBFLuZxvOMAR+Bu3HPZoDFImUOq07sl221/hX2RARBmespwzbvY\n7r+nEf3Ni2atP/lZQ6rJE3H+wZG2NLOB6jOinW0CgYA6SVnKjQaaCjg7d28eAnSR\n+1iChcA8CLtcn7J+njYAZQg0eVsXTEBSk9WkW1k2ImLau+oHLaMBotfvjaEDYydt\njhYM+sAmdaS+0XCtXdf6cUa8217jyomf40dS+8fpKvfKCeeNMx2tN+4N1P5NXeHR\n2/HGnASy0cWX6yQcrCdcHA==\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-zc7n4@chat-notification-a338e.iam.gserviceaccount.com",
        "client_id": "104395492228038049799",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-zc7n4%40chat-notification-a338e.iam.gserviceaccount.com",
        "universe_domain": "googleapis.com"
    }),
    databaseURL: "https://fir-auth-bd895.firebaseio.com"
});
exports.defaultApp = defaultApp;


/***/ }),

/***/ "./libs/chat/src/chat.controller.ts":
/*!******************************************!*\
  !*** ./libs/chat/src/chat.controller.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChatController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const chat_service_1 = __webpack_require__(/*! ./chat.service */ "./libs/chat/src/chat.service.ts");
let ChatController = exports.ChatController = class ChatController {
    constructor(chatService) {
        this.chatService = chatService;
    }
};
exports.ChatController = ChatController = __decorate([
    (0, common_1.Controller)('chat'),
    __metadata("design:paramtypes", [typeof (_a = typeof chat_service_1.ChatService !== "undefined" && chat_service_1.ChatService) === "function" ? _a : Object])
], ChatController);


/***/ }),

/***/ "./libs/chat/src/chat.gateway.ts":
/*!***************************************!*\
  !*** ./libs/chat/src/chat.gateway.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChatGateway = void 0;
const websockets_1 = __webpack_require__(/*! @nestjs/websockets */ "@nestjs/websockets");
const chat_service_1 = __webpack_require__(/*! ./chat.service */ "./libs/chat/src/chat.service.ts");
const socket_io_1 = __webpack_require__(/*! socket.io */ "socket.io");
const chat_dto_1 = __webpack_require__(/*! ./dto/chat.dto */ "./libs/chat/src/dto/chat.dto.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const ws_filter_1 = __webpack_require__(/*! ./filter/ws.filter */ "./libs/chat/src/filter/ws.filter.ts");
let ChatGateway = exports.ChatGateway = class ChatGateway {
    constructor(chatService) {
        this.chatService = chatService;
    }
    afterInit(server) {
        this.chatService.removeDisconnectedUsers(server);
    }
    async handleConnection(socket) {
        try {
            const query = socket.handshake?.query;
            const socketUserId = query?.userId;
            if (!socketUserId) {
                socket.disconnect();
                return;
            }
            await this.chatService.userConnected(socket);
            const chatIds = await this.chatService.getChatIds(socketUserId);
            console.log("connected user chatIds: ", chatIds);
            console.log(socket.rooms);
            chatIds.forEach(chatId => {
                socket.join(chatId.toString());
            });
            return;
        }
        catch (err) {
            console.log(err);
            socket.disconnect();
        }
    }
    async handleDisconnect(socket) {
        try {
            await this.chatService.userDisconnected(socket);
            return;
        }
        catch (err) {
            console.log(err);
            socket.disconnect();
        }
    }
    async message(payload, socket) {
        try {
            const query = socket?.handshake?.query;
            const socketUserId = query?.userId;
            if (socketUserId?.toString() != payload.userId) {
                throw new websockets_1.WsException('User not connected');
            }
            payload.time = new Date();
            let chatDocument = await this.chatService.createMessage(payload);
            socket.to(payload?.chatId).emit('message', payload);
            return payload;
        }
        catch (err) {
            console.log(err);
            throw new websockets_1.WsException(err?.message);
        }
    }
    async join(payload, socket) {
        try {
            const query = socket?.handshake?.query;
            const socketUserId = query?.userId;
            if (socketUserId?.toString() != payload.userId) {
                throw new websockets_1.WsException('User not connected');
            }
            socket.join(payload.chatId.toString());
            return payload;
        }
        catch (err) {
            console.log(err);
            throw new websockets_1.WsException(err?.message);
        }
    }
    async read(payload, socket) {
        try {
            const query = socket?.handshake?.query;
            const socketUserId = query?.userId;
            if (socketUserId?.toString() != payload.userId) {
                throw new websockets_1.WsException('User not connected');
            }
            await this.chatService.resetUnreadCount(payload);
            return payload;
        }
        catch (err) {
            console.log(err);
            throw new websockets_1.WsException(err?.message);
        }
    }
};
__decorate([
    (0, websockets_1.SubscribeMessage)('message'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof chat_dto_1.MessageDTO !== "undefined" && chat_dto_1.MessageDTO) === "function" ? _b : Object, typeof (_c = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "message", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('join'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof chat_dto_1.UserChatDTO !== "undefined" && chat_dto_1.UserChatDTO) === "function" ? _d : Object, typeof (_e = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "join", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('read'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof chat_dto_1.ReadChatDTO !== "undefined" && chat_dto_1.ReadChatDTO) === "function" ? _f : Object, typeof (_g = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _g : Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "read", null);
exports.ChatGateway = ChatGateway = __decorate([
    (0, common_1.UseFilters)(ws_filter_1.WebsocketExceptionsFilter),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    (0, websockets_1.WebSocketGateway)(),
    __metadata("design:paramtypes", [typeof (_a = typeof chat_service_1.ChatService !== "undefined" && chat_service_1.ChatService) === "function" ? _a : Object])
], ChatGateway);


/***/ }),

/***/ "./libs/chat/src/chat.module.ts":
/*!**************************************!*\
  !*** ./libs/chat/src/chat.module.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChatModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const chat_schema_1 = __webpack_require__(/*! ./schemas/chat.schema */ "./libs/chat/src/schemas/chat.schema.ts");
const message_schema_1 = __webpack_require__(/*! ./schemas/message.schema */ "./libs/chat/src/schemas/message.schema.ts");
const userTokens_schema_1 = __webpack_require__(/*! ./schemas/userTokens.schema */ "./libs/chat/src/schemas/userTokens.schema.ts");
const chat_gateway_1 = __webpack_require__(/*! ./chat.gateway */ "./libs/chat/src/chat.gateway.ts");
const chat_service_1 = __webpack_require__(/*! ./chat.service */ "./libs/chat/src/chat.service.ts");
const user_schema_1 = __webpack_require__(/*! ./schemas/user.schema */ "./libs/chat/src/schemas/user.schema.ts");
const chat_controller_1 = __webpack_require__(/*! ./chat.controller */ "./libs/chat/src/chat.controller.ts");
const userChat_schema_1 = __webpack_require__(/*! ./schemas/userChat.schema */ "./libs/chat/src/schemas/userChat.schema.ts");
const userMessage_schema_1 = __webpack_require__(/*! ./schemas/userMessage.schema */ "./libs/chat/src/schemas/userMessage.schema.ts");
let ChatModule = exports.ChatModule = class ChatModule {
};
exports.ChatModule = ChatModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot("mongodb://127.0.0.1:27017/whitelabelChat"),
            mongoose_1.MongooseModule.forFeature([{
                    name: chat_schema_1.Chat.name,
                    schema: chat_schema_1.ChatSchema,
                },
                {
                    name: userChat_schema_1.UserChat.name,
                    schema: userChat_schema_1.UserChatSchema,
                }, {
                    name: message_schema_1.Message.name,
                    schema: message_schema_1.MessageSchema,
                }, {
                    name: userMessage_schema_1.UserMessage.name,
                    schema: userMessage_schema_1.UserMessageSchema,
                }, {
                    name: userTokens_schema_1.UserToken.name,
                    schema: userTokens_schema_1.UserTokenSchema,
                }, {
                    name: user_schema_1.UserData.name,
                    schema: user_schema_1.UserDataSchema,
                }
            ])
        ],
        controllers: [chat_controller_1.ChatController],
        providers: [chat_gateway_1.ChatGateway, chat_service_1.ChatService],
        exports: [chat_service_1.ChatService]
    })
], ChatModule);


/***/ }),

/***/ "./libs/chat/src/chat.service.ts":
/*!***************************************!*\
  !*** ./libs/chat/src/chat.service.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChatService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const chat_schema_1 = __webpack_require__(/*! ./schemas/chat.schema */ "./libs/chat/src/schemas/chat.schema.ts");
const message_schema_1 = __webpack_require__(/*! ./schemas/message.schema */ "./libs/chat/src/schemas/message.schema.ts");
const userTokens_schema_1 = __webpack_require__(/*! ./schemas/userTokens.schema */ "./libs/chat/src/schemas/userTokens.schema.ts");
const firebaseAdmin_1 = __webpack_require__(/*! ./auth/firebaseAdmin */ "./libs/chat/src/auth/firebaseAdmin.ts");
const user_schema_1 = __webpack_require__(/*! ./schemas/user.schema */ "./libs/chat/src/schemas/user.schema.ts");
const userChat_schema_1 = __webpack_require__(/*! ./schemas/userChat.schema */ "./libs/chat/src/schemas/userChat.schema.ts");
const userMessage_schema_1 = __webpack_require__(/*! ./schemas/userMessage.schema */ "./libs/chat/src/schemas/userMessage.schema.ts");
const message_evetn_enum_1 = __webpack_require__(/*! ./enum/message-evetn.enum */ "./libs/chat/src/enum/message-evetn.enum.ts");
var cron = __webpack_require__(/*! node-cron */ "node-cron");
let ChatService = exports.ChatService = class ChatService {
    constructor(chatModel, userChatModel, messageModel, userMessageModel, userTokenModel, userModel) {
        this.chatModel = chatModel;
        this.userChatModel = userChatModel;
        this.messageModel = messageModel;
        this.userMessageModel = userMessageModel;
        this.userTokenModel = userTokenModel;
        this.userModel = userModel;
        this.initializeChatConnections();
        this.userSockets = [];
    }
    async initializeChatConnections() {
        try {
            await this.userModel.updateMany({}, { isOnline: false });
            await this.userTokenModel.updateMany({}, { isConnected: false });
            console.log("Done: initializeChatConnections()");
        }
        catch (error) {
            console.log(error?.message);
        }
    }
    async removeDisconnectedUsers(server) {
        this.server = server;
        cron.schedule('*/20 * * * *', async () => {
            console.log("socket job");
            this.userSockets = this.userSockets.filter((userSocket, index) => {
                console.log(userSocket.userId, userSocket.socket.id, userSocket.socket.rooms);
                if (userSocket?.socket?.rooms?.size > 0) {
                    return true;
                }
                else {
                    this.userDisconnected(userSocket?.socket);
                    return false;
                }
            });
        });
    }
    async userConnected(socket) {
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
                }
                else {
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
                    });
                }
            }
            else {
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
            });
        }
        catch (error) {
            console.log(error);
            throw new Error(error?.message);
        }
    }
    async userDisconnected(socket) {
        try {
            const query = socket?.handshake?.query;
            const userId = query?.userId?.toString();
            const registrationToken = query?.registrationToken?.toString();
            if (registrationToken) {
                let userToken = await this.userTokenModel.updateMany({ userId: userId, registrationToken: registrationToken, isDeleted: false }, { isConnected: false });
                let onlineDevies = await this.userTokenModel.count({
                    userId: userId,
                    isConnected: true,
                    isDeleted: false
                });
                await this.userModel.updateOne({ userId: userId, isDeleted: false }, { isOnline: onlineDevies > 0 });
            }
        }
        catch (error) {
            console.log(error);
            throw new Error(error?.message);
        }
    }
    async create(createChatDTO) {
        try {
            debugger;
            createChatDTO.userIds = [...new Set(createChatDTO.userIds)];
            if (createChatDTO.userIds.length < 2 || !createChatDTO.userIds.includes(createChatDTO.ownerUserId)) {
                throw new common_1.BadRequestException("Invalid UserIds");
            }
            if (createChatDTO.userIds.length > 2 && !createChatDTO.isMultiple) {
                throw new common_1.BadRequestException("Invalid UserIds");
            }
            const userIdsString = createChatDTO.userIds.sort().join(',');
            let chatDocument = await this.chatModel.findOne({
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
                const userChatDocuments = createChatDTO.userIds.map(userId => {
                    return new this.userChatModel({
                        chatId: chatDocument.id,
                        userId: userId,
                        isModerator: !chatDocument.isMultiple || userId == chatDocument.ownerUserId ? true : false,
                        isDeleted: false,
                    });
                });
                await this.userChatModel.bulkSave(userChatDocuments);
                let sockets = this.userSockets.filter(user => createChatDTO.userIds.includes(user.userId)).map(user => user.socket);
                sockets.forEach(socket => socket.join(chatDocument.id));
                if (chatDocument.isMultiple) {
                    debugger;
                    const messageDTO = {
                        chatId: chatDocument.id,
                        message: chatDocument.title + " created",
                        messageBody: { chatDocument },
                        userId: null,
                        eventType: message_evetn_enum_1.MessageEventEnum.NEWCHAT,
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
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error?.message);
        }
    }
    async addUserToChat(addUserToChatDTO) {
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
            });
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
            const userDocument = await this.userModel.findOne({ userId: addUserToChatDTO.userId, isDeleted: false, });
            const moderatorDocument = await this.userModel.findOne({ userId: addUserToChatDTO.moderatorId, isDeleted: false, });
            const userName = userDocument.name ? userDocument.name : addUserToChatDTO.userId;
            const moderatorName = moderatorDocument.name ? moderatorDocument.name : moderatorDocument.userId;
            const messageDTO = {
                chatId: chatDocument.id,
                message: userName + " has been added to chat by " + moderatorName,
                messageBody: { chatDocument },
                userId: addUserToChatDTO.userId,
                eventType: message_evetn_enum_1.MessageEventEnum.JOINCHAT,
                eventId: null
            };
            try {
                this.server.to(chatDocument.id).emit('message', messageDTO);
            }
            catch (error) {
                console.log(error.message);
            }
            return chatDocument;
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error?.message);
        }
    }
    async removeUserFromChat(addUserToChatDTO) {
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
            });
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
            const userDocument = await this.userModel.findOne({ userId: addUserToChatDTO.userId });
            const moderatorDocument = await this.userModel.findOne({ userId: addUserToChatDTO.moderatorId });
            const userName = userDocument.name ? userDocument.name : addUserToChatDTO.userId;
            const moderatorName = moderatorDocument.name ? moderatorDocument.name : moderatorDocument.userId;
            const messageDTO = {
                chatId: chatDocument.id,
                message: userName + " has been removed from chat by " + moderatorName,
                messageBody: { chatDocument },
                userId: addUserToChatDTO.userId,
                eventType: message_evetn_enum_1.MessageEventEnum.REMOVECHAT,
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
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error?.message);
        }
    }
    async leaveChat(userChatDTO) {
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
            });
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
            const userDocument = await this.userModel.findOne({ userId: userChatDTO.userId, isDeleted: false, });
            const userName = userDocument.name ? userDocument.name : userChatDTO.userId;
            const messageDTO = {
                chatId: chatDocument.id,
                message: userName + " has left the chat.",
                messageBody: { chatDocument },
                userId: userChatDTO.userId,
                eventType: message_evetn_enum_1.MessageEventEnum.LEAVECHAT,
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
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error?.message);
        }
    }
    async makeModerator(addUserToChatDTO) {
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
            });
            return "updated";
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error?.message);
        }
    }
    async getChatIds(userId) {
        try {
            let userChatDocuments = await this.userChatModel.find({ userId: userId, isDeleted: false });
            let chatIds = userChatDocuments.map(userChatItem => {
                return userChatItem.chatId;
            });
            return chatIds;
        }
        catch (error) {
            console.log(error);
            throw new Error(error?.message);
        }
    }
    async createMessage(payload) {
        try {
            let chatDocument = await this.chatModel.findOne({
                _id: payload.chatId,
                isDeleted: false,
            });
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
            });
            const userChatDocuments = await this.userChatModel.find({
                chatId: chatDocument?.id,
                userId: { $ne: payload.userId },
                isDeleted: false
            });
            const userMessageDocuments = userChatDocuments.map(userChatDocument => {
                return new this.userMessageModel({
                    chatId: userChatDocument.chatId,
                    userId: userChatDocument.userId,
                    messageId: messageDocument.id,
                    time: messageDocument.time,
                    readTime: null,
                    isDeleted: false,
                });
            });
            await this.userMessageModel.bulkSave(userMessageDocuments);
            this.sendMessageNotification(payload);
            return messageDocument;
        }
        catch (error) {
            console.log(error);
            throw new Error(error?.message);
        }
    }
    async resetUnreadCount(readChatDTO) {
        try {
            const messageDocument = await this.messageModel.findOne({ _id: readChatDTO.messageId, chatId: readChatDTO.chatId, isDeleted: false });
            await this.userChatModel.updateMany({
                chatId: readChatDTO.chatId,
                userId: readChatDTO.userId,
                isDeleted: false
            }, {
                unreadCount: 0,
                lastMessageReadId: readChatDTO.messageId,
                lastMessageReadTime: messageDocument?.time,
            });
            await this.userMessageModel.updateMany({
                chatId: readChatDTO.chatId,
                userId: readChatDTO.userId,
                messageId: readChatDTO.messageId,
                readTime: null,
                isDeleted: false,
            }, {
                readTime: new Date(),
            });
        }
        catch (error) {
            console.log(error);
            throw new Error(error?.message);
        }
    }
    async markChatFavourtie(favouriteChatDTO) {
        try {
            await this.userChatModel.updateMany({
                chatId: favouriteChatDTO.chatId,
                userId: favouriteChatDTO.userId,
                isDeleted: false
            }, {
                isFavourite: favouriteChatDTO.isFavourite,
            });
            return "updated";
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error?.message);
        }
    }
    async sendMessageNotification(payload) {
        try {
            debugger;
            let messagePayload = {
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
            const userChatData = await this.userChatModel.aggregate([
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
            ]);
            const userTokens = [];
            userChatData.forEach(userChatItem => {
                userChatItem?.usertokens?.forEach(userToken => {
                    if (userToken && userToken?.registrationToken != '') {
                        userTokens.push(userToken?.registrationToken);
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
                    const response = await firebaseAdmin_1.defaultApp.messaging().sendMulticast(messagePayload);
                    console.log("reposne: sendMulticast");
                    console.log(JSON.stringify(response));
                }
            }
            catch (ex) {
                console.log("error: sendMulticast");
                throw new Error(ex);
            }
        }
        catch (error) {
            console.log(error);
            throw new Error(error?.message);
        }
    }
    async sendJoinNotification(payload) {
        try {
            debugger;
            let messagePayload = {
                data: {
                    type: "JOIN",
                    title: 'Join Chat',
                    message: "You are invited to join chat",
                    chatId: payload.chatId,
                    time: new Date().toUTCString(),
                },
                tokens: [],
            };
            const userChatData = await this.userChatModel.aggregate([
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
            ]);
            const userTokens = [];
            userChatData.forEach(userChatItem => {
                userChatItem?.usertokens?.forEach(userToken => {
                    if (userToken && userToken?.registrationToken != '') {
                        userTokens.push(userToken?.registrationToken);
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
                    const response = await firebaseAdmin_1.defaultApp.messaging().sendMulticast(messagePayload);
                    console.log(response);
                }
            }
            catch (ex) {
                console.log(JSON.stringify(ex));
            }
        }
        catch (error) {
            console.log(error);
            throw new Error(error?.message);
        }
    }
    async getAllUsers(getAllUsersDTO, userId) {
        try {
            let pagination = [];
            if (getAllUsersDTO?.limit && getAllUsersDTO?.offset) {
                pagination = [
                    { $skip: parseInt(getAllUsersDTO.offset) },
                    { $limit: parseInt(getAllUsersDTO.limit) }
                ];
            }
            let filterUserIds = [];
            if (getAllUsersDTO.excludeUsersChatId) {
                const userChatDocuments = await this.userChatModel.find({ chatId: getAllUsersDTO.excludeUsersChatId });
                filterUserIds = userChatDocuments.map(userChat => {
                    return userChat.userId;
                });
            }
            const userDocuments = await this.userModel.aggregate([
                {
                    $match: { isDeleted: false, userId: { $ne: userId } },
                },
                {
                    $lookup: {
                        from: 'userchats',
                        localField: 'userId',
                        foreignField: 'userId',
                        pipeline: [
                            {
                                $lookup: {
                                    from: 'userchats',
                                    localField: 'chatId',
                                    foreignField: 'chatId',
                                    pipeline: [
                                        {
                                            $match: {
                                                userId: userId,
                                            }
                                        },
                                        {
                                            $lookup: {
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
                let userChatsMapped = userDocument.userchats.filter(userChat => userChat.userChatExists.length > 0);
                userDocument.isSingleChatExists = userChatsMapped.length > 0;
                return userDocument;
            }).filter(userDocument => {
                return !filterUserIds.includes(userDocument.userId);
            });
            return userDocumentsReturn;
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error?.message);
        }
    }
    async addUser(addUserDTO) {
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
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error?.message);
        }
    }
    async getAllChats(allChatQueryDTO) {
        try {
            let pagination = [];
            if (allChatQueryDTO?.limit && allChatQueryDTO?.offset) {
                pagination = [
                    { $skip: parseInt(allChatQueryDTO.offset) },
                    { $limit: parseInt(allChatQueryDTO.limit) }
                ];
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
                ];
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
                    $lookup: {
                        from: 'chats',
                        localField: 'chatId',
                        foreignField: '_id',
                        pipeline: [
                            {
                                $lookup: {
                                    from: 'userchats',
                                    localField: '_id',
                                    foreignField: 'chatId',
                                    pipeline: [
                                        {
                                            $lookup: {
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
                    $addFields: {}
                },
                {
                    $addFields: {
                        userOpponent: {
                            $arrayElemAt: [{
                                    $filter: {
                                        input: '$chat.userchats',
                                        as: "user",
                                        cond: { $ne: ["$$user.userId", allChatQueryDTO.userId] },
                                        limit: 1
                                    }
                                }, 0]
                        },
                        userNames: {
                            $reduce: {
                                input: '$chat.userchats',
                                initialValue: "",
                                in: {
                                    $concat: [
                                        "$$value",
                                        { '$cond': [{ '$eq': ['$$value', ''] }, '', ', '] },
                                        "$$this.name"
                                    ]
                                }
                            }
                        },
                        userIds: {
                            $reduce: {
                                input: '$chat.userchats',
                                initialValue: "",
                                in: {
                                    $concat: [
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
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error?.message);
        }
    }
    async getChatMessages(chatHistoryQueryDTO) {
        try {
            let pagination = [];
            if (chatHistoryQueryDTO?.limit && chatHistoryQueryDTO?.offset) {
                pagination = [
                    { $skip: parseInt(chatHistoryQueryDTO.offset) },
                    { $limit: parseInt(chatHistoryQueryDTO.limit) }
                ];
            }
            let userChatDocument = await this.userChatModel.findOne({
                chatId: chatHistoryQueryDTO.chatId,
                userId: chatHistoryQueryDTO.userId,
                isDeleted: false,
            });
            let messageDocuments = await this.messageModel.aggregate([
                {
                    $match: {
                        chatId: userChatDocument?.chatId,
                        isDeleted: false,
                    },
                },
                {
                    $lookup: {
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
            ]);
            return messageDocuments;
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error?.message);
        }
    }
    async getReadMessages(messageHistoryQueryDTO) {
        try {
            let pagination = [];
            if (messageHistoryQueryDTO?.limit && messageHistoryQueryDTO?.offset) {
                pagination = [
                    { $skip: parseInt(messageHistoryQueryDTO.offset) },
                    { $limit: parseInt(messageHistoryQueryDTO.limit) }
                ];
            }
            let messageDocument = await this.messageModel.findOne({
                chatId: messageHistoryQueryDTO?.chatId,
                _id: messageHistoryQueryDTO?.messageId,
                userId: messageHistoryQueryDTO?.userId,
                isDeleted: false,
            });
            if (!messageDocument) {
                throw new Error("Not allowed");
            }
            let userMessageDocuments = await this.userMessageModel.aggregate([
                {
                    $match: {
                        messageId: messageHistoryQueryDTO.messageId,
                        chatId: messageHistoryQueryDTO?.chatId,
                        userId: { $ne: messageHistoryQueryDTO?.userId },
                        isDeleted: false,
                    }
                },
                {
                    $lookup: {
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
            ]);
            return userMessageDocuments;
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error?.message);
        }
    }
    async updateUserStatus(userStatusDTO) {
        try {
            await this.userModel.updateOne({ userId: userStatusDTO.userId, isDeleted: false }, { status: userStatusDTO.status });
            const userDocument = await this.userModel.findOne({ userId: userStatusDTO.userId, isDeleted: false });
            return userDocument;
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error?.message);
        }
    }
    async getUserProfile(userId) {
        try {
            const userDocument = await this.userModel.findOne({ userId: userId, isDeleted: false, });
            return userDocument;
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error?.message);
        }
    }
    async updateUserProfile(userId, userProfileDTO) {
        try {
            await this.userModel.updateOne({ userId: userId, isDeleted: false }, {
                name: userProfileDTO.name,
                pic: userProfileDTO.pic,
                color: userProfileDTO.color
            });
            const userDocument = await this.userModel.findOne({ userId: userId, isDeleted: false });
            return userDocument;
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error?.message);
        }
    }
    async updateChat(updateChatDTO) {
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
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error?.message);
        }
    }
};
exports.ChatService = ChatService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(chat_schema_1.Chat.name)),
    __param(1, (0, mongoose_1.InjectModel)(userChat_schema_1.UserChat.name)),
    __param(2, (0, mongoose_1.InjectModel)(message_schema_1.Message.name)),
    __param(3, (0, mongoose_1.InjectModel)(userMessage_schema_1.UserMessage.name)),
    __param(4, (0, mongoose_1.InjectModel)(userTokens_schema_1.UserToken.name)),
    __param(5, (0, mongoose_1.InjectModel)(user_schema_1.UserData.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _b : Object, typeof (_c = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _c : Object, typeof (_d = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _d : Object, typeof (_e = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _e : Object, typeof (_f = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _f : Object])
], ChatService);


/***/ }),

/***/ "./libs/chat/src/dto/chat.dto.ts":
/*!***************************************!*\
  !*** ./libs/chat/src/dto/chat.dto.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateChatDTO = exports.UserProfileDTO = exports.UserStatusDTO = exports.AllChatQueryDTO = exports.MessageHistoryQueryDTO = exports.ChatHistoryQueryDTO = exports.GetAllUsersDTO = exports.PaginationDTO = exports.AddUserDTO = exports.FavouriteChatDTO = exports.ReadChatDTO = exports.AddUserToChatDTO = exports.UserChatDTO = exports.CreateChatDTO = exports.MessageDTO = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const message_evetn_enum_1 = __webpack_require__(/*! ../enum/message-evetn.enum */ "./libs/chat/src/enum/message-evetn.enum.ts");
const user_status_enum_1 = __webpack_require__(/*! ../enum/user-status.enum */ "./libs/chat/src/enum/user-status.enum.ts");
class MessageDTO {
}
exports.MessageDTO = MessageDTO;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MessageDTO.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MessageDTO.prototype, "chatId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MessageDTO.prototype, "message", void 0);
__decorate([
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], MessageDTO.prototype, "messageBody", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], MessageDTO.prototype, "attachments", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(message_evetn_enum_1.MessageEventEnum),
    __metadata("design:type", String)
], MessageDTO.prototype, "eventType", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MessageDTO.prototype, "eventId", void 0);
class CreateChatDTO {
}
exports.CreateChatDTO = CreateChatDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateChatDTO.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateChatDTO.prototype, "ownerUserId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], CreateChatDTO.prototype, "userIds", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], CreateChatDTO.prototype, "isMultiple", void 0);
class UserChatDTO {
}
exports.UserChatDTO = UserChatDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UserChatDTO.prototype, "chatId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UserChatDTO.prototype, "userId", void 0);
class AddUserToChatDTO extends UserChatDTO {
}
exports.AddUserToChatDTO = AddUserToChatDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AddUserToChatDTO.prototype, "moderatorId", void 0);
class ReadChatDTO extends UserChatDTO {
}
exports.ReadChatDTO = ReadChatDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ReadChatDTO.prototype, "messageId", void 0);
class FavouriteChatDTO extends UserChatDTO {
}
exports.FavouriteChatDTO = FavouriteChatDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], FavouriteChatDTO.prototype, "isFavourite", void 0);
class AddUserDTO {
}
exports.AddUserDTO = AddUserDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AddUserDTO.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AddUserDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AddUserDTO.prototype, "pic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AddUserDTO.prototype, "color", void 0);
class PaginationDTO {
}
exports.PaginationDTO = PaginationDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ default: 0 }),
    __metadata("design:type", String)
], PaginationDTO.prototype, "offset", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 10 }),
    __metadata("design:type", String)
], PaginationDTO.prototype, "limit", void 0);
class GetAllUsersDTO extends PaginationDTO {
}
exports.GetAllUsersDTO = GetAllUsersDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], GetAllUsersDTO.prototype, "excludeUsersChatId", void 0);
class ChatHistoryQueryDTO extends PaginationDTO {
}
exports.ChatHistoryQueryDTO = ChatHistoryQueryDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ChatHistoryQueryDTO.prototype, "chatId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ChatHistoryQueryDTO.prototype, "userId", void 0);
class MessageHistoryQueryDTO extends PaginationDTO {
}
exports.MessageHistoryQueryDTO = MessageHistoryQueryDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], MessageHistoryQueryDTO.prototype, "chatId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], MessageHistoryQueryDTO.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], MessageHistoryQueryDTO.prototype, "messageId", void 0);
class AllChatQueryDTO extends PaginationDTO {
}
exports.AllChatQueryDTO = AllChatQueryDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AllChatQueryDTO.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, type: Boolean }),
    __metadata("design:type", Object)
], AllChatQueryDTO.prototype, "filterIsFavourite", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, type: Boolean }),
    __metadata("design:type", Object)
], AllChatQueryDTO.prototype, "filterIsUnread", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], AllChatQueryDTO.prototype, "filterSearch", void 0);
class UserStatusDTO {
}
exports.UserStatusDTO = UserStatusDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ default: user_status_enum_1.UserStatusEnum.AVAILABLE }),
    (0, class_validator_1.IsEnum)(user_status_enum_1.UserStatusEnum),
    __metadata("design:type", typeof (_a = typeof user_status_enum_1.UserStatusEnum !== "undefined" && user_status_enum_1.UserStatusEnum) === "function" ? _a : Object)
], UserStatusDTO.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UserStatusDTO.prototype, "userId", void 0);
class UserProfileDTO {
}
exports.UserProfileDTO = UserProfileDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UserProfileDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UserProfileDTO.prototype, "pic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UserProfileDTO.prototype, "color", void 0);
class UpdateChatDTO {
}
exports.UpdateChatDTO = UpdateChatDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateChatDTO.prototype, "moderatorId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateChatDTO.prototype, "chatId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateChatDTO.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateChatDTO.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateChatDTO.prototype, "purposeDetail", void 0);


/***/ }),

/***/ "./libs/chat/src/enum/message-evetn.enum.ts":
/*!**************************************************!*\
  !*** ./libs/chat/src/enum/message-evetn.enum.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessageEventEnum = void 0;
var MessageEventEnum;
(function (MessageEventEnum) {
    MessageEventEnum["MESSAGE"] = "Message";
    MessageEventEnum["MILESTONE"] = "Milestone";
    MessageEventEnum["NEWCHAT"] = "NewChat";
    MessageEventEnum["JOINCHAT"] = "JoinChat";
    MessageEventEnum["REMOVECHAT"] = "RemoveChat";
    MessageEventEnum["LEAVECHAT"] = "LeaveChat";
})(MessageEventEnum || (exports.MessageEventEnum = MessageEventEnum = {}));


/***/ }),

/***/ "./libs/chat/src/enum/user-status.enum.ts":
/*!************************************************!*\
  !*** ./libs/chat/src/enum/user-status.enum.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserStatusEnum = void 0;
var UserStatusEnum;
(function (UserStatusEnum) {
    UserStatusEnum["AVAILABLE"] = "Available";
    UserStatusEnum["OUT"] = "Out Of Office";
})(UserStatusEnum || (exports.UserStatusEnum = UserStatusEnum = {}));


/***/ }),

/***/ "./libs/chat/src/filter/ws.filter.ts":
/*!*******************************************!*\
  !*** ./libs/chat/src/filter/ws.filter.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WebsocketExceptionsFilter = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const websockets_1 = __webpack_require__(/*! @nestjs/websockets */ "@nestjs/websockets");
let WebsocketExceptionsFilter = exports.WebsocketExceptionsFilter = class WebsocketExceptionsFilter extends websockets_1.BaseWsExceptionFilter {
    catch(exception, host) {
        debugger;
        const client = host.switchToWs().getClient();
        const data = host.switchToWs().getData();
        const error = exception instanceof websockets_1.WsException ? exception.getError() : exception.getResponse();
        const details = error instanceof Object ? { ...error } : { message: error };
        client.send(JSON.stringify(details));
    }
};
exports.WebsocketExceptionsFilter = WebsocketExceptionsFilter = __decorate([
    (0, common_1.Catch)(websockets_1.WsException, common_1.HttpException)
], WebsocketExceptionsFilter);


/***/ }),

/***/ "./libs/chat/src/index.ts":
/*!********************************!*\
  !*** ./libs/chat/src/index.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./chat.module */ "./libs/chat/src/chat.module.ts"), exports);


/***/ }),

/***/ "./libs/chat/src/schemas/chat.schema.ts":
/*!**********************************************!*\
  !*** ./libs/chat/src/schemas/chat.schema.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChatSchema = exports.Chat = void 0;
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const utils_1 = __webpack_require__(/*! ../utils/utils */ "./libs/chat/src/utils/utils.ts");
let Chat = exports.Chat = class Chat {
};
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: utils_1.generateStringId }),
    __metadata("design:type", String)
], Chat.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Chat.prototype, "ownerUserId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Chat.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Chat.prototype, "image", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Chat.prototype, "purposeDetail", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Chat.prototype, "userIds", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], Chat.prototype, "isMultiple", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], Chat.prototype, "isDeleted", void 0);
exports.Chat = Chat = __decorate([
    (0, mongoose_1.Schema)()
], Chat);
exports.ChatSchema = mongoose_1.SchemaFactory.createForClass(Chat);
exports.ChatSchema.set('timestamps', true);
exports.ChatSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    },
});


/***/ }),

/***/ "./libs/chat/src/schemas/message.schema.ts":
/*!*************************************************!*\
  !*** ./libs/chat/src/schemas/message.schema.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessageSchema = exports.Message = void 0;
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const message_evetn_enum_1 = __webpack_require__(/*! ../enum/message-evetn.enum */ "./libs/chat/src/enum/message-evetn.enum.ts");
const utils_1 = __webpack_require__(/*! ../utils/utils */ "./libs/chat/src/utils/utils.ts");
let Message = exports.Message = class Message {
};
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: utils_1.generateStringId }),
    __metadata("design:type", String)
], Message.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Message.prototype, "chatId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Message.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Message.prototype, "message", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object, default: {} }),
    __metadata("design:type", Object)
], Message.prototype, "messageBody", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Array, default: [] }),
    __metadata("design:type", Array)
], Message.prototype, "attachments", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, default: new Date() }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Message.prototype, "time", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: message_evetn_enum_1.MessageEventEnum.MESSAGE }),
    __metadata("design:type", String)
], Message.prototype, "eventType", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: null }),
    __metadata("design:type", String)
], Message.prototype, "eventId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], Message.prototype, "isDeleted", void 0);
exports.Message = Message = __decorate([
    (0, mongoose_1.Schema)()
], Message);
exports.MessageSchema = mongoose_1.SchemaFactory.createForClass(Message);
exports.MessageSchema.set('timestamps', true);
exports.MessageSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    },
});


/***/ }),

/***/ "./libs/chat/src/schemas/user.schema.ts":
/*!**********************************************!*\
  !*** ./libs/chat/src/schemas/user.schema.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserDataSchema = exports.UserData = void 0;
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const user_status_enum_1 = __webpack_require__(/*! ../enum/user-status.enum */ "./libs/chat/src/enum/user-status.enum.ts");
const utils_1 = __webpack_require__(/*! ../utils/utils */ "./libs/chat/src/utils/utils.ts");
let UserData = exports.UserData = class UserData {
};
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: utils_1.generateStringId }),
    __metadata("design:type", String)
], UserData.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '', required: true }),
    __metadata("design:type", String)
], UserData.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], UserData.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], UserData.prototype, "pic", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], UserData.prototype, "color", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: user_status_enum_1.UserStatusEnum.AVAILABLE }),
    __metadata("design:type", String)
], UserData.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], UserData.prototype, "isOnline", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], UserData.prototype, "isDeleted", void 0);
exports.UserData = UserData = __decorate([
    (0, mongoose_1.Schema)()
], UserData);
exports.UserDataSchema = mongoose_1.SchemaFactory.createForClass(UserData);
exports.UserDataSchema.set('timestamps', true);
exports.UserDataSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    },
});


/***/ }),

/***/ "./libs/chat/src/schemas/userChat.schema.ts":
/*!**************************************************!*\
  !*** ./libs/chat/src/schemas/userChat.schema.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserChatSchema = exports.UserChat = void 0;
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const utils_1 = __webpack_require__(/*! ../utils/utils */ "./libs/chat/src/utils/utils.ts");
let UserChat = exports.UserChat = class UserChat {
};
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: utils_1.generateStringId }),
    __metadata("design:type", String)
], UserChat.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], UserChat.prototype, "chatId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], UserChat.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    __metadata("design:type", Number)
], UserChat.prototype, "unreadCount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, default: null }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], UserChat.prototype, "lastMessageReadTime", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], UserChat.prototype, "lastMessageReadId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], UserChat.prototype, "isFavourite", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], UserChat.prototype, "isModerator", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], UserChat.prototype, "isDeleted", void 0);
exports.UserChat = UserChat = __decorate([
    (0, mongoose_1.Schema)()
], UserChat);
exports.UserChatSchema = mongoose_1.SchemaFactory.createForClass(UserChat);
exports.UserChatSchema.set('timestamps', true);
exports.UserChatSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    },
});


/***/ }),

/***/ "./libs/chat/src/schemas/userMessage.schema.ts":
/*!*****************************************************!*\
  !*** ./libs/chat/src/schemas/userMessage.schema.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserMessageSchema = exports.UserMessage = void 0;
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const utils_1 = __webpack_require__(/*! ../utils/utils */ "./libs/chat/src/utils/utils.ts");
let UserMessage = exports.UserMessage = class UserMessage {
};
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: utils_1.generateStringId }),
    __metadata("design:type", String)
], UserMessage.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], UserMessage.prototype, "chatId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], UserMessage.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], UserMessage.prototype, "messageId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, default: new Date() }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], UserMessage.prototype, "time", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, default: null }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], UserMessage.prototype, "readTime", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], UserMessage.prototype, "isDeleted", void 0);
exports.UserMessage = UserMessage = __decorate([
    (0, mongoose_1.Schema)()
], UserMessage);
exports.UserMessageSchema = mongoose_1.SchemaFactory.createForClass(UserMessage);
exports.UserMessageSchema.set('timestamps', true);
exports.UserMessageSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    },
});


/***/ }),

/***/ "./libs/chat/src/schemas/userTokens.schema.ts":
/*!****************************************************!*\
  !*** ./libs/chat/src/schemas/userTokens.schema.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserTokenSchema = exports.UserToken = void 0;
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const utils_1 = __webpack_require__(/*! ../utils/utils */ "./libs/chat/src/utils/utils.ts");
let UserToken = exports.UserToken = class UserToken {
};
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: utils_1.generateStringId }),
    __metadata("design:type", String)
], UserToken.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], UserToken.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], UserToken.prototype, "registrationToken", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], UserToken.prototype, "isConnected", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], UserToken.prototype, "isDeleted", void 0);
exports.UserToken = UserToken = __decorate([
    (0, mongoose_1.Schema)()
], UserToken);
exports.UserTokenSchema = mongoose_1.SchemaFactory.createForClass(UserToken);
exports.UserTokenSchema.set('timestamps', true);
exports.UserTokenSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    },
});


/***/ }),

/***/ "./libs/chat/src/utils/utils.ts":
/*!**************************************!*\
  !*** ./libs/chat/src/utils/utils.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generateStringId = void 0;
const mongoose_1 = __webpack_require__(/*! mongoose */ "mongoose");
const generateStringId = () => {
    return new mongoose_1.Types.ObjectId().toString();
};
exports.generateStringId = generateStringId;


/***/ }),

/***/ "./src/app.controller.ts":
/*!*******************************!*\
  !*** ./src/app.controller.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const chat_service_1 = __webpack_require__(/*! @app/chat/chat.service */ "./libs/chat/src/chat.service.ts");
const chat_dto_1 = __webpack_require__(/*! @app/chat/dto/chat.dto */ "./libs/chat/src/dto/chat.dto.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const jwt_auth_guard_1 = __webpack_require__(/*! ./auth/jwt-auth.guard */ "./src/auth/jwt-auth.guard.ts");
const user_decorator_1 = __webpack_require__(/*! ./decorators/user.decorator */ "./src/decorators/user.decorator.ts");
let AppController = exports.AppController = class AppController {
    constructor(chatService) {
        this.chatService = chatService;
    }
    getHello() {
        return "hello";
    }
    create(createChatDTO, user) {
        if (createChatDTO.ownerUserId != user.id) {
            throw new common_1.UnauthorizedException("not allowed");
        }
        return this.chatService.create(createChatDTO);
    }
    addUserToChat(addUserToChatDTO, user) {
        if (addUserToChatDTO.moderatorId != user.id) {
            throw new common_1.UnauthorizedException("not allowed");
        }
        return this.chatService.addUserToChat(addUserToChatDTO);
    }
    removeUserFromChat(addUserToChatDTO, user) {
        if (addUserToChatDTO.moderatorId != user.id) {
            throw new common_1.UnauthorizedException("not allowed");
        }
        return this.chatService.removeUserFromChat(addUserToChatDTO);
    }
    leaveChat(userChatDTO, user) {
        if (userChatDTO.userId != user.id) {
            throw new common_1.UnauthorizedException("not allowed");
        }
        return this.chatService.leaveChat(userChatDTO);
    }
    makeModerator(addUserToChatDTO, user) {
        console.log(addUserToChatDTO, user.id);
        if (addUserToChatDTO.moderatorId != user.id) {
            throw new common_1.UnauthorizedException("not allowed");
        }
        return this.chatService.makeModerator(addUserToChatDTO);
    }
    updateUserStatus(userStatusDTO, user) {
        if (userStatusDTO.userId != user.id) {
            throw new common_1.UnauthorizedException("not allowed");
        }
        return this.chatService.updateUserStatus(userStatusDTO);
    }
    addUser(addUserDTO, user) {
        return this.chatService.addUser(addUserDTO);
    }
    markChatFavourtie(favouriteChatDTO, user) {
        if (favouriteChatDTO.userId != user.id) {
            throw new common_1.UnauthorizedException("not allowed");
        }
        return this.chatService.markChatFavourtie(favouriteChatDTO);
    }
    getAllUsers(getAllUsersDTO, user) {
        return this.chatService.getAllUsers(getAllUsersDTO, user?.id);
    }
    getAllChats(allChatQueryDTO, user) {
        if (allChatQueryDTO.userId != user.id) {
            throw new common_1.UnauthorizedException("not allowed");
        }
        return this.chatService.getAllChats(allChatQueryDTO);
    }
    getChatMessages(chatHistoryQueryDTO, user) {
        if (chatHistoryQueryDTO.userId != user.id) {
            throw new common_1.UnauthorizedException("not allowed");
        }
        return this.chatService.getChatMessages(chatHistoryQueryDTO);
    }
    getReadMessages(messageHistoryQueryDTO, user) {
        if (messageHistoryQueryDTO.userId != user.id) {
            throw new common_1.UnauthorizedException("not allowed");
        }
        return this.chatService.getReadMessages(messageHistoryQueryDTO);
    }
    getUserProfile(user) {
        return this.chatService.getUserProfile(user.id);
    }
    updateUserProfile(userProfileDTO, user) {
        return this.chatService.updateUserProfile(user.id, userProfileDTO);
    }
    updateChat(updateChatDTO, user) {
        if (updateChatDTO.moderatorId != user.id) {
            throw new common_1.UnauthorizedException("not allowed");
        }
        return this.chatService.updateChat(updateChatDTO);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof chat_dto_1.CreateChatDTO !== "undefined" && chat_dto_1.CreateChatDTO) === "function" ? _b : Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('/addUserToChat'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof chat_dto_1.AddUserToChatDTO !== "undefined" && chat_dto_1.AddUserToChatDTO) === "function" ? _c : Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "addUserToChat", null);
__decorate([
    (0, common_1.Post)('/removeUserFromChat'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof chat_dto_1.AddUserToChatDTO !== "undefined" && chat_dto_1.AddUserToChatDTO) === "function" ? _d : Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "removeUserFromChat", null);
__decorate([
    (0, common_1.Post)('/leaveChat'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof chat_dto_1.UserChatDTO !== "undefined" && chat_dto_1.UserChatDTO) === "function" ? _e : Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "leaveChat", null);
__decorate([
    (0, common_1.Post)('/makeModerator'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof chat_dto_1.AddUserToChatDTO !== "undefined" && chat_dto_1.AddUserToChatDTO) === "function" ? _f : Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "makeModerator", null);
__decorate([
    (0, common_1.Post)('/updateUserStatus'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof chat_dto_1.UserStatusDTO !== "undefined" && chat_dto_1.UserStatusDTO) === "function" ? _g : Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "updateUserStatus", null);
__decorate([
    (0, common_1.Post)('/addUser'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_h = typeof chat_dto_1.AddUserDTO !== "undefined" && chat_dto_1.AddUserDTO) === "function" ? _h : Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "addUser", null);
__decorate([
    (0, common_1.Post)('/markChatFavourtie'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_j = typeof chat_dto_1.FavouriteChatDTO !== "undefined" && chat_dto_1.FavouriteChatDTO) === "function" ? _j : Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "markChatFavourtie", null);
__decorate([
    (0, common_1.Get)('/getAllUsers'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_k = typeof chat_dto_1.GetAllUsersDTO !== "undefined" && chat_dto_1.GetAllUsersDTO) === "function" ? _k : Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getAllUsers", null);
__decorate([
    (0, common_1.Get)('/getAllChats'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_l = typeof chat_dto_1.AllChatQueryDTO !== "undefined" && chat_dto_1.AllChatQueryDTO) === "function" ? _l : Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getAllChats", null);
__decorate([
    (0, common_1.Get)('/getChatMessages'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_m = typeof chat_dto_1.ChatHistoryQueryDTO !== "undefined" && chat_dto_1.ChatHistoryQueryDTO) === "function" ? _m : Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getChatMessages", null);
__decorate([
    (0, common_1.Get)('/getReadMessages'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_o = typeof chat_dto_1.MessageHistoryQueryDTO !== "undefined" && chat_dto_1.MessageHistoryQueryDTO) === "function" ? _o : Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getReadMessages", null);
__decorate([
    (0, common_1.Get)('/getUserProfile'),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getUserProfile", null);
__decorate([
    (0, common_1.Post)('/updateUserProfile'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_p = typeof chat_dto_1.UserProfileDTO !== "undefined" && chat_dto_1.UserProfileDTO) === "function" ? _p : Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "updateUserProfile", null);
__decorate([
    (0, common_1.Post)('/updateChat'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_q = typeof chat_dto_1.UpdateChatDTO !== "undefined" && chat_dto_1.UpdateChatDTO) === "function" ? _q : Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "updateChat", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [typeof (_a = typeof chat_service_1.ChatService !== "undefined" && chat_service_1.ChatService) === "function" ? _a : Object])
], AppController);


/***/ }),

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const app_controller_1 = __webpack_require__(/*! ./app.controller */ "./src/app.controller.ts");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./src/app.service.ts");
const chat_1 = __webpack_require__(/*! @app/chat */ "./libs/chat/src/index.ts");
const auth_module_1 = __webpack_require__(/*! ./auth/auth.module */ "./src/auth/auth.module.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const media_upload_module_1 = __webpack_require__(/*! ./file-management/media-upload/media-upload.module */ "./src/file-management/media-upload/media-upload.module.ts");
const post_module_1 = __webpack_require__(/*! ./post/post.module */ "./src/post/post.module.ts");
const order_module_1 = __webpack_require__(/*! ./order/order.module */ "./src/order/order.module.ts");
const comments_module_1 = __webpack_require__(/*! ./comments/comments.module */ "./src/comments/comments.module.ts");
const village_module_1 = __webpack_require__(/*! ./village/village.module */ "./src/village/village.module.ts");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            mongoose_1.MongooseModule.forRoot(process.env.MONGO_URI),
            auth_module_1.AuthModule.forRoot(),
            chat_1.ChatModule,
            media_upload_module_1.MediaUploadModule,
            post_module_1.PostModule,
            order_module_1.OrderModule,
            comments_module_1.CommentsModule,
            village_module_1.VillageModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);


/***/ }),

/***/ "./src/app.service.ts":
/*!****************************!*\
  !*** ./src/app.service.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let AppService = exports.AppService = class AppService {
    constructor() {
    }
};
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], AppService);


/***/ }),

/***/ "./src/auth/auth.controller.ts":
/*!*************************************!*\
  !*** ./src/auth/auth.controller.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/auth/auth.service.ts");
const login_dto_1 = __webpack_require__(/*! ./dto/login.dto */ "./src/auth/dto/login.dto.ts");
const otp_dto_1 = __webpack_require__(/*! ./dto/otp.dto */ "./src/auth/dto/otp.dto.ts");
const signup_dto_1 = __webpack_require__(/*! ./dto/signup.dto */ "./src/auth/dto/signup.dto.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const email_dto_1 = __webpack_require__(/*! ./dto/email.dto */ "./src/auth/dto/email.dto.ts");
const password_dto_1 = __webpack_require__(/*! ./dto/password.dto */ "./src/auth/dto/password.dto.ts");
const jwt_auth_guard_1 = __webpack_require__(/*! ./jwt-auth.guard */ "./src/auth/jwt-auth.guard.ts");
const user_decorator_1 = __webpack_require__(/*! src/decorators/user.decorator */ "./src/decorators/user.decorator.ts");
let AuthController = exports.AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    signup(signupDto) {
        return this.authService.signup(signupDto);
    }
    isEmailExists(emailDto) {
        return this.authService.isEmailExists(emailDto);
    }
    verifyEmail(otpDto) {
        return this.authService.verifyEmail(otpDto);
    }
    resendOtp(emailDto) {
        return this.authService.resendOtp(emailDto);
    }
    login(loginDto) {
        return this.authService.login(loginDto);
    }
    forgotPassword(emailDto) {
        return this.authService.forgotPassword(emailDto);
    }
    verifyOtpForForgotPassword(otpDto) {
        return this.authService.verifyOtpForForgotPassword(otpDto);
    }
    resetPassword(passwordDto, user) {
        return this.authService.resetPassword(passwordDto, user);
    }
    getLoggedInUsers(user) {
        return this.authService.getLoggedInUsers(user);
    }
};
__decorate([
    (0, common_1.Post)('signup'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof signup_dto_1.SignupDTO !== "undefined" && signup_dto_1.SignupDTO) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "signup", null);
__decorate([
    (0, common_1.Post)('isEmailExists'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof email_dto_1.EmailDTO !== "undefined" && email_dto_1.EmailDTO) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "isEmailExists", null);
__decorate([
    (0, common_1.Post)('verifyEmail'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof otp_dto_1.OtpDTO !== "undefined" && otp_dto_1.OtpDTO) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "verifyEmail", null);
__decorate([
    (0, common_1.Post)('resendOtp'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof email_dto_1.EmailDTO !== "undefined" && email_dto_1.EmailDTO) === "function" ? _e : Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "resendOtp", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof login_dto_1.LoginDTO !== "undefined" && login_dto_1.LoginDTO) === "function" ? _f : Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('forgotPassword'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof email_dto_1.EmailDTO !== "undefined" && email_dto_1.EmailDTO) === "function" ? _g : Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "forgotPassword", null);
__decorate([
    (0, common_1.Post)('verifyOtpForForgotPassword'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_h = typeof otp_dto_1.OtpDTO !== "undefined" && otp_dto_1.OtpDTO) === "function" ? _h : Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "verifyOtpForForgotPassword", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('resetPassword'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_j = typeof password_dto_1.PasswordDTO !== "undefined" && password_dto_1.PasswordDTO) === "function" ? _j : Object, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "resetPassword", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('getLoggedInUsers'),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "getLoggedInUsers", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)('Auth'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], AuthController);


/***/ }),

/***/ "./src/auth/auth.module.ts":
/*!*********************************!*\
  !*** ./src/auth/auth.module.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AuthModule_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const auth_controller_1 = __webpack_require__(/*! ./auth.controller */ "./src/auth/auth.controller.ts");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/auth/auth.service.ts");
const jwt_strategy_1 = __webpack_require__(/*! ./jwt.strategy */ "./src/auth/jwt.strategy.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const user_schema_1 = __webpack_require__(/*! src/schema/user/user.schema */ "./src/schema/user/user.schema.ts");
const otp_schema_1 = __webpack_require__(/*! src/schema/otp/otp.schema */ "./src/schema/otp/otp.schema.ts");
const utils_service_1 = __webpack_require__(/*! ../utils/utils.service */ "./src/utils/utils.service.ts");
const chat_1 = __webpack_require__(/*! @app/chat */ "./libs/chat/src/index.ts");
let AuthModule = exports.AuthModule = AuthModule_1 = class AuthModule {
    static forRoot() {
        return {
            imports: [
                jwt_1.JwtModule.register({
                    secret: process.env.JWT_SECRET,
                    signOptions: { expiresIn: '9999999999s' },
                }),
                mongoose_1.MongooseModule.forFeature([
                    { name: 'User', schema: user_schema_1.UserSchema },
                    { name: 'Otp', schema: otp_schema_1.OtpSchema },
                ]),
                chat_1.ChatModule,
            ],
            controllers: [auth_controller_1.AuthController],
            providers: [auth_service_1.AuthService, jwt_strategy_1.JwtStrategy, utils_service_1.UtilsService],
            module: AuthModule_1,
        };
    }
};
exports.AuthModule = AuthModule = AuthModule_1 = __decorate([
    (0, common_1.Module)({})
], AuthModule);


/***/ }),

/***/ "./src/auth/auth.service.ts":
/*!**********************************!*\
  !*** ./src/auth/auth.service.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const dist_1 = __webpack_require__(/*! @nestjs/jwt/dist */ "@nestjs/jwt/dist");
const mongoose_1 = __webpack_require__(/*! mongoose */ "mongoose");
const mongoose_2 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
var bcrypt = __webpack_require__(/*! bcryptjs */ "bcryptjs");
const otp_enum_1 = __webpack_require__(/*! src/enum/otp.enum */ "./src/enum/otp.enum.ts");
const otpGenerator = __webpack_require__(/*! otp-generator */ "otp-generator");
const email_1 = __webpack_require__(/*! ./email */ "./src/auth/email.ts");
const utils_service_1 = __webpack_require__(/*! ../utils/utils.service */ "./src/utils/utils.service.ts");
const chat_service_1 = __webpack_require__(/*! @app/chat/chat.service */ "./libs/chat/src/chat.service.ts");
const GO_CARDLESS_ACTIVE = false;
let AuthService = exports.AuthService = class AuthService {
    constructor(jwtService, _userModel, _otpModel, chatService, utilsService) {
        this.jwtService = jwtService;
        this._userModel = _userModel;
        this._otpModel = _otpModel;
        this.chatService = chatService;
        this.utilsService = utilsService;
    }
    generateToken(payload) {
        return {
            access_token: `Bearer ${this.jwtService.sign(payload)}`,
        };
    }
    async signup(signupDto) {
        try {
            signupDto.email = signupDto?.email?.toLowerCase();
            const existingUser = await this._userModel.findOne({
                email: signupDto.email,
                isEmailVerified: true,
                isDeleted: false,
            });
            if (existingUser) {
                throw new Error('User already exists with this email');
            }
            await this._userModel.deleteMany({
                email: signupDto?.email,
                isEmailVerified: false,
            });
            const userData = await new this._userModel(signupDto).save();
            const otp = otpGenerator.generate(6, {
                upperCaseAlphabets: false,
                lowerCaseAlphabets: false,
                specialChars: false,
            });
            const expiryTime = new Date(Date.now()).getTime() + 2 * 60 * 1000;
            const otpObject = {
                otp: otp,
                userID: userData.id,
                expiryTime: expiryTime,
                type: otp_enum_1.OtpTypeEnum.SIGNUP,
            };
            const expiredOtp = await this._otpModel.find({
                type: otp_enum_1.OtpTypeEnum.SIGNUP,
                userID: userData.id,
                expiryTime: { $lt: new Date(Date.now()).getTime() },
            });
            const currentTime = new Date(Date.now()).getTime();
            if (expiredOtp[0]) {
                if (currentTime > expiredOtp[0].expiryTime) {
                    await this._otpModel.findByIdAndUpdate(expiredOtp[0]._id, {
                        isUsed: true,
                    });
                }
            }
            const otpAlreadyPresent = await this._otpModel.find({
                isKYC: true,
                userID: userData.id,
                isUsed: false,
            });
            if (otpAlreadyPresent.length > 0) {
                await this._otpModel.findByIdAndUpdate(otpAlreadyPresent[0]._id, {
                    isUsed: true,
                });
            }
            await this._otpModel.create(otpObject);
            const res = await this.utilsService.sendEmail({
                to: signupDto?.email,
                subject: "Confirm your email",
                html: (0, email_1.getEmail)(`${signupDto?.name}`, otp)
            });
            return { user: userData };
        }
        catch (err) {
            console.log(err);
            throw new common_1.BadRequestException(err?.message);
        }
    }
    async isEmailExists(emailDto) {
        try {
            const user = await this._userModel.findOne({ email: emailDto?.email?.toLowerCase(), isEmailVerified: true, isDeleted: false, }, { email: 1, isEmailVerified: 1, loginType: 1 });
            if (user) {
                return {
                    status: true,
                    user: user
                };
            }
            else {
                return {
                    status: false,
                    user: user
                };
            }
        }
        catch (err) {
            console.log(err);
            throw new common_1.BadRequestException(err?.message);
        }
    }
    async resendOtp(emailDto) {
        try {
            emailDto.email = emailDto?.email?.toLowerCase();
            const userData = await this._userModel.findOne({ email: emailDto?.email, isDeleted: false });
            if (!userData) {
                throw new Error("Invalid email");
            }
            if (userData?.isEmailVerified) {
                return await this.forgotPassword(emailDto);
            }
            else {
                const otp = '123456';
                const expiryTime = new Date(Date.now()).getTime() + 2 * 60 * 1000;
                const otpObject = {
                    otp: otp,
                    userID: userData.id,
                    expiryTime: expiryTime,
                    type: otp_enum_1.OtpTypeEnum.SIGNUP,
                };
                const expiredOtp = await this._otpModel.find({
                    type: otp_enum_1.OtpTypeEnum.SIGNUP,
                    userID: userData.id,
                    expiryTime: { $lt: new Date(Date.now()).getTime() },
                });
                const currentTime = new Date(Date.now()).getTime();
                if (expiredOtp[0]) {
                    if (currentTime > expiredOtp[0].expiryTime) {
                        await this._otpModel.findByIdAndUpdate(expiredOtp[0]._id, {
                            isUsed: true,
                        });
                    }
                }
                const otpAlreadyPresent = await this._otpModel.find({
                    isKYC: true,
                    userID: userData.id,
                    isUsed: false,
                });
                if (otpAlreadyPresent.length > 0) {
                    await this._otpModel.findByIdAndUpdate(otpAlreadyPresent[0]._id, {
                        isUsed: true,
                    });
                }
                await this._otpModel.create(otpObject);
                return { status: 'success', message: 'OTP resent' };
            }
        }
        catch (err) {
            console.log(err);
            throw new common_1.BadRequestException(err?.message);
        }
    }
    async verifyEmail(otpDto) {
        try {
            otpDto.email = otpDto?.email?.toLowerCase();
            const user = await this._userModel.findOne({ email: otpDto?.email, isDeleted: false, });
            if (!user) {
                throw new Error('Invalid email');
            }
            if (user?.isEmailVerified) {
                throw new Error('Email already verified');
            }
            const otp = await this._otpModel.findOne({
                userID: user.id,
                otp: otpDto?.otp,
                isUsed: false,
                type: otp_enum_1.OtpTypeEnum.SIGNUP,
            });
            if (!otp) {
                throw new Error('Wrong OTP typed');
            }
            const currentTime = new Date(Date.now()).getTime();
            const expiryTime = otp.expiryTime;
            if (currentTime > expiryTime) {
                await this._otpModel.findByIdAndUpdate(otp._id, { isUsed: true });
                throw new Error('Otp expired');
            }
            await this._userModel.updateOne({ _id: user.id }, { isEmailVerified: true });
            let userData = await this._userModel.findOne({ _id: user.id, isDeleted: false, });
            userData = JSON.parse(JSON.stringify(userData));
            delete userData.password;
            const token = await this.generateToken(userData);
            await this.chatService.addUser({
                userId: userData.id,
                name: userData.name,
                pic: userData.pic,
                color: userData.color,
            });
            return { status: 'success', token };
        }
        catch (err) {
            console.log(err);
            throw new common_1.BadRequestException(err?.message);
        }
    }
    async login(loginDto) {
        try {
            let user = await this._userModel.findOne({
                email: loginDto.email,
                isEmailVerified: true,
                isDeleted: false,
            });
            if (!user) {
                throw new Error('Incorrect credentials');
            }
            if (await bcrypt.compare(loginDto.password, user.password)) {
                user = JSON.parse(JSON.stringify(user));
                delete user.password;
                const token = await this.generateToken(user);
                return { user, token };
            }
            else {
                throw new Error('Incorrect credentials');
            }
        }
        catch (err) {
            console.log(err);
            throw new common_1.UnauthorizedException(err?.message);
        }
    }
    async forgotPassword(emailDto) {
        try {
            emailDto.email = emailDto?.email?.toLowerCase();
            const user = await this._userModel.findOne({ email: emailDto?.email, isDeleted: false, });
            if (!user) {
                throw new Error('Invalid Email');
            }
            const otp = '123456';
            const expiryTime = new Date(Date.now()).getTime() + 2 * 60 * 1000;
            const otpObject = {
                otp: otp,
                userID: user.id,
                expiryTime: expiryTime,
                type: otp_enum_1.OtpTypeEnum.FORGOT_PASSWORD,
            };
            const expiredOtp = await this._otpModel.find({
                userID: user.id,
                expiryTime: { $lt: new Date(Date.now()).getTime() },
                type: otp_enum_1.OtpTypeEnum.FORGOT_PASSWORD,
            });
            const currentTime = new Date(Date.now()).getTime();
            if (expiredOtp[0]) {
                if (currentTime > expiredOtp[0].expiryTime) {
                    await this._otpModel.findByIdAndUpdate(expiredOtp[0]._id, {
                        isUsed: true,
                    });
                }
            }
            const otpAlreadyPresent = await this._otpModel.find({
                isKYC: true,
                userID: user.id,
                isUsed: false,
                type: otp_enum_1.OtpTypeEnum.FORGOT_PASSWORD,
            });
            if (otpAlreadyPresent.length > 0) {
                await this._otpModel.findByIdAndUpdate(otpAlreadyPresent[0]._id, {
                    isUsed: true,
                });
            }
            await this._otpModel.create(otpObject);
            return {
                status: 'success',
            };
        }
        catch (err) {
            throw new common_1.BadRequestException(err?.message);
        }
    }
    async verifyOtpForForgotPassword(otpDto) {
        try {
            otpDto.email = otpDto?.email?.toLowerCase();
            let user = await this._userModel.findOne({ email: otpDto?.email, isDeleted: false, });
            if (!user) {
                throw new Error('Invalid Email');
            }
            const otp = await this._otpModel.findOne({
                userID: user.id,
                otp: otpDto?.otp,
                isUsed: false,
                type: otp_enum_1.OtpTypeEnum.FORGOT_PASSWORD,
            });
            if (!otp) {
                throw new Error('Wrong OTP typed');
            }
            const currentTime = new Date(Date.now()).getTime();
            const expiryTime = otp.expiryTime;
            if (currentTime > expiryTime) {
                await this._otpModel.findByIdAndUpdate(otp._id, { isUsed: true });
                throw new Error('Otp expired');
            }
            user = JSON.parse(JSON.stringify(user));
            delete user.password;
            user.isForgetPassword = true;
            const token = await this.generateToken(user);
            return { status: 'success', token };
        }
        catch (err) {
            throw new common_1.UnauthorizedException(err?.message);
        }
    }
    async resetPassword(resetPasswordDto, user) {
        try {
            if (!user.isForgetPassword) {
                throw new common_1.UnauthorizedException('Cannot reset password at this stage');
            }
            const userData = await this._userModel.findOne({ _id: user.id, isDeleted: false, });
            if (!userData) {
                throw new common_1.UnauthorizedException('No user found');
            }
            await this._userModel.updateOne({ _id: user.id }, { password: resetPasswordDto.password });
            return { status: 'success' };
        }
        catch (err) {
            throw new common_1.UnauthorizedException(err.message);
        }
    }
    async getLoggedInUsers(user) {
        try {
            const userData = await this._userModel.findOne({ _id: user.id });
            return userData;
        }
        catch (err) {
            console.log(err);
            throw new common_1.BadRequestException(err?.message);
        }
    }
};
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, mongoose_2.InjectModel)('User')),
    __param(2, (0, mongoose_2.InjectModel)('Otp')),
    __metadata("design:paramtypes", [typeof (_a = typeof dist_1.JwtService !== "undefined" && dist_1.JwtService) === "function" ? _a : Object, typeof (_b = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _b : Object, typeof (_c = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _c : Object, typeof (_d = typeof chat_service_1.ChatService !== "undefined" && chat_service_1.ChatService) === "function" ? _d : Object, typeof (_e = typeof utils_service_1.UtilsService !== "undefined" && utils_service_1.UtilsService) === "function" ? _e : Object])
], AuthService);


/***/ }),

/***/ "./src/auth/dto/email.dto.ts":
/*!***********************************!*\
  !*** ./src/auth/dto/email.dto.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmailDTO = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class EmailDTO {
}
exports.EmailDTO = EmailDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], EmailDTO.prototype, "email", void 0);


/***/ }),

/***/ "./src/auth/dto/login.dto.ts":
/*!***********************************!*\
  !*** ./src/auth/dto/login.dto.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginDTO = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class LoginDTO {
}
exports.LoginDTO = LoginDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], LoginDTO.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], LoginDTO.prototype, "password", void 0);


/***/ }),

/***/ "./src/auth/dto/otp.dto.ts":
/*!*********************************!*\
  !*** ./src/auth/dto/otp.dto.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OtpDTO = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class OtpDTO {
}
exports.OtpDTO = OtpDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], OtpDTO.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], OtpDTO.prototype, "otp", void 0);


/***/ }),

/***/ "./src/auth/dto/password.dto.ts":
/*!**************************************!*\
  !*** ./src/auth/dto/password.dto.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PasswordDTO = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class PasswordDTO {
}
exports.PasswordDTO = PasswordDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PasswordDTO.prototype, "password", void 0);


/***/ }),

/***/ "./src/auth/dto/signup.dto.ts":
/*!************************************!*\
  !*** ./src/auth/dto/signup.dto.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SignupDTO = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const NUMBER = /\d/;
const CAPITAL_LETTER = /[A-Z]/;
const SMALL_LETTER = /[a-z]/;
const SPECIAL_CHARACTER = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
const MIN_LENGTH = 8;
class SignupDTO {
}
exports.SignupDTO = SignupDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SignupDTO.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.MinLength)(MIN_LENGTH, { message: 'Minimum 8 characters required' }),
    (0, class_validator_1.Matches)(NUMBER, { message: 'Minimum 1 digit required' }),
    (0, class_validator_1.Matches)(CAPITAL_LETTER, { message: 'Minimum 1 uppercase character required' }),
    (0, class_validator_1.Matches)(SMALL_LETTER, { message: 'Minimum 1 lowercase character required' }),
    (0, class_validator_1.Matches)(SPECIAL_CHARACTER, { message: 'Minimum 1 special character required' }),
    __metadata("design:type", String)
], SignupDTO.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], SignupDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], SignupDTO.prototype, "pic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], SignupDTO.prototype, "color", void 0);


/***/ }),

/***/ "./src/auth/email.ts":
/*!***************************!*\
  !*** ./src/auth/email.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getEmail = void 0;
const getEmail = (fullname, otp, isSignup = true) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title></title>
       <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
       
       <style type="text/css">
           /* FONTS */
           @media screen {
               @font-face {
                   font-family: 'Lato';
                   font-style: normal;
                   font-weight: 400;
                   src: local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v11/qIIYRU-oROkIk8vfvxw6QvesZW2xOQ-xsNqO47m55DA.woff) format('woff');
               }
    
               @font-face {
                   font-family: 'Lato';
                   font-style: normal;
                   font-weight: 700;
                   src: local('Lato Bold'), local('Lato-Bold'), url(https://fonts.gstatic.com/s/lato/v11/qdgUG4U09HnJwhYI-uK18wLUuEpTyoUstqEm5AMlJo4.woff) format('woff');
               }
    
               @font-face {
                   font-family: 'Lato';
                   font-style: italic;
                   font-weight: 400;
                   src: local('Lato Italic'), local('Lato-Italic'), url(https://fonts.gstatic.com/s/lato/v11/RYyZNoeFgb0l7W3Vu1aSWOvvDin1pK8aKteLpeZ5c0A.woff) format('woff');
               }
    
               @font-face {
                   font-family: 'Lato';
                   font-style: italic;
                   font-weight: 700;
                   src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url(https://fonts.gstatic.com/s/lato/v11/HkF_qI1x_noxlxhrhMQYELO3LdcAZYWl9Si6vvxL-qU.woff) format('woff');
               }
           }
    
           /* CLIENT-SPECIFIC STYLES */
           body,
           table,
           td,
           a {
               -webkit-text-size-adjust: 100%;
               -ms-text-size-adjust: 100%;
           }
    
           table,
           td {
               mso-table-lspace: 0pt;
               mso-table-rspace: 0pt;
           }
    
           img {
               -ms-interpolation-mode: bicubic;
           }
    
           /* RESET STYLES */
           img {
               border: 0;
               height: auto;
               line-height: 100%;
               outline: none;
               text-decoration: none;
           }
    
           table {
               border-collapse: collapse !important;
           }
    
           body {
               height: 100% !important;
               margin: 0 !important;
               padding: 0 !important;
               width: 100% !important;
           }
    
           /* iOS BLUE LINKS */
           a[x-apple-data-detectors] {
               color: inherit !important;
               text-decoration: none !important;
               font-size: inherit !important;
               font-family: inherit !important;
               font-weight: inherit !important;
               line-height: inherit !important;
           }
    
           /* ANDROID CENTER FIX */
           div[style*="margin: 16px 0;"] {
               margin: 0 !important;
           }
       </style>
    </head>
    <body style="margin: 0 !important; padding: 0 !important;">
       <table border="0" cellpadding="0" cellspacing="0" width="100%">
           <!-- LOGO -->
           <tr>
               <td  align="center">
                   <table border="0" cellpadding="0" cellspacing="0">
                       <tr>
                           <td align="center" valign="top" style="padding: 40px 10px 40px 10px;">
                               <div
                                   style="padding: 40px 0 0; border-radius: 4px 4px 0px 0px; color: #FFFFFF; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400;">
                                   <img class="logo-image" style="width: 100px"
                                       src="https://api.buildingsup.co.uk/media-upload/mediaFiles/logo/26aad41073ec42e5f820ab563fb8d8bf2.png"
                                       alt="Buildings Up">
                                   <h3 style="margin:0px; color: #111111; font-size: 18px"> Buildings Up</h3>
                               </div>
                           </td>
                       </tr>
                   </table>
               </td>
           </tr>
           <!-- HERO -->
           <tr>
               <td style="padding: 0px 10px 0px 10px;">
                   <table border="0" cellpadding="0" cellspacing="0">
                       <tr>
                           <td valign="top"
                               style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400;">
                               <p style="margin: 0 0 15px;">Your verification code: </p>
                               <strong style="color: #54BAB9">${otp} </strong>
                               <p style="margin: 15px 0 0;"> The verification code will be valid for 2 minutes. Do not share this code with anyone. Don't recognize this activity? Contact <strong>customer support</strong> immediately.</p>
                               <p style="margin: 10px 0;"><i>This is automated message, do not reply.</i></p>
                               <hr style="margin: 60px 0 15px" />
                               <p style="margin: 0; text-align: center; font-size: 14px;" > © 2023 Buildingsup.co.uk, All Rights Reserved.</p>
                           </td>
                       </tr>
                   </table>
               </td>
           </tr>
           <!-- COPY BLOCK -->
         
           <!-- COPY CALLOUT -->
           <tr>
               <td bgcolor="#F4F4F4" align="center" style="padding: 0px 10px 0px 10px;">
                   <table border="0" cellpadding="0" cellspacing="0">
                   </table>
               </td>
           </tr>
       </table>
    </body>
    </html>`;
};
exports.getEmail = getEmail;


/***/ }),

/***/ "./src/auth/jwt-auth.guard.ts":
/*!************************************!*\
  !*** ./src/auth/jwt-auth.guard.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtAuthGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
let JwtAuthGuard = exports.JwtAuthGuard = class JwtAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
};
exports.JwtAuthGuard = JwtAuthGuard = __decorate([
    (0, common_1.Injectable)()
], JwtAuthGuard);


/***/ }),

/***/ "./src/auth/jwt.strategy.ts":
/*!**********************************!*\
  !*** ./src/auth/jwt.strategy.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const passport_jwt_1 = __webpack_require__(/*! passport-jwt */ "passport-jwt");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let JwtStrategy = exports.JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor() {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET,
        });
    }
    async validate(payload) {
        return payload;
    }
};
exports.JwtStrategy = JwtStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], JwtStrategy);


/***/ }),

/***/ "./src/comments/comments.controller.ts":
/*!*********************************************!*\
  !*** ./src/comments/comments.controller.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommentsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const user_decorator_1 = __webpack_require__(/*! src/decorators/user.decorator */ "./src/decorators/user.decorator.ts");
const jwt_auth_guard_1 = __webpack_require__(/*! src/auth/jwt-auth.guard */ "./src/auth/jwt-auth.guard.ts");
const comments_service_1 = __webpack_require__(/*! ./comments.service */ "./src/comments/comments.service.ts");
const comments_dto_1 = __webpack_require__(/*! ./dto/comments.dto */ "./src/comments/dto/comments.dto.ts");
let CommentsController = exports.CommentsController = class CommentsController {
    constructor(commentService) {
        this.commentService = commentService;
    }
    createComment(createCommentDTO) {
        return this.commentService.createComments(createCommentDTO);
    }
    getAllComments(getAllCommentsDTO, user) {
        return this.commentService.getAllComments(getAllCommentsDTO);
    }
    getCommentById(getCommentIdDTO, user) {
        return this.commentService.getCommentsById(getCommentIdDTO);
    }
    deleteCommentById(getCommentIdDTO, user) {
        return this.commentService.deleteCommentsById(getCommentIdDTO);
    }
    updateCommentById(updateCommentDTO, user) {
        return this.commentService.updateCommentsById(updateCommentDTO.id, updateCommentDTO);
    }
};
__decorate([
    (0, common_1.Post)('createComment'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof comments_dto_1.CreateCommentsDTO !== "undefined" && comments_dto_1.CreateCommentsDTO) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], CommentsController.prototype, "createComment", null);
__decorate([
    (0, common_1.Get)('getAllComments'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof comments_dto_1.GetAllCommmentDTO !== "undefined" && comments_dto_1.GetAllCommmentDTO) === "function" ? _c : Object, Object]),
    __metadata("design:returntype", void 0)
], CommentsController.prototype, "getAllComments", null);
__decorate([
    (0, common_1.Get)('getCommentById'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof comments_dto_1.GetCommentsIdDTO !== "undefined" && comments_dto_1.GetCommentsIdDTO) === "function" ? _d : Object, Object]),
    __metadata("design:returntype", void 0)
], CommentsController.prototype, "getCommentById", null);
__decorate([
    (0, common_1.Post)('deleteCommentById'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof comments_dto_1.DeleteCommentIdDTO !== "undefined" && comments_dto_1.DeleteCommentIdDTO) === "function" ? _e : Object, Object]),
    __metadata("design:returntype", void 0)
], CommentsController.prototype, "deleteCommentById", null);
__decorate([
    (0, common_1.Post)('updateCommentById'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof comments_dto_1.UpdateCommentsDTO !== "undefined" && comments_dto_1.UpdateCommentsDTO) === "function" ? _f : Object, Object]),
    __metadata("design:returntype", void 0)
], CommentsController.prototype, "updateCommentById", null);
exports.CommentsController = CommentsController = __decorate([
    (0, swagger_1.ApiTags)('Comments'),
    (0, common_1.Controller)('comment'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [typeof (_a = typeof comments_service_1.CommentsService !== "undefined" && comments_service_1.CommentsService) === "function" ? _a : Object])
], CommentsController);


/***/ }),

/***/ "./src/comments/comments.module.ts":
/*!*****************************************!*\
  !*** ./src/comments/comments.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CommentsModule_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommentsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const comments_schema_1 = __webpack_require__(/*! src/schema/comments/comments.schema */ "./src/schema/comments/comments.schema.ts");
const comments_controller_1 = __webpack_require__(/*! ./comments.controller */ "./src/comments/comments.controller.ts");
const comments_service_1 = __webpack_require__(/*! ./comments.service */ "./src/comments/comments.service.ts");
let CommentsModule = exports.CommentsModule = CommentsModule_1 = class CommentsModule {
};
exports.CommentsModule = CommentsModule = CommentsModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot("mongodb://127.0.0.1:27017/exampleChatNew"),
            mongoose_1.MongooseModule.forFeature([{
                    name: comments_schema_1.Comments.name,
                    schema: comments_schema_1.CommentsSchema,
                },
            ]),
            CommentsModule_1
        ],
        controllers: [comments_controller_1.CommentsController],
        providers: [comments_service_1.CommentsService, comments_schema_1.Comments],
        exports: [comments_service_1.CommentsService]
    })
], CommentsModule);


/***/ }),

/***/ "./src/comments/comments.service.ts":
/*!******************************************!*\
  !*** ./src/comments/comments.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommentsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const comments_schema_1 = __webpack_require__(/*! src/schema/comments/comments.schema */ "./src/schema/comments/comments.schema.ts");
let CommentsService = exports.CommentsService = class CommentsService {
    constructor(commentsModel) {
        this.commentsModel = commentsModel;
    }
    async createComments(createCommentsDTO) {
        try {
            let commmentDocument = await new this.commentsModel(createCommentsDTO).save();
            return commmentDocument;
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error?.message);
        }
    }
    async getAllComments(getAllCommentsDto) {
        try {
            console.log(getAllCommentsDto.limit);
            console.log(getAllCommentsDto.offset);
            let pagination = [];
            let commentsData = await this.commentsModel
                .find({ isDeleted: false, postId: getAllCommentsDto.postId })
                .sort({ sort: 1 })
                .populate('postId')
                .skip(parseInt(getAllCommentsDto.offset))
                .limit(parseInt(getAllCommentsDto.limit));
            let commment = await Promise.all(commentsData.map(async (Item) => {
                return {
                    comment: Item,
                };
            }));
            return commment;
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error?.message);
        }
    }
    async getCommentsById(getCommentsIdDTO) {
        try {
            let commentsData = await this.commentsModel
                .find({ id: getCommentsIdDTO.id, }).exec();
            let commentReturn = JSON.parse(JSON.stringify(commentsData[0]));
            return commentReturn;
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error?.message);
        }
    }
    async deleteCommentsById(deleteCommentIdDTO) {
        try {
            let postData = await this.commentsModel
                .deleteOne({ id: deleteCommentIdDTO.id, }).exec();
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error?.message);
        }
    }
    async updateCommentsById(postId, updateCommentsDTO) {
        try {
            console.log(postId);
            console.log("updated post ", updateCommentsDTO);
            const comments = await this.commentsModel
                .updateOne({ id: postId }, { $set: updateCommentsDTO });
            console.log("updated post nnn ", comments);
            return comments;
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error?.message);
        }
    }
};
exports.CommentsService = CommentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(comments_schema_1.Comments.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], CommentsService);


/***/ }),

/***/ "./src/comments/dto/comments.dto.ts":
/*!******************************************!*\
  !*** ./src/comments/dto/comments.dto.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateCommentsDTO = exports.DeleteCommentIdDTO = exports.GetCommentsIdDTO = exports.GetAllCommmentDTO = exports.PaginationDTO = exports.CreateCommentsDTO = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class CreateCommentsDTO {
    static find() {
        throw new Error('Method not implemented.');
    }
}
exports.CreateCommentsDTO = CreateCommentsDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateCommentsDTO.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateCommentsDTO.prototype, "postId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateCommentsDTO.prototype, "text", void 0);
class PaginationDTO {
}
exports.PaginationDTO = PaginationDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ default: 0 }),
    __metadata("design:type", String)
], PaginationDTO.prototype, "offset", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 10 }),
    __metadata("design:type", String)
], PaginationDTO.prototype, "limit", void 0);
class GetAllCommmentDTO extends PaginationDTO {
}
exports.GetAllCommmentDTO = GetAllCommmentDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], GetAllCommmentDTO.prototype, "postId", void 0);
class GetCommentsIdDTO {
}
exports.GetCommentsIdDTO = GetCommentsIdDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetCommentsIdDTO.prototype, "id", void 0);
class DeleteCommentIdDTO {
}
exports.DeleteCommentIdDTO = DeleteCommentIdDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DeleteCommentIdDTO.prototype, "id", void 0);
class UpdateCommentsDTO {
}
exports.UpdateCommentsDTO = UpdateCommentsDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateCommentsDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateCommentsDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateCommentsDTO.prototype, "pic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateCommentsDTO.prototype, "color", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], UpdateCommentsDTO.prototype, "isDeleted", void 0);


/***/ }),

/***/ "./src/decorators/user.decorator.ts":
/*!******************************************!*\
  !*** ./src/decorators/user.decorator.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
exports.User = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
});


/***/ }),

/***/ "./src/enum/otp.enum.ts":
/*!******************************!*\
  !*** ./src/enum/otp.enum.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OtpTypeEnum = void 0;
var OtpTypeEnum;
(function (OtpTypeEnum) {
    OtpTypeEnum["SIGNUP"] = "SIGNUP";
    OtpTypeEnum["FORGOT_PASSWORD"] = "FORGOT_PASSWORD";
})(OtpTypeEnum || (exports.OtpTypeEnum = OtpTypeEnum = {}));


/***/ }),

/***/ "./src/file-management/media-upload/media-upload.controller.ts":
/*!*********************************************************************!*\
  !*** ./src/file-management/media-upload/media-upload.controller.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MediaUploadController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const path_1 = __webpack_require__(/*! path */ "path");
const multer_1 = __webpack_require__(/*! multer */ "multer");
const path = __webpack_require__(/*! path */ "path");
const platform_express_1 = __webpack_require__(/*! @nestjs/platform-express */ "@nestjs/platform-express");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const fs = __webpack_require__(/*! fs */ "fs");
const jimp = __webpack_require__(/*! jimp */ "jimp");
const media_upload_service_1 = __webpack_require__(/*! ./media-upload.service */ "./src/file-management/media-upload/media-upload.service.ts");
const jwt_auth_guard_1 = __webpack_require__(/*! src/auth/jwt-auth.guard */ "./src/auth/jwt-auth.guard.ts");
const fileFilter = (req, file, callback) => {
    let ext = path.extname(file.originalname);
    if (!process.env.whiteListedExtensions.includes(ext.toLowerCase())) {
        req.fileValidationError = 'Invalid file type';
        return callback(new common_1.HttpException('Invalid file type', common_1.HttpStatus.BAD_REQUEST), false);
    }
    return callback(null, true);
};
let MediaUploadController = exports.MediaUploadController = class MediaUploadController {
    constructor(_mediaUploadService) {
        this._mediaUploadService = _mediaUploadService;
    }
    async uploadAvatar(file, folderName, req) {
        req.setTimeout(10 * 60 * 1000);
        file['url'] =
            process.env.URL +
                'media-upload/mediaFiles/' +
                folderName.toLowerCase() +
                '/' +
                file.filename;
        let type = '';
        const nameSplit = file['filename'].split('.');
        if (nameSplit.length > 1) {
            type = nameSplit[1];
        }
        const allowTypes = ['.jpg', '.jpeg', '.png'];
        if (type && allowTypes.includes(`.${type}`)) {
            const img = await jimp.read(file['path']);
            const height = img.bitmap.height;
            const width = img.bitmap.width;
            this._mediaUploadService.compressImageTo300(file);
            if ((height < 500 && width < 275) || file.size <= 500 * 1000) {
                return file;
            }
            const heightRatio = height / width;
            const widthRatio = width / height;
            file['path'] = file['path'].replace(file['filename'], `compressed/${file['filename']}`);
            img.resize(500 * widthRatio, jimp.AUTO).write(file['path']);
        }
        return file;
    }
    async mediaFiles(folderName, fileName, res, req, size = 'original') {
        req.setTimeout(10 * 60 * 1000);
        const sizeArray = ['original', 'compressed'];
        size = sizeArray.includes(size) ? size : 'original';
        folderName = folderName.toLowerCase();
        if (size == 'original') {
            res.sendFile(fileName, {
                root: 'mediaFiles/metasuite/' + folderName,
            });
        }
        else {
            const dir = 'mediaFiles/metasuite/' + folderName + '/' + size + '/' + fileName;
            const exists = fs.existsSync(dir);
            if (!exists) {
                res.sendFile(fileName, {
                    root: 'mediaFiles/metasuite/' + folderName,
                });
                return;
            }
            res.sendFile(fileName, {
                root: 'mediaFiles/metasuite/' + folderName + '/' + size,
            });
        }
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('mediaFiles/:folderName'),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        fileFilter: fileFilter,
        storage: (0, multer_1.diskStorage)({
            destination: function (req, file, cb) {
                const dir = 'mediaFiles/metasuite/' + req.params.folderName.toLowerCase();
                fs.exists(dir, (exist) => {
                    if (!exist) {
                        return fs.mkdir(dir, { recursive: true }, (error) => cb(error, dir));
                    }
                    return cb(null, dir);
                });
            },
            filename: (req, file, cb) => {
                const randomName = Array(32)
                    .fill(null)
                    .map(() => Math.round(Math.random() * 16).toString(16))
                    .join('');
                return cb(null, `${randomName}${(0, path_1.extname)(file.originalname)}`);
            },
        }),
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Param)('folderName')),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], MediaUploadController.prototype, "uploadAvatar", null);
__decorate([
    (0, common_1.Get)('mediaFiles/:folderName/:fileName'),
    __param(0, (0, common_1.Param)('folderName')),
    __param(1, (0, common_1.Param)('fileName')),
    __param(2, (0, common_1.Res)()),
    __param(3, (0, common_1.Req)()),
    __param(4, (0, common_1.Query)('size')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object, String]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], MediaUploadController.prototype, "mediaFiles", null);
exports.MediaUploadController = MediaUploadController = __decorate([
    (0, swagger_1.ApiTags)('media-upload'),
    (0, common_1.Controller)('media-upload'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [typeof (_a = typeof media_upload_service_1.MediaUploadService !== "undefined" && media_upload_service_1.MediaUploadService) === "function" ? _a : Object])
], MediaUploadController);


/***/ }),

/***/ "./src/file-management/media-upload/media-upload.module.ts":
/*!*****************************************************************!*\
  !*** ./src/file-management/media-upload/media-upload.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MediaUploadModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const media_upload_controller_1 = __webpack_require__(/*! ./media-upload.controller */ "./src/file-management/media-upload/media-upload.controller.ts");
const media_upload_service_1 = __webpack_require__(/*! ./media-upload.service */ "./src/file-management/media-upload/media-upload.service.ts");
let MediaUploadModule = exports.MediaUploadModule = class MediaUploadModule {
};
exports.MediaUploadModule = MediaUploadModule = __decorate([
    (0, common_1.Module)({
        controllers: [media_upload_controller_1.MediaUploadController],
        providers: [media_upload_service_1.MediaUploadService],
    })
], MediaUploadModule);


/***/ }),

/***/ "./src/file-management/media-upload/media-upload.service.ts":
/*!******************************************************************!*\
  !*** ./src/file-management/media-upload/media-upload.service.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MediaUploadService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jimp = __webpack_require__(/*! jimp */ "jimp");
const fs = __webpack_require__(/*! fs */ "fs");
let MediaUploadService = exports.MediaUploadService = class MediaUploadService {
    async compressImageTo300(file) {
        const img = await jimp.read(file['path']);
        const height = img.bitmap.height;
        const width = img.bitmap.width;
        if ((height < 200 && width < 300) || file.size <= 300 * 1000) {
            return '';
        }
        const heightRatio = height / width;
        const widthRatio = width / height;
        file['path'] = file['path'].replace('compressed', `300`);
        img.resize(300 * widthRatio, jimp.AUTO).write(file['path']);
    }
    async compressFolder(folderName) {
        try {
            const basePath = 'mediaFiles/metasuite/' + folderName;
            const files = fs.readdirSync(basePath);
            for await (let fileItem of files) {
                const allowTypes = ['.jpg', '.jpeg', '.png'];
                let type = '';
                const nameSplit = fileItem.split('.');
                if (nameSplit.length > 1) {
                    type = nameSplit[1];
                }
                let filePath = basePath + '/' + fileItem;
                if (type && allowTypes.includes(`.${type}`)) {
                    const img = await jimp.read(filePath);
                    const height = img.bitmap.height;
                    const width = img.bitmap.width;
                    const heightRatio = height / width;
                    const widthRatio = width / height;
                    filePath = filePath.replace(fileItem, `compressed/${fileItem}`);
                    await img.resize(500 * widthRatio, jimp.AUTO).write(filePath);
                }
            }
        }
        catch (err) {
            console.log(err);
            throw new common_1.BadRequestException(err?.message);
        }
    }
};
exports.MediaUploadService = MediaUploadService = __decorate([
    (0, common_1.Injectable)()
], MediaUploadService);


/***/ }),

/***/ "./src/interface/user/user.interface.ts":
/*!**********************************************!*\
  !*** ./src/interface/user/user.interface.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/order/dto/order.dto.ts":
/*!************************************!*\
  !*** ./src/order/dto/order.dto.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateOrderDTO = exports.DeleteOrderIdDTO = exports.GetOrderIdDTO = exports.GetAllOrdersDTO = exports.PaginationDTO = exports.CreateOrderDTO = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class CreateOrderDTO {
    static find() {
        throw new Error('Method not implemented.');
    }
}
exports.CreateOrderDTO = CreateOrderDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateOrderDTO.prototype, "deliveryType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateOrderDTO.prototype, "flightType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateOrderDTO.prototype, "flightNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateOrderDTO.prototype, "airlineName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateOrderDTO.prototype, "departureCountry", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateOrderDTO.prototype, "departureCity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateOrderDTO.prototype, "departureAirport", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateOrderDTO.prototype, "departureDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateOrderDTO.prototype, "departureTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateOrderDTO.prototype, "ticketImage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateOrderDTO.prototype, "arrivalCountry", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateOrderDTO.prototype, "arrivalCity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateOrderDTO.prototype, "arrivalAirport", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateOrderDTO.prototype, "arrivalDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateOrderDTO.prototype, "arrivalTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreateOrderDTO.prototype, "luggageWeight", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], CreateOrderDTO.prototype, "isDropPackage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], CreateOrderDTO.prototype, "isPickupPackage", void 0);
class PaginationDTO {
}
exports.PaginationDTO = PaginationDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ default: 0 }),
    __metadata("design:type", String)
], PaginationDTO.prototype, "offset", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 10 }),
    __metadata("design:type", String)
], PaginationDTO.prototype, "limit", void 0);
class GetAllOrdersDTO extends PaginationDTO {
}
exports.GetAllOrdersDTO = GetAllOrdersDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], GetAllOrdersDTO.prototype, "departureCountry", void 0);
class GetOrderIdDTO {
}
exports.GetOrderIdDTO = GetOrderIdDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetOrderIdDTO.prototype, "id", void 0);
class DeleteOrderIdDTO {
}
exports.DeleteOrderIdDTO = DeleteOrderIdDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DeleteOrderIdDTO.prototype, "id", void 0);
class UpdateOrderDTO {
}
exports.UpdateOrderDTO = UpdateOrderDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateOrderDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateOrderDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateOrderDTO.prototype, "pic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateOrderDTO.prototype, "color", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], UpdateOrderDTO.prototype, "isDeleted", void 0);


/***/ }),

/***/ "./src/order/order.controller.ts":
/*!***************************************!*\
  !*** ./src/order/order.controller.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const user_decorator_1 = __webpack_require__(/*! src/decorators/user.decorator */ "./src/decorators/user.decorator.ts");
const jwt_auth_guard_1 = __webpack_require__(/*! src/auth/jwt-auth.guard */ "./src/auth/jwt-auth.guard.ts");
const order_dto_1 = __webpack_require__(/*! ./dto/order.dto */ "./src/order/dto/order.dto.ts");
const order_service_1 = __webpack_require__(/*! ./order.service */ "./src/order/order.service.ts");
let OrderController = exports.OrderController = class OrderController {
    constructor(orderService) {
        this.orderService = orderService;
    }
    createOrder(createPostDTO) {
        return this.orderService.createOrder(createPostDTO);
    }
    getAllOrders(getAllOrdersDTO, user) {
        return this.orderService.getAllOrders(getAllOrdersDTO);
    }
    getOrderById(getOrderIdDTO, user) {
        return this.orderService.getOrderById(getOrderIdDTO);
    }
    deleteOrderById(getOrderIdDTO, user) {
        return this.orderService.deleteOrderById(getOrderIdDTO);
    }
    updateOrderById(updateOrderDTO, user) {
        return this.orderService.updateOrderById(updateOrderDTO.id, updateOrderDTO);
    }
};
__decorate([
    (0, common_1.Post)('createOrder'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof order_dto_1.CreateOrderDTO !== "undefined" && order_dto_1.CreateOrderDTO) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "createOrder", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('getAllOrders'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof order_dto_1.GetAllOrdersDTO !== "undefined" && order_dto_1.GetAllOrdersDTO) === "function" ? _c : Object, Object]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "getAllOrders", null);
__decorate([
    (0, common_1.Get)('getOrderById'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof order_dto_1.GetOrderIdDTO !== "undefined" && order_dto_1.GetOrderIdDTO) === "function" ? _d : Object, Object]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "getOrderById", null);
__decorate([
    (0, common_1.Post)('deleteOrderById'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof order_dto_1.DeleteOrderIdDTO !== "undefined" && order_dto_1.DeleteOrderIdDTO) === "function" ? _e : Object, Object]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "deleteOrderById", null);
__decorate([
    (0, common_1.Post)('updateOrderById'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof order_dto_1.UpdateOrderDTO !== "undefined" && order_dto_1.UpdateOrderDTO) === "function" ? _f : Object, Object]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "updateOrderById", null);
exports.OrderController = OrderController = __decorate([
    (0, swagger_1.ApiTags)('Order'),
    (0, common_1.Controller)('order'),
    __metadata("design:paramtypes", [typeof (_a = typeof order_service_1.OrderService !== "undefined" && order_service_1.OrderService) === "function" ? _a : Object])
], OrderController);


/***/ }),

/***/ "./src/order/order.module.ts":
/*!***********************************!*\
  !*** ./src/order/order.module.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const order_schema_1 = __webpack_require__(/*! src/schema/order/order.schema */ "./src/schema/order/order.schema.ts");
const order_controller_1 = __webpack_require__(/*! ./order.controller */ "./src/order/order.controller.ts");
const order_service_1 = __webpack_require__(/*! ./order.service */ "./src/order/order.service.ts");
let OrderModule = exports.OrderModule = class OrderModule {
};
exports.OrderModule = OrderModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot("mongodb://127.0.0.1:27017/exampleChatNew"),
            mongoose_1.MongooseModule.forFeature([{
                    name: order_schema_1.Order.name,
                    schema: order_schema_1.OrderSchema,
                },
            ])
        ],
        controllers: [order_controller_1.OrderController],
        providers: [order_service_1.OrderService, order_schema_1.Order],
        exports: [order_service_1.OrderService]
    })
], OrderModule);


/***/ }),

/***/ "./src/order/order.service.ts":
/*!************************************!*\
  !*** ./src/order/order.service.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const order_schema_1 = __webpack_require__(/*! src/schema/order/order.schema */ "./src/schema/order/order.schema.ts");
let OrderService = exports.OrderService = class OrderService {
    constructor(orderModel) {
        this.orderModel = orderModel;
    }
    async createOrder(createOrderDTO) {
        try {
            let orderDocument = await new this.orderModel(createOrderDTO).save();
            return orderDocument;
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error?.message);
        }
    }
    async getAllOrders(getAllOrdersDto) {
        try {
            console.log(getAllOrdersDto.limit);
            console.log(getAllOrdersDto.offset);
            let pagination = [];
            let orderData = await this.orderModel
                .find({ isDeleted: false, })
                .sort({ sort: 1 })
                .populate('departureCountry')
                .skip(parseInt(getAllOrdersDto.offset))
                .limit(parseInt(getAllOrdersDto.limit));
            let orders = await Promise.all(orderData.map(async (orderItem) => {
                return {
                    order: orderItem,
                };
            }));
            return orders;
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error?.message);
        }
    }
    async getOrderById(getOrderIdDTO) {
        try {
            let orderData = await this.orderModel
                .find({ id: getOrderIdDTO.id, }).exec();
            let postReturn = JSON.parse(JSON.stringify(orderData[0]));
            return postReturn;
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error?.message);
        }
    }
    async deleteOrderById(deleteOrderIdDTO) {
        try {
            let postData = await this.orderModel
                .deleteOne({ id: deleteOrderIdDTO.id, }).exec();
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error?.message);
        }
    }
    async updateOrderById(postId, updateOrderByDto) {
        try {
            console.log(postId);
            console.log("updated post ", updateOrderByDto);
            const updatedOrder = await this.orderModel
                .updateOne({ id: postId }, { $set: updateOrderByDto });
            console.log("updated post nnn ", updatedOrder);
            return updatedOrder;
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error?.message);
        }
    }
};
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(order_schema_1.Order.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], OrderService);


/***/ }),

/***/ "./src/post/dto/post.dto.ts":
/*!**********************************!*\
  !*** ./src/post/dto/post.dto.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdatePostDTO = exports.DeletePostIdDTO = exports.GetPostIdDTO = exports.GetAllPostsDTO = exports.PaginationDTO = exports.CreatePostDTO = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class CreatePostDTO {
    static find() {
        throw new Error('Method not implemented.');
    }
}
exports.CreatePostDTO = CreatePostDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePostDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePostDTO.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePostDTO.prototype, "pic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePostDTO.prototype, "color", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], CreatePostDTO.prototype, "isEmailVerified", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], CreatePostDTO.prototype, "isDeleted", void 0);
class PaginationDTO {
}
exports.PaginationDTO = PaginationDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ default: 0 }),
    __metadata("design:type", String)
], PaginationDTO.prototype, "offset", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 10 }),
    __metadata("design:type", String)
], PaginationDTO.prototype, "limit", void 0);
class GetAllPostsDTO extends PaginationDTO {
}
exports.GetAllPostsDTO = GetAllPostsDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], GetAllPostsDTO.prototype, "name", void 0);
class GetPostIdDTO {
}
exports.GetPostIdDTO = GetPostIdDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetPostIdDTO.prototype, "id", void 0);
class DeletePostIdDTO {
}
exports.DeletePostIdDTO = DeletePostIdDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DeletePostIdDTO.prototype, "id", void 0);
class UpdatePostDTO {
}
exports.UpdatePostDTO = UpdatePostDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdatePostDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdatePostDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdatePostDTO.prototype, "pic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdatePostDTO.prototype, "color", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], UpdatePostDTO.prototype, "isDeleted", void 0);


/***/ }),

/***/ "./src/post/post.controller.ts":
/*!*************************************!*\
  !*** ./src/post/post.controller.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const post_service_1 = __webpack_require__(/*! ./post.service */ "./src/post/post.service.ts");
const post_dto_1 = __webpack_require__(/*! ./dto/post.dto */ "./src/post/dto/post.dto.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const user_decorator_1 = __webpack_require__(/*! src/decorators/user.decorator */ "./src/decorators/user.decorator.ts");
let PostController = exports.PostController = class PostController {
    constructor(postService) {
        this.postService = postService;
    }
    createPost(createPostDTO) {
        return this.postService.createPost(createPostDTO);
    }
    getAllPosts(getAllPostsDTO, user) {
        return this.postService.getAllPosts(getAllPostsDTO);
    }
    getPostById(getPostIdDTO, user) {
        return this.postService.getPostById(getPostIdDTO);
    }
    deletePostById(getPostIdDTO, user) {
        return this.postService.deletePostById(getPostIdDTO);
    }
    updatePostById(updatePostDTO, user) {
        return this.postService.updatePostById(updatePostDTO.id, updatePostDTO);
    }
};
__decorate([
    (0, common_1.Post)('createPost'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof post_dto_1.CreatePostDTO !== "undefined" && post_dto_1.CreatePostDTO) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "createPost", null);
__decorate([
    (0, common_1.Get)('getAllPosts'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof post_dto_1.GetAllPostsDTO !== "undefined" && post_dto_1.GetAllPostsDTO) === "function" ? _c : Object, Object]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "getAllPosts", null);
__decorate([
    (0, common_1.Get)('getPostById'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof post_dto_1.GetPostIdDTO !== "undefined" && post_dto_1.GetPostIdDTO) === "function" ? _d : Object, Object]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "getPostById", null);
__decorate([
    (0, common_1.Post)('deletePostById'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof post_dto_1.DeletePostIdDTO !== "undefined" && post_dto_1.DeletePostIdDTO) === "function" ? _e : Object, Object]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "deletePostById", null);
__decorate([
    (0, common_1.Post)('updatePostById'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof post_dto_1.UpdatePostDTO !== "undefined" && post_dto_1.UpdatePostDTO) === "function" ? _f : Object, Object]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "updatePostById", null);
exports.PostController = PostController = __decorate([
    (0, swagger_1.ApiTags)('Post'),
    (0, common_1.Controller)('post'),
    __metadata("design:paramtypes", [typeof (_a = typeof post_service_1.PostService !== "undefined" && post_service_1.PostService) === "function" ? _a : Object])
], PostController);


/***/ }),

/***/ "./src/post/post.module.ts":
/*!*********************************!*\
  !*** ./src/post/post.module.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const post_schema_1 = __webpack_require__(/*! src/schema/post/post.schema */ "./src/schema/post/post.schema.ts");
const post_controller_1 = __webpack_require__(/*! ./post.controller */ "./src/post/post.controller.ts");
const post_service_1 = __webpack_require__(/*! ./post.service */ "./src/post/post.service.ts");
const user_schema_1 = __webpack_require__(/*! @app/chat/schemas/user.schema */ "./libs/chat/src/schemas/user.schema.ts");
let PostModule = exports.PostModule = class PostModule {
};
exports.PostModule = PostModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot("mongodb://127.0.0.1:27017/exampleChatNew"),
            mongoose_1.MongooseModule.forFeature([{
                    name: post_schema_1.Post.name,
                    schema: post_schema_1.PostSchema,
                },
                {
                    name: user_schema_1.UserData.name,
                    schema: user_schema_1.UserDataSchema,
                }
            ])
        ],
        controllers: [post_controller_1.PostController],
        providers: [post_service_1.PostService, post_schema_1.Post],
        exports: [post_service_1.PostService]
    })
], PostModule);


/***/ }),

/***/ "./src/post/post.service.ts":
/*!**********************************!*\
  !*** ./src/post/post.service.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const post_schema_1 = __webpack_require__(/*! src/schema/post/post.schema */ "./src/schema/post/post.schema.ts");
const user_schema_1 = __webpack_require__(/*! @app/chat/schemas/user.schema */ "./libs/chat/src/schemas/user.schema.ts");
let PostService = exports.PostService = class PostService {
    constructor(postModel, userModel) {
        this.postModel = postModel;
        this.userModel = userModel;
    }
    async createPost(createPostDTO) {
        try {
            let postDocument = await new this.postModel(createPostDTO).save();
            return postDocument;
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error?.message);
        }
    }
    async getAllPosts(getAllPostsDto) {
        try {
            console.log(getAllPostsDto.limit);
            console.log(getAllPostsDto.offset);
            let pagination = [];
            let postData = await this.postModel
                .find({ isDeleted: false, })
                .sort({ sort: 1 })
                .populate('name')
                .skip(parseInt(getAllPostsDto.offset))
                .limit(parseInt(getAllPostsDto.limit));
            let posts = await Promise.all(postData.map(async (postItem) => {
                let user = postItem.userId;
                console.log('user id=====>', user);
                let createdBy = await this.userModel.findOne({ userId: user }).select('name isOnline userId')
                    .exec();
                ;
                console.log('user id=====>console', createdBy);
                return {
                    post: postItem,
                    user: createdBy
                };
            }));
            return posts;
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error?.message);
        }
    }
    async getPostById(getPostIdDTO) {
        try {
            let postData = await this.postModel
                .find({ id: getPostIdDTO.id, }).exec();
            let postReturn = JSON.parse(JSON.stringify(postData[0]));
            return postReturn;
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error?.message);
        }
    }
    async deletePostById(deletePostIdDTO) {
        try {
            let postData = await this.postModel
                .deleteOne({ id: deletePostIdDTO.id, }).exec();
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error?.message);
        }
    }
    async updatePostById(postId, updatePostByDto) {
        try {
            console.log(postId);
            console.log("updated post ", updatePostByDto);
            const updatedPost = await this.postModel
                .updateOne({ id: postId }, { $set: updatePostByDto });
            console.log("updated post nnn ", updatedPost);
            return updatedPost;
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error?.message);
        }
    }
};
exports.PostService = PostService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(post_schema_1.Post.name)),
    __param(1, (0, mongoose_1.InjectModel)(user_schema_1.UserData.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _b : Object])
], PostService);


/***/ }),

/***/ "./src/schema/comments/comments.schema.ts":
/*!************************************************!*\
  !*** ./src/schema/comments/comments.schema.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommentsSchema = exports.Comments = void 0;
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const utils_1 = __webpack_require__(/*! src/utils/utils */ "./src/utils/utils.ts");
let Comments = exports.Comments = class Comments {
};
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: utils_1.generateStringId }),
    __metadata("design:type", String)
], Comments.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Comments.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Comments.prototype, "postId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Comments.prototype, "text", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], Comments.prototype, "isDeleted", void 0);
exports.Comments = Comments = __decorate([
    (0, mongoose_1.Schema)()
], Comments);
exports.CommentsSchema = mongoose_1.SchemaFactory.createForClass(Comments);
exports.CommentsSchema.set('timestamps', true);
exports.CommentsSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    },
});


/***/ }),

/***/ "./src/schema/order/order.schema.ts":
/*!******************************************!*\
  !*** ./src/schema/order/order.schema.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderSchema = exports.Order = void 0;
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const utils_1 = __webpack_require__(/*! src/utils/utils */ "./src/utils/utils.ts");
let Order = exports.Order = class Order {
};
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: utils_1.generateStringId }),
    __metadata("design:type", String)
], Order.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Order.prototype, "deliveryType", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Order.prototype, "flightType", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Order.prototype, "flightNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Order.prototype, "airlineName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Order.prototype, "departureCountry", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Order.prototype, "departureCity", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Order.prototype, "departureAirport", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Order.prototype, "departureDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Order.prototype, "departureTime", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Order.prototype, "ticketImage", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Order.prototype, "arrivalCountry", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Order.prototype, "arrivalCity", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Order.prototype, "arrivalAirport", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Order.prototype, "arrivalDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Order.prototype, "arrivalTime", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: '' }),
    __metadata("design:type", Number)
], Order.prototype, "luggageWeight", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], Order.prototype, "isDropPackage", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], Order.prototype, "isPickupPackage", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], Order.prototype, "isDeleted", void 0);
exports.Order = Order = __decorate([
    (0, mongoose_1.Schema)()
], Order);
exports.OrderSchema = mongoose_1.SchemaFactory.createForClass(Order);
exports.OrderSchema.set('timestamps', true);
exports.OrderSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    },
});


/***/ }),

/***/ "./src/schema/otp/otp.schema.ts":
/*!**************************************!*\
  !*** ./src/schema/otp/otp.schema.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OtpSchema = void 0;
const mongoose_1 = __webpack_require__(/*! mongoose */ "mongoose");
const utils_1 = __webpack_require__(/*! src/utils/utils */ "./src/utils/utils.ts");
exports.OtpSchema = new mongoose_1.Schema({
    _id: { type: String, default: utils_1.generateStringId },
    otp: { type: String, default: '' },
    type: { type: String, default: '' },
    userID: { type: String, default: '' },
    expiryTime: { type: Number, default: 0 },
    isUsed: { type: Boolean, default: false },
}, {
    collection: 'otp',
});
(0, mongoose_1.model)('otp', exports.OtpSchema);
exports.OtpSchema.set('timestamps', true);
exports.OtpSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    },
});


/***/ }),

/***/ "./src/schema/post/post.schema.ts":
/*!****************************************!*\
  !*** ./src/schema/post/post.schema.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostSchema = exports.Post = void 0;
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const utils_1 = __webpack_require__(/*! src/utils/utils */ "./src/utils/utils.ts");
let Post = exports.Post = class Post {
};
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: utils_1.generateStringId }),
    __metadata("design:type", String)
], Post.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Post.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Post.prototype, "pic", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Post.prototype, "color", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Post.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], Post.prototype, "isEmailVerified", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], Post.prototype, "isDeleted", void 0);
exports.Post = Post = __decorate([
    (0, mongoose_1.Schema)()
], Post);
exports.PostSchema = mongoose_1.SchemaFactory.createForClass(Post);
exports.PostSchema.set('timestamps', true);
exports.PostSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    },
});


/***/ }),

/***/ "./src/schema/user/user.schema.ts":
/*!****************************************!*\
  !*** ./src/schema/user/user.schema.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = exports.UserSchema = void 0;
const mongoose_1 = __webpack_require__(/*! mongoose */ "mongoose");
const utils_1 = __webpack_require__(/*! src/utils/utils */ "./src/utils/utils.ts");
var bcrypt = __webpack_require__(/*! bcryptjs */ "bcryptjs");
const user_interface_1 = __webpack_require__(/*! src/interface/user/user.interface */ "./src/interface/user/user.interface.ts");
Object.defineProperty(exports, "User", ({ enumerable: true, get: function () { return user_interface_1.User; } }));
exports.UserSchema = new mongoose_1.Schema({
    _id: { type: String, default: utils_1.generateStringId },
    email: { type: String, default: '' },
    password: { type: String, default: '' },
    name: { type: String, default: '' },
    pic: { type: String, default: '' },
    color: { type: String, default: '' },
    isEmailVerified: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
}, {
    collection: 'users',
});
(0, mongoose_1.model)('users', exports.UserSchema);
exports.UserSchema.set('timestamps', true);
exports.UserSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    },
});
exports.UserSchema.index({ email: 1 });
exports.UserSchema.index({ fullname: 1 });
exports.UserSchema.index({ email: 1, publicKey: 1 });
exports.UserSchema.index({ publicKey: 1 });
exports.UserSchema.pre('save', async function (next) {
    try {
        if (this.password && this.isModified('password')) {
            const saltRounds = 10;
            this.password = await bcrypt.hash(this.password, saltRounds);
        }
        next();
    }
    catch (err) {
        next();
    }
});
exports.UserSchema.pre('updateOne', async function (next) {
    try {
        if (this._update.password) {
            const saltRounds = 10;
            this._update.password = await bcrypt.hash(this._update.password, saltRounds);
        }
        next();
    }
    catch (err) {
        next();
    }
});


/***/ }),

/***/ "./src/schema/village/village.schema.ts":
/*!**********************************************!*\
  !*** ./src/schema/village/village.schema.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VillageSchema = exports.Village = exports.VillageStatus = void 0;
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const utils_1 = __webpack_require__(/*! src/utils/utils */ "./src/utils/utils.ts");
var VillageStatus;
(function (VillageStatus) {
    VillageStatus["ACTIVE"] = "active";
    VillageStatus["INACTIVE"] = "inactive";
})(VillageStatus || (exports.VillageStatus = VillageStatus = {}));
let Village = exports.Village = class Village {
};
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: utils_1.generateStringId }),
    __metadata("design:type", String)
], Village.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, unique: true }),
    __metadata("design:type", String)
], Village.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Village.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: VillageStatus,
        default: VillageStatus.ACTIVE
    }),
    __metadata("design:type", String)
], Village.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, default: Date.now }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Village.prototype, "createdAt", void 0);
exports.Village = Village = __decorate([
    (0, mongoose_1.Schema)()
], Village);
exports.VillageSchema = mongoose_1.SchemaFactory.createForClass(Village);
exports.VillageSchema.set('timestamps', true);
exports.VillageSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    },
});
exports.VillageSchema.index({ name: 1 }, { unique: true });


/***/ }),

/***/ "./src/utils/utils.service.ts":
/*!************************************!*\
  !*** ./src/utils/utils.service.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UtilsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const Mailgun = __webpack_require__(/*! mailgun.js */ "mailgun.js");
const formData = __webpack_require__(/*! form-data */ "form-data");
const Mailjet = __webpack_require__(/*! node-mailjet */ "node-mailjet");
let UtilsService = exports.UtilsService = class UtilsService {
    constructor() {
        this.mailjet = new Mailjet({
            apiKey: process.env.MAILJET_API_KEY,
            apiSecret: process.env.MAILJET_API_SECRET,
        });
    }
    async sendEmail(emailDto) {
        try {
            debugger;
            const request = await this.mailjet.post('send', { version: 'v3.1' }).request({
                Messages: [
                    {
                        From: {
                            Email: process.env.MAILJET_EMAIL,
                            Name: process.env.MAILJET_NAME,
                        },
                        To: [
                            {
                                Email: emailDto.to,
                                Name: "Blockyfy",
                            },
                        ],
                        Subject: emailDto.subject,
                        TextPart: emailDto.text,
                        HTMLPart: emailDto.html,
                    }
                ]
            });
            return request.body;
        }
        catch (err) {
            console.log(err);
            throw new Error(err?.message);
        }
    }
};
exports.UtilsService = UtilsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], UtilsService);


/***/ }),

/***/ "./src/utils/utils.ts":
/*!****************************!*\
  !*** ./src/utils/utils.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generateStringId = void 0;
const mongoose_1 = __webpack_require__(/*! mongoose */ "mongoose");
const generateStringId = () => {
    return new mongoose_1.Types.ObjectId().toHexString();
};
exports.generateStringId = generateStringId;


/***/ }),

/***/ "./src/village/dto/village.dto.ts":
/*!****************************************!*\
  !*** ./src/village/dto/village.dto.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteVillageResponseDto = exports.UpdateVillageDto = exports.VillageResponseDto = exports.GetVillagesQueryDto = exports.CreateVillageDto = exports.VillageStatus = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
var VillageStatus;
(function (VillageStatus) {
    VillageStatus["ACTIVE"] = "active";
    VillageStatus["INACTIVE"] = "inactive";
})(VillageStatus || (exports.VillageStatus = VillageStatus = {}));
class CreateVillageDto {
}
exports.CreateVillageDto = CreateVillageDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Name of the village',
        example: 'Green Valley',
        type: String
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateVillageDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Description of the village',
        example: 'A peaceful village surrounded by mountains',
        type: String
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateVillageDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Status of the village',
        enum: VillageStatus,
        default: VillageStatus.ACTIVE,
        example: VillageStatus.ACTIVE
    }),
    (0, class_validator_1.IsEnum)(VillageStatus),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateVillageDto.prototype, "status", void 0);
class GetVillagesQueryDto {
}
exports.GetVillagesQueryDto = GetVillagesQueryDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Filter villages by status',
        enum: VillageStatus,
        example: VillageStatus.ACTIVE
    }),
    (0, class_validator_1.IsEnum)(VillageStatus),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => value?.toLowerCase()),
    __metadata("design:type", String)
], GetVillagesQueryDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Search villages by name (case-insensitive partial match)',
        example: 'green',
        type: String
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => value?.trim()),
    __metadata("design:type", String)
], GetVillagesQueryDto.prototype, "search", void 0);
class VillageResponseDto {
}
exports.VillageResponseDto = VillageResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Village unique identifier' }),
    __metadata("design:type", String)
], VillageResponseDto.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Name of the village' }),
    __metadata("design:type", String)
], VillageResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Description of the village' }),
    __metadata("design:type", String)
], VillageResponseDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Status of the village', enum: VillageStatus }),
    __metadata("design:type", String)
], VillageResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation date' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], VillageResponseDto.prototype, "createdAt", void 0);
class UpdateVillageDto {
}
exports.UpdateVillageDto = UpdateVillageDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Name of the village',
        example: 'Updated Village Name',
        type: String
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateVillageDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Description of the village',
        example: 'Updated description of the village',
        type: String
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateVillageDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Status of the village',
        enum: VillageStatus,
        example: VillageStatus.ACTIVE
    }),
    (0, class_validator_1.IsEnum)(VillageStatus),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateVillageDto.prototype, "status", void 0);
class DeleteVillageResponseDto {
}
exports.DeleteVillageResponseDto = DeleteVillageResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Indicates if the operation was successful',
        example: true
    }),
    __metadata("design:type", Boolean)
], DeleteVillageResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Success message',
        example: 'Village deleted successfully'
    }),
    __metadata("design:type", String)
], DeleteVillageResponseDto.prototype, "message", void 0);


/***/ }),

/***/ "./src/village/village.controller.ts":
/*!*******************************************!*\
  !*** ./src/village/village.controller.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VillageController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const village_service_1 = __webpack_require__(/*! ./village.service */ "./src/village/village.service.ts");
const village_dto_1 = __webpack_require__(/*! ./dto/village.dto */ "./src/village/dto/village.dto.ts");
let VillageController = exports.VillageController = class VillageController {
    constructor(villageService) {
        this.villageService = villageService;
    }
    async createVillage(createVillageDto) {
        return await this.villageService.createVillage(createVillageDto);
    }
    async getAllVillages(queryDto) {
        return await this.villageService.findAll(queryDto);
    }
    async getVillageById(id) {
        return await this.villageService.findOne(id);
    }
    async updateVillage(id, updateVillageDto) {
        return await this.villageService.updateVillage(id, updateVillageDto);
    }
    async deleteVillage(id) {
        return await this.villageService.deleteVillage(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({
        summary: 'Create a new village',
        description: 'Creates a new village with the provided information'
    }),
    (0, swagger_1.ApiBody)({
        type: village_dto_1.CreateVillageDto,
        description: 'Village data to create'
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Village successfully created',
        type: village_dto_1.VillageResponseDto
    }),
    (0, swagger_1.ApiResponse)({
        status: 409,
        description: 'Village with this name already exists'
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Invalid input data'
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof village_dto_1.CreateVillageDto !== "undefined" && village_dto_1.CreateVillageDto) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], VillageController.prototype, "createVillage", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Get villages with optional filters',
        description: 'Retrieves villages from the database with optional filtering by status and search by name'
    }),
    (0, swagger_1.ApiQuery)({
        name: 'status',
        required: false,
        enum: ['active', 'inactive'],
        description: 'Filter villages by status'
    }),
    (0, swagger_1.ApiQuery)({
        name: 'search',
        required: false,
        type: String,
        description: 'Search villages by name (case-insensitive partial match)'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of villages matching the criteria',
        type: [village_dto_1.VillageResponseDto]
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof village_dto_1.GetVillagesQueryDto !== "undefined" && village_dto_1.GetVillagesQueryDto) === "function" ? _d : Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], VillageController.prototype, "getAllVillages", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get village by ID',
        description: 'Retrieves a specific village by its ID'
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Village ID',
        type: String
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Village found',
        type: village_dto_1.VillageResponseDto
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Village not found'
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], VillageController.prototype, "getVillageById", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Update village by ID',
        description: 'Updates a specific village with the provided information'
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Village ID',
        type: String
    }),
    (0, swagger_1.ApiBody)({
        type: village_dto_1.UpdateVillageDto,
        description: 'Village data to update (only provided fields will be updated)'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Village successfully updated',
        type: village_dto_1.VillageResponseDto
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Village not found'
    }),
    (0, swagger_1.ApiResponse)({
        status: 409,
        description: 'Village with this name already exists'
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Invalid input data'
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_g = typeof village_dto_1.UpdateVillageDto !== "undefined" && village_dto_1.UpdateVillageDto) === "function" ? _g : Object]),
    __metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], VillageController.prototype, "updateVillage", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Delete village by ID',
        description: 'Deletes a specific village by its ID'
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Village ID',
        type: String
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Village successfully deleted',
        type: village_dto_1.DeleteVillageResponseDto
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Village not found'
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], VillageController.prototype, "deleteVillage", null);
exports.VillageController = VillageController = __decorate([
    (0, swagger_1.ApiTags)('Villages'),
    (0, common_1.Controller)('villages'),
    __metadata("design:paramtypes", [typeof (_a = typeof village_service_1.VillageService !== "undefined" && village_service_1.VillageService) === "function" ? _a : Object])
], VillageController);


/***/ }),

/***/ "./src/village/village.module.ts":
/*!***************************************!*\
  !*** ./src/village/village.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VillageModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const village_controller_1 = __webpack_require__(/*! ./village.controller */ "./src/village/village.controller.ts");
const village_service_1 = __webpack_require__(/*! ./village.service */ "./src/village/village.service.ts");
const village_schema_1 = __webpack_require__(/*! ../schema/village/village.schema */ "./src/schema/village/village.schema.ts");
let VillageModule = exports.VillageModule = class VillageModule {
};
exports.VillageModule = VillageModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: village_schema_1.Village.name,
                    schema: village_schema_1.VillageSchema
                }
            ])
        ],
        controllers: [village_controller_1.VillageController],
        providers: [village_service_1.VillageService],
        exports: [village_service_1.VillageService]
    })
], VillageModule);


/***/ }),

/***/ "./src/village/village.service.ts":
/*!****************************************!*\
  !*** ./src/village/village.service.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VillageService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const village_schema_1 = __webpack_require__(/*! ../schema/village/village.schema */ "./src/schema/village/village.schema.ts");
let VillageService = exports.VillageService = class VillageService {
    constructor(villageModel) {
        this.villageModel = villageModel;
    }
    async createVillage(createVillageDto) {
        try {
            const villageData = {
                ...createVillageDto,
                status: createVillageDto.status || village_schema_1.VillageStatus.ACTIVE,
                createdAt: new Date(),
            };
            const createdVillage = new this.villageModel(villageData);
            return await createdVillage.save();
        }
        catch (error) {
            if (error.code === 11000 && error.keyPattern?.name) {
                throw new common_1.ConflictException(`Village with name '${createVillageDto.name}' already exists`);
            }
            throw error;
        }
    }
    async findAll(queryDto) {
        const filter = {};
        if (queryDto?.status) {
            filter.status = queryDto.status;
        }
        if (queryDto?.search) {
            filter.name = { $regex: queryDto.search, $options: 'i' };
        }
        return this.villageModel
            .find(filter)
            .select('_id name description status createdAt')
            .sort({ createdAt: -1 })
            .exec();
    }
    async findOne(id) {
        return this.villageModel.findById(id).exec();
    }
    async findByName(name) {
        return this.villageModel.findOne({ name }).exec();
    }
    async updateVillage(id, updateVillageDto) {
        try {
            const existingVillage = await this.villageModel.findById(id).exec();
            if (!existingVillage) {
                throw new common_1.NotFoundException(`Village with ID '${id}' not found`);
            }
            const updateData = {};
            if (updateVillageDto.name !== undefined)
                updateData.name = updateVillageDto.name;
            if (updateVillageDto.description !== undefined)
                updateData.description = updateVillageDto.description;
            if (updateVillageDto.status !== undefined)
                updateData.status = updateVillageDto.status;
            const updatedVillage = await this.villageModel
                .findByIdAndUpdate(id, updateData, { new: true, runValidators: true })
                .exec();
            if (!updatedVillage) {
                throw new common_1.NotFoundException(`Village with ID '${id}' not found`);
            }
            return updatedVillage;
        }
        catch (error) {
            if (error.code === 11000 && error.keyPattern?.name) {
                throw new common_1.ConflictException(`Village with name '${updateVillageDto.name}' already exists`);
            }
            if (error instanceof common_1.NotFoundException || error instanceof common_1.ConflictException) {
                throw error;
            }
            throw error;
        }
    }
    async deleteVillage(id) {
        const existingVillage = await this.villageModel.findById(id).exec();
        if (!existingVillage) {
            throw new common_1.NotFoundException(`Village with ID '${id}' not found`);
        }
        const result = await this.villageModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new common_1.NotFoundException(`Village with ID '${id}' not found`);
        }
        return {
            success: true,
            message: 'Village deleted successfully'
        };
    }
};
exports.VillageService = VillageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(village_schema_1.Village.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], VillageService);


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/jwt/dist":
/*!***********************************!*\
  !*** external "@nestjs/jwt/dist" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/jwt/dist");

/***/ }),

/***/ "@nestjs/mongoose":
/*!***********************************!*\
  !*** external "@nestjs/mongoose" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),

/***/ "@nestjs/passport":
/*!***********************************!*\
  !*** external "@nestjs/passport" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "@nestjs/platform-express":
/*!*******************************************!*\
  !*** external "@nestjs/platform-express" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@nestjs/platform-express");

/***/ }),

/***/ "@nestjs/swagger":
/*!**********************************!*\
  !*** external "@nestjs/swagger" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),

/***/ "@nestjs/websockets":
/*!*************************************!*\
  !*** external "@nestjs/websockets" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@nestjs/websockets");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "class-transformer":
/*!************************************!*\
  !*** external "class-transformer" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "firebase-admin":
/*!*********************************!*\
  !*** external "firebase-admin" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("firebase-admin");

/***/ }),

/***/ "form-data":
/*!****************************!*\
  !*** external "form-data" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("form-data");

/***/ }),

/***/ "jimp":
/*!***********************!*\
  !*** external "jimp" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("jimp");

/***/ }),

/***/ "mailgun.js":
/*!*****************************!*\
  !*** external "mailgun.js" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("mailgun.js");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("multer");

/***/ }),

/***/ "node-cron":
/*!****************************!*\
  !*** external "node-cron" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node-cron");

/***/ }),

/***/ "node-mailjet":
/*!*******************************!*\
  !*** external "node-mailjet" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("node-mailjet");

/***/ }),

/***/ "otp-generator":
/*!********************************!*\
  !*** external "otp-generator" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("otp-generator");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("socket.io");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./src/app.module.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Shop app')
        .setDescription('Shop App APIs')
        .setVersion('1.0')
        .addBearerAuth()
        .addTag('apis')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('swagger', app, document);
    const port = process.env.PORT || 3101;
    await app.listen(port);
    console.log(`API is running on port ${port}`);
}
bootstrap();

})();

/******/ })()
;