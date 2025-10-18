import { Injectable, NotFoundException, BadRequestException, ConflictException, Inject, forwardRef } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ChatRoom, ChatRoomSchema } from '../schema/chat/chat-room.schema';
import { Message, MessageSchema } from '../schema/chat/message.schema';
import { User } from '../schema/user/user.schema';
import { Shop } from '../schema/shop/shop.schema';
import { CreateChatRoomDto } from './dto/create-chat-room.dto';
import { SendMessageDto } from './dto/send-message.dto';
import { ChatRoomWithDetails, MessageWithDetails } from '../interface/chat/chat.interface';
import { ChatGateway } from './chat.gateway';

@Injectable()
export class ChatService {
  constructor(
    @InjectModel('ChatRoom') private chatRoomModel: Model<ChatRoom>,
    @InjectModel('Message') private messageModel: Model<Message>,
    @InjectModel('User') private userModel: Model<User>,
    @InjectModel('Shop') private shopModel: Model<Shop>,
    @Inject(forwardRef(() => ChatGateway)) private chatGateway: ChatGateway,
  ) {}

  /**
   * Create a new chat room between buyer and seller
   */
  async createChatRoom(createChatRoomDto: CreateChatRoomDto): Promise<{ success: boolean; chatRoomId: string; message: string }> {
    const { buyerId, sellerId, shopId } = createChatRoomDto;

    // Validate that buyer and seller are different users
    if (buyerId === sellerId) {
      throw new BadRequestException('Buyer and seller cannot be the same user');
    }

    // Check if chat room already exists
    const existingChatRoom = await this.chatRoomModel.findOne({
      buyerId,
      sellerId,
      shopId,
      isActive: true
    });

    if (existingChatRoom) {
      return {
        success: true,
        chatRoomId: existingChatRoom._id,
        message: 'Chat room already exists'
      };
    }

    // Validate that users and shop exist
    const [buyer, seller, shop] = await Promise.all([
      this.userModel.findById(buyerId),
      this.userModel.findById(sellerId),
      this.shopModel.findById(shopId)
    ]);

    if (!buyer) {
      throw new NotFoundException('Buyer not found');
    }
    if (!seller) {
      throw new NotFoundException('Seller not found');
    }
    if (!shop) {
      throw new NotFoundException('Shop not found');
    }

    // Validate that seller owns the shop
    if (shop.ownerId !== sellerId) {
      throw new BadRequestException('Seller does not own this shop');
    }

    // Create new chat room
    const newChatRoom = new this.chatRoomModel({
      buyerId,
      sellerId,
      shopId,
      participants: [buyerId, sellerId],
      unreadCount: {
        buyer: 0,
        seller: 0
      },
      isActive: true
    });

    const savedChatRoom = await newChatRoom.save();

    return {
      success: true,
      chatRoomId: savedChatRoom._id,
      message: 'Chat room created successfully'
    };
  }

  /**
   * Get all chat rooms for a user (as buyer or seller)
   */
  async getChatRooms(userId: string): Promise<ChatRoomWithDetails[]> {
    const chatRooms = await this.chatRoomModel
      .find({
        $or: [{ buyerId: userId }, { sellerId: userId }],
        isActive: true
      })
      .populate('buyerId', 'name fullName profilePic')
      .populate('sellerId', 'name fullName profilePic')
      .populate('shopId', 'shopName profileImage')
      .sort({ updatedAt: -1 })
      .exec();

    return chatRooms.map(room => {
      const roomObj = room.toObject();
      return {
        _id: roomObj._id,
        buyerId: roomObj.buyerId,
        sellerId: roomObj.sellerId,
        shopId: roomObj.shopId,
        lastMessage: roomObj.lastMessage,
        unreadCount: roomObj.unreadCount,
        isActive: roomObj.isActive,
        participants: roomObj.participants,
        createdAt: roomObj.createdAt,
        updatedAt: roomObj.updatedAt,
        buyer: roomObj.buyerId,
        seller: roomObj.sellerId,
        shop: roomObj.shopId
      } as unknown as ChatRoomWithDetails;
    });
  }

