import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
import { ChatGateway } from './chat.gateway';
import { ChatRoom, ChatRoomSchema } from '../schema/chat/chat-room.schema';
import { Message, MessageSchema } from '../schema/chat/message.schema';
import { User, UserSchema } from '../schema/user/user.schema';
import { Shop, ShopSchema } from '../schema/shop/shop.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'ChatRoom', schema: ChatRoomSchema },
      { name: 'Message', schema: MessageSchema },
      { name: 'User', schema: UserSchema },
      { name: 'Shop', schema: ShopSchema },
    ]),
    // JWT module is now global from AuthModule, no need to register it again
  ],
  controllers: [ChatController],
  providers: [ChatService, ChatGateway],
  exports: [ChatService],
})
export class ChatModule {}
