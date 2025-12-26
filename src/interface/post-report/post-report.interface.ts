import { Document } from 'mongoose';

export interface PostReport extends Document {
  id: string;
  postId: string;
  reportedBy: string;
  reason: 'spam' | 'inappropriate' | 'harassment' | 'false_information' | 'violence' | 'other';
  description: string;
  isResolved: boolean;
  resolvedBy: string;
  resolvedAt: Date | null;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

