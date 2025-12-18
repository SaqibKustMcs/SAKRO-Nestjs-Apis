import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Comments, CommentsSchema } from 'src/schema/comments/comments.schema';
import { User, UserSchema } from 'src/schema/user/user.schema';
import { Post, PostSchema } from 'src/schema/post/post.schema';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';

@Module({
    imports: [
      
        MongooseModule.forRoot("mongodb://127.0.0.1:27017/exampleChatNew"),
        MongooseModule.forFeature([
          {
            name: Comments.name,
            schema: CommentsSchema,
          },
          {
            name: 'users',
            schema: UserSchema,
          },
          {
            name: Post.name,
            schema: PostSchema,
          }
        ]),
        CommentsModule
      ],
      controllers: [CommentsController],
      providers: [CommentsService],
      exports: [CommentsService]
})
export class CommentsModule {}
