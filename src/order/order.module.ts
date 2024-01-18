import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from 'src/schema/order/order.schema';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';

@Module({
    imports: [
      
        MongooseModule.forRoot("mongodb://127.0.0.1:27017/exampleChatNew"),
        MongooseModule.forFeature([{
          name: Order.name,
          schema: OrderSchema,
        },
        // {
        //   name: UserData.name,
        //   schema: UserDataSchema,
        // }
        ])
      ],
      controllers: [OrderController],
      providers: [ OrderService,Order],
      exports: [OrderService]
})
export class OrderModule {}
