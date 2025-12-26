import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { generateStringId } from 'src/utils/utils';

export type EcommerceOrderDocument = HydratedDocument<EcommerceOrder>;

@Schema()
export class EcommerceOrder {
  @Prop({ type: String, default: generateStringId })
  id: string;

  @Prop({ type: String, required: true, unique: true })
  orderNumber: string;

  @Prop({ type: String, required: true })
  buyerId: string;

  @Prop({ type: String, required: true })
  sellerId: string;

  @Prop({ type: String, required: true })
  shopId: string;

  @Prop({ type: Array, required: true })
  items: Array<{
    id: string;
    product: any;
    quantity: number;
    price: number;
    selectedSize?: string;
    selectedColor?: string;
  }>;

  @Prop({ type: Number, required: true, default: 0 })
  subtotal: number;

  @Prop({ type: Number, required: true, default: 0 })
  deliveryFee: number;

  @Prop({ type: Number, required: true, default: 0 })
  discount: number;

  @Prop({ type: Number, required: true, default: 0 })
  total: number;

  @Prop({ type: String, default: 'PKR' })
  currency: string;

  @Prop({
    type: String,
    enum: ['pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled', 'refunded'],
    default: 'pending',
  })
  status: string;

  @Prop({
    type: String,
    enum: ['cashOnDelivery', 'stripe', 'paypal', 'applePay', 'googlePay'],
    default: 'cashOnDelivery',
  })
  paymentMethod: string;

  @Prop({
    type: String,
    enum: ['pending', 'paid', 'failed', 'refunded'],
    default: 'pending',
  })
  paymentStatus: string;

  @Prop({ type: String, required: false })
  paymentIntentId?: string; // For Stripe

  @Prop({
    type: {
      fullName: String,
      phone: String,
      address: String,
      city: String,
      state: String,
      zipCode: String,
      country: String,
    },
    required: true,
  })
  shippingAddress: {
    fullName: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };

  @Prop({ type: String, required: false })
  notes?: string;

  @Prop({ type: Date, required: false })
  deliveredAt?: Date;

  @Prop({ type: Date, required: false })
  cancelledAt?: Date;

  @Prop({ type: Boolean, default: false })
  isDeleted: boolean;
}

export const EcommerceOrderSchema = SchemaFactory.createForClass(EcommerceOrder);

EcommerceOrderSchema.set('timestamps', true);
EcommerceOrderSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

// Generate unique order number
EcommerceOrderSchema.pre('save', async function (next) {
  if (!this.orderNumber) {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 10000);
    this.orderNumber = `ORD-${timestamp}-${random}`;
  }
  next();
});

