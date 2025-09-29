import { model, Schema } from 'mongoose';
import { generateStringId } from 'src/utils/utils';
import { Product } from 'src/interface/product/product.interface';

export const ProductSchema = new Schema(
  {
    _id: { type: String, default: generateStringId },
    shopId: { type: String, required: true, ref: 'Shop' },
    shopCategoryId: { type: String, required: true, ref: 'Category' },
    productCategoryId: { type: String, required: true, ref: 'Category' },
    subCategoryId: { type: String, ref: 'Category', default: null },
    name: { type: String, required: true },
    description: { type: String, default: '' },
    images: [{ type: String, required: true }],
    video: { type: String, default: '' },
    price: { type: Number, required: true, min: 0 },
    discountPrice: { type: Number, min: 0, default: null },
    currency: { type: String, default: 'PKR' },
    sku: { type: String, unique: true, sparse: true },
    stock: { type: Number, required: true, default: 0, min: 0 },
    unit: { type: String, default: 'piece' },
    status: { 
      type: String, 
      enum: ['ACTIVE', 'INACTIVE', 'OUT_OF_STOCK'], 
      default: 'ACTIVE' 
    },
    tags: [{ type: String }],
    isFeatured: { type: Boolean, default: false },
    weight: { type: Number, default: 0 },
    dimensions: {
      length: { type: Number, default: 0 },
      width: { type: Number, default: 0 },
      height: { type: Number, default: 0 }
    },
    warranty: { type: String, default: '' },
    brand: { type: String, default: '' },
    model: { type: String, default: '' },
    color: { type: String, default: '' },
    size: { type: String, default: '' },
    material: { type: String, default: '' },
    condition: { 
      type: String, 
      enum: ['NEW', 'USED', 'REFURBISHED'], 
      default: 'NEW' 
    },
    rating: { type: Number, default: 0, min: 0, max: 5 },
    reviewCount: { type: Number, default: 0 },
    viewCount: { type: Number, default: 0 },
    soldCount: { type: Number, default: 0 },
  },
  {
    collection: 'products',
    timestamps: true,
  },
);

const Product = model('Product', ProductSchema);

// Custom validation
ProductSchema.pre('save', function(next) {
  const product = this as any;
  
  // Validate discount price is less than regular price
  if (product.discountPrice && product.discountPrice >= product.price) {
    return next(new Error('Discount price must be less than regular price'));
  }
  
  // Auto-update status based on stock
  if (product.stock === 0 && product.status === 'ACTIVE') {
    product.status = 'OUT_OF_STOCK';
  } else if (product.stock > 0 && product.status === 'OUT_OF_STOCK') {
    product.status = 'ACTIVE';
  }
  
  next();
});

ProductSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

// Indexes for performance
ProductSchema.index({ shopId: 1 });
ProductSchema.index({ shopCategoryId: 1 });
ProductSchema.index({ productCategoryId: 1 });
ProductSchema.index({ subCategoryId: 1 });
ProductSchema.index({ price: 1 });
ProductSchema.index({ createdAt: -1 });
ProductSchema.index({ status: 1 });
ProductSchema.index({ name: 'text', description: 'text', tags: 'text' });
ProductSchema.index({ sku: 1 }, { unique: true, sparse: true });
ProductSchema.index({ isFeatured: 1 });
ProductSchema.index({ rating: -1 });
ProductSchema.index({ soldCount: -1 });
ProductSchema.index({ viewCount: -1 });

export { Product };
