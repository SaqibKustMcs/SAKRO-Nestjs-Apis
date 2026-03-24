import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from 'src/schema/order/order.schema';
import { EcommerceOrder, EcommerceOrderSchema } from 'src/schema/ecommerce-order/ecommerce-order.schema';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { EcommerceOrderController } from './ecommerce-order.controller';
import { EcommerceOrderService } from './ecommerce-order.service';

@Module({
    imports: [
        MongooseModule.forFeature([
          {
            name: Order.name,
            schema: OrderSchema,
          },
          {
            name: EcommerceOrder.name,
            schema: EcommerceOrderSchema,
          },
        // {
        //   name: UserData.name,
        //   schema: UserDataSchema,
        // }
        ])
      ],
      controllers: [OrderController, EcommerceOrderController],
      providers: [ OrderService, Order, EcommerceOrderService],
      exports: [OrderService, EcommerceOrderService]
})
export class OrderModule {}
