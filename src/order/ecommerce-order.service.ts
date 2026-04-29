import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EcommerceOrder, EcommerceOrderDocument } from 'src/schema/ecommerce-order/ecommerce-order.schema';
import { Shop } from 'src/interface/shop/shop.interface';
import { User } from 'src/interface/user/user.interface';
import { NotificationService } from 'src/notification/notification.service';
import { CreateEcommerceOrderDTO, GetAllOrdersDTO, UpdateOrderStatusDTO } from './dto/ecommerce-order.dto';

@Injectable()
export class EcommerceOrderService {
  constructor(
    @InjectModel(EcommerceOrder.name) private ecommerceOrderModel: Model<EcommerceOrderDocument>,
    @InjectModel('Shop') private readonly shopModel: Model<Shop>,
    @InjectModel('User') private readonly userModel: Model<User>,
    private readonly notificationService: NotificationService,
  ) {}

  /** Resolve shop + buyer display names for admin responses. */
  private async enrichOrdersForAdmin(
    orders: Record<string, unknown>[],
  ): Promise<Record<string, unknown>[]> {
    if (!orders.length) return [];
    const shopIds = [...new Set(orders.map((o) => o['shopId'] as string).filter(Boolean))];
    const buyerIds = [...new Set(orders.map((o) => o['buyerId'] as string).filter(Boolean))];
    const [shopDocs, userDocs] = await Promise.all([
      shopIds.length
        ? this.shopModel.find({ _id: { $in: shopIds } }).select('shopName').lean().exec()
        : [],
      buyerIds.length
        ? this.userModel.find({ _id: { $in: buyerIds } }).select('fullName name email').lean().exec()
        : [],
    ]);
    const shopMap = new Map<string, string>();
    for (const s of shopDocs as { id?: string; _id?: string; shopName?: string }[]) {
      const id = s.id ?? s._id?.toString();
      if (id) shopMap.set(id, String(s.shopName ?? '').trim() || '—');
    }
    const userMap = new Map<string, string>();
    for (const u of userDocs as { id?: string; _id?: string; fullName?: string; name?: string; email?: string }[]) {
      const id = u.id ?? u._id?.toString();
      const label =
        [u.fullName, u.name].find((x) => x && String(x).trim()) || u.email || '';
      if (id) userMap.set(id, String(label).trim() || '—');
    }
    return orders.map((o) => ({
      ...o,
      shopName: shopMap.get(o['shopId'] as string) ?? '—',
      buyerName: userMap.get(o['buyerId'] as string) ?? '—',
    }));
  }

  /** Single order with shopName / buyerName for admin APIs. */
  async wrapOrderForAdmin(order: unknown): Promise<Record<string, unknown>> {
    const doc = order as EcommerceOrderDocument & { toObject?: () => Record<string, unknown> };
    const plain: Record<string, unknown> =
      doc && typeof doc.toObject === 'function'
        ? doc.toObject()
        : { ...(order as Record<string, unknown>) };
    const [out] = await this.enrichOrdersForAdmin([plain]);
    return out;
  }

  async getOrderByIdWithNames(orderId: string): Promise<Record<string, unknown>> {
    const order = await this.ecommerceOrderModel
      .findOne({ id: orderId, isDeleted: false })
      .lean()
      .exec();
    if (!order) {
      throw new NotFoundException('Order not found');
    }
    const [enriched] = await this.enrichOrdersForAdmin([order as Record<string, unknown>]);
    return enriched;
  }

  async createOrder(createOrderDTO: CreateEcommerceOrderDTO): Promise<EcommerceOrder> {
    try {
      const order = new this.ecommerceOrderModel(createOrderDTO);
      const saved = await order.save();

      try {
        await this.notificationService.createForUser(saved.sellerId, {
          title: 'New order',
          body: `Order ${saved.orderNumber} — ${saved.currency} ${saved.total.toFixed(0)}`,
          type: 'order',
          meta: { orderId: saved.id, shopId: saved.shopId },
          pushSource: 'order',
        });
        await this.notificationService.createForUser(saved.buyerId, {
          title: 'Order placed',
          body: `Your order ${saved.orderNumber} was received.`,
          type: 'order',
          meta: { orderId: saved.id, shopId: saved.shopId },
          pushSource: 'order',
        });
      } catch (notifyErr) {
        console.error('⚠️ Notification create failed (order still saved):', notifyErr);
      }

      return saved;
    } catch (error) {
      console.error('❌ Error creating e-commerce order:', error);
      throw new BadRequestException(error?.message || 'Failed to create order');
    }
  }