  /**
   * Get or create chat room for buyer and seller
   */
  async getOrCreateChatRoom(buyerId: string, sellerId: string, shopId: string): Promise<string> {
    const createDto: CreateChatRoomDto = { buyerId, sellerId, shopId };
    const result = await this.createChatRoom(createDto);
    return result.chatRoomId;
  }

  /**
   * Send a message
   */
  async sendMessage(sendMessageDto: SendMessageDto): Promise<{ success: boolean; messageId: string; message: string }> {
    const { chatRoomId, senderId, receiverId, messageType, messageContent, mediaUrl, replyTo, metadata } = sendMessageDto;

    // Validate chat room exists and user is participant
    const chatRoom = await this.chatRoomModel.findById(chatRoomId);
    if (!chatRoom) {
      throw new NotFoundException('Chat room not found');
    }

    if (!chatRoom.participants.includes(senderId)) {
      throw new BadRequestException('User is not a participant in this chat room');
    }

    // Validate receiver is in the chat room
    if (!chatRoom.participants.includes(receiverId)) {
      throw new BadRequestException('Receiver is not a participant in this chat room');
    }

    // Create new message
    const newMessage = new this.messageModel({
      chatRoomId,
      senderId,
      receiverId,
      messageType,
      messageContent,
      mediaUrl,
      replyTo,
      metadata,
      isRead: false
    });

    const savedMessage = await newMessage.save();

    // Update chat room's last message and unread count
    const isFromBuyer = chatRoom.buyerId === senderId;
    await this.chatRoomModel.findByIdAndUpdate(chatRoomId, {
      lastMessage: {
        content: messageContent,
        messageType,
        senderId,
        timestamp: new Date()
      },
      $inc: {
        [`unreadCount.${isFromBuyer ? 'seller' : 'buyer'}`]: 1
      }
    });

    // Emit WebSocket events for real-time updates
    try {
      // Emit new message to all participants in the chat room
      await this.chatGateway.emitNewMessage(chatRoomId, {
        _id: savedMessage._id,
        chatRoomId: savedMessage.chatRoomId,
        senderId: savedMessage.senderId,
        receiverId: savedMessage.receiverId,
        messageType: savedMessage.messageType,
        messageContent: savedMessage.messageContent,
        mediaUrl: savedMessage.mediaUrl,
        isRead: savedMessage.isRead,
        createdAt: savedMessage.createdAt,
        updatedAt: savedMessage.updatedAt,
      });

      // Emit chat room update to both participants
      await this.chatGateway.emitChatRoomUpdate(senderId, { chatRoomId, action: 'message_sent' });
      await this.chatGateway.emitChatRoomUpdate(receiverId, { chatRoomId, action: 'message_received' });

      // Emit unread count update to receiver
      const updatedChatRoom = await this.chatRoomModel.findById(chatRoomId);
      if (updatedChatRoom) {
        const receiverUnreadCount = isFromBuyer ? updatedChatRoom.unreadCount.seller : updatedChatRoom.unreadCount.buyer;
        await this.chatGateway.emitUnreadCountUpdate(receiverId, receiverUnreadCount);
      }
    } catch (error) {
      console.error('Error emitting WebSocket events:', error);
      // Don't fail the message sending if WebSocket emission fails
    }

    return {
      success: true,
      messageId: savedMessage._id,
      message: 'Message sent successfully'
    };
  }

