import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { generateStringId } from 'src/utils/utils';

export type ProductReviewDocument = HydratedDocument<ProductReview>;

@Schema({ collection: 'product_reviews', timestamps: true })
export class ProductReview {
  @Prop({ type: String, default: generateStringId })
  id: string;

  @Prop({ type: String, required: true, index: true })
  productId: string;

  @Prop({ type: String, required: true, index: true })
  shopId: string;

  @Prop({ type: String, required: true, index: true })
  buyerId: string;

  @Prop({ type: String, required: true, index: true })
  orderId: string;

  @Prop({ type: Number, required: true, min: 1, max: 5 })
  rating: number;

  @Prop({ type: String, default: '' })
  comment: string;
}

export const ProductReviewSchema = SchemaFactory.createForClass(ProductReview);

ProductReviewSchema.index({ orderId: 1, productId: 1 }, { unique: true });
ProductReviewSchema.index({ shopId: 1, createdAt: -1 });

ProductReviewSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (_doc, ret) {
    delete ret._id;
  },
});
