import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Device } from 'src/interface/device/device.interface';
import { User } from 'src/interface/user/user.interface';
import { DeviceInfoDTO } from './dto/device.dto';
import { RegisterFcmTokenDto } from './dto/register-fcm-token.dto';

const DEFAULT_FCM_APP_ID = 'cloth_shop_flutter';

@Injectable()
export class DeviceService {
  constructor(
    @InjectModel('Device') private readonly _deviceModel: Model<Device>,
    @InjectModel('User') private readonly _userModel: Model<User>,
  ) {}

  /**
   * Register or update a device for a user
   */
  async registerDevice(
    userId: string,
    deviceInfo: DeviceInfoDTO,
    loginToken: string,
    ipAddress?: string,
  ): Promise<Device> {
    try {
      console.log('═══════════════════════════════════════════════════');
      console.log('🔵 [DEVICE SERVICE] registerDevice called');
      console.log('📊 [DEVICE SERVICE] Parameters:');
      console.log('   userId:', userId);
      console.log('   deviceId:', deviceInfo.deviceId);
      console.log('   deviceName:', deviceInfo.deviceName);
      console.log('   deviceType:', deviceInfo.deviceType);
      console.log('   platform:', deviceInfo.platform);
      console.log('   browser:', deviceInfo.browser);
      console.log('   ipAddress:', ipAddress);
      console.log('   location:', deviceInfo.location);
      console.log('   loginToken:', loginToken ? loginToken.substring(0, 20) + '...' : 'MISSING');
      console.log('═══════════════════════════════════════════════════');

      // Check if device already exists
      console.log('🔍 [DEVICE SERVICE] Checking if device exists...');
      const existingDevice = await this._deviceModel.findOne({
        userId,
        deviceId: deviceInfo.deviceId,
      });
      console.log('🔍 [DEVICE SERVICE] Existing device:', existingDevice ? 'FOUND' : 'NOT FOUND');

      if (existingDevice) {
        console.log('✅ Device exists, updating...');
        // Update existing device
        existingDevice.deviceName = deviceInfo.deviceName;
        existingDevice.deviceType = deviceInfo.deviceType;
        existingDevice.platform = deviceInfo.platform;
        existingDevice.browser = deviceInfo.browser || 'Unknown';
        existingDevice.ipAddress = ipAddress || deviceInfo.ipAddress || 'Unknown';
        existingDevice.location = deviceInfo.location || null;
        existingDevice.lastActive = new Date();
        existingDevice.loginToken = loginToken;
        if (deviceInfo.fcmToken !== undefined) {
          existingDevice.fcmToken =
            deviceInfo.fcmToken && deviceInfo.fcmToken.length > 0
              ? deviceInfo.fcmToken
              : null;
        }
        await existingDevice.save();
        await this.syncUserFcmAfterDeviceSave(userId, deviceInfo, existingDevice);
        console.log('✅ Device updated successfully');
        return existingDevice;
      }

      console.log('✅ Device does not exist, creating new...');
      // Create new device
      const newDevice = await this._deviceModel.create({
        userId,
        deviceId: deviceInfo.deviceId,
        deviceName: deviceInfo.deviceName,
        deviceType: deviceInfo.deviceType,
        platform: deviceInfo.platform,
        browser: deviceInfo.browser || 'Unknown',
        ipAddress: ipAddress || deviceInfo.ipAddress || 'Unknown',
        location: deviceInfo.location || null,
        lastActive: new Date(),
        loginToken,
        fcmToken:
          deviceInfo.fcmToken && deviceInfo.fcmToken.length > 0
            ? deviceInfo.fcmToken
            : null,
      });

      console.log('✅ Device created successfully:', newDevice._id);
      await this.syncUserFcmAfterDeviceSave(userId, deviceInfo, newDevice);
      return newDevice;
    } catch (err) {
      console.error('Error registering device:', err);
      throw new BadRequestException('Failed to register device');
    }
  }

  /**
   * Get all devices for a user
   */
  async getUserDevices(userId: string, currentDeviceId?: string): Promise<Device[]> {
    try {
      const devices = await this._deviceModel
        .find({ userId })
        .sort({ lastActive: -1 })
        .lean();

      // Mark current device
      if (currentDeviceId) {
        devices.forEach((device: any) => {
          device.isCurrentDevice = device.deviceId === currentDeviceId;
        });
      }

      return devices;
    } catch (err) {
      console.error('Error getting user devices:', err);
      throw new BadRequestException('Failed to get user devices');
    }
  }

  /**
   * Update device last active timestamp
   */
  async updateDeviceActivity(deviceId: string, userId: string): Promise<void> {
    try {
      await this._deviceModel.updateOne(
        { deviceId, userId },
        { lastActive: new Date() },
      );
    } catch (err) {
      console.error('Error updating device activity:', err);
    }
  }

  /**
   * Mirror persisted Device FCM state onto User.fcmTokens.
   * If the client omits `fcmToken`, we still sync from the saved Device row (e.g. existing token in DB).
   * If the client sends an empty string, we clear token on Device and remove the user entry.
   */
  private async syncUserFcmAfterDeviceSave(
    userId: string,
    deviceInfo: DeviceInfoDTO,
    saved: Device,
  ): Promise<void> {
    const appId = (deviceInfo.appId?.trim() || DEFAULT_FCM_APP_ID) as string;

    let effective: string | null;
    if (deviceInfo.fcmToken !== undefined) {
      const raw = deviceInfo.fcmToken;
      effective =
        typeof raw === 'string' && raw.length > 0 ? raw : null;
    } else {
      const t = saved.fcmToken;
      effective =
        t && String(t).length > 0 ? String(t) : null;
    }

    if (effective) {
      await this.applyUserFcmUpsert(
        userId,
        deviceInfo.deviceId,
        appId,
        effective,
      );
    } else {
      await this.applyUserFcmPull(userId, deviceInfo.deviceId, appId);
    }
  }

