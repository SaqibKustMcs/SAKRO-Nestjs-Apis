import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, PostSchema } from 'src/schema/post/post.schema';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { UserData, UserDataSchema } from '@app/chat/schemas/user.schema';

@Module({
    imports: [
      
      MongooseModule.forRoot("mongodb://127.0.0.1:27017/exampleChatNew"),
      MongooseModule.forFeature([{
        name: Post.name,
        schema: PostSchema,
      },
      {
        name: UserData.name,
        schema: UserDataSchema,
      }
      ])
    ],
    controllers: [PostController],
    providers: [ PostService,Post],
    exports: [PostService]
  })export class PostModule {

     
}
