import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminAuthController } from './admin-auth.controller';
import { AdminUsersController } from './admin-users.controller';
import { AdminDashboardController } from './admin-dashboard.controller';
import { AdminDashboardService } from './admin-dashboard.service';
import { AdminProductsController } from './admin-products.controller';
import { AdminOrdersController } from './admin-orders.controller';
import { AdminShopsController } from './admin-shops.controller';
import { ProductModule } from 'src/product/product.module';
import { OrderModule } from 'src/order/order.module';
import { ShopModule } from 'src/shop/shop.module';
import { EcommerceOrder, EcommerceOrderSchema } from 'src/schema/ecommerce-order/ecommerce-order.schema';
import { Order, OrderSchema } from 'src/schema/order/order.schema';
import { ProductSchema } from 'src/schema/product/product.schema';
import { ShopSchema } from 'src/schema/shop/shop.schema';
import { UserSchema } from 'src/schema/user/user.schema';

/** Auth is registered once via `AuthModule.forRoot()` in AppModule (global). */
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: EcommerceOrder.name, schema: EcommerceOrderSchema },
      { name: Order.name, schema: OrderSchema },
      { name: 'Product', schema: ProductSchema },
      { name: 'Shop', schema: ShopSchema },
      { name: 'User', schema: UserSchema },
    ]),
    ProductModule,
    OrderModule,
    ShopModule,
  ],
  controllers: [
    AdminAuthController,
    AdminUsersController,
    AdminDashboardController,
    AdminProductsController,
    AdminOrdersController,
    AdminShopsController,
  ],
  providers: [AdminDashboardService],
})
export class AdminModule {}

