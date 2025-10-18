import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { UseGuards } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SendMessageDto } from './dto/send-message.dto';

interface AuthenticatedSocket extends Socket {
  userId?: string;
}

@WebSocketGateway({
  cors: {
    origin: '*',
  },
  namespace: '/chat',
})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private connectedUsers = new Map<string, string>(); // userId -> socketId

  constructor(
    private readonly jwtService: JwtService,
  ) {
    console.log('🔧 ChatGateway initialized with JWT service');
    console.log('🔧 JWT_SECRET at initialization:', process.env.JWT_SECRET ? `Yes (length: ${process.env.JWT_SECRET.length})` : 'No');
  }

  async handleConnection(client: AuthenticatedSocket) {
    console.log('🚀 WebSocket connection attempt started');
    
    try {
      // Extract token from handshake and clean it (remove Bearer prefix if present)
      const authToken = client.handshake.auth?.token;
      const headerToken = client.handshake.headers?.authorization;
      
      console.log('🔍 Raw auth token from handshake:', authToken);
      console.log('🔍 Raw header authorization:', headerToken);
      
      let token = authToken || (headerToken ? headerToken.replace('Bearer ', '') : null);
      
      // Ensure token doesn't have Bearer prefix for JWT verification
      if (token?.startsWith('Bearer ')) {
        console.log('🔧 Removing Bearer prefix from token');
        token = token.substring(7);
      }
      
      console.log('🔐 WebSocket connection attempt:');
      console.log('🔐 Final token length:', token?.length || 0);
      console.log('🔐 Final token preview:', token ? `${token.substring(0, 20)}...` : 'No token');
      console.log('🔐 Handshake auth object:', JSON.stringify(client.handshake.auth));
      console.log('🔐 JWT_SECRET configured:', process.env.JWT_SECRET ? `Yes (length: ${process.env.JWT_SECRET.length})` : 'No');
      console.log('🔐 JWT_SECRET preview:', process.env.JWT_SECRET ? `${process.env.JWT_SECRET.substring(0, 20)}...` : 'Not set');
      
      // Check if JWT_SECRET is available
      if (!process.env.JWT_SECRET) {
        console.error('❌ JWT_SECRET environment variable is not set!');
        console.error('❌ This will cause JWT verification to fail');
        client.disconnect();
        return;
      }
      
      if (!token) {
        console.log('❌ No token provided in WebSocket connection');
        console.log('❌ Auth object:', client.handshake.auth);
        console.log('❌ Headers authorization:', client.handshake.headers?.authorization);
        client.disconnect();
        return;
      }

      // Verify JWT token
      try {
        console.log('🔐 Attempting JWT verification...');
        console.log('🔐 JWT Service instance:', !!this.jwtService);
        console.log('🔐 Token to verify (first 50 chars):', token.substring(0, 50) + '...');
        
        // Try to verify the token with the current secret
        const payload = this.jwtService.verify(token, {
          secret: process.env.JWT_SECRET
        });
        console.log('🔐 JWT payload verified successfully:', {
          id: payload?.id,
          email: payload?.email,
          userRole: payload?.userRole,
          iat: payload?.iat,
          exp: payload?.exp
        });
        
        if (!payload || !payload.id) {
          console.log('❌ Invalid JWT payload - missing id field');
          console.log('❌ Payload received:', payload);
          client.disconnect();
          return;
        }
        
        client.userId = payload.id;

        // Store user connection
        this.connectedUsers.set(client.userId, client.id);

        // Join user to their personal room
        await client.join(`user_${client.userId}`);

        console.log(`✅ User ${client.userId} connected with socket ${client.id}`);
        
        // Send confirmation to client
        client.emit('connection_confirmed', { userId: client.userId });
        console.log('📤 Sent connection_confirmed event to client');
      } catch (jwtError) {
        console.error('❌ JWT verification failed:', jwtError);
        console.error('❌ JWT error details:', jwtError.message);
        console.error('❌ JWT error name:', jwtError.name);
        console.error('❌ Current JWT_SECRET length:', process.env.JWT_SECRET?.length || 0);
        console.error('❌ Token being verified:', token.substring(0, 50) + '...');
        
        // Provide more specific error messages and send feedback to client
        let errorMessage = 'Authentication failed';
        if (jwtError.message?.includes('invalid signature')) {
          console.error('❌ SIGNATURE ERROR: JWT secret mismatch between signing and verification');
          errorMessage = 'JWT signature verification failed - token may be invalid';
        } else if (jwtError.message?.includes('expired')) {
          console.error('❌ EXPIRY ERROR: Token has expired');
          errorMessage = 'JWT token has expired - please log in again';
        } else if (jwtError.message?.includes('malformed')) {
          console.error('❌ FORMAT ERROR: Token is malformed');
          errorMessage = 'JWT token format is invalid';
        } else {
          console.error('❌ UNKNOWN JWT ERROR:', jwtError);
          errorMessage = `JWT verification failed: ${jwtError.message}`;
        }
        
        // Send error message to client before disconnecting
        client.emit('auth_error', { message: errorMessage });
        client.disconnect();
      }
    } catch (error) {
      console.error('❌ WebSocket connection error:', error);
      console.error('❌ Error details:', error.message);
      client.disconnect();
    }
  }

  handleDisconnect(client: AuthenticatedSocket) {
    if (client.userId) {
      this.connectedUsers.delete(client.userId);
      console.log(`User ${client.userId} disconnected`);
    }
  }

  @SubscribeMessage('join_chat_room')
  async handleJoinChatRoom(
    @ConnectedSocket() client: AuthenticatedSocket,
    @MessageBody() data: { chatRoomId: string },
  ) {
    try {
      console.log('🚪 User attempting to join chat room:', data.chatRoomId);
      console.log('🚪 Client userId:', client.userId);
      console.log('🚪 Client connected:', client.connected);
      console.log('🚪 Socket id:', client.id);
      console.log('🚪 Data received:', JSON.stringify(data));
      console.log('🚪 Server available:', !!this.server);
      console.log('🚪 Server sockets available:', !!(this.server && this.server.sockets));
      console.log('🚪 Server adapter available:', !!(this.server && this.server.sockets && this.server.sockets.adapter));
      
      // Validate input data
      if (!data || !data.chatRoomId) {
        console.log('❌ Invalid data provided for join_chat_room');
        client.emit('error', { message: 'Invalid chat room ID provided' });
        return;
      }
      
      if (!client.userId) {
        console.log('❌ Unauthorized: No userId for room join');
        client.emit('error', { message: 'Unauthorized - no user ID' });
        return;
      }

      if (!client.connected) {
        console.log('❌ Socket not connected');
        client.emit('error', { message: 'Socket not connected' });
        return;
      }

      const roomName = `chat_room_${data.chatRoomId}`;
      console.log('🚪 Joining room:', roomName);
      
      // Join the chat room first - this is the core operation
      await client.join(roomName);
      console.log('🚪 Successfully called client.join()');
      
      // Try to verify room membership (optional, not critical for functionality)
      try {
        if (this.server && this.server.sockets && this.server.sockets.adapter && this.server.sockets.adapter.rooms) {
          const room = this.server.sockets.adapter.rooms.get(roomName);
          const roomSockets = room ? Array.from(room) : [];
          console.log(`✅ User ${client.userId} joined chat room ${data.chatRoomId}. Room now has ${roomSockets.length} members:`, roomSockets);
          
          // Verify the client is actually in the room
          const isInRoom = roomSockets.includes(client.id);
          console.log('🚪 Client is in room:', isInRoom);
        } else {
          console.log('⚠️ Server adapter not fully available for room verification, but join was successful');
        }
      } catch (roomCheckError) {
        console.log('⚠️ Could not verify room membership:', roomCheckError.message);
        console.log('⚠️ Error details:', roomCheckError);
      }
      
      // Always emit success confirmation since join() succeeded
      // The room joining is the important part, not the verification
      client.emit('joined_chat_room', { chatRoomId: data.chatRoomId });
      console.log('📤 Sent joined_chat_room confirmation');
    } catch (error) {
      console.error('❌ Join chat room error:', error);
      console.error('❌ Error stack:', error.stack);
      console.error('❌ Error message:', error.message);
      client.emit('error', { message: `Failed to join chat room: ${error.message}` });
    }
  }

  @SubscribeMessage('leave_chat_room')
  async handleLeaveChatRoom(
    @ConnectedSocket() client: AuthenticatedSocket,
    @MessageBody() data: { chatRoomId: string },
  ) {
    try {
      await client.leave(`chat_room_${data.chatRoomId}`);
      client.emit('left_chat_room', { chatRoomId: data.chatRoomId });
      console.log(`User ${client.userId} left chat room ${data.chatRoomId}`);
    } catch (error) {
      console.error('Leave chat room error:', error);
      client.emit('error', { message: 'Failed to leave chat room' });
    }
  }

  @SubscribeMessage('send_message')
  async handleSendMessage(
    @ConnectedSocket() client: AuthenticatedSocket,
    @MessageBody() data: SendMessageDto,
  ) {
    try {
      console.log('📤 Processing send_message from user:', client.userId);
      console.log('📤 Message data:', JSON.stringify(data));
      
      if (!client.userId) {
        console.log('❌ Unauthorized: No userId');
        client.emit('error', { message: 'Unauthorized' });
        return;
      }

      // Verify sender is the authenticated user
      if (data.senderId !== client.userId) {
        console.log('❌ Invalid sender:', data.senderId, 'vs authenticated:', client.userId);
        client.emit('error', { message: 'Invalid sender' });
        return;
      }

      const roomName = `chat_room_${data.chatRoomId}`;
      console.log('📤 Broadcasting to room:', roomName);
      
      // Check which clients are in the room (safely)
      try {
        if (this.server && this.server.sockets && this.server.sockets.adapter) {
          const room = this.server.sockets.adapter.rooms.get(roomName);
          const roomSockets = room ? Array.from(room) : [];
          console.log('📤 Clients in room:', roomSockets.length, roomSockets);
        } else {
          console.log('📤 Cannot check room clients - adapter not available');
        }
      } catch (roomCheckError) {
        console.log('📤 Error checking room clients:', roomCheckError.message);
      }

      // Emit to all users in the chat room (message will be saved via REST API)
      this.server.to(roomName).emit('new_message', data);
      console.log('📤 Message broadcasted to room:', roomName);
      
      // Emit to sender's personal room for confirmation
      client.emit('message_sent', { messageId: data.chatRoomId });
      console.log('📤 Confirmation sent to sender');
    } catch (error) {
      console.error('Send message error:', error);
      client.emit('error', { message: 'Failed to send message' });
    }
  }

  @SubscribeMessage('typing_start')
  async handleTypingStart(
    @ConnectedSocket() client: AuthenticatedSocket,
    @MessageBody() data: { chatRoomId: string; userId: string },
  ) {
    try {
      if (!client.userId || client.userId !== data.userId) {
        return;
      }

      // Emit to other users in the chat room
      client.to(`chat_room_${data.chatRoomId}`).emit('user_typing', {
        chatRoomId: data.chatRoomId,
        userId: data.userId,
        isTyping: true,
      });
    } catch (error) {
      console.error('Typing start error:', error);
    }
  }

  @SubscribeMessage('typing_stop')
  async handleTypingStop(
    @ConnectedSocket() client: AuthenticatedSocket,
    @MessageBody() data: { chatRoomId: string; userId: string },
  ) {
    try {
      if (!client.userId || client.userId !== data.userId) {
        return;
      }

      // Emit to other users in the chat room
      client.to(`chat_room_${data.chatRoomId}`).emit('user_typing', {
        chatRoomId: data.chatRoomId,
        userId: data.userId,
        isTyping: false,
      });
    } catch (error) {
      console.error('Typing stop error:', error);
    }
  }

  @SubscribeMessage('mark_messages_read')
  async handleMarkMessagesRead(
    @ConnectedSocket() client: AuthenticatedSocket,
    @MessageBody() data: { chatRoomId: string },
  ) {
    try {
      if (!client.userId) {
        return;
      }

      // Emit to other users in the chat room that messages were read
      client.to(`chat_room_${data.chatRoomId}`).emit('messages_read', {
        chatRoomId: data.chatRoomId,
        userId: client.userId,
      });
    } catch (error) {
      console.error('Mark messages read error:', error);
    }
  }

  @SubscribeMessage('chat_room_opened')
  async handleChatRoomOpened(
    @ConnectedSocket() client: AuthenticatedSocket,
    @MessageBody() data: { chatRoomId: string },
  ) {
    try {
      if (!client.userId) {
        return;
      }

      console.log(`User ${client.userId} opened chat room ${data.chatRoomId}`);
      
      // Emit chat room update to refresh the chat list
      this.server.to(`user_${client.userId}`).emit('chat_room_update', {
        chatRoomId: data.chatRoomId,
        action: 'opened',
        userId: client.userId,
      });
    } catch (error) {
      console.error('Chat room opened error:', error);
    }
  }

  // Method to emit new message to specific users (can be called from service)
  async emitNewMessage(chatRoomId: string, message: any) {
    this.server.to(`chat_room_${chatRoomId}`).emit('new_message', message);
  }

  // Method to emit chat room update (new chat room created)
  async emitChatRoomUpdate(userId: string, chatRoom: any) {
    this.server.to(`user_${userId}`).emit('chat_room_update', chatRoom);
  }

  // Method to emit unread count update
  async emitUnreadCountUpdate(userId: string, unreadCount: number) {
    this.server.to(`user_${userId}`).emit('unread_count_update', { unreadCount });
  }

  // Method to check if user is online
  isUserOnline(userId: string): boolean {
    return this.connectedUsers.has(userId);
  }

  // Method to get online users count
  getOnlineUsersCount(): number {
    return this.connectedUsers.size;
  }
}
