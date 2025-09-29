import { Document } from 'mongoose';

export interface Category extends Document {
  id: string;
  name: string;
  type: 'SHOP_CATEGORY' | 'PRODUCT_CATEGORY' | 'SUBCATEGORY';
  parentCategoryId?: string;
  shopCategoryId?: string;
  productCategoryId?: string;
  status: 'ACTIVE' | 'INACTIVE';
  description?: string;
  icon?: string;
  sortOrder: number;
  createdAt: Date;
  updatedAt: Date;
}
