import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { generateStringId } from '../utils/utils';

export type UserChatDocument = HydratedDocument<UserChat>;

@Schema()
export class UserChat {
    @Prop({ type: String, default: generateStringId })
    _id: string;

    @Prop({ type: String, default: '' })
    chatId: string;

    @Prop({ type: String, default: '' })
    userId: string;

    @Prop({ type: Number, default: 0 })
    unreadCount: number;

    @Prop({ type: Date, default: null })
    lastMessageReadTime: Date;

    @Prop({ type: String, default: '' })
    lastMessageReadId: string;

    @Prop({ type: Boolean, default: false })
    isFavourite: boolean;

    @Prop({ type: Boolean, default: false })
    isModerator: boolean;

    @Prop({ type: Boolean, default: false })
    isDeleted: boolean;
}

export const UserChatSchema = SchemaFactory.createForClass(UserChat);

UserChatSchema.set('timestamps', true);
UserChatSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    },
});

