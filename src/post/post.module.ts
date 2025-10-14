import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, PostSchema } from 'src/schema/post/post.schema';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { UserSchema } from 'src/schema/user/user.schema';
import { VillageSchema } from 'src/schema/village/village.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Post.name, schema: PostSchema },
            { name: 'User', schema: UserSchema },
            { name: 'Village', schema: VillageSchema }
        ])
    ],
    controllers: [PostController],
    providers: [PostService],
    exports: [PostService]
})
export class PostModule {}
