import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { generateStringId } from '../utils/utils';

export type UserTokenDocument = HydratedDocument<UserToken>;

@Schema()
export class UserToken {
    @Prop({ type: String, default: generateStringId })
    _id: string;

    @Prop({ type: String, default: '' })
    userId: string;

    @Prop({ type: String, default: '' })
    registrationToken: string;

    @Prop({ type: Boolean, default: false })
    isConnected: boolean;

    @Prop({ type: Boolean, default: false })
    isDeleted: boolean;
}

export const UserTokenSchema = SchemaFactory.createForClass(UserToken);

UserTokenSchema.set('timestamps', true);
UserTokenSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    },
});
