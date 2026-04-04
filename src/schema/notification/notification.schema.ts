import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type NotificationDocument = Notification & Document;

@Schema({ timestamps: true })
export class Notification {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true, index: true })
  userId: Types.ObjectId;

  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String, required: true })
  body: string;

  @Prop({
    type: String,
    enum: ['order', 'chat', 'promotion', 'system', 'shop'],
    default: 'system',
  })
  type: string;

  @Prop({ type: Boolean, default: false, index: true })
  read: boolean;

  @Prop({ type: String, default: '' })
  imageUrl: string;

  /** Optional deep link or related ids (orderId, shopId, etc.) */
  @Prop({ type: Object, default: {} })
  meta: Record<string, unknown>;
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);

NotificationSchema.index({ userId: 1, createdAt: -1 });
