import { model, Schema } from 'mongoose';
import { generateStringId } from 'src/utils/utils';
import { Shop } from 'src/interface/shop/shop.interface';

export const ShopSchema = new Schema(
  {
    _id: { type: String, default: generateStringId },
    shopName: { type: String, required: true },
    ownerId: { type: String, required: true, ref: 'User' },
    user: { type: String, required: true, ref: 'User' },
    villageId: { type: String, required: true, ref: 'Village' },
    categoryId: { type: String, required: true, ref: 'ShopCategory' },
    profileImage: { type: String, default: '' },
    coverImage: { type: String, default: '' },
    description: { type: String, default: '' },
    likes: { type: Number, default: 0 },
    followers: [{ type: String, ref: 'User' }],
    products: [{ type: String, ref: 'Product' }],
    rating: { type: Number, default: 0 },
    reviews: [{ type: String, ref: 'Review' }],
    isVerified: { type: Boolean, default: false },
    status: { 
      type: String, 
      default: 'active', 
      enum: ['active', 'suspended', 'closed'] 
    },
  },
  {
    collection: 'shops',
    timestamps: true,
  },
);

const Shop = model('Shop', ShopSchema);

ShopSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

ShopSchema.index({ shopName: 1 });
ShopSchema.index({ ownerId: 1 });
ShopSchema.index({ user: 1 });
ShopSchema.index({ villageId: 1 });
ShopSchema.index({ categoryId: 1 });
ShopSchema.index({ status: 1 });
ShopSchema.index({ isVerified: 1 });

export { Shop };
