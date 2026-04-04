import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ProductReviewService } from './product-review.service';
import { ProductReviewWriteController } from './product-review.controller';
import { Product, ProductSchema } from 'src/schema/product/product.schema';
import { Shop, ShopSchema } from 'src/schema/shop/shop.schema';
import { Category, CategorySchema } from 'src/schema/category/category.schema';
import { EcommerceOrder, EcommerceOrderSchema } from 'src/schema/ecommerce-order/ecommerce-order.schema';
import { ProductReview, ProductReviewSchema } from 'src/schema/product-review/product-review.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Product', schema: ProductSchema },
      { name: 'Shop', schema: ShopSchema },
      { name: 'Category', schema: CategorySchema },
      { name: EcommerceOrder.name, schema: EcommerceOrderSchema },
      { name: ProductReview.name, schema: ProductReviewSchema },
    ]),
  ],
  controllers: [ProductController, ProductReviewWriteController],
  providers: [ProductService, ProductReviewService],
  exports: [ProductService, ProductReviewService],
})
export class ProductModule {}
