import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { MessageEventEnum } from '../enum/message-evetn.enum';
import { generateStringId } from '../utils/utils';

export type MessageDocument = HydratedDocument<Message>;

@Schema()
export class Message {
    @Prop({ type: String, default: generateStringId })
    _id: string;

    @Prop({ type: String, default: '' })
    chatId: string;

    @Prop({ type: String, default: '' })
    userId: string;

    @Prop({ type: String, default: '' })
    message: string;

    @Prop({ type: Object, default: {} })
    messageBody: object;

    @Prop({ type: Array, default: [] })
    attachments: any[];

    @Prop({ type: Date, default: new Date() })
    time: Date;

    @Prop({ type: String, default: MessageEventEnum.MESSAGE })
    eventType: string;

    @Prop({ type: String, default: null })
    eventId: string;

    @Prop({ type: Boolean, default: false })
    isDeleted: boolean;

}

export const MessageSchema = SchemaFactory.createForClass(Message);

MessageSchema.set('timestamps', true);
MessageSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    },
});
