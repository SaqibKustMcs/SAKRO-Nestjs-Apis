import { Document } from 'mongoose';
//jknkn

export interface FcmTokenEntry {
  token: string;
  appId: string;
  deviceId: string;
  updatedAt: Date;
}

export interface User extends Document {
  id: string;
  email: string;
  password: string;
  name: string;
  pic: string;
  color: string;
  isEmailVerified: boolean;
  isDeleted: boolean;
  
  // Profile completion fields
  fullName: string;
  phoneNumber: string;
  village: string;
  country: string;
  homeAddress: string;
  profilePic: string;
  zipcode: string;
  
  // Shopping app specific fields
  userLevel: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  userStatus: 'active' | 'inactive' | 'suspended';
  userRole: 'normal' | 'seller' | 'admin';
  sellOrders: number;
  buyOrders: number;
  wishlist: string[];
  cart: string[];
  savedPosts: string[]; // Array of saved post IDs
  
  // Two-Factor Authentication fields
  twoFactorSecret: string | null;
  isTwoFactorEnabled: boolean;
  
  // Biometric Authentication field
  isBiometric: boolean;

  fcmTokens: FcmTokenEntry[];
  
  // Timestamps
  createdAt: Date;
  updatedAt: Date;
}
