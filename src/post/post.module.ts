import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, PostSchema } from 'src/schema/post/post.schema';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { UserSchema } from 'src/schema/user/user.schema';
import { VillageSchema } from 'src/schema/village/village.schema';
import { Comments, CommentsSchema } from 'src/schema/comments/comments.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Post.name, schema: PostSchema },
            { name: 'User', schema: UserSchema },
            { name: 'Village', schema: VillageSchema },
            { name: Comments.name, schema: CommentsSchema }
        ])
    ],
    controllers: [PostController],
    providers: [PostService],
    exports: [PostService]
})
export class PostModule {}
