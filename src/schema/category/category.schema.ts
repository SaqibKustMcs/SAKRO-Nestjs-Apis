import { model, Schema } from 'mongoose';
import { generateStringId } from 'src/utils/utils';
import { Category } from 'src/interface/category/category.interface';

export const CategorySchema = new Schema(
  {
    _id: { type: String, default: generateStringId },
    name: { type: String, required: true },
    type: { 
      type: String, 
      required: true, 
      enum: ['SHOP_CATEGORY', 'PRODUCT_CATEGORY', 'SUBCATEGORY'],
      default: 'SHOP_CATEGORY'
    },
    parentCategoryId: { type: String, ref: 'Category', default: null },
    shopCategoryId: { type: String, ref: 'Category', default: null },
    productCategoryId: { type: String, ref: 'Category', default: null },
    status: { 
      type: String, 
      enum: ['ACTIVE', 'INACTIVE'], 
      default: 'ACTIVE' 
    },
    description: { type: String, default: '' },
    icon: { type: String, default: '' },
    sortOrder: { type: Number, default: 0 },
  },
  {
    collection: 'categories',
    timestamps: true,
  },
);

const Category = model('Category', CategorySchema);

// Custom validation
CategorySchema.pre('save', function(next) {
  const category = this as any;
  
  // SHOP_CATEGORY validation
  if (category.type === 'SHOP_CATEGORY') {
    if (category.shopCategoryId || category.productCategoryId) {
      return next(new Error('SHOP_CATEGORY cannot have parent categories'));
    }
  }
  
  // PRODUCT_CATEGORY validation
  if (category.type === 'PRODUCT_CATEGORY') {
    if (!category.shopCategoryId) {
      return next(new Error('PRODUCT_CATEGORY must have shopCategoryId'));
    }
    if (category.productCategoryId) {
      return next(new Error('PRODUCT_CATEGORY cannot have productCategoryId'));
    }
  }
  
  // SUBCATEGORY validation
  if (category.type === 'SUBCATEGORY') {
    if (!category.productCategoryId) {
      return next(new Error('SUBCATEGORY must have productCategoryId'));
    }
    if (!category.shopCategoryId) {
      return next(new Error('SUBCATEGORY must have shopCategoryId'));
    }
  }
  
  next();
});

CategorySchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

// Indexes for performance
CategorySchema.index({ name: 1 });
CategorySchema.index({ type: 1 });
CategorySchema.index({ status: 1 });
CategorySchema.index({ shopCategoryId: 1 });
CategorySchema.index({ productCategoryId: 1 });
CategorySchema.index({ parentCategoryId: 1 });
CategorySchema.index({ sortOrder: 1 });

export { Category };
