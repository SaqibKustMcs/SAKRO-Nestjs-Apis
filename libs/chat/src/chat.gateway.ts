import {
  BaseWsExceptionFilter,
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsException,
} from '@nestjs/websockets';
import { NestGateway } from '@nestjs/websockets/interfaces/nest-gateway.interface';
import { ChatService } from './chat.service';
import { Server, Socket } from 'socket.io';
import { UserChatDTO, MessageDTO, ReadChatDTO } from './dto/chat.dto';
import { UseFilters, UsePipes, ValidationPipe, WsExceptionFilter } from '@nestjs/common';
import { WebsocketExceptionsFilter } from './filter/ws.filter';
// import { Chat } from './chat.entity';

@UseFilters(WebsocketExceptionsFilter)
@UsePipes(new ValidationPipe({ transform: true }))
@WebSocketGateway()
export class ChatGateway implements NestGateway {

  constructor(
    private chatService: ChatService,
  ) { }

  afterInit(server: Server) {
    this.chatService.removeDisconnectedUsers(server);
  }

  async handleConnection(socket: Socket) {
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
      })

      return;
    } catch (err) {
      console.log(err)
      socket.disconnect();
    }
  }

  async handleDisconnect(socket: Socket) {
    try {
      await this.chatService.userDisconnected(socket);
      return;
    } catch (err) {
      console.log(err)
      socket.disconnect();
    }
  }


  @SubscribeMessage('message')
  async message(
    @MessageBody()
    payload: MessageDTO,
    @ConnectedSocket() socket: Socket
  ) {
    try {
      const query = socket?.handshake?.query;
      const socketUserId = query?.userId;

      if (socketUserId?.toString() != payload.userId) {
        throw new WsException('User not connected');
      }

      payload.time = new Date();
      let chatDocument = await this.chatService.createMessage(payload);
      socket.to(payload?.chatId).emit('message', payload);

      return payload;
    } catch (err) {
      console.log(err);
      throw new WsException(err?.message);
    }
  }

  @SubscribeMessage('join')
  async join(
    @MessageBody()
    payload: UserChatDTO,
    @ConnectedSocket() socket: Socket
  ) {
    try {
      const query = socket?.handshake?.query;

      const socketUserId = query?.userId;
      if (socketUserId?.toString() != payload.userId) {
        throw new WsException('User not connected');
      }

      socket.join(payload.chatId.toString());

      return payload;
    } catch (err) {
      console.log(err);
      throw new WsException(err?.message);
    }
  }

  @SubscribeMessage('read')
  async read(
    @MessageBody()
    payload: ReadChatDTO,
    @ConnectedSocket() socket: Socket
  ) {
    try {
      const query = socket?.handshake?.query;

      const socketUserId = query?.userId;
      if (socketUserId?.toString() != payload.userId) {
        throw new WsException('User not connected');
      }

      await this.chatService.resetUnreadCount(payload);

      return payload;
    } catch (err) {
      console.log(err);
      throw new WsException(err?.message);
    }
  }


}
