import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Comments, CommentsSchema } from 'src/schema/comments/comments.schema';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';

@Module({
    imports: [
      
        MongooseModule.forRoot("mongodb://127.0.0.1:27017/exampleChatNew"),
        MongooseModule.forFeature([{
          name: Comments.name,
          schema: CommentsSchema,
        },
        // {
        //   name: UserData.name,
        //   schema: UserDataSchema,
        // }
        ]),
        CommentsModule
      ],
      controllers: [CommentsController],
      providers: [ CommentsService,Comments],
      exports: [CommentsService]
})
export class CommentsModule {}
