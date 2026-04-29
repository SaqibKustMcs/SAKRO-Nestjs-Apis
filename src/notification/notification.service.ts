import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Notification, NotificationDocument } from 'src/schema/notification/notification.schema';
import { FcmPushService } from './fcm-push.service';

@Injectable()
export class NotificationService {
  constructor(
    @InjectModel(Notification.name)
    private readonly notificationModel: Model<NotificationDocument>,
    private readonly fcmPushService: FcmPushService,
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

  /** Admin: paginated list with optional filters */
  async listAdmin(
    limit = 50,
    offset = 0,
    filters?: { userId?: string; type?: string; search?: string },
  ) {
    const conditions: Record<string, unknown>[] = [];

    if (filters?.userId?.trim()) {
      try {
        conditions.push({ userId: new Types.ObjectId(filters.userId.trim()) });
      } catch {
        conditions.push({ userId: filters.userId.trim() as unknown });
      }
    }
    if (filters?.type?.trim()) {
      conditions.push({ type: filters.type.trim() });
    }
    if (filters?.search?.trim()) {
      const q = filters.search.trim();
      conditions.push({
        $or: [
          { title: { $regex: q, $options: 'i' } },
          { body: { $regex: q, $options: 'i' } },
        ],
      });
    }

    const filter =
      conditions.length === 0
        ? {}
        : conditions.length === 1
          ? conditions[0]
          : { $and: conditions };

    const lim = Math.min(Math.max(1, limit), 100);
    const off = Math.max(0, offset);

    const [items, total] = await Promise.all([
      this.notificationModel
        .find(filter)
        .sort({ createdAt: -1 })
        .skip(off)
        .limit(lim)
        .lean()
        .exec(),
      this.notificationModel.countDocuments(filter),
    ]);

    const normalized = items.map((doc: Record<string, unknown>) => {
      const uid = doc['userId'];
      const id = doc['_id'];
      return {
        ...doc,
        id: id != null ? String(id) : '',
        userId:
          uid != null && typeof uid === 'object' && 'toString' in (uid as object)
            ? String((uid as { toString(): string }).toString())
            : String(uid ?? ''),
      };
    });

    return { items: normalized, total, limit: lim, offset: off };
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
      /** For FCM data['source'] (e.g. admin panel vs order flow) */
      pushSource?: string;
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

    const idStr =
      doc._id != null ? String(doc._id) : '';
    try {
      await this.fcmPushService.sendToUser(userId, {
        title: payload.title,
        body: payload.body,
        data: {
          category: payload.type ?? 'system',
          type: payload.type ?? 'system',
          notificationId: idStr,
          source: payload.pushSource ?? 'app',
        },
      });
    } catch {
      // DB notification still created; FCM errors are logged in FcmPushService
    }

    return doc;
  }
}
