import { Document, Types } from 'mongoose';

export interface Shop extends Document {
  id: string;
  shopName: string;
  ownerId: string;
  user: string;
  villageId: string;
  categoryId: string;
  profileImage: string;
  coverImage: string;
  description?: string;
  likes: number;
  followers: string[];
  products: string[];
  rating: number;
  reviewCount?: number;
  reviews: string[];
  isVerified: boolean;
  badges?: string[];
  status: 'active' | 'suspended' | 'closed';
  createdAt: Date;
  updatedAt: Date;
}
