import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NotificationSchema } from 'src/schema/notification/notification.schema';
import { DeviceSchema } from 'src/schema/device.schema';
import { UserSchema } from 'src/schema/user/user.schema';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
import { FcmPushService } from './fcm-push.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Notification', schema: NotificationSchema },
      { name: 'Device', schema: DeviceSchema },
      { name: 'User', schema: UserSchema },
    ]),
  ],
  controllers: [NotificationController],
  providers: [NotificationService, FcmPushService],
  exports: [NotificationService],
})
export class NotificationModule {}
