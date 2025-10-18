import { ApiProperty } from '@nestjs/swagger';

export class ChatRoomResponseDto {
  @ApiProperty({ description: 'Chat room ID' })
  _id: string;

  @ApiProperty({ description: 'Buyer information' })
  buyer: {
    _id: string;
    name: string;
    fullName: string;
    profilePic: string;
  };

  @ApiProperty({ description: 'Seller information' })
  seller: {
    _id: string;
    name: string;
    fullName: string;
    profilePic: string;
  };

  @ApiProperty({ description: 'Shop information' })
  shop: {
    _id: string;
    shopName: string;
    profileImage: string;
  };

  @ApiProperty({ description: 'Last message details' })
  lastMessage: {
    content: string;
    messageType: string;
    senderId: string;
    timestamp: Date;
  };

  @ApiProperty({ description: 'Unread message counts' })
  unreadCount: {
    buyer: number;
    seller: number;
  };

  @ApiProperty({ description: 'Chat room status' })
  isActive: boolean;

  @ApiProperty({ description: 'Creation timestamp' })
  createdAt: Date;

  @ApiProperty({ description: 'Last update timestamp' })
  updatedAt: Date;
}

export class MessageResponseDto {
  @ApiProperty({ description: 'Message ID' })
  _id: string;

  @ApiProperty({ description: 'Chat room ID' })
  chatRoomId: string;

  @ApiProperty({ description: 'Sender information' })
  sender: {
    _id: string;
    name: string;
    fullName: string;
    profilePic: string;
  };

  @ApiProperty({ description: 'Receiver information' })
  receiver: {
    _id: string;
    name: string;
    fullName: string;
    profilePic: string;
  };

  @ApiProperty({ description: 'Message type' })
  messageType: string;

  @ApiProperty({ description: 'Message content' })
  messageContent: string;

  @ApiProperty({ description: 'Media URL', required: false })
  mediaUrl?: string;

  @ApiProperty({ description: 'Read status' })
  isRead: boolean;

  @ApiProperty({ description: 'Read timestamp', required: false })
  readAt?: Date;

  @ApiProperty({ description: 'Reply to message ID', required: false })
  replyTo?: string;

  @ApiProperty({ description: 'Message metadata', required: false })
  metadata?: {
    fileName?: string;
    fileSize?: number;
    duration?: number;
    thumbnail?: string;
  };

  @ApiProperty({ description: 'Creation timestamp' })
  createdAt: Date;

  @ApiProperty({ description: 'Last update timestamp' })
  updatedAt: Date;
}

export class CreateChatRoomResponseDto {
  @ApiProperty({ description: 'Success status' })
  success: boolean;

  @ApiProperty({ description: 'Chat room ID' })
  chatRoomId: string;

  @ApiProperty({ description: 'Message' })
  message: string;
}

export class SendMessageResponseDto {
  @ApiProperty({ description: 'Success status' })
  success: boolean;

  @ApiProperty({ description: 'Message ID' })
  messageId: string;

  @ApiProperty({ description: 'Message' })
  message: string;
}
