import { 
  Controller, 
  Post, 
  Get, 
  Body, 
  Param, 
  UseGuards, 
  Request,
  HttpStatus,
  HttpException
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiParam } from '@nestjs/swagger';
import { ChatService } from './chat.service';
import { CreateChatRoomDto } from './dto/create-chat-room.dto';
import { SendMessageDto } from './dto/send-message.dto';
import { 
  ChatRoomResponseDto, 
  MessageResponseDto, 
  CreateChatRoomResponseDto, 
  SendMessageResponseDto 
} from './dto/chat-response.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('Chat')
@Controller('chat')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post('create')
  @ApiOperation({ summary: 'Create a new chat room between buyer and seller' })
  @ApiResponse({ 
    status: 201, 
    description: 'Chat room created successfully',
    type: CreateChatRoomResponseDto
  })
  @ApiResponse({ status: 400, description: 'Bad request - Invalid data' })
  @ApiResponse({ status: 404, description: 'User or shop not found' })
  @ApiResponse({ status: 409, description: 'Chat room already exists' })
  async createChatRoom(
    @Body() createChatRoomDto: CreateChatRoomDto,
    @Request() req: any
  ): Promise<CreateChatRoomResponseDto> {
    try {
      const result = await this.chatService.createChatRoom(createChatRoomDto);
      return result;
    } catch (error) {
      throw new HttpException(
        error.message || 'Failed to create chat room',
        error.status || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Get('list')
  @ApiOperation({ summary: 'Get all chat rooms for the authenticated user' })
  @ApiResponse({ 
    status: 200, 
    description: 'Chat rooms retrieved successfully',
    type: [ChatRoomResponseDto]
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async getChatRooms(
    @Request() req: any
  ): Promise<ChatRoomResponseDto[]> {
    try {
      const userId = req.user.id;
      const chatRooms = await this.chatService.getChatRooms(userId);
      return chatRooms;
    } catch (error) {
      throw new HttpException(
        error.message || 'Failed to get chat rooms',
        error.status || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Post('message')
  @ApiOperation({ summary: 'Send a message in a chat room' })
  @ApiResponse({ 
    status: 201, 
    description: 'Message sent successfully',
    type: SendMessageResponseDto
  })
  @ApiResponse({ status: 400, description: 'Bad request - Invalid data' })
  @ApiResponse({ status: 404, description: 'Chat room not found' })
  async sendMessage(
    @Body() sendMessageDto: SendMessageDto,
    @Request() req: any
  ): Promise<SendMessageResponseDto> {
    try {
      // Verify that the sender is the authenticated user
      if (req.user.id !== sendMessageDto.senderId) {
        throw new HttpException('Unauthorized - Invalid sender', HttpStatus.FORBIDDEN);
      }

      const result = await this.chatService.sendMessage(sendMessageDto);
      return result;
    } catch (error) {
      throw new HttpException(
        error.message || 'Failed to send message',
        error.status || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Get('messages/:chatRoomId')
  @ApiOperation({ summary: 'Get all messages in a chat room' })
  @ApiParam({ name: 'chatRoomId', description: 'Chat room ID' })
  @ApiResponse({ 
    status: 200, 
    description: 'Messages retrieved successfully',
    type: [MessageResponseDto]
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'Chat room not found' })
  async getMessages(
    @Param('chatRoomId') chatRoomId: string,
    @Request() req: any
  ): Promise<MessageResponseDto[]> {
    try {
      const userId = req.user.id;
      const messages = await this.chatService.getMessages(chatRoomId, userId);
      return messages;
    } catch (error) {
      throw new HttpException(
        error.message || 'Failed to get messages',
        error.status || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Post('messages/:chatRoomId/read')
  @ApiOperation({ summary: 'Mark messages as read in a chat room' })
  @ApiParam({ name: 'chatRoomId', description: 'Chat room ID' })
  @ApiResponse({ status: 200, description: 'Messages marked as read' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'Chat room not found' })
  async markMessagesAsRead(
    @Param('chatRoomId') chatRoomId: string,
    @Request() req: any
  ): Promise<{ success: boolean; message: string }> {
    try {
      const userId = req.user.id;
      const result = await this.chatService.markMessagesAsRead(chatRoomId, userId);
      return result;
    } catch (error) {
      throw new HttpException(
        error.message || 'Failed to mark messages as read',
        error.status || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Post('message/:messageId/delete')
  @ApiOperation({ summary: 'Delete a message' })
  @ApiParam({ name: 'messageId', description: 'Message ID' })
  @ApiResponse({ status: 200, description: 'Message deleted successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'Message not found' })
  async deleteMessage(
    @Param('messageId') messageId: string,
    @Request() req: any
  ): Promise<{ success: boolean; message: string }> {
    try {
      const userId = req.user.id;
      const result = await this.chatService.deleteMessage(messageId, userId);
      return result;
    } catch (error) {
      throw new HttpException(
        error.message || 'Failed to delete message',
        error.status || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Get('unread-count')
  @ApiOperation({ summary: 'Get unread message count for the authenticated user' })
  @ApiResponse({ status: 200, description: 'Unread count retrieved successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async getUnreadCount(
    @Request() req: any
  ): Promise<{ unreadCount: number }> {
    try {
      const userId = req.user.id;
      const unreadCount = await this.chatService.getUnreadCount(userId);
      return { unreadCount };
    } catch (error) {
      throw new HttpException(
        error.message || 'Failed to get unread count',
        error.status || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Post('room/:chatRoomId/deactivate')
  @ApiOperation({ summary: 'Deactivate a chat room' })
  @ApiParam({ name: 'chatRoomId', description: 'Chat room ID' })
  @ApiResponse({ status: 200, description: 'Chat room deactivated successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'Chat room not found' })
  async deactivateChatRoom(
    @Param('chatRoomId') chatRoomId: string,
    @Request() req: any
  ): Promise<{ success: boolean; message: string }> {
    try {
      const userId = req.user.id;
      const result = await this.chatService.deactivateChatRoom(chatRoomId, userId);
      return result;
    } catch (error) {
      throw new HttpException(
        error.message || 'Failed to deactivate chat room',
        error.status || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Get('test')
  @ApiOperation({ summary: 'Test endpoint to verify chat module is loaded' })
  @ApiResponse({ status: 200, description: 'Chat module is working' })
  async testEndpoint(): Promise<{ message: string }> {
    return { message: 'Chat module is working!' };
  }

  @Post('get-or-create')
  @ApiOperation({ summary: 'Get or create chat room for buyer and seller' })
  @ApiResponse({ 
    status: 200, 
    description: 'Chat room ID retrieved or created',
    schema: { type: 'object', properties: { chatRoomId: { type: 'string' } } }
  })
  @ApiResponse({ status: 400, description: 'Bad request - Invalid data' })
  @ApiResponse({ status: 404, description: 'User or shop not found' })
  async getOrCreateChatRoom(
    @Body() body: { buyerId: string; sellerId: string; shopId: string },
    @Request() req: any
  ): Promise<{ chatRoomId: string }> {
    try {
      const { buyerId, sellerId, shopId } = body;
      
      // Verify that the requesting user is either the buyer or seller
      if (req.user.id !== buyerId && req.user.id !== sellerId) {
        throw new HttpException('Unauthorized access', HttpStatus.FORBIDDEN);
      }

      const chatRoomId = await this.chatService.getOrCreateChatRoom(buyerId, sellerId, shopId);
      return { chatRoomId };
    } catch (error) {
      throw new HttpException(
        error.message || 'Failed to get or create chat room',
        error.status || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
