import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ShopController } from './shop.controller';
import { ShopService } from './shop.service';
import { Shop, ShopSchema } from 'src/schema/shop/shop.schema';
import { ShopCategory, ShopCategorySchema } from 'src/schema/shop/shop-category.schema';
import { User, UserSchema } from 'src/schema/user/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Shop', schema: ShopSchema },
      { name: 'ShopCategory', schema: ShopCategorySchema },
      { name: 'User', schema: UserSchema },
    ]),
  ],
  controllers: [ShopController],
  providers: [ShopService],
  exports: [ShopService],
})
export class ShopModule {}
