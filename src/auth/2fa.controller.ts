import { 
  Body, 
  Controller, 
  Post, 
  UseGuards,
  Req 
} from '@nestjs/common';
import { Request } from 'express';
import { 
  ApiTags, 
  ApiBearerAuth, 
  ApiOperation, 
  ApiResponse 
} from '@nestjs/swagger';
import { TwoFactorService } from './2fa.service';
import { AuthService } from './auth.service';
import { 
  Verify2FADTO, 
  Login2FADTO, 
  Enable2FAResponseDTO, 
  Verify2FAResponseDTO, 
  Login2FAResponseDTO 
} from './dto/2fa.dto';
import { DeviceInfoDTO } from './dto/device.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { User } from 'src/decorators/user.decorator';

@ApiTags('Two-Factor Authentication')
@Controller('auth/2fa')
export class TwoFactorController {
  constructor(
    private readonly twoFactorService: TwoFactorService,
    private readonly authService: AuthService,
  ) {}

  @ApiOperation({ summary: 'Enable 2FA for authenticated user' })
  @ApiResponse({ 
    status: 201, 
    description: '2FA setup initiated successfully',
    type: Enable2FAResponseDTO
  })
  @ApiResponse({ status: 400, description: 'Bad request - 2FA already enabled' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('enable')
  async enable2FA(@User() user) {
    const result = await this.twoFactorService.enable2FA(user.id);
    return {
      success: true,
      message: '2FA setup initiated. Please scan the QR code with Google Authenticator and verify with a token.',
      data: result
    };
  }

  @ApiOperation({ summary: 'Verify 2FA token to complete setup' })
  @ApiResponse({ 
    status: 200, 
    description: '2FA verified and enabled successfully',
    type: Verify2FAResponseDTO
  })
  @ApiResponse({ status: 400, description: 'Bad request - invalid token' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('verify')
  async verify2FA(@Body() verifyDto: Verify2FADTO, @User() user) {
    const result = await this.twoFactorService.verify2FA(user.id, verifyDto);
    
    if (result.verified) {
      return {
        success: true,
        message: '2FA has been enabled successfully',
        data: result
      };
    } else {
      return {
        success: false,
        message: 'Invalid 2FA token. Please try again.',
        data: result
      };
    }
  }

  @ApiOperation({ summary: 'Disable 2FA for authenticated user' })
  @ApiResponse({ 
    status: 200, 
    description: '2FA disabled successfully'
  })
  @ApiResponse({ status: 400, description: 'Bad request - 2FA not enabled' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('disable')
  async disable2FA(@User() user) {
    const result = await this.twoFactorService.disable2FA(user.id);
    return {
      success: true,
      message: result.message,
      data: result
    };
  }

  @ApiOperation({ summary: 'Generate backup codes for 2FA' })
  @ApiResponse({ 
    status: 200, 
    description: 'Backup codes generated successfully'
  })
  @ApiResponse({ status: 400, description: 'Bad request - 2FA not enabled' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('backup-codes')
  async generateBackupCodes(@User() user) {
    const result = await this.twoFactorService.generateBackupCodes(user.id);
    return {
      success: true,
      message: 'Backup codes generated successfully. Store them in a safe place.',
      data: result
    };
  }
}

@ApiTags('Authentication')
@Controller('auth')
export class Auth2FAController {
  constructor(
    private readonly authService: AuthService,
  ) {}

  @ApiOperation({ summary: 'Login with 2FA support' })
  @ApiResponse({ 
    status: 200, 
    description: 'Login successful',
    type: Login2FAResponseDTO
  })
  @ApiResponse({ status: 400, description: 'Bad request - missing 2FA token' })
  @ApiResponse({ status: 401, description: 'Unauthorized - invalid credentials or 2FA token' })
  @Post('login-2fa')
  async loginWith2FA(@Body() login2FADto: Login2FADTO, @Req() req: Request) {
    // Extract device info if provided
    let deviceInfo: DeviceInfoDTO | undefined;
    if (login2FADto.deviceId && login2FADto.deviceName) {
      deviceInfo = {
        deviceId: login2FADto.deviceId,
        deviceName: login2FADto.deviceName,
        deviceType: login2FADto.deviceType || 'other',
        platform: login2FADto.platform || 'Unknown',
        browser: login2FADto.browser,
        location: login2FADto.location,
        fcmToken: login2FADto.fcmToken,
        appId: login2FADto.appId,
      };
    }

    // Get IP address from request
    const ipAddress = req.ip || req.connection.remoteAddress || 'Unknown';

    return await this.authService.loginWith2FA(login2FADto, deviceInfo, ipAddress);
  }
}

