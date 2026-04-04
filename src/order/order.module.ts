import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from 'src/schema/order/order.schema';
import { EcommerceOrder, EcommerceOrderSchema } from 'src/schema/ecommerce-order/ecommerce-order.schema';
import { ShopSchema } from 'src/schema/shop/shop.schema';
import { UserSchema } from 'src/schema/user/user.schema';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { EcommerceOrderController } from './ecommerce-order.controller';
import { EcommerceOrderService } from './ecommerce-order.service';
import { NotificationModule } from 'src/notification/notification.module';
import { ProductModule } from 'src/product/product.module';

@Module({
    imports: [
        NotificationModule,
        ProductModule,
        MongooseModule.forFeature([
          {
            name: Order.name,
            schema: OrderSchema,
          },
          {
            name: EcommerceOrder.name,
            schema: EcommerceOrderSchema,
          },
          { name: 'Shop', schema: ShopSchema },
          { name: 'User', schema: UserSchema },
        ])
      ],
      controllers: [OrderController, EcommerceOrderController],
      providers: [ OrderService, Order, EcommerceOrderService],
      exports: [OrderService, EcommerceOrderService]
})
export class OrderModule {}
