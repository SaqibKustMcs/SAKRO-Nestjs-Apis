import { Document } from 'mongoose';

export interface Otp extends Document {
  id?: string;
  otp: string;
  type: string;
  userID: string;
  expiryTime: number;
  isUsed: boolean;
}
