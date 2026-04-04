import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EcommerceOrder, EcommerceOrderDocument } from 'src/schema/ecommerce-order/ecommerce-order.schema';
import { ProductReview, ProductReviewDocument } from 'src/schema/product-review/product-review.schema';
import { Product } from 'src/interface/product/product.interface';
import { Shop } from 'src/interface/shop/shop.interface';
import { CreateProductReviewDto } from './dto/create-product-review.dto';

function productIdFromLineItem(item: any): string | null {
  const p = item?.product;
  if (!p) return null;
  if (typeof p === 'string') return p;
  return String(p.id ?? p._id ?? '');
}

@Injectable()
export class ProductReviewService {
  constructor(
    @InjectModel(ProductReview.name)
    private readonly reviewModel: Model<ProductReviewDocument>,
    @InjectModel(EcommerceOrder.name)
    private readonly orderModel: Model<EcommerceOrderDocument>,
    @InjectModel('Product') private readonly productModel: Model<Product>,
    @InjectModel('Shop') private readonly shopModel: Model<Shop>,
  ) {}

  async createReview(buyerId: string, dto: CreateProductReviewDto) {
    const order = await this.orderModel
      .findOne({ id: dto.orderId, isDeleted: false })
      .exec();
    if (!order) {
      throw new NotFoundException('Order not found');
    }
    if (order.buyerId !== buyerId) {
      throw new ForbiddenException('You can only review your own orders');
    }
    if (order.status !== 'delivered') {
      throw new BadRequestException('You can only review delivered orders');
    }

    const items = order.items || [];
    let line: any = null;
    for (const it of items) {
      const pid = productIdFromLineItem(it);
      if (pid === dto.productId) {
        line = it;
        break;
      }
    }
    if (!line) {
      throw new BadRequestException('Product is not part of this order');
    }

    const product = await this.productModel.findOne({ _id: dto.productId }).exec();
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    if (String(product.shopId) !== String(order.shopId)) {
      throw new BadRequestException('Product does not belong to this order shop');
    }

    const exists = await this.reviewModel
      .findOne({ orderId: dto.orderId, productId: dto.productId })
      .exec();
    if (exists) {
      throw new ConflictException('You already reviewed this product for this order');
    }

    const doc = await new this.reviewModel({
      productId: dto.productId,
      shopId: String(order.shopId),
      buyerId,
      orderId: dto.orderId,
      rating: dto.rating,
      comment: dto.comment?.trim() ?? '',
    }).save();

    await this.recalculateProductStats(dto.productId);
    await this.recalculateShopStats(String(order.shopId));

    return doc;
  }

  async listReviewsForProduct(productId: string, limit = 20, offset = 0) {
    const safeLimit = Math.min(Math.max(limit, 1), 100);
    const [reviews, total] = await Promise.all([
      this.reviewModel
        .find({ productId })
        .sort({ createdAt: -1 })
        .skip(offset)
        .limit(safeLimit)
        .lean()
        .exec(),
      this.reviewModel.countDocuments({ productId }),
    ]);
    return { reviews, total };
  }

  async getReviewableForOrder(orderId: string, buyerId: string) {
    const order = await this.orderModel.findOne({ id: orderId, isDeleted: false }).exec();
    if (!order) {
      throw new NotFoundException('Order not found');
    }
    if (order.buyerId !== buyerId) {
      throw new ForbiddenException('Forbidden');
    }
    if (order.status !== 'delivered') {
      return {
        canReview: false,
        reason: 'Order is not delivered yet',
        items: [],
      };
    }

    const items = order.items || [];
    const out: {
      productId: string;
      productName: string;
      image: string;
      alreadyReviewed: boolean;
    }[] = [];

    for (const it of items) {
      const pid = productIdFromLineItem(it);
      if (!pid) continue;
      const p = it.product;
      const name =
        typeof p === 'object' && p !== null && 'name' in p
          ? String((p as any).name ?? 'Product')
          : 'Product';
      let image = '';
      if (typeof p === 'object' && p !== null && 'images' in p) {
        const imgs = (p as any).images;
        if (Array.isArray(imgs) && imgs.length > 0) image = String(imgs[0]);
      }
      const reviewed = await this.reviewModel
        .exists({ orderId, productId: pid })
        .exec();
      out.push({
        productId: pid,
        productName: name,
        image,
        alreadyReviewed: Boolean(reviewed),
      });
    }

    return {
      canReview: true,
      items: out,
    };
  }

  private async recalculateProductStats(productId: string) {
    const agg = await this.reviewModel
      .aggregate([
        { $match: { productId } },
        {
          $group: {
            _id: '$productId',
            avg: { $avg: '$rating' },
            count: { $sum: 1 },
          },
        },
      ])
      .exec();
    const avg = agg.length ? Math.round(agg[0].avg * 10) / 10 : 0;
    const count = agg.length ? agg[0].count : 0;
    await this.productModel.updateOne(
      { _id: productId },
      { $set: { rating: avg, reviewCount: count } },
    );
  }

  /** Shop rating = average of all product-review stars in the shop; reviewCount = total reviews. */
  private async recalculateShopStats(shopId: string) {
    const agg = await this.reviewModel
      .aggregate([
        { $match: { shopId } },
        {
          $group: {
            _id: '$shopId',
            avg: { $avg: '$rating' },
            count: { $sum: 1 },
          },
        },
      ])
      .exec();
    const avg = agg.length ? Math.round(agg[0].avg * 10) / 10 : 0;
    const count = agg.length ? agg[0].count : 0;
    await this.shopModel.updateOne(
      { _id: shopId },
      { $set: { rating: avg, reviewCount: count } },
    );
  }
}
