import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsEnum, IsOptional, IsArray, ValidateNested, IsObject } from 'class-validator';
import { Type, Transform } from 'class-transformer';

export class ShippingAddressDTO {
  @ApiProperty()
  @IsString()
  fullName: string;

  @ApiProperty()
  @IsString()
  phone: string;

  @ApiProperty()
  @IsString()
  address: string;

  @ApiProperty()
  @IsString()
  city: string;

  @ApiProperty()
  @IsString()
  state: string;

  @ApiProperty()
  @IsString()
  zipCode: string;

  @ApiProperty()
  @IsString()
  country: string;
}

export class OrderItemDTO {
  @ApiProperty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsObject()
  product: any;

  @ApiProperty()
  @IsNumber()
  quantity: number;

  @ApiProperty()
  @IsNumber()
  price: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  selectedSize?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  selectedColor?: string;
}

export class CreateEcommerceOrderDTO {
  @ApiProperty()
  @IsString()
  buyerId: string;

  @ApiProperty()
  @IsString()
  sellerId: string;

  @ApiProperty()
  @IsString()
  shopId: string;

  @ApiProperty({ type: [OrderItemDTO] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderItemDTO)
  items: OrderItemDTO[];

  @ApiProperty()
  @IsNumber()
  subtotal: number;

  @ApiProperty()
  @IsNumber()
  deliveryFee: number;

  @ApiProperty()
  @IsNumber()
  discount: number;

  @ApiProperty()
  @IsNumber()
  total: number;

  @ApiProperty({ default: 'PKR' })
  @IsOptional()
  @IsString()
  currency?: string;

  @ApiProperty({ enum: ['cashOnDelivery', 'stripe', 'paypal', 'applePay', 'googlePay'], default: 'cashOnDelivery' })
  @IsEnum(['cashOnDelivery', 'stripe', 'paypal', 'applePay', 'googlePay'])
  paymentMethod: string;

  @ApiProperty({ type: ShippingAddressDTO })
  @ValidateNested()
  @Type(() => ShippingAddressDTO)
  shippingAddress: ShippingAddressDTO;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  notes?: string;
}

export class UpdateOrderStatusDTO {
  @ApiProperty({ enum: ['pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled', 'refunded'] })
  @IsEnum(['pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled', 'refunded'])
  status: string;
}

export class GetAllOrdersDTO {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  userId?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  shopId?: string;

  @ApiProperty({ required: false, enum: ['pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled', 'refunded'] })
  @IsOptional()
  @IsEnum(['pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled', 'refunded'])
  status?: string;

  @ApiProperty({ default: 0 })
  @IsOptional()
  @Transform(({ value }) => {
    if (value === null || value === undefined || value === '') return 0;
    const parsed = parseInt(value, 10);
    return isNaN(parsed) ? 0 : parsed;
  })
  @IsNumber()
  offset?: number;

  @ApiProperty({ default: 20 })
  @IsOptional()
  @Transform(({ value }) => {
    if (value === null || value === undefined || value === '') return 20;
    const parsed = parseInt(value, 10);
    return isNaN(parsed) ? 20 : parsed;
  })
  @IsNumber()
  limit?: number;
}

export class CreateStripePaymentIntentDTO {
  @ApiProperty()
  @IsString()
  orderId: string;

  @ApiProperty()
  @IsNumber()
  amount: number;

  @ApiProperty()
  @IsString()
  currency: string;
}

export class ConfirmStripePaymentDTO {
  @ApiProperty()
  @IsString()
  orderId: string;

  @ApiProperty()
  @IsString()
  paymentIntentId: string;
}

