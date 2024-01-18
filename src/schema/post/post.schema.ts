import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { generateStringId } from 'src/utils/utils';

export type postDocument = HydratedDocument<Post>;

@Schema()
export class Post {
 

    @Prop({ type: String, default: generateStringId })
    id: string;

    @Prop({ type: String, default: '' })
    name: string;

    @Prop({ type: String, default: '' })
    pic: string;

    @Prop({ type: String, default: '' })
    color: string;
    @Prop({ type: String, default: '' })
    userId: string;

    @Prop({ type: Boolean, default: false })
    isEmailVerified: boolean;

    @Prop({ type: Boolean, default: false })
    isDeleted: boolean;
}

export const PostSchema = SchemaFactory.createForClass(Post);

PostSchema.set('timestamps', true);
PostSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    },
});