  private async applyUserFcmUpsert(
    userId: string,
    deviceId: string,
    appId: string,
    token: string,
  ): Promise<void> {
    const now = new Date();
    const updated = await this._userModel.updateOne(
      {
        _id: userId,
        fcmTokens: { $elemMatch: { deviceId, appId } },
      },
      {
        $set: {
          'fcmTokens.$.token': token,
          'fcmTokens.$.updatedAt': now,
        },
      },
    );

    if (updated.matchedCount === 0) {
      await this._userModel.updateOne(
        { _id: userId },
        {
          $push: {
            fcmTokens: {
              token,
              appId,
              deviceId,
              updatedAt: now,
            },
          },
        },
      );
    }
  }

  private async applyUserFcmPull(
    userId: string,
    deviceId: string,
    appId: string,
  ): Promise<void> {
    await this._userModel.updateOne(
      { _id: userId },
      { $pull: { fcmTokens: { deviceId, appId } } },
    );
  }

  /**
   * Call after login when FCM token was not available during /auth/login (or on token refresh).
   */
  async registerFcmTokenForUser(
    userId: string,
    dto: RegisterFcmTokenDto,
  ): Promise<{ success: boolean }> {
    const appId = dto.appId?.trim() || DEFAULT_FCM_APP_ID;
    const device = await this._deviceModel.findOne({
      userId,
      deviceId: dto.deviceId,
    });

    if (device) {
      device.fcmToken = dto.fcmToken;
      await device.save();
      const deviceInfo: DeviceInfoDTO = {
        deviceId: device.deviceId,
        deviceName: device.deviceName,
        deviceType: device.deviceType,
        platform: device.platform,
        browser: device.browser,
        location: device.location ?? undefined,
        fcmToken: dto.fcmToken,
        appId,
      };
      await this.syncUserFcmAfterDeviceSave(userId, deviceInfo, device);
    } else {
      await this.applyUserFcmUpsert(userId, dto.deviceId, appId, dto.fcmToken);
    }

    return { success: true };
  }

  private async pullUserFcmByHardwareDeviceId(
    userId: string,
    hardwareDeviceId: string,
  ): Promise<void> {
    await this._userModel.updateOne(
      { _id: userId },
      { $pull: { fcmTokens: { deviceId: hardwareDeviceId } } },
    );
  }

  /**
   * Logout from a specific device
   */
  async logoutDevice(userId: string, deviceId: string): Promise<boolean> {
    try {
      const existing = await this._deviceModel
        .findOne({ userId, _id: deviceId })
        .lean();
      if (existing?.deviceId) {
        await this.pullUserFcmByHardwareDeviceId(userId, existing.deviceId);
      }

      const result = await this._deviceModel.deleteOne({
        userId,
        _id: deviceId,
      });

      return result.deletedCount > 0;
    } catch (err) {
      console.error('Error logging out device:', err);
      throw new BadRequestException('Failed to logout device');
    }
  }

  /**
   * Logout from all devices except current
   */
  async logoutAllDevices(userId: string, currentDeviceId?: string): Promise<number> {
    try {
      const query: any = { userId };
      
      if (currentDeviceId) {
        query._id = { $ne: currentDeviceId };
      }

      const toRemove = await this._deviceModel.find(query).select('deviceId').lean();
      const hardwareIds = [
        ...new Set(toRemove.map((d) => d.deviceId).filter(Boolean)),
      ];
      if (hardwareIds.length > 0) {
        await this._userModel.updateOne(
          { _id: userId },
          { $pull: { fcmTokens: { deviceId: { $in: hardwareIds } } } },
        );
      }

      const result = await this._deviceModel.deleteMany(query);
      return result.deletedCount;
    } catch (err) {
      console.error('Error logging out all devices:', err);
      throw new BadRequestException('Failed to logout all devices');
    }
  }

  /**
   * Remove device by token (for logout)
   */
  async removeDeviceByToken(loginToken: string): Promise<void> {
    try {
      const device = await this._deviceModel.findOne({ loginToken }).lean();
      if (device?.userId && device.deviceId) {
        await this.pullUserFcmByHardwareDeviceId(
          String(device.userId),
          device.deviceId,
        );
      }
      await this._deviceModel.deleteOne({ loginToken });
    } catch (err) {
      console.error('Error removing device by token:', err);
    }
  }

  /**
   * Clean up old/inactive devices (older than 90 days)
   */
  async cleanupOldDevices(): Promise<number> {
    try {
      const ninetyDaysAgo = new Date();
      ninetyDaysAgo.setDate(ninetyDaysAgo.getDate() - 90);

      const result = await this._deviceModel.deleteMany({
        lastActive: { $lt: ninetyDaysAgo },
      });

      return result.deletedCount;
    } catch (err) {
      console.error('Error cleaning up old devices:', err);
      return 0;
    }
  }
}

