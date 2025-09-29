import { Document } from 'mongoose';

export interface ProductDimensions {
  length: number;
  width: number;
  height: number;
}

export interface Product extends Document {
  id: string;
  shopId: string;
  shopCategoryId: string;
  productCategoryId: string;
  subCategoryId?: string;
  name: string;
  description?: string;
  images: string[];
  video?: string;
  price: number;
  discountPrice?: number;
  currency: string;
  sku?: string;
  stock: number;
  unit: string;
  status: 'ACTIVE' | 'INACTIVE' | 'OUT_OF_STOCK';
  tags: string[];
  isFeatured: boolean;
  weight: number;
  dimensions: ProductDimensions;
  warranty?: string;
  brand?: string;
  model?: string;
  color?: string;
  size?: string;
  material?: string;
  condition: 'NEW' | 'USED' | 'REFURBISHED';
  rating: number;
  reviewCount: number;
  viewCount: number;
  soldCount: number;
  createdAt: Date;
  updatedAt: Date;
}
