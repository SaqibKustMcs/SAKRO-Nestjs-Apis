import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { generateStringId } from 'src/utils/utils';

export type commentsDocument = HydratedDocument<Comments>;

@Schema()
export class Comments {
 

    @Prop({ type: String, default: generateStringId })
    id: string;

    @Prop({ type: String, default: '' })
    userId: string;

    @Prop({ type: String, default: '' })
    postId: string;
    @Prop({ type: String, default: '' })
    text: string;
    @Prop({ type: Boolean, default: false })
    isDeleted: boolean;
}

export const CommentsSchema = SchemaFactory.createForClass(Comments);

CommentsSchema.set('timestamps', true);
CommentsSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    },
});
