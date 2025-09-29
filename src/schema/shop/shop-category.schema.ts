import { model, Schema } from 'mongoose';
import { generateStringId } from 'src/utils/utils';

export const ShopCategorySchema = new Schema(
  {
    _id: { type: String, default: generateStringId },
    name: { type: String, required: true },
    description: { type: String, default: '' },
    icon: { type: String, default: '' },
    isActive: { type: Boolean, default: true },
  },
  {
    collection: 'shop_categories',
    timestamps: true,
  },
);

const ShopCategory = model('ShopCategory', ShopCategorySchema);

ShopCategorySchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

ShopCategorySchema.index({ name: 1 });
ShopCategorySchema.index({ isActive: 1 });

export { ShopCategory };
