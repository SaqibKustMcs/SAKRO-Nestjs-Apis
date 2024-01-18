import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Chat, ChatSchema, } from './schemas/chat.schema';
import { Message, MessageSchema } from './schemas/message.schema';
import { UserToken, UserTokenSchema } from './schemas/userTokens.schema';
import { ChatGateway } from './chat.gateway';
import { ChatService } from './chat.service';
import { UserData, UserDataSchema } from './schemas/user.schema';
import { ChatController } from './chat.controller';
import { UserChat, UserChatSchema } from './schemas/userChat.schema';
import { UserMessage, UserMessageSchema } from './schemas/userMessage.schema';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://127.0.0.1:27017/whitelabelChat"),
    MongooseModule.forFeature([{
      name: Chat.name,
      schema: ChatSchema,
    },
    {
      name: UserChat.name,
      schema: UserChatSchema,
    }, {
      name: Message.name,
      schema: MessageSchema,
    }, {
      name: UserMessage.name,
      schema: UserMessageSchema,
    }, {
      name: UserToken.name,
      schema: UserTokenSchema,
    }, {
      name: UserData.name,
      schema: UserDataSchema,
    }
    ])
  ],
  controllers: [ChatController],
  providers: [ChatGateway, ChatService],
  exports: [ChatService]
})
export class ChatModule { }