  /**
   * Get all messages in a chat room
   */
  async getMessages(chatRoomId: string, userId: string): Promise<MessageWithDetails[]> {
    // Validate chat room exists and user is participant
    const chatRoom = await this.chatRoomModel.findById(chatRoomId);
    if (!chatRoom) {
      throw new NotFoundException('Chat room not found');
    }

    if (!chatRoom.participants.includes(userId)) {
      throw new BadRequestException('User is not a participant in this chat room');
    }

    const messages = await this.messageModel
      .find({
        chatRoomId,
        isDeleted: false
      })
      .populate('senderId', 'name fullName profilePic')
      .populate('receiverId', 'name fullName profilePic')
      .sort({ createdAt: -1 })
      .exec();

    return messages.map(msg => {
      const msgObj = msg.toObject();
      return {
        _id: msgObj._id,
        chatRoomId: msgObj.chatRoomId,
        senderId: msgObj.senderId,
        receiverId: msgObj.receiverId,
        messageType: msgObj.messageType,
        messageContent: msgObj.messageContent,
        mediaUrl: msgObj.mediaUrl,
        isRead: msgObj.isRead,
        readAt: msgObj.readAt,
        isDeleted: msgObj.isDeleted,
        deletedAt: msgObj.deletedAt,
        replyTo: msgObj.replyTo,
        metadata: msgObj.metadata,
        createdAt: msgObj.createdAt,
        updatedAt: msgObj.updatedAt,
        sender: msgObj.senderId,
        receiver: msgObj.receiverId
      } as unknown as MessageWithDetails;
    });
  }

  /**
   * Mark messages as read
   */
  async markMessagesAsRead(chatRoomId: string, userId: string): Promise<{ success: boolean; message: string }> {
    // Validate chat room exists and user is participant
    const chatRoom = await this.chatRoomModel.findById(chatRoomId);
    if (!chatRoom) {
      throw new NotFoundException('Chat room not found');
    }

    if (!chatRoom.participants.includes(userId)) {
      throw new BadRequestException('User is not a participant in this chat room');
    }

    // Mark all unread messages as read
    await this.messageModel.updateMany(
      {
        chatRoomId,
        receiverId: userId,
        isRead: false
      },
      {
        isRead: true,
        readAt: new Date()
      }
    );

    // Reset unread count for the user
    const isBuyer = chatRoom.buyerId === userId;
    await this.chatRoomModel.findByIdAndUpdate(chatRoomId, {
      [`unreadCount.${isBuyer ? 'buyer' : 'seller'}`]: 0
    });

    // Emit WebSocket events for real-time updates
    try {
      // Emit chat room update to the user who marked messages as read
      await this.chatGateway.emitChatRoomUpdate(userId, { chatRoomId, action: 'messages_read' });
      
      // Emit unread count update (should be 0 for this user)
      await this.chatGateway.emitUnreadCountUpdate(userId, 0);
    } catch (error) {
      console.error('Error emitting WebSocket events for mark as read:', error);
      // Don't fail the operation if WebSocket emission fails
    }

    return {
      success: true,
      message: 'Messages marked as read'
    };
  }

  /**
   * Delete a message
   */
  async deleteMessage(messageId: string, userId: string): Promise<{ success: boolean; message: string }> {
    const message = await this.messageModel.findById(messageId);
    if (!message) {
      throw new NotFoundException('Message not found');
    }

    if (message.senderId !== userId) {
      throw new BadRequestException('You can only delete your own messages');
    }

    await this.messageModel.findByIdAndUpdate(messageId, {
      isDeleted: true,
      deletedAt: new Date()
    });

    return {
      success: true,
      message: 'Message deleted successfully'
    };
  }

  /**
   * Get unread message count for a user
   */
  async getUnreadCount(userId: string): Promise<number> {
    const chatRooms = await this.chatRoomModel.find({
      $or: [{ buyerId: userId }, { sellerId: userId }],
      isActive: true
    });

    let totalUnread = 0;
    for (const room of chatRooms) {
      const isBuyer = room.buyerId === userId;
      totalUnread += isBuyer ? room.unreadCount.buyer : room.unreadCount.seller;
    }

    return totalUnread;
  }

  /**
   * Deactivate a chat room
   */
  async deactivateChatRoom(chatRoomId: string, userId: string): Promise<{ success: boolean; message: string }> {
    const chatRoom = await this.chatRoomModel.findById(chatRoomId);
    if (!chatRoom) {
      throw new NotFoundException('Chat room not found');
    }

    if (!chatRoom.participants.includes(userId)) {
      throw new BadRequestException('User is not a participant in this chat room');
    }

    await this.chatRoomModel.findByIdAndUpdate(chatRoomId, {
      isActive: false
    });

    return {
      success: true,
      message: 'Chat room deactivated'
    };
  }
}
