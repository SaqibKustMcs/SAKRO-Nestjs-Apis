import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EcommerceOrder, EcommerceOrderDocument } from 'src/schema/ecommerce-order/ecommerce-order.schema';
import { CreateEcommerceOrderDTO, GetAllOrdersDTO, UpdateOrderStatusDTO } from './dto/ecommerce-order.dto';

@Injectable()
export class EcommerceOrderService {
  constructor(
    @InjectModel(EcommerceOrder.name) private ecommerceOrderModel: Model<EcommerceOrderDocument>,
  ) {}

  async createOrder(createOrderDTO: CreateEcommerceOrderDTO): Promise<EcommerceOrder> {
    try {
      const order = new this.ecommerceOrderModel(createOrderDTO);
      return await order.save();
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

