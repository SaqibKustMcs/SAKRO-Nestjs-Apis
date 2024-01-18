import { Document } from 'mongoose';

export interface User extends Document {
  id: string;
  email: string;
  password: string;
  name: string;
  pic: string;
  color: string;
  isEmailVerified: boolean;
  isDeleted: boolean;
}
