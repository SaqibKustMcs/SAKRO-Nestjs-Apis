import { model, Schema } from 'mongoose';
import { generateStringId } from 'src/utils/utils';
var bcrypt = require('bcryptjs');
import { User } from 'src/interface/user/user.interface';
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

  },
  {
    collection: 'users',
  },
);

model('users', UserSchema);

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