  async getAllOrders(query: GetAllOrdersDTO): Promise<EcommerceOrder[]> {
    try {
      const filter: any = { isDeleted: false };

      if (query.userId) {
        filter.buyerId = query.userId;
      }

      if (query.shopId) {
        filter.shopId = query.shopId;
      }

      if (query.status) {
        filter.status = query.status;
      }

      const offset = query.offset || 0;
      const limit = query.limit || 20;

      const orders = await this.ecommerceOrderModel
        .find(filter)
        .sort({ createdAt: -1 })
        .skip(offset)
        .limit(limit)
        .exec();

      return orders;
    } catch (error) {
      console.error('❌ Error fetching e-commerce orders:', error);
      throw new BadRequestException(error?.message || 'Failed to fetch orders');
    }
  }

  /** Admin: all non-deleted orders with optional filters, pagination, and total count. */
  async getAllOrdersForAdmin(query: {
    search?: string;
    userId?: string;
    shopId?: string;
    status?: string;
    limit?: number;
    offset?: number;
  }): Promise<{ orders: EcommerceOrder[]; total: number }> {
    try {
      const filter: Record<string, unknown> = { isDeleted: false };

      if (query.userId) {
        filter['buyerId'] = query.userId;
      }
      if (query.shopId) {
        filter['shopId'] = query.shopId;
      }
      if (query.status) {
        filter['status'] = query.status;
      }

      const search = query.search?.trim();
      if (search) {
        const safe = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        filter['$or'] = [
          { orderNumber: { $regex: safe, $options: 'i' } },
          { id: search },
          { buyerId: search },
          { shopId: search },
        ];
      }

      const offset = query.offset ?? 0;
      const limit = Math.min(query.limit ?? 20, 100);

      const [orders, total] = await Promise.all([
        this.ecommerceOrderModel
          .find(filter)
          .sort({ createdAt: -1 })
          .skip(offset)
          .limit(limit)
          .lean()
          .exec(),
        this.ecommerceOrderModel.countDocuments(filter),
      ]);

      const enriched = await this.enrichOrdersForAdmin(orders as Record<string, unknown>[]);
      return { orders: enriched as unknown as EcommerceOrder[], total };
    } catch (error) {
      console.error('❌ Error fetching admin e-commerce orders:', error);
      throw new BadRequestException(error?.message || 'Failed to fetch orders');
    }
  }

  async getOrderById(orderId: string): Promise<EcommerceOrder | null> {
    try {
      const order = await this.ecommerceOrderModel
        .findOne({ id: orderId, isDeleted: false })
        .exec();

      if (!order) {
        throw new NotFoundException('Order not found');
      }

      return order;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      console.error('❌ Error fetching e-commerce order:', error);
      throw new BadRequestException(error?.message || 'Failed to fetch order');
    }
  }

  async updateOrderStatus(orderId: string, status: string): Promise<EcommerceOrder> {
    try {
      const order = await this.ecommerceOrderModel.findOne({ id: orderId, isDeleted: false }).exec();

      if (!order) {
        throw new NotFoundException('Order not found');
      }

      order.status = status;

      if (status === 'delivered') {
        order.deliveredAt = new Date();
      } else if (status === 'cancelled') {
        order.cancelledAt = new Date();
      }

      return await order.save();
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      console.error('❌ Error updating order status:', error);
      throw new BadRequestException(error?.message || 'Failed to update order status');
    }
  }

  async cancelOrder(orderId: string): Promise<EcommerceOrder> {
    try {
      const order = await this.ecommerceOrderModel.findOne({ id: orderId, isDeleted: false }).exec();

      if (!order) {
        throw new NotFoundException('Order not found');
      }

      if (order.status === 'delivered' || order.status === 'cancelled') {
        throw new BadRequestException('Cannot cancel order with current status');
      }

      order.status = 'cancelled';
      order.cancelledAt = new Date();

      return await order.save();
    } catch (error) {
      if (error instanceof NotFoundException || error instanceof BadRequestException) {
        throw error;
      }
      console.error('❌ Error cancelling order:', error);
      throw new BadRequestException(error?.message || 'Failed to cancel order');
    }
  }
}

