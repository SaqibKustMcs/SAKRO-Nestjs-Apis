import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Types } from 'mongoose';
import { Device } from 'src/interface/device/device.interface';
import { User } from 'src/interface/user/user.interface';
import { getFirebaseAdmin } from '../../libs/chat/src/auth/firebaseAdmin';

/** Max tokens per FCM multicast request */
const FCM_MULTICAST_LIMIT = 500;

@Injectable()
export class FcmPushService {
  private readonly logger = new Logger(FcmPushService.name);

  constructor(
    @InjectModel('Device') private readonly deviceModel: Model<Device>,
    @InjectModel('User') private readonly userModel: Model<User>,
  ) {}

  /**
   * Sends FCM to all devices for this user that have an fcmToken stored (login flow).
   */
  async sendToUser(
    userId: string,
    payload: {
      title: string;
      body: string;
      data?: Record<string, string>;
    },
  ): Promise<{ sent: number; failures: number }> {
    const firebaseApp = getFirebaseAdmin();
    if (!firebaseApp) {
      this.logger.warn('FCM skipped: Firebase Admin is not configured');
      return { sent: 0, failures: 0 };
    }

    const tokens = await this.collectTokensForUser(userId);
    if (tokens.length === 0) {
      this.logger.warn(
        `No FCM tokens for userId=${userId}. User must open the app and allow notifications (device row with fcmToken).`,
      );
      return { sent: 0, failures: 0 };
    }

    const baseData: Record<string, string> = {
      click_action: 'FLUTTER_NOTIFICATION_CLICK',
    };
    for (const [k, v] of Object.entries(payload.data ?? {})) {
      baseData[k] = v == null ? '' : String(v);
    }
    if (baseData.category == null || baseData.category === '') {
      baseData.category = 'system';
    }
    if (baseData.type == null || baseData.type === '') {
      baseData.type = 'system';
    }

    let totalSent = 0;
    let totalFailures = 0;

    for (let i = 0; i < tokens.length; i += FCM_MULTICAST_LIMIT) {
      const chunk = tokens.slice(i, i + FCM_MULTICAST_LIMIT);
      try {
        const res = await firebaseApp.messaging().sendEachForMulticast({
          tokens: chunk,
          notification: {
            title: payload.title,
            body: payload.body,
          },
          data: baseData,
          android: {
            priority: 'high',
            notification: {
              channelId: 'pushnotificationapp',
              sound: 'default',
              defaultSound: true,
              priority: 'high',
              visibility: 'public',
            },
          },
          apns: {
            headers: {
              'apns-priority': '10',
            },
            payload: {
              aps: {
                alert: {
                  title: payload.title,
                  body: payload.body,
                },
                sound: 'default',
                badge: 1,
              },
            },
          },
        });
        totalSent += res.successCount;
        totalFailures += res.failureCount;
        if (res.failureCount > 0 && res.responses?.length) {
          res.responses.forEach((r, idx) => {
            if (!r.success && r.error) {
              this.logger.debug(
                `FCM token failure [${chunk[idx]?.slice(0, 12)}…]: ${r.error.code} ${r.error.message}`,
              );
            }
          });
        }
      } catch (err) {
        this.logger.error(
          `FCM sendEachForMulticast failed: ${err instanceof Error ? err.message : err}`,
        );
        totalFailures += chunk.length;
      }
    }

    this.logger.log(
      `FCM to user ${userId}: sent=${totalSent} failures=${totalFailures} (tokens=${tokens.length})`,
    );
    return { sent: totalSent, failures: totalFailures };
  }

  private async collectTokensForUser(userId: string): Promise<string[]> {
    const hasToken = {
      fcmToken: { $exists: true, $nin: [null, ''] },
    };

    let devices = await this.deviceModel
      .find({ userId, ...hasToken })
      .select('fcmToken')
      .lean()
      .exec();

    if (!devices.length && Types.ObjectId.isValid(userId) && userId.length === 24) {
      devices = await this.deviceModel
        .find({ userId: new Types.ObjectId(userId), ...hasToken })
        .select('fcmToken')
        .lean()
        .exec();
    }

    const fromDevices = devices
      .map((d: { fcmToken?: string }) => d.fcmToken)
      .filter(Boolean) as string[];

    let userDoc = await this.userModel
      .findById(userId)
      .select('fcmTokens')
      .lean()
      .exec();
    if (!userDoc && Types.ObjectId.isValid(userId) && userId.length === 24) {
      userDoc = await this.userModel
        .findById(new Types.ObjectId(userId))
        .select('fcmTokens')
        .lean()
        .exec();
    }

    const fromUser = ((userDoc as { fcmTokens?: { token?: string }[] })?.fcmTokens ?? [])
      .map((e) => e.token)
      .filter((t): t is string => typeof t === 'string' && t.length > 0);

    return [...new Set([...fromDevices, ...fromUser])];
  }
}
