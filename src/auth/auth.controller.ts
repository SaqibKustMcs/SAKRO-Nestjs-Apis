import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { LoginDTO } from './dto/login.dto';
import { OtpDTO } from './dto/otp.dto';
import { SignupDTO } from './dto/signup.dto';
import { UpdateProfileDTO } from './dto/update-profile.dto';
import { ApiTags, ApiBearerAuth, ApiOAuth2, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { EmailDTO } from './dto/email.dto';
import { PasswordDTO } from './dto/password.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { User } from 'src/decorators/user.decorator';
import { UpdateBiometricStatusDTO, BiometricResponseDTO } from './dto/biometric.dto';
import { ChangePasswordDTO, ChangePasswordResponseDTO } from './dto/change-password.dto';
import { DeviceInfoDTO, DevicesListResponseDTO, LogoutDeviceDTO } from './dto/device.dto';
import { RegisterFcmTokenDto } from './dto/register-fcm-token.dto';
import { DevOtpListResponseDTO } from './dto/dev-otp-response.dto';
import { GetLoginHistoryDTO, LoginHistoryResponseDTO, LoginStatisticsDTO } from './dto/login-history.dto';
import { LoginHistoryService } from './login-history.service';
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private loginHistoryService: LoginHistoryService,
  ) { }

  @Post('signup')
  signup(@Body() signupDto: SignupDTO) {
    return this.authService.signup(signupDto);
  }

  @Post('isEmailExists')
  isEmailExists(@Body() emailDto: EmailDTO) {
    return this.authService.isEmailExists(emailDto)
  }

  @Post('verifyEmail')
  verifyEmail(@Body() otpDto: OtpDTO, @Req() req: Request) {
    let deviceInfo: DeviceInfoDTO | undefined;
    if (otpDto.deviceId && otpDto.deviceName) {
      deviceInfo = {
        deviceId: otpDto.deviceId,
        deviceName: otpDto.deviceName,
        deviceType: otpDto.deviceType || 'other',
        platform: otpDto.platform || 'Unknown',
        browser: otpDto.browser,
        location: otpDto.location,
        fcmToken: otpDto.fcmToken,
      };
    }
    const ipAddress = req.ip || req.connection?.remoteAddress || 'Unknown';
    return this.authService.verifyEmail(otpDto, deviceInfo, ipAddress);
  }

  @Post('resendOtp')
  resendOtp(@Body() emailDto: EmailDTO) {
    return this.authService.resendOtp(emailDto)
  }

  @Post('login')
  login(@Body() loginDto: LoginDTO, @Req() req: Request) {
    console.log('🔵 [AUTH CONTROLLER] Login request received');
    console.log('📦 [AUTH CONTROLLER] Raw body:', JSON.stringify(req.body, null, 2));
    console.log('📦 [AUTH CONTROLLER] LoginDto:', JSON.stringify(loginDto, null, 2));
    console.log('📦 [AUTH CONTROLLER] Email in DTO:', loginDto?.email);
    console.log('📦 [AUTH CONTROLLER] Password in DTO:', loginDto?.password ? '***' : 'MISSING');
    
    // Extract device info if provided
    let deviceInfo: DeviceInfoDTO | undefined;
    if (loginDto.deviceId && loginDto.deviceName) {
      deviceInfo = {
        deviceId: loginDto.deviceId,
        deviceName: loginDto.deviceName,
        deviceType: loginDto.deviceType || 'other',
        platform: loginDto.platform || 'Unknown',
        browser: loginDto.browser,
        location: loginDto.location,
        fcmToken: loginDto.fcmToken,
        appId: loginDto.appId,
      };
      console.log('📱 [AUTH CONTROLLER] Device info extracted:', JSON.stringify(deviceInfo, null, 2));
    } else {
      console.log('⚠️ [AUTH CONTROLLER] No device info in request');
      console.log('   deviceId present:', !!loginDto.deviceId);
      console.log('   deviceName present:', !!loginDto.deviceName);
    }

    // Get IP address from request
    const ipAddress = req.ip || req.connection.remoteAddress || 'Unknown';
    console.log('🌐 [AUTH CONTROLLER] IP Address:', ipAddress);

    return this.authService.login(loginDto, deviceInfo, ipAddress);
  }

  @Post('forgotPassword')
  forgotPassword(@Body() emailDto: EmailDTO) {
    return this.authService.forgotPassword(emailDto);
  }

  @Post('verifyOtpForForgotPassword')
  verifyOtpForForgotPassword(@Body() otpDto: OtpDTO) {
    return this.authService.verifyOtpForForgotPassword(otpDto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('resetPassword')
  resetPassword(@Body() passwordDto: PasswordDTO, @User() user) {
    return this.authService.resetPassword(passwordDto, user);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('getLoggedInUsers')
  getLoggedInUsers(@User() user) {
    return this.authService.getLoggedInUsers(user)
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Put('update-profile')
  updateProfile(@Body() updateProfileDto: UpdateProfileDTO, @User() user) {
    return this.authService.updateProfile(updateProfileDto, user);
  }

  @ApiOperation({ summary: 'Update biometric authentication status' })
  @ApiResponse({ 
    status: 200, 
    description: 'Biometric status updated successfully', 
    type: BiometricResponseDTO 
  })
  @ApiResponse({ status: 400, description: 'Bad request - Invalid input' })
  @ApiResponse({ status: 401, description: 'Unauthorized - Invalid token' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Put('biometric-status')
  updateBiometricStatus(@Body() updateBiometricDto: UpdateBiometricStatusDTO, @User() user) {
    return this.authService.updateBiometricStatus(user.id, updateBiometricDto);
  }

  @ApiOperation({ summary: 'Change user password' })
  @ApiResponse({ 
    status: 200, 
    description: 'Password changed successfully', 
    type: ChangePasswordResponseDTO 
  })
  @ApiResponse({ status: 400, description: 'Bad request - Invalid input or incorrect current password' })
  @ApiResponse({ status: 401, description: 'Unauthorized - Invalid token' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Put('change-password')
  changePassword(@Body() changePasswordDto: ChangePasswordDTO, @User() user) {
    return this.authService.changePassword(user.id, changePasswordDto);
  }

  @ApiOperation({ summary: 'Logout current session: remove device record and FCM token for this JWT' })
  @ApiResponse({ status: 200, description: 'Session cleared on server' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('logout')
  logout(@Req() req: Request) {
    const auth = req.headers?.authorization;
    return this.authService.logoutCurrentSession(auth);
  }

  @ApiOperation({
    summary:
      'Register or refresh FCM token after login (when token was not ready during login/signup)',
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('register-fcm-token')
  registerFcmToken(
    @Body() dto: RegisterFcmTokenDto,
    @User() user: { id?: string; sub?: string; _id?: string },
  ) {
    const uid = user?.id ?? user?.sub ?? user?._id;
    if (!uid) {
      throw new UnauthorizedException('Invalid token');
    }
    return this.authService.registerFcmToken(String(uid), dto);
  }

  @ApiOperation({ summary: 'Get all user devices' })
  @ApiResponse({ 
    status: 200, 
    description: 'List of user devices', 
    type: DevicesListResponseDTO 
  })
  @ApiResponse({ status: 401, description: 'Unauthorized - Invalid token' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('devices')
  getUserDevices(@User() user, @Query('currentDeviceId') currentDeviceId?: string) {
    return this.authService.getUserDevices(user.id, currentDeviceId);
  }

  @ApiOperation({ summary: 'Logout from a specific device' })
  @ApiResponse({ 
    status: 200, 
    description: 'Device logged out successfully' 
  })
  @ApiResponse({ status: 400, description: 'Bad request - Device not found' })
  @ApiResponse({ status: 401, description: 'Unauthorized - Invalid token' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('logout-device')
  logoutDevice(@Body() logoutDeviceDto: LogoutDeviceDTO, @User() user) {
    return this.authService.logoutDevice(user.id, logoutDeviceDto.deviceId);
  }

  @ApiOperation({ summary: 'Logout from all devices except current' })
  @ApiResponse({ 
    status: 200, 
    description: 'Logged out from all devices successfully' 
  })
  @ApiResponse({ status: 401, description: 'Unauthorized - Invalid token' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('logout-all-devices')
  logoutAllDevices(@User() user, @Body('currentDeviceId') currentDeviceId?: string) {
    return this.authService.logoutAllDevices(user.id, currentDeviceId);
  }

  @ApiOperation({ summary: 'Get recent OTPs (Development Only)' })
  @ApiResponse({ 
    status: 200, 
    description: 'List of recent OTPs for testing', 
    type: DevOtpListResponseDTO 
  })
  @ApiResponse({ status: 400, description: 'Only available in development mode' })
  @Get('dev/otps')
  getRecentOTPs(@Query('email') email?: string) {
    return this.authService.getRecentOTPs(email);
  }

  @ApiOperation({ summary: 'Get user login history' })
  @ApiResponse({ 
    status: 200, 
    description: 'User login history retrieved successfully', 
    type: [LoginHistoryResponseDTO] 
  })
  @ApiResponse({ status: 401, description: 'Unauthorized - Invalid token' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('login-history')
  async getLoginHistory(
    @User() user,
    @Query() query: GetLoginHistoryDTO,
  ) {
    const options = {
      limit: query.limit || 50,
      status: query.status,
      startDate: query.startDate ? new Date(query.startDate) : undefined,
      endDate: query.endDate ? new Date(query.endDate) : undefined,
    };

    const history = await this.loginHistoryService.getUserLoginHistory(
      user.id,
      options,
    );

    return {
      success: true,
      data: history,
      count: history.length,
    };
  }

  @ApiOperation({ summary: 'Get login statistics' })
  @ApiResponse({ 
    status: 200, 
    description: 'Login statistics retrieved successfully', 
    type: LoginStatisticsDTO 
  })
  @ApiResponse({ status: 401, description: 'Unauthorized - Invalid token' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('login-statistics')
  async getLoginStatistics(@User() user) {
    const statistics = await this.loginHistoryService.getLoginStatistics(user.id);

    return {
      success: true,
      data: statistics,
    };
  }

  // ─── Wishlist ────────────────────────────────────────────────────────────────

  @ApiOperation({ summary: 'Toggle product in wishlist (add or remove)' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('wishlist/toggle/:productId')
  toggleWishlist(@Param('productId') productId: string, @User() user) {
    return this.authService.toggleWishlist(user.id, productId);
  }

  @ApiOperation({ summary: 'Get current user wishlist with product details' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('wishlist')
  getWishlist(@User() user) {
    return this.authService.getWishlist(user.id);
  }

}
