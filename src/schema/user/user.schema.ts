import { model, Schema } from 'mongoose';
import { generateStringId } from 'src/utils/utils';
var bcrypt = require('bcryptjs');
import { User } from 'src/interface/user/user.interface';

/** Per-device FCM registration (multi-device login). */
const FcmTokenEntrySchema = new Schema(
  {
    token: { type: String, required: true },
    appId: { type: String, default: 'cloth_shop_flutter' },
    deviceId: { type: String, required: true },
    updatedAt: { type: Date, default: Date.now },
  },
  { _id: false },
);

export const UserSchema = new Schema(
  {
    _id: { type: String, default: generateStringId },
    email: { type: String, default: '' },
    password: { type: String, default: '' },
    name: { type: String, default: '' },
    pic: { type: String, default: '' },
    color: { type: String, default: '' },
    isEmailVerified: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
    
    // Profile completion fields
    fullName: { type: String, default: '' },
    phoneNumber: { type: String, default: '' },
    village: { type: String, default: '' },
    country: { type: String, default: '' },
    homeAddress: { type: String, default: '' },
    profilePic: { type: String, default: '' },
    zipcode: { type: String, default: '' },
    
    // Shopping app specific fields
    userLevel: { type: String, default: 'beginner', enum: ['beginner', 'intermediate', 'advanced', 'expert'] },
    userStatus: { type: String, default: 'active', enum: ['active', 'inactive', 'suspended'] },
    userRole: { type: String, default: 'normal', enum: ['normal', 'seller', 'admin'] },
    sellOrders: { type: Number, default: 0 },
    buyOrders: { type: Number, default: 0 },
    wishlist: { type: [String], default: [] },
    cart: { type: [String], default: [] },
    savedPosts: { type: [String], default: [] }, // Array of saved post IDs

    // Two-Factor Authentication fields
    twoFactorSecret: { type: String, default: null },
    isTwoFactorEnabled: { type: Boolean, default: false },

    // Biometric Authentication field
    isBiometric: { type: Boolean, default: false },

    /** FCM tokens per device/app (multi-device push). */
    fcmTokens: { type: [FcmTokenEntrySchema], default: [] },
  },
  {
    collection: 'users',
    timestamps: true,
  },
);

export const UserModel = model<User>('users', UserSchema);

UserSchema.set('timestamps', true);
UserSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

UserSchema.index({ email: 1 });
UserSchema.index({ fullname: 1 });
UserSchema.index({ email: 1, publicKey: 1 });
UserSchema.index({ publicKey: 1 });

UserSchema.pre<User>('save', async function (next) {
  try {
    if (this.password && this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
  } catch (err) {
    next();
  }
});

UserSchema.pre<any>('updateOne', async function (next) {
  try {
    if (this._update.password) {
      const saltRounds = 10;
      this._update.password = await bcrypt.hash(
        this._update.password,
        saltRounds,
      );
    }

    next();
  } catch (err) {
    next();
  }
});

export { User };
