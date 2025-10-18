import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEnum, IsOptional, IsNumber, IsBoolean } from 'class-validator';

export enum MessageType {
  TEXT = 'text',
  IMAGE = 'image',
  VIDEO = 'video',
  FILE = 'file',
  VOICE = 'voice'
}

export class SendMessageDto {
  @ApiProperty({ 
    description: 'Chat room ID',
    example: '64f1a2b3c4d5e6f7g8h9i0j1'
  })
  @IsString()
  @IsNotEmpty()
  chatRoomId: string;

  @ApiProperty({ 
    description: 'Sender user ID',
    example: '64f1a2b3c4d5e6f7g8h9i0j2'
  })
  @IsString()
  @IsNotEmpty()
  senderId: string;

  @ApiProperty({ 
    description: 'Receiver user ID',
    example: '64f1a2b3c4d5e6f7g8h9i0j3'
  })
  @IsString()
  @IsNotEmpty()
  receiverId: string;

  @ApiProperty({ 
    description: 'Type of message',
    enum: MessageType,
    example: MessageType.TEXT
  })
  @IsEnum(MessageType)
  messageType: MessageType;

  @ApiProperty({ 
    description: 'Message content',
    example: 'Hello, I am interested in this product!'
  })
  @IsString()
  @IsNotEmpty()
  messageContent: string;

  @ApiProperty({ 
    description: 'Media URL for non-text messages',
    example: 'https://example.com/image.jpg',
    required: false
  })
  @IsString()
  @IsOptional()
  mediaUrl?: string;

  @ApiProperty({ 
    description: 'Reply to message ID',
    example: '64f1a2b3c4d5e6f7g8h9i0j4',
    required: false
  })
  @IsString()
  @IsOptional()
  replyTo?: string;

  @ApiProperty({ 
    description: 'File metadata',
    required: false
  })
  @IsOptional()
  metadata?: {
    fileName?: string;
    fileSize?: number;
    duration?: number;
    thumbnail?: string;
  };
}
