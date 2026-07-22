import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  EcommerceOrder,
  EcommerceOrderSchema,
} from 'src/schema/ecommerce-order/ecommerce-order.schema';
import { ShopSchema } from 'src/schema/shop/shop.schema';
import { UserSchema } from 'src/schema/user/user.schema';
import { StripeService } from './stripe.service';
import { StripeConnectController } from './stripe-connect.controller';
import { StripeOrderController } from './stripe-order.controller';
import { StripeWebhookController } from './stripe-webhook.controller';
import { StripeConfigController } from './stripe-config.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: EcommerceOrder.name, schema: EcommerceOrderSchema },
      { name: 'Shop', schema: ShopSchema },
      { name: 'User', schema: UserSchema },
    ]),
  ],
  controllers: [
    StripeConnectController,
    StripeOrderController,
    StripeWebhookController,
    StripeConfigController,
  ],
  providers: [StripeService],
  exports: [StripeService],
})
export class StripeModule {}
