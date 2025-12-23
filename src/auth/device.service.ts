import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Device } from 'src/interface/device/device.interface';
import { DeviceInfoDTO } from './dto/device.dto';

@Injectable()
export class DeviceService {
  constructor(
    @InjectModel('Device') private readonly _deviceModel: Model<Device>,
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
        await existingDevice.save();
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
      });

      console.log('✅ Device created successfully:', newDevice._id);
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
   * Logout from a specific device
   */
  async logoutDevice(userId: string, deviceId: string): Promise<boolean> {
    try {
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

