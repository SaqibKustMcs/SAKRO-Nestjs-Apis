import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { generateStringId } from 'src/utils/utils';

export type PostReportDocument = HydratedDocument<PostReport>;

@Schema()
export class PostReport {
  @Prop({ type: String, default: generateStringId })
  id: string;

  @Prop({ type: String, required: true, ref: 'Post' })
  postId: string;

  @Prop({ type: String, required: true, ref: 'User' })
  reportedBy: string; // User who reported the post

  @Prop({ 
    type: String, 
    required: true,
    enum: ['spam', 'inappropriate', 'harassment', 'false_information', 'violence', 'other']
  })
  reason: 'spam' | 'inappropriate' | 'harassment' | 'false_information' | 'violence' | 'other';

  @Prop({ type: String, default: '' })
  description: string; // Optional additional details

  @Prop({ type: Boolean, default: false })
  isResolved: boolean; // Whether the report has been reviewed/resolved

  @Prop({ type: String, default: '' })
  resolvedBy: string; // Admin who resolved the report

  @Prop({ type: Date, default: null })
  resolvedAt: Date;

  @Prop({ type: Boolean, default: false })
  isDeleted: boolean;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;

  @Prop({ type: Date, default: Date.now })
  updatedAt: Date;
}

export const PostReportSchema = SchemaFactory.createForClass(PostReport);

PostReportSchema.set('timestamps', true);
PostReportSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

// Add indexes for better performance
PostReportSchema.index({ postId: 1 });
PostReportSchema.index({ reportedBy: 1 });
PostReportSchema.index({ isResolved: 1 });
PostReportSchema.index({ createdAt: -1 });

