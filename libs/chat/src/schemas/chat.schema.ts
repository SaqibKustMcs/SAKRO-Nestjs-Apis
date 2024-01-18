import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { generateStringId } from '../utils/utils';

export type ChatDocument = HydratedDocument<Chat>;

@Schema()
export class Chat {
    @Prop({ type: String, default: generateStringId })
    _id: string;

    @Prop({ type: String, default: '' })
    ownerUserId: string;

    @Prop({ type: String, default: '' })
    title: string;

    @Prop({ type: String, default: '' })
    image: string;

    @Prop({ type: String, default: '' })
    purposeDetail: string;

    @Prop({ type: String, default: '' })
    userIds: string;

    @Prop({ type: Boolean, default: false })
    isMultiple: boolean;

    @Prop({ type: Boolean, default: false })
    isDeleted: boolean;
}

export const ChatSchema = SchemaFactory.createForClass(Chat);

ChatSchema.set('timestamps', true);
ChatSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    },
});

