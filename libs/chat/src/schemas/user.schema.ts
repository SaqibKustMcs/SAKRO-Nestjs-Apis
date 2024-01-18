import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { UserStatusEnum } from '../enum/user-status.enum';
import { generateStringId } from '../utils/utils';

export type UserDataDocument = HydratedDocument<UserData>;

@Schema()
export class UserData {

    @Prop({ type: String, default: generateStringId })
    _id: string;

    @Prop({ type: String, default: '', required: true })
    userId: string;

    @Prop({ type: String, default: '' })
    name: string;

    @Prop({ type: String, default: '' })
    pic: string;

    @Prop({ type: String, default: '' })
    color: string;

    @Prop({ type: String, default: UserStatusEnum.AVAILABLE })
    status: string;

    @Prop({ type: Boolean, default: false })
    isOnline: boolean;

    @Prop({ type: Boolean, default: false })
    isDeleted: boolean;
}

export const UserDataSchema = SchemaFactory.createForClass(UserData);

UserDataSchema.set('timestamps', true);
UserDataSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    },
});

