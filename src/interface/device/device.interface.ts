import { Document } from 'mongoose';

export interface Device extends Document {
  id: string;
  userId: string;
  deviceId: string; // Unique identifier for the device
  deviceName: string; // e.g., "iPhone 13 Pro", "Samsung Galaxy S21"
  deviceType: 'mobile' | 'tablet' | 'desktop' | 'other';
  platform: string; // e.g., "iOS", "Android", "Windows", "MacOS", "Linux"
  browser: string; // e.g., "Chrome", "Safari", "Firefox"
  ipAddress: string;
  location?: string; // City, Country
  lastActive: Date;
  isCurrentDevice: boolean;
  loginToken: string; // JWT token associated with this device
  fcmToken?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

