import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LoginHistory } from 'src/interface/login-history/login-history.interface';
import { DeviceInfoDTO } from './dto/device.dto';

@Injectable()
export class LoginHistoryService {
  constructor(
    @InjectModel('LoginHistory') private readonly _loginHistoryModel: Model<LoginHistory>,
  ) {}

  /**
   * Record a login attempt
   */
  async recordLogin(data: {
    userId: string | null; // Allow null for failed logins where user doesn't exist
    email: string;
    deviceInfo?: DeviceInfoDTO;
    ipAddress: string;
    loginMethod: 'password' | '2fa' | 'biometric';
    status: 'success' | 'failed' | 'blocked';
    failureReason?: string;
  }): Promise<void> {
    try {
      console.log('═══════════════════════════════════════════════════');
      console.log('📜 [LOGIN HISTORY] Recording login attempt');
      console.log('📊 [LOGIN HISTORY] Data:');
      console.log('   userId:', data.userId);
      console.log('   email:', data.email);
      console.log('   deviceInfo present:', data.deviceInfo ? 'YES' : 'NO');
      if (data.deviceInfo) {
        console.log('   deviceId:', data.deviceInfo.deviceId);
        console.log('   deviceName:', data.deviceInfo.deviceName);
      }
      console.log('   ipAddress:', data.ipAddress);
      console.log('   loginMethod:', data.loginMethod);
      console.log('   status:', data.status);
      console.log('   failureReason:', data.failureReason);
      
      // Ensure email is provided and valid
      const email = data.email?.toLowerCase().trim();
      if (!email) {
        console.error('❌ [LOGIN HISTORY] Email is required but not provided');
        return; // Don't record if email is missing
      }

      const record = await this._loginHistoryModel.create({
        userId: data.userId || undefined, // Use undefined instead of null for optional field
        email: email,
        deviceId: data.deviceInfo?.deviceId || null,
        deviceName: data.deviceInfo?.deviceName || 'Unknown Device',
        deviceType: data.deviceInfo?.deviceType || 'other',
        platform: data.deviceInfo?.platform || 'Unknown',
        browser: data.deviceInfo?.browser || 'Unknown',
        ipAddress: data.ipAddress,
        location: data.deviceInfo?.location || null,
        loginMethod: data.loginMethod,
        status: data.status,
        failureReason: data.failureReason || null,
        loginAt: new Date(),
      });

      console.log(`✅ [LOGIN HISTORY] Login history recorded successfully`);
      console.log('   Record ID:', record._id);
      console.log('═══════════════════════════════════════════════════');
    } catch (err) {
      console.error('❌ [LOGIN HISTORY] Error recording login history:', err);
      console.error('❌ [LOGIN HISTORY] Error stack:', err.stack);
      // Don't throw error - logging shouldn't break the login flow
    }
  }

  /**
   * Get login history for a user
   */
  async getUserLoginHistory(
    userId: string,
    options?: {
      limit?: number;
      status?: 'success' | 'failed' | 'blocked';
      startDate?: Date;
      endDate?: Date;
    },
  ): Promise<LoginHistory[]> {
    try {
      const query: any = { userId };

      if (options?.status) {
        query.status = options.status;
      }

      if (options?.startDate || options?.endDate) {
        query.loginAt = {};
        if (options.startDate) {
          query.loginAt.$gte = options.startDate;
        }
        if (options.endDate) {
          query.loginAt.$lte = options.endDate;
        }
      }

      const limit = options?.limit || 50;

      const history = await this._loginHistoryModel
        .find(query)
        .sort({ loginAt: -1 })
        .limit(limit)
        .lean();

      return history;
    } catch (err) {
      console.error('Error getting login history:', err);
      throw new BadRequestException('Failed to get login history');
    }
  }

  /**
   * Get recent failed login attempts
   */
  async getRecentFailedAttempts(
    userId: string,
    minutesAgo: number = 15,
  ): Promise<number> {
    try {
      const timeAgo = new Date(Date.now() - minutesAgo * 60 * 1000);

      const count = await this._loginHistoryModel.countDocuments({
        userId,
        status: 'failed',
        loginAt: { $gte: timeAgo },
      });

      return count;
    } catch (err) {
      console.error('Error getting failed attempts:', err);
      return 0;
    }
  }

  /**
   * Get login statistics for a user
   */
  async getLoginStatistics(userId: string): Promise<{
    totalLogins: number;
    successfulLogins: number;
    failedLogins: number;
    lastLogin: Date | null;
    uniqueDevices: number;
    uniqueLocations: number;
  }> {
    try {
      const history = await this._loginHistoryModel.find({ userId }).lean();

      const stats = {
        totalLogins: history.length,
        successfulLogins: history.filter(h => h.status === 'success').length,
        failedLogins: history.filter(h => h.status === 'failed').length,
        lastLogin: history.length > 0 ? history[0].loginAt : null,
        uniqueDevices: new Set(history.map(h => h.deviceId).filter(Boolean)).size,
        uniqueLocations: new Set(history.map(h => h.location).filter(Boolean)).size,
      };

      return stats;
    } catch (err) {
      console.error('Error getting login statistics:', err);
      throw new BadRequestException('Failed to get login statistics');
    }
  }

  /**
   * Delete login history older than specified days
   */
  async cleanupOldHistory(daysOld: number = 90): Promise<number> {
    try {
      const dateThreshold = new Date();
      dateThreshold.setDate(dateThreshold.getDate() - daysOld);

      const result = await this._loginHistoryModel.deleteMany({
        createdAt: { $lt: dateThreshold },
      });

      console.log(`✅ Cleaned up ${result.deletedCount} old login history records`);
      return result.deletedCount;
    } catch (err) {
      console.error('Error cleaning up login history:', err);
      return 0;
    }
  }
}

