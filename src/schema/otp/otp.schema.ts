import { model, Schema } from 'mongoose';
import { generateStringId } from 'src/utils/utils';

export const OtpSchema = new Schema(
  {
    _id: { type: String, default: generateStringId },
    otp: { type: String, default: '' },
    type: { type: String, default: '' },
    userID: { type: String, default: '' },
    expiryTime: { type: Number, default: 0 },
    isUsed: { type: Boolean, default: false },
  },
  {
    collection: 'otp',
  },
);

model('otp', OtpSchema);

OtpSchema.set('timestamps', true);
OtpSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});
