import { Document } from 'mongoose';

export interface LoginHistory extends Document {
  id: string;
  userId: string;
  email: string;
  deviceId?: string;
  deviceName?: string;
  deviceType?: 'mobile' | 'tablet' | 'desktop' | 'other';
  platform?: string;
  browser?: string;
  ipAddress: string;
  location?: string;
  loginMethod: 'password' | '2fa' | 'biometric';
  status: 'success' | 'failed' | 'blocked';
  failureReason?: string;
  loginAt: Date;
  createdAt: Date;
}

