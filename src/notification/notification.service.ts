import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Notification, NotificationDocument } from 'src/schema/notification/notification.schema';

@Injectable()
export class NotificationService {
  constructor(
    @InjectModel(Notification.name)
    private readonly notificationModel: Model<NotificationDocument>,
  ) {}

  async listForUser(userId: string, limit = 50, offset = 0) {
    const filter = { userId: new Types.ObjectId(userId) };
    const [items, total] = await Promise.all([
      this.notificationModel
        .find(filter)
        .sort({ createdAt: -1 })
        .skip(offset)
        .limit(Math.min(limit, 100))
        .lean()
        .exec(),
      this.notificationModel.countDocuments(filter),
    ]);
    return { items, total, limit, offset };
  }

  async unreadCount(userId: string) {
    return this.notificationModel.countDocuments({
      userId: new Types.ObjectId(userId),
      read: false,
    });
  }

  async markRead(userId: string, id: string) {
    const doc = await this.notificationModel.findOneAndUpdate(
      { _id: id, userId: new Types.ObjectId(userId) },
      { $set: { read: true } },
      { new: true },
    );
    if (!doc) throw new NotFoundException('Notification not found');
    return doc;
  }

  async markAllRead(userId: string) {
    const res = await this.notificationModel.updateMany(
      { userId: new Types.ObjectId(userId), read: false },
      { $set: { read: true } },
    );
    return { modifiedCount: res.modifiedCount };
  }

  /** Create notification (e.g. from order service later) */
  async createForUser(
    userId: string,
    payload: {
      title: string;
      body: string;
      type?: string;
      imageUrl?: string;
      meta?: Record<string, unknown>;
    },
  ) {
    const doc = await this.notificationModel.create({
      userId: new Types.ObjectId(userId),
      title: payload.title,
      body: payload.body,
      type: payload.type ?? 'system',
      read: false,
      imageUrl: payload.imageUrl ?? '',
      meta: payload.meta ?? {},
    });
    return doc;
  }
}
