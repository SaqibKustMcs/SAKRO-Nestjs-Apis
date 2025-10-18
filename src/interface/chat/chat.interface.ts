import { Document } from 'mongoose';

export interface ChatRoom extends Document {
  _id: string;
  buyerId: string;
  sellerId: string;
  shopId: string;
  lastMessage: {
    content: string;
    messageType: 'text' | 'image' | 'video' | 'file' | 'voice';
    senderId: string;
    timestamp: Date;
  };
  unreadCount: {
    buyer: number;
    seller: number;
  };
  isActive: boolean;
  participants: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Message extends Document {
  _id: string;
  chatRoomId: string;
  senderId: string;
  receiverId: string;
  messageType: 'text' | 'image' | 'video' | 'file' | 'voice';
  messageContent: string;
  mediaUrl?: string;
  isRead: boolean;
  readAt?: Date;
  isDeleted: boolean;
  deletedAt?: Date;
  replyTo?: string;
  metadata: {
    fileName?: string;
    fileSize?: number;
    duration?: number;
    thumbnail?: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface ChatRoomWithDetails {
  _id: string;
  buyerId: string;
  sellerId: string;
  shopId: string;
  lastMessage: {
    content: string;
    messageType: 'text' | 'image' | 'video' | 'file' | 'voice';
    senderId: string;
    timestamp: Date;
  };
  unreadCount: {
    buyer: number;
    seller: number;
  };
  isActive: boolean;
  participants: string[];
  createdAt: Date;
  updatedAt: Date;
  buyer: {
    _id: string;
    name: string;
    fullName: string;
    profilePic: string;
  };
  seller: {
    _id: string;
    name: string;
    fullName: string;
    profilePic: string;
  };
  shop: {
    _id: string;
    shopName: string;
    profileImage: string;
  };
}

export interface MessageWithDetails {
  _id: string;
  chatRoomId: string;
  senderId: string;
  receiverId: string;
  messageType: 'text' | 'image' | 'video' | 'file' | 'voice';
  messageContent: string;
  mediaUrl?: string;
  isRead: boolean;
  readAt?: Date;
  isDeleted: boolean;
  deletedAt?: Date;
  replyTo?: string;
  metadata: {
    fileName?: string;
    fileSize?: number;
    duration?: number;
    thumbnail?: string;
  };
  createdAt: Date;
  updatedAt: Date;
  sender: {
    _id: string;
    name: string;
    fullName: string;
    profilePic: string;
  };
  receiver: {
    _id: string;
    name: string;
    fullName: string;
    profilePic: string;
  };
}
