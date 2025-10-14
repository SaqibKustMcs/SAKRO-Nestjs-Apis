import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as speakeasy from 'speakeasy';
import * as QRCode from 'qrcode';
import { User } from 'src/interface/user/user.interface';
import { Verify2FADTO, Enable2FAResponseDTO, Verify2FAResponseDTO } from './dto/2fa.dto';

@Injectable()
export class TwoFactorService {
  constructor(
    @InjectModel('User') private userModel: Model<User>,
  ) {}

  async enable2FA(userId: string): Promise<Enable2FAResponseDTO> {
    try {
      // Check if user already has 2FA enabled
      const user = await this.userModel.findById(userId);
      if (!user) {
        throw new BadRequestException('User not found');
      }

      if (user.isTwoFactorEnabled) {
        throw new BadRequestException('2FA is already enabled for this user');
      }

      // Generate a secret
      const secret = speakeasy.generateSecret({
        name: `SAKRO (${user.email})`,
        issuer: 'SAKRO Shopping App',
        length: 32,
      });

      // Store the secret in the user document (encrypted in production)
      await this.userModel.findByIdAndUpdate(userId, {
        twoFactorSecret: secret.base32,
      });

      // Generate QR code
      const qrCode = await QRCode.toDataURL(secret.otpauth_url);

      return {
        qrCode,
        manualEntryKey: secret.base32,
        otpauthUrl: secret.otpauth_url,
      };
    } catch (error) {
      console.error('Error enabling 2FA:', error);
      throw new BadRequestException('Failed to enable 2FA');
    }
  }

  async verify2FA(userId: string, verifyDto: Verify2FADTO): Promise<Verify2FAResponseDTO> {
    try {
      const user = await this.userModel.findById(userId);
      if (!user) {
        throw new BadRequestException('User not found');
      }

      if (!user.twoFactorSecret) {
        throw new BadRequestException('2FA secret not found. Please enable 2FA first.');
      }

      // Verify the token
      const verified = speakeasy.totp.verify({
        secret: user.twoFactorSecret,
        encoding: 'base32',
        token: verifyDto.token,
        window: 2, // Allow 2 time steps (60 seconds) of tolerance
      });

      if (verified) {
        // Enable 2FA for the user
        await this.userModel.findByIdAndUpdate(userId, {
          isTwoFactorEnabled: true,
        });

        return {
          verified: true,
          enabled: true,
        };
      } else {
        return {
          verified: false,
          enabled: false,
        };
      }
    } catch (error) {
      console.error('Error verifying 2FA:', error);
      throw new BadRequestException('Failed to verify 2FA token');
    }
  }

  async verify2FAToken(userId: string, token: string): Promise<boolean> {
    try {
      const user = await this.userModel.findById(userId);
      if (!user || !user.twoFactorSecret || !user.isTwoFactorEnabled) {
        return false;
      }

      // Verify the token
      const verified = speakeasy.totp.verify({
        secret: user.twoFactorSecret,
        encoding: 'base32',
        token: token,
        window: 2, // Allow 2 time steps (60 seconds) of tolerance
      });

      return verified;
    } catch (error) {
      console.error('Error verifying 2FA token:', error);
      return false;
    }
  }

  async disable2FA(userId: string): Promise<{ success: boolean; message: string }> {
    try {
      const user = await this.userModel.findById(userId);
      if (!user) {
        throw new BadRequestException('User not found');
      }

      if (!user.isTwoFactorEnabled) {
        throw new BadRequestException('2FA is not enabled for this user');
      }

      // Disable 2FA and remove the secret
      await this.userModel.findByIdAndUpdate(userId, {
        isTwoFactorEnabled: false,
        twoFactorSecret: null,
      });

      return {
        success: true,
        message: '2FA has been disabled successfully',
      };
    } catch (error) {
      console.error('Error disabling 2FA:', error);
      throw new BadRequestException('Failed to disable 2FA');
    }
  }

  async generateBackupCodes(userId: string): Promise<{ backupCodes: string[] }> {
    try {
      const user = await this.userModel.findById(userId);
      if (!user) {
        throw new BadRequestException('User not found');
      }

      if (!user.isTwoFactorEnabled) {
        throw new BadRequestException('2FA is not enabled for this user');
      }

      // Generate 10 backup codes
      const backupCodes = Array.from({ length: 10 }, () => 
        Math.random().toString(36).substring(2, 8).toUpperCase()
      );

      // In a real application, you would store these backup codes securely
      // For now, we'll just return them
      return {
        backupCodes,
      };
    } catch (error) {
      console.error('Error generating backup codes:', error);
      throw new BadRequestException('Failed to generate backup codes');
    }
  }

  async validateBackupCode(userId: string, backupCode: string): Promise<boolean> {
    try {
      // In a real application, you would check against stored backup codes
      // For now, we'll implement a simple validation
      const user = await this.userModel.findById(userId);
      if (!user || !user.isTwoFactorEnabled) {
        return false;
      }

      // Simple validation - in production, check against stored backup codes
      return backupCode.length === 6 && /^[A-Z0-9]+$/.test(backupCode);
    } catch (error) {
      console.error('Error validating backup code:', error);
      return false;
    }
  }
}

