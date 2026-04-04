import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EcommerceOrder } from 'src/schema/ecommerce-order/ecommerce-order.schema';
import { Order } from 'src/schema/order/order.schema';

export interface AdminDashboardStatsDto {
  totalProducts: number;
  totalOrders: number;
  totalShops: number;
  totalUsers: number;
  totalRevenue: number;
  totalProfit: number;
  totalLoss: number;
  monthlyRevenue: number[];
  monthlyOrders: number[];
  monthlyProfit: number[];
  monthlyLoss: number[];
  topProducts: Array<{ name: string; soldCount: number; revenue: number }>;
  recentOrders: Array<{
    id: string;
    departureCountry: string;
    arrivalCountry: string;
    createdAt: string;
  }>;
}

const MONTHS = 12;
/** Estimated margin when product cost is not stored (matches prior mock ~30%). */
const ESTIMATED_PROFIT_RATIO = 0.3;

@Injectable()
export class AdminDashboardService {
  constructor(
    @InjectModel(EcommerceOrder.name)
    private readonly ecommerceOrderModel: Model<EcommerceOrder>,
    @InjectModel(Order.name)
    private readonly orderModel: Model<Order>,
    @InjectModel('Product') private readonly productModel: Model<Record<string, unknown>>,
    @InjectModel('Shop') private readonly shopModel: Model<Record<string, unknown>>,
    @InjectModel('User') private readonly userModel: Model<Record<string, unknown>>,
  ) {}

  async getStats(): Promise<AdminDashboardStatsDto> {
    const year = new Date().getFullYear();
    const start = new Date(year, 0, 1);
    const end = new Date(year + 1, 0, 1);

    const [
      totalProducts,
      totalShops,
      totalUsers,
      totalEcomOrders,
      revenueAgg,
      lossAgg,
      monthlyRevOrders,
      monthlyOrderCounts,
      monthlyLossRows,
      topProductsAgg,
      recentTravelOrders,
    ] = await Promise.all([
      this.productModel.countDocuments({}).exec(),
      this.shopModel.countDocuments({}).exec(),
      this.userModel.countDocuments({ isDeleted: false }).exec(),
      this.ecommerceOrderModel
        .countDocuments({ isDeleted: { $ne: true } })
        .exec(),
      this.ecommerceOrderModel
        .aggregate([
          {
            $match: {
              isDeleted: { $ne: true },
              status: { $nin: ['cancelled', 'refunded'] },
            },
          },
          { $group: { _id: null, total: { $sum: '$total' } } },
        ])
        .exec(),
      this.ecommerceOrderModel
        .aggregate([
          {
            $match: {
              isDeleted: { $ne: true },
              status: { $in: ['cancelled', 'refunded'] },
            },
          },
          { $group: { _id: null, total: { $sum: '$total' } } },
        ])
        .exec(),
      this.ecommerceOrderModel
        .aggregate([
          {
            $match: {
              isDeleted: { $ne: true },
              status: { $nin: ['cancelled', 'refunded'] },
              createdAt: { $gte: start, $lt: end },
            },
          },
          {
            $group: {
              _id: { $month: '$createdAt' },
              revenue: { $sum: '$total' },
            },
          },
        ])
        .exec(),
      this.ecommerceOrderModel
        .aggregate([
          {
            $match: {
              isDeleted: { $ne: true },
              createdAt: { $gte: start, $lt: end },
            },
          },
          {
            $group: {
              _id: { $month: '$createdAt' },
              count: { $sum: 1 },
            },
          },
        ])
        .exec(),
      this.ecommerceOrderModel
        .aggregate([
          {
            $match: {
              isDeleted: { $ne: true },
              status: { $in: ['cancelled', 'refunded'] },
              createdAt: { $gte: start, $lt: end },
            },
          },
          {
            $group: {
              _id: { $month: '$createdAt' },
              loss: { $sum: '$total' },
            },
          },
        ])
        .exec(),
      this.ecommerceOrderModel
        .aggregate([
          {
            $match: {
              isDeleted: { $ne: true },
              items: { $exists: true, $not: { $size: 0 } },
            },
          },
          { $unwind: '$items' },
          {
            $group: {
              _id: {
                $ifNull: [
                  '$items.product.id',
                  { $concat: ['$items.product.name', '-', { $toString: '$items.price' }] },
                ],
              },
              name: {
                $first: {
                  $ifNull: ['$items.product.name', 'Product'],
                },
              },
              soldCount: { $sum: '$items.quantity' },
              revenue: {
                $sum: {
                  $multiply: ['$items.quantity', '$items.price'],
                },
              },
            },
          },
          { $sort: { revenue: -1 } },
          { $limit: 5 },
        ])
        .exec(),
      this.orderModel
        .find({ isDeleted: { $ne: true } })
        .sort({ createdAt: -1 })
        .limit(5)
        .select('id departureCountry arrivalCountry createdAt')
        .lean()
        .exec(),
    ]);

    const totalRevenue = Math.round(revenueAgg[0]?.total ?? 0);
    const totalLoss = Math.round(lossAgg[0]?.total ?? 0);
    const totalProfit = Math.round(totalRevenue * ESTIMATED_PROFIT_RATIO);

    const monthlyRevenue = Array<number>(MONTHS).fill(0);
    const monthlyOrders = Array<number>(MONTHS).fill(0);
    const monthlyProfit = Array<number>(MONTHS).fill(0);
    const monthlyLoss = Array<number>(MONTHS).fill(0);

    for (const row of monthlyRevOrders) {
      const m = (row._id as number) - 1;
      if (m >= 0 && m < MONTHS) {
        monthlyRevenue[m] = Math.round(row.revenue ?? 0);
        monthlyProfit[m] = Math.round(monthlyRevenue[m] * ESTIMATED_PROFIT_RATIO);
      }
    }

    for (const row of monthlyOrderCounts) {
      const m = (row._id as number) - 1;
      if (m >= 0 && m < MONTHS) {
        monthlyOrders[m] = row.count ?? 0;
      }
    }

    for (const row of monthlyLossRows) {
      const m = (row._id as number) - 1;
      if (m >= 0 && m < MONTHS) {
        monthlyLoss[m] = Math.round(row.loss ?? 0);
      }
    }

    const topProductsMapped = topProductsAgg.map((p) => ({
      name: String(p.name ?? 'Product'),
      soldCount: Math.round(p.soldCount ?? 0),
      revenue: Math.round(p.revenue ?? 0),
    }));

    const recentOrdersMapped = recentTravelOrders.map((o) => {
      const row = o as Record<string, unknown>;
      const created = row['createdAt'];
      return {
        id: String(o.id ?? ''),
        departureCountry: String(o.departureCountry ?? ''),
        arrivalCountry: String(o.arrivalCountry ?? ''),
        createdAt: created
          ? new Date(created as string | Date).toISOString()
          : new Date(0).toISOString(),
      };
    });

    return {
      totalProducts,
      totalOrders: totalEcomOrders,
      totalShops,
      totalUsers,
      totalRevenue,
      totalProfit,
      totalLoss,
      monthlyRevenue,
      monthlyOrders,
      monthlyProfit,
      monthlyLoss,
      topProducts: topProductsMapped,
      recentOrders: recentOrdersMapped,
    };
  }
}
