import { Document } from 'mongoose';

export interface Post extends Document {
  id: string;
  name: string;
  pic: string;
  color: string;
  isEmailVerified: boolean;
  isDeleted: boolean;
}