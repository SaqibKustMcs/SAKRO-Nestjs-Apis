import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { MessageEventEnum } from '../enum/message-evetn.enum';
import { generateStringId } from '../utils/utils';

export type UserMessageDocument = HydratedDocument<UserMessage>;

@Schema()
export class UserMessage {
    @Prop({ type: String, default: generateStringId })
    _id: string;

    @Prop({ type: String, default: '' })
    chatId: string;

    @Prop({ type: String, default: '' })
    userId: string;

    @Prop({ type: String, default: '' })
    messageId: string;

    @Prop({ type: Date, default: new Date() })
    time: Date;

    @Prop({ type: Date, default: null })
    readTime: Date;

    @Prop({ type: Boolean, default: false })
    isDeleted: boolean;

}

export const UserMessageSchema = SchemaFactory.createForClass(UserMessage);

UserMessageSchema.set('timestamps', true);
UserMessageSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    },
});
