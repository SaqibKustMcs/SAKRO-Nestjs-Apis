import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist';
import { Model } from 'mongoose';
import { User } from 'src/interface/user/user.interface';
import { InjectModel } from '@nestjs/mongoose';
import { SignupDTO } from './dto/signup.dto';
import { UpdateProfileDTO } from './dto/update-profile.dto';
import { LoginDTO } from './dto/login.dto';
import { AdminLoginDTO } from '../admin/dto/admin-login.dto';
import { UpdateAdminUserDto } from '../admin/dto/update-admin-user.dto';
var bcrypt = require('bcryptjs');
//import * as otpGenerator from 'otp-generator';
import { OtpTypeEnum } from 'src/enum/otp.enum';
import { Otp } from 'src/interface/otp/otp.interface';
import { OtpDTO } from './dto/otp.dto';
import { EmailDTO } from './dto/email.dto';
import * as otpGenerator from 'otp-generator';
import { getEmail } from './email';
import { UtilsService } from '../utils/utils.service';
import { Login2FADTO } from './dto/2fa.dto';
import { TwoFactorService } from './2fa.service';
import { UpdateBiometricStatusDTO } from './dto/biometric.dto';
import { ChangePasswordDTO } from './dto/change-password.dto';
import { DeviceService } from './device.service';
import { LoginHistoryService } from './login-history.service';
import { DeviceInfoDTO } from './dto/device.dto';
import { RegisterFcmTokenDto } from './dto/register-fcm-token.dto';
const GO_CARDLESS_ACTIVE = false;

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectModel('User') private _userModel: Model<User>,
    @InjectModel('Otp') private _otpModel: Model<Otp>,
    @InjectModel('Product') private _productModel: Model<any>,
    private utilsService: UtilsService,
    private twoFactorService: TwoFactorService,
    private deviceService: DeviceService,
    private loginHistoryService: LoginHistoryService,
  ) {
  }

  private generateToken(payload) {
    return {
      access_token: `Bearer ${this.jwtService.sign(payload)}`,
    };
  }

  async signup(signupDto: SignupDTO) {
    try {

      signupDto.email = signupDto?.email?.toLowerCase();

      const existingUser = await this._userModel.findOne({
        email: signupDto.email,
        isEmailVerified: true,
        isDeleted: false,
      });
      if (existingUser) {
        throw new Error('User already exists with this email');
      }

      await this._userModel.deleteMany({
        email: signupDto?.email,
        isEmailVerified: false,
      })

      const userData = await new this._userModel(signupDto).save();



      const otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
      });

      //const otp = '123456';

      const expiryTime = new Date(Date.now()).getTime() + 2 * 60 * 1000;

      const otpObject = {
        otp: otp,
        userID: userData.id,
        expiryTime: expiryTime,
        type: OtpTypeEnum.SIGNUP,
      };

      const expiredOtp = await this._otpModel.find({
        type: OtpTypeEnum.SIGNUP,
        userID: userData.id,
        expiryTime: { $lt: new Date(Date.now()).getTime() },
      });

      const currentTime = new Date(Date.now()).getTime();

      if (expiredOtp[0]) {
        if (currentTime > expiredOtp[0].expiryTime) {
          await this._otpModel.findByIdAndUpdate(expiredOtp[0]._id, {
            isUsed: true,
          });
        }
      }

      const otpAlreadyPresent = await this._otpModel.find({
        isKYC: true,
        userID: userData.id,
        isUsed: false,
      });

      if (otpAlreadyPresent.length > 0) {
        await this._otpModel.findByIdAndUpdate(otpAlreadyPresent[0]._id, {
          isUsed: true,
        });
      }

      await this._otpModel.create(otpObject);

      const res = await this.utilsService.sendEmail({
        to: signupDto?.email,
        subject: "Confirm your email",
        html: getEmail(`${signupDto?.email}`, otp)
      })

      // Return user data without password
      const userResponse = JSON.parse(JSON.stringify(userData));
      delete userResponse.password;

      return { user: userResponse };
    } catch (err) {
      console.log(err);
      throw new BadRequestException(err?.message);
    }
  }


  async isEmailExists(emailDto: EmailDTO) {
    try {
      const user = await this._userModel.findOne({ email: emailDto?.email?.toLowerCase(), isEmailVerified: true, isDeleted: false, }, { email: 1, isEmailVerified: 1, loginType: 1 });

      if (user) {
        return {
          status: true,
          user: user
        }
      } else {
        return {
          status: false,
          user: user
        }
      }
    }
    catch (err) {
      console.log(err);
      throw new BadRequestException(err?.message);
    }
  }

  async resendOtp(emailDto: EmailDTO) {
    try {
      emailDto.email = emailDto?.email?.toLowerCase();
      const userData = await this._userModel.findOne({ email: emailDto?.email, isDeleted: false })

      if (!userData) {
        throw new Error("Invalid email");
      }

      if (userData?.isEmailVerified) {
        //forgot password

        return await this.forgotPassword(emailDto)
      } else {
        //signup
        const otp = '123456';
        //  otpGenerator.generate(6, {
        //   upperCaseAlphabets: false,
        //   lowerCaseAlphabets: false,
        //   specialChars: false,
        // });

        const expiryTime = new Date(Date.now()).getTime() + 2 * 60 * 1000;

        const otpObject = {
          otp: otp,
          userID: userData.id,
          expiryTime: expiryTime,
          type: OtpTypeEnum.SIGNUP,
        };

        const expiredOtp = await this._otpModel.find({
          type: OtpTypeEnum.SIGNUP,
          userID: userData.id,
          expiryTime: { $lt: new Date(Date.now()).getTime() },
        });

        const currentTime = new Date(Date.now()).getTime();

        if (expiredOtp[0]) {
          if (currentTime > expiredOtp[0].expiryTime) {
            await this._otpModel.findByIdAndUpdate(expiredOtp[0]._id, {
              isUsed: true,
            });
          }
        }

        const otpAlreadyPresent = await this._otpModel.find({
          isKYC: true,
          userID: userData.id,
          isUsed: false,
        });

        if (otpAlreadyPresent.length > 0) {
          await this._otpModel.findByIdAndUpdate(otpAlreadyPresent[0]._id, {
            isUsed: true,
          });
        }

        await this._otpModel.create(otpObject);

        /*
          Send email logic here
        */
        // const res = await this.utilsService.sendEmail({
        //   from: `Buildings Up<no-reply@${process.env.MAILGUN_DOMAIN}>`,
        //   to: [userData?.email],
        //   subject: "Confirm your email",
        //   html: getEmail(`${userData?.firstname} ${userData?.lastname}`, otp)
        // })


        return { status: 'success', message: 'OTP resent' }

      }
    }
    catch (err) {
      console.log(err);
      throw new BadRequestException(err?.message);
    }
  }

  async verifyEmail(
    otpDto: OtpDTO,
    deviceInfo?: DeviceInfoDTO,
    ipAddress?: string,
  ) {
    try {
      otpDto.email = otpDto?.email?.toLowerCase();

      const user = await this._userModel.findOne({ email: otpDto?.email, isDeleted: false, });

      if (!user) {
        throw new Error('Invalid email');
      }

      if (user?.isEmailVerified) {
        throw new Error('Email already verified');
      }

      const otp = await this._otpModel.findOne({
        userID: user.id,
        otp: otpDto?.otp,
        isUsed: false,
        type: OtpTypeEnum.SIGNUP,
      });

      if (!otp) {
        throw new Error('Wrong OTP typed');
      }

      const currentTime = new Date(Date.now()).getTime();
      const expiryTime = otp.expiryTime;

      if (currentTime > expiryTime) {
        await this._otpModel.findByIdAndUpdate(otp._id, { isUsed: true });
        throw new Error('Otp expired');
      }

      await this._userModel.updateOne(
        { _id: user.id },
        { isEmailVerified: true },
      );

      let userData = await this._userModel.findOne({ _id: user.id, isDeleted: false, });
      userData = JSON.parse(JSON.stringify(userData));

      delete userData.password;

      const token = await this.generateToken(userData);

      const userId = user.id.toString();
      if (deviceInfo) {
        try {
          await this.deviceService.registerDevice(
            userId,
            deviceInfo,
            token.access_token,
            ipAddress,
          );
        } catch (deviceErr) {
          console.error('verifyEmail: device registration failed', deviceErr);
        }
      }

      return { status: 'success', token };
    } catch (err) {
      console.log(err);
      throw new BadRequestException(err?.message);
    }
  }

  /**
   * Removes the Device row for this JWT (including stored FCM token).
   * Authorization header must match the stored loginToken (e.g. "Bearer ...").
   */
  async logoutCurrentSession(authorizationHeader: string | undefined) {
    if (!authorizationHeader || !authorizationHeader.trim()) {
      throw new UnauthorizedException('Missing authorization');
    }
    await this.deviceService.removeDeviceByToken(authorizationHeader.trim());
    return { success: true, message: 'Logged out' };
  }

  async registerFcmToken(userId: string, dto: RegisterFcmTokenDto) {
    return this.deviceService.registerFcmTokenForUser(userId, dto);
  }

  async login(loginDto: LoginDTO, deviceInfo?: DeviceInfoDTO, ipAddress?: string) {
    console.log('🟢 [AUTH SERVICE] Login method called');
    console.log('📦 [AUTH SERVICE] Full loginDto:', JSON.stringify(loginDto, null, 2));
    console.log('📧 [AUTH SERVICE] Email:', loginDto?.email);
    console.log('🔑 [AUTH SERVICE] Password present:', !!loginDto?.password);
    console.log('📱 [AUTH SERVICE] Device info received:', deviceInfo ? 'YES' : 'NO');
    if (deviceInfo) {
      console.log('📱 [AUTH SERVICE] Device info details:', JSON.stringify(deviceInfo, null, 2));
    }
    console.log('🌐 [AUTH SERVICE] IP Address:', ipAddress);
    
    // Validate email is provided
    if (!loginDto?.email) {
      console.error('❌ [AUTH SERVICE] Email is missing from request');
      throw new Error('Email is required');
    }
    
    try {
      // Normalize email
      const normalizedEmail = loginDto.email.toLowerCase().trim();
      if (!normalizedEmail) {
        throw new Error('Email is required');
      }

      let user = await this._userModel.findOne({
        email: normalizedEmail,
        isEmailVerified: true,
        isDeleted: false,
      });
      
      console.log('👤 [AUTH SERVICE] User found:', user ? 'YES' : 'NO');
      if (user) {
        console.log('👤 [AUTH SERVICE] User ID:', user._id?.toString());
        console.log('👤 [AUTH SERVICE] User email:', user.email);
      }
      
      if (!user) {
        console.log('❌ [AUTH SERVICE] User not found');
        console.log('   Searched for email:', normalizedEmail);
        console.log('   Conditions: isEmailVerified=true, isDeleted=false');
        
        // Check if user exists but doesn't meet conditions
        const userExists = await this._userModel.findOne({ email: normalizedEmail });
        if (userExists) {
          console.log('   ⚠️ User exists but:');
          console.log('      - isEmailVerified:', userExists.isEmailVerified);
          console.log('      - isDeleted:', userExists.isDeleted);
        }
        
        // Record failed login attempt (only if email is provided)
        if (normalizedEmail) {
          try {
            await this.loginHistoryService.recordLogin({
              userId: null, // User not found
              email: normalizedEmail,
              deviceInfo,
              ipAddress: ipAddress || 'Unknown',
              loginMethod: 'password',
              status: 'failed',
              failureReason: userExists 
                ? `User exists but email not verified or account deleted (verified: ${userExists.isEmailVerified}, deleted: ${userExists.isDeleted})`
                : 'User not found',
            });
            console.log('✅ [AUTH SERVICE] Failed login history recorded');
          } catch (historyError) {
            // Don't fail login if history recording fails
            console.error('❌ [AUTH SERVICE] Failed to record login history:', historyError);
            // Only log error message, not full stack for cleaner logs
            if (historyError instanceof Error) {
              console.error('❌ [AUTH SERVICE] History error message:', historyError.message);
            }
          }
        }
        throw new Error('Incorrect credentials');
      }

      console.log('🔐 [AUTH SERVICE] Comparing password...');
      if (await bcrypt.compare(loginDto.password, user.password)) {
        console.log('✅ [AUTH SERVICE] Password is valid');
        console.log('🔒 [AUTH SERVICE] Checking 2FA status:', user.isTwoFactorEnabled ? 'ENABLED' : 'DISABLED');
        // Check if user has 2FA enabled
        if (user.isTwoFactorEnabled) {
          // Return 2FA required response (without token/user data)
          return {
            success: false,
            requires2FA: true,
            message: '2FA verification required',
            data: {
              email: user.email,
              isTwoFactorEnabled: true,
            },
          };
        }

        // No 2FA - proceed with normal login
        // IMPORTANT: Save userId and email BEFORE converting to plain object
        const userId = user._id.toString();
        const userEmail = user.email;
        
        user = JSON.parse(JSON.stringify(user));
        delete user.password;

        const token = await this.generateToken(user);
        console.log('🔑 [AUTH SERVICE] JWT token generated');

      // Register device if device info provided
      if (deviceInfo) {
        console.log('📱 [AUTH SERVICE] Device info provided in simple login, registering...');
        console.log('📱 [AUTH SERVICE] Calling deviceService.registerDevice with:');
        console.log('   userId:', userId);
        console.log('   deviceInfo:', JSON.stringify(deviceInfo, null, 2));
        console.log('   token:', token.access_token.substring(0, 20) + '...');
        console.log('   ipAddress:', ipAddress);
        
        try {
          const registeredDevice = await this.deviceService.registerDevice(
            userId,
            deviceInfo,
            token.access_token,
            ipAddress,
          );
          console.log('✅ [AUTH SERVICE] Device registered successfully:', registeredDevice);
        } catch (err) {
          console.error('❌ [AUTH SERVICE] Error registering device in simple login:', err);
          console.error('❌ [AUTH SERVICE] Error stack:', err.stack);
          // Don't fail login if device registration fails
        }
      } else {
        console.log('⚠️ [AUTH SERVICE] No device info provided in simple login');
      }

        // Record successful login
        console.log('📜 [AUTH SERVICE] Recording login history...');
        await this.loginHistoryService.recordLogin({
          userId: userId,
          email: userEmail,
          deviceInfo,
          ipAddress: ipAddress || 'Unknown',
          loginMethod: 'password',
          status: 'success',
        });
        console.log('✅ [AUTH SERVICE] Login history recorded');

        return { 
          success: true,
          requires2FA: false,
          user, 
          token 
        };
      } else {
        // Record failed login attempt
        const failedUserId = user._id.toString();
        await this.loginHistoryService.recordLogin({
          userId: failedUserId,
          email: user.email,
          deviceInfo,
          ipAddress: ipAddress || 'Unknown',
          loginMethod: 'password',
          status: 'failed',
          failureReason: 'Invalid password',
        });
        throw new Error('Incorrect credentials');
      }
    } catch (err) {
      console.log(err);
      throw new UnauthorizedException(err?.message);
    }
  }

  async adminLogin(
    loginDto: AdminLoginDTO,
    ipAddress?: string,
    deviceInfo?: DeviceInfoDTO,
  ) {
    console.log('🟢 [AUTH SERVICE] Admin login method called');
    console.log('📧 [AUTH SERVICE] Email:', loginDto?.email);
    console.log('🌐 [AUTH SERVICE] IP Address:', ipAddress);
    console.log('📱 [AUTH SERVICE] Device info for FCM:', deviceInfo ? 'YES' : 'NO');

    try {
      // Normalize email
      const normalizedEmail = loginDto.email.toLowerCase().trim();
      if (!normalizedEmail) {
        throw new Error('Email is required');
      }

      // Find user with admin role
      const user = await this._userModel.findOne({
        email: normalizedEmail,
        isEmailVerified: true,
        isDeleted: false,
        userRole: 'admin', // Only admin users can login
      });

      if (!user) {
        console.log('❌ [AUTH SERVICE] Admin user not found or not an admin');
        throw new UnauthorizedException('Invalid credentials or insufficient permissions');
      }

      const userId = user._id.toString();

      // Verify password
      const isPasswordValid = await bcrypt.compare(loginDto.password, user.password);
      
      if (isPasswordValid) {
        // Plain JSON payload (ObjectId must be string or JWT signing/verification can drift)
        const payload = {
          sub: userId,
          id: userId,
          email: user.email,
          userRole: user.userRole,
        };

        const token = this.generateToken(payload);

        if (deviceInfo) {
          try {
            await this.deviceService.registerDevice(
              userId,
              deviceInfo,
              token.access_token,
              ipAddress,
            );
            console.log('✅ [AUTH SERVICE] Admin device + FCM registered');
          } catch (deviceErr) {
            console.error('❌ [AUTH SERVICE] Admin device registration failed:', deviceErr);
          }
        }

        // Return user data without password
        const userData = {
          id: userId,
          email: user.email,
          fullName: user.fullName || user.name,
          userRole: user.userRole,
          userStatus: user.userStatus,
          profilePic: user.profilePic || user.pic,
        };

        return {
          accessToken: token.access_token,
          user: userData,
          expiresIn: 9999999999, // Token expiration in seconds
        };
      } else {
        throw new UnauthorizedException('Invalid credentials');
      }
    } catch (err) {
      console.log('❌ [AUTH SERVICE] Admin login error:', err);
      if (err instanceof UnauthorizedException) {
        throw err;
      }
      throw new UnauthorizedException(err?.message || 'Login failed');
    }
  }

  async getAllUsersForAdmin(query: {
    search?: string;
    userRole?: 'normal' | 'seller' | 'admin';
    userStatus?: 'active' | 'inactive' | 'suspended';
    userLevel?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
    limit?: number;
    offset?: number;
  }) {
    try {
      const limit = query.limit || 100;
      const offset = query.offset || 0;

      // Build filter query
      const filter: any = {
        isDeleted: false, // Only get non-deleted users
      };

      // Add role filter
      if (query.userRole) {
        filter.userRole = query.userRole;
      }

      // Add status filter
      if (query.userStatus) {
        filter.userStatus = query.userStatus;
      }

      // Add level filter
      if (query.userLevel) {
        filter.userLevel = query.userLevel;
      }

      // Add search filter
      if (query.search) {
        const searchRegex = { $regex: query.search, $options: 'i' };
        filter.$or = [
          { email: searchRegex },
          { name: searchRegex },
          { fullName: searchRegex },
        ];
      }

      // Get users with pagination
      const users = await this._userModel
        .find(filter)
        .select('-password -twoFactorSecret') // Exclude sensitive fields
        .sort({ createdAt: -1 })
        .skip(offset)
        .limit(limit)
        .lean();

      // Get total count
      const total = await this._userModel.countDocuments(filter);

      const transformedUsers = users.map((user: any) =>
        this.mapOneUserForAdminResponse(user),
      );

      return {
        users: transformedUsers,
        total: total,
      };
    } catch (error) {
      console.error('Error getting all users for admin:', error);
      throw new Error('Failed to retrieve users');
    }
  }

  /** Active users with role admin (not soft-deleted). */
  private async countActiveAdmins(): Promise<number> {
    return this._userModel.countDocuments({
      userRole: 'admin',
      isDeleted: false,
    });
  }

  mapOneUserForAdminResponse(user: Record<string, any>) {
    const userId = user.id || user._id?.toString() || '';
    return {
      id: userId,
      email: user.email || '',
      name: user.name || '',
      fullName: user.fullName || user.name || '',
      phoneNumber: user.phoneNumber || '',
      userRole: user.userRole || 'normal',
      userStatus: user.userStatus || 'active',
      userLevel: user.userLevel || 'beginner',
      profilePic: user.profilePic || user.pic || '',
      pic: user.pic || '',
      color: user.color || '#3B82F6',
      village: user.village || '',
      country: user.country || '',
      homeAddress: user.homeAddress || '',
      zipcode: user.zipcode || '',
      isEmailVerified: user.isEmailVerified || false,
      isTwoFactorEnabled: user.isTwoFactorEnabled || false,
      isBiometric: user.isBiometric || false,
      sellOrders: user.sellOrders || 0,
      buyOrders: user.buyOrders || 0,
      createdAt: user.createdAt ? new Date(user.createdAt) : new Date(),
      updatedAt: user.updatedAt ? new Date(user.updatedAt) : new Date(),
    };
  }

  async updateUserForAdmin(
    targetId: string,
    dto: UpdateAdminUserDto,
  ): Promise<{ success: boolean; message: string; data: Record<string, unknown> }> {
    const existing = await this._userModel
      .findOne({ _id: targetId, isDeleted: false })
      .exec();
    if (!existing) {
      throw new NotFoundException('User not found');
    }

    const wasAdmin = existing.userRole === 'admin';
    const nextRole = dto.userRole ?? existing.userRole;
    if (wasAdmin && nextRole !== 'admin') {
      const admins = await this.countActiveAdmins();
      if (admins <= 1) {
        throw new ForbiddenException('Cannot change role of the last admin');
      }
    }

    const $set: Record<string, unknown> = {};
    const keys: (keyof UpdateAdminUserDto)[] = [
      'fullName',
      'phoneNumber',
      'village',
      'country',
      'homeAddress',
      'zipcode',
      'userLevel',
      'userStatus',
      'userRole',
      'isEmailVerified',
      'isTwoFactorEnabled',
      'isBiometric',
    ];
    for (const k of keys) {
      if (dto[k] !== undefined) $set[k] = dto[k];
    }

    if (Object.keys($set).length === 0) {
      const lean = existing.toObject();
      return {
        success: true,
        message: 'No changes',
        data: this.mapOneUserForAdminResponse(lean),
      };
    }

    const updated = await this._userModel
      .findOneAndUpdate({ _id: targetId, isDeleted: false }, { $set }, { new: true })
      .select('-password -twoFactorSecret')
      .lean()
      .exec();

    if (!updated) {
      throw new NotFoundException('User not found');
    }

    return {
      success: true,
      message: 'User updated',
      data: this.mapOneUserForAdminResponse(updated as Record<string, any>),
    };
  }

  async deleteUserForAdmin(
    targetId: string,
    jwtUser: Record<string, unknown>,
  ): Promise<{ success: boolean; message: string }> {
    const requesterId = String(jwtUser['id'] ?? jwtUser['sub'] ?? '');
    if (requesterId && targetId === requesterId) {
      throw new BadRequestException('Cannot delete your own account');
    }

    const existing = await this._userModel
      .findOne({ _id: targetId, isDeleted: false })
      .exec();
    if (!existing) {
      throw new NotFoundException('User not found');
    }

    if (existing.userRole === 'admin') {
      const admins = await this.countActiveAdmins();
      if (admins <= 1) {
        throw new ForbiddenException('Cannot delete the last admin');
      }
    }

    await this._userModel.updateOne(
      { _id: targetId },
      { $set: { isDeleted: true, userStatus: 'inactive' } },
    );

    return { success: true, message: 'User deleted' };
  }

  async forgotPassword(emailDto: EmailDTO) {
    try {
      emailDto.email = emailDto?.email?.toLowerCase();

      const user = await this._userModel.findOne({ email: emailDto?.email, isDeleted: false, });

      if (!user) {
        throw new Error('Invalid Email');
      }

      const otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
      });

      const expiryTime = new Date(Date.now()).getTime() + 2 * 60 * 1000;

      // console.log(expiryTime);

      const otpObject = {
        otp: otp,
        userID: user.id,
        expiryTime: expiryTime,
        type: OtpTypeEnum.FORGOT_PASSWORD,
      };

      const expiredOtp = await this._otpModel.find({
        userID: user.id,
        expiryTime: { $lt: new Date(Date.now()).getTime() },
        type: OtpTypeEnum.FORGOT_PASSWORD,
      });

      const currentTime = new Date(Date.now()).getTime();

      if (expiredOtp[0]) {
        if (currentTime > expiredOtp[0].expiryTime) {
          await this._otpModel.findByIdAndUpdate(expiredOtp[0]._id, {
            isUsed: true,
          });
        }
      }

      const otpAlreadyPresent = await this._otpModel.find({
        userID: user.id,
        isUsed: false,
        type: OtpTypeEnum.FORGOT_PASSWORD,
      });

      if (otpAlreadyPresent.length > 0) {
        await this._otpModel.findByIdAndUpdate(otpAlreadyPresent[0]._id, {
          isUsed: true,
        });
      }

      await this._otpModel.create(otpObject);

      // Send OTP email
      const userName = user?.fullName || user?.name || emailDto?.email;
      
      await this.utilsService.sendEmail({
        to: emailDto?.email,
        subject: "Password Reset - Verification Code",
        html: getEmail(userName, otp, false),
        text: `Your password reset verification code is: ${otp}`
      });

      console.log(`🔐 Forgot Password OTP sent to ${emailDto?.email}: ${otp}`);

      return {
        status: 'success',
      };
    } catch (err) {
      throw new BadRequestException(err?.message);
    }
  }

  async verifyOtpForForgotPassword(otpDto: OtpDTO) {
    try {
      otpDto.email = otpDto?.email?.toLowerCase();
      let user: any = await this._userModel.findOne({ email: otpDto?.email, isDeleted: false, });
      if (!user) {
        throw new Error('Invalid Email');
      }

      const otp = await this._otpModel.findOne({
        userID: user.id,
        otp: otpDto?.otp,
        isUsed: false,
        type: OtpTypeEnum.FORGOT_PASSWORD,
      });

      if (!otp) {
        throw new Error('Wrong OTP typed');
      }

      const currentTime = new Date(Date.now()).getTime();
      const expiryTime = otp.expiryTime;

      if (currentTime > expiryTime) {
        await this._otpModel.findByIdAndUpdate(otp._id, { isUsed: true });
        throw new Error('Otp expired');
      }

      user = JSON.parse(JSON.stringify(user));

      delete user.password;

      user.isForgetPassword = true;

      const token = await this.generateToken(user);

      return { status: 'success', token };
    } catch (err) {
      throw new UnauthorizedException(err?.message);
    }
  }

  async resetPassword(resetPasswordDto, user) {
    try {
      if (!user.isForgetPassword) {
        throw new UnauthorizedException('Cannot reset password at this stage');
      }
      const userData = await this._userModel.findOne({ _id: user.id, isDeleted: false, });

      if (!userData) {
        throw new UnauthorizedException('No user found');
      }
      await this._userModel.updateOne(
        { _id: user.id },
        { password: resetPasswordDto.password },
      );

      return { status: 'success' };
    } catch (err) {
      throw new UnauthorizedException(err.message);
    }
  }

  async getLoggedInUsers(user) {
    try {
      const userData = await this._userModel.findOne({ _id: user.id })
      return userData;
    } catch (err) {
      console.log(err);
      throw new BadRequestException(err?.message);
    }
  }

  async updateProfile(updateProfileDto: UpdateProfileDTO, user) {
    try {
      const userData = await this._userModel.findOne({ _id: user.id, isDeleted: false });
      
      if (!userData) {
        throw new Error('User not found');
      }

      // Update user profile with new data
      const updatedUser = await this._userModel.findByIdAndUpdate(
        user.id,
        {
          fullName: updateProfileDto.fullName,
          phoneNumber: updateProfileDto.phoneNumber,
          village: updateProfileDto.village,
          country: updateProfileDto.country,
          homeAddress: updateProfileDto.homeAddress,
          profilePic: updateProfileDto.profilePic || userData.profilePic,
          zipcode: updateProfileDto.zipcode,
        },
        { new: true }
      );

      // Return user data without password
      const userResponse = JSON.parse(JSON.stringify(updatedUser));
      delete userResponse.password;

      return { user: userResponse };
    } catch (err) {
      console.log(err);
      throw new BadRequestException(err?.message);
    }
  }

  async loginWith2FA(login2FADto: Login2FADTO, deviceInfo?: DeviceInfoDTO, ipAddress?: string) {
    try {
      const { email, password, token } = login2FADto;

      // First, validate email and password
      const user = await this._userModel.findOne({
        email: email.toLowerCase(),
        isEmailVerified: true,
        isDeleted: false,
      });

      if (!user) {
        // Record failed login attempt (only if email is provided)
        if (email) {
          try {
            await this.loginHistoryService.recordLogin({
              userId: null,
              email: email.toLowerCase().trim(),
              deviceInfo,
              ipAddress: ipAddress || 'Unknown',
              loginMethod: '2fa',
              status: 'failed',
              failureReason: 'User not found',
            });
          } catch (historyError) {
            // Don't fail login if history recording fails
            console.error('❌ [AUTH SERVICE] Failed to record login history:', historyError);
          }
        }
        throw new UnauthorizedException('Invalid credentials');
      }

      // IMPORTANT: Save userId as string immediately after finding user
      const userId = user._id.toString();
      const userEmail = user.email;

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        // Record failed login attempt
        await this.loginHistoryService.recordLogin({
          userId: userId,
          email: userEmail,
          deviceInfo,
          ipAddress: ipAddress || 'Unknown',
          loginMethod: '2fa',
          status: 'failed',
          failureReason: 'Invalid password',
        });
        throw new UnauthorizedException('Invalid credentials');
      }

      // Check if user has 2FA enabled
      if (user.isTwoFactorEnabled) {
        if (!token) {
          // Return a special response indicating 2FA is required
          return {
            success: false,
            requires2FA: true,
            message: '2FA verification required',
            data: {
              email: user.email,
              isTwoFactorEnabled: true,
            },
          };
        }

        // Verify the 2FA token
        const isTokenValid = await this.twoFactorService.verify2FAToken(user.id, token);
        if (!isTokenValid) {
          // Record failed 2FA attempt
          await this.loginHistoryService.recordLogin({
            userId: userId,
            email: userEmail,
            deviceInfo,
            ipAddress: ipAddress || 'Unknown',
            loginMethod: '2fa',
            status: 'failed',
            failureReason: 'Invalid 2FA token',
          });
          throw new UnauthorizedException('Invalid 2FA token');
        }
      }

      // Generate JWT token
      const payload = {
        id: user.id,
        email: user.email,
        userRole: user.userRole,
      };

      const tokenResponse = this.generateToken(payload);

      // Register device if device info provided
      if (deviceInfo) {
        console.log('📱 Device info provided in 2FA login, registering...');
        try {
          await this.deviceService.registerDevice(
            userId,
            deviceInfo,
            tokenResponse.access_token,
            ipAddress,
          );
          console.log('✅ Device registered successfully in 2FA login');
        } catch (err) {
          console.error('❌ Error registering device in 2FA login:', err);
          // Don't fail login if device registration fails
        }
      } else {
        console.log('⚠️ No device info provided in 2FA login');
      }

      // Record successful 2FA login
      await this.loginHistoryService.recordLogin({
        userId: userId,
        email: userEmail,
        deviceInfo,
        ipAddress: ipAddress || 'Unknown',
        loginMethod: '2fa',
        status: 'success',
      });

      // Prepare user response (without password)
      const userResponse = {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        userRole: user.userRole,
        userStatus: user.userStatus,
        isTwoFactorEnabled: user.isTwoFactorEnabled,
        isBiometric: user.isBiometric,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      };

      return {
        success: true,
        requires2FA: false,
        message: 'Login successful',
        data: {
          ...tokenResponse,
          user: userResponse,
        },
      };
    } catch (err) {
      console.log(err);
      throw new BadRequestException(err?.message || 'Login failed');
    }
  }

  async updateBiometricStatus(userId: string, updateBiometricDto: UpdateBiometricStatusDTO) {
    try {
      const user = await this._userModel.findById(userId);
      if (!user) {
        throw new BadRequestException('User not found');
      }

      user.isBiometric = updateBiometricDto.isBiometric;
      await user.save();

      return {
        success: true,
        message: `Biometric authentication ${updateBiometricDto.isBiometric ? 'enabled' : 'disabled'} successfully`,
        data: {
          isBiometric: user.isBiometric,
        },
      };
    } catch (err) {
      console.log(err);
      throw new BadRequestException(err?.message || 'Failed to update biometric status');
    }
  }

  async changePassword(userId: string, changePasswordDto: ChangePasswordDTO) {
    try {
      // Find user
      const user = await this._userModel.findById(userId);

      if (!user) {
        throw new BadRequestException('User not found');
      }

      // Verify current password
      const isPasswordValid = await bcrypt.compare(
        changePasswordDto.currentPassword,
        user.password,
      );

      if (!isPasswordValid) {
        throw new BadRequestException('Current password is incorrect');
      }

      // Check if new password is same as current
      const isSamePassword = await bcrypt.compare(
        changePasswordDto.newPassword,
        user.password,
      );

      if (isSamePassword) {
        throw new BadRequestException('New password must be different from current password');
      }

      // Hash new password
      const hashedPassword = await bcrypt.hash(changePasswordDto.newPassword, 10);

      // Update password
      user.password = hashedPassword;
      await user.save();

      return {
        success: true,
        message: 'Password changed successfully',
      };
    } catch (err) {
      console.log(err);
      throw new BadRequestException(err?.message || 'Failed to change password');
    }
  }

  // ============ DEVICE MANAGEMENT ============

  async getUserDevices(userId: string, currentDeviceId?: string) {
    try {
      const devices = await this.deviceService.getUserDevices(userId, currentDeviceId);

      return {
        success: true,
        devices: devices.map((device: any) => ({
          id: device._id,
          deviceId: device.deviceId,
          deviceName: device.deviceName,
          deviceType: device.deviceType,
          platform: device.platform,
          browser: device.browser,
          ipAddress: device.ipAddress,
          location: device.location,
          lastActive: device.lastActive,
          isCurrentDevice: device.isCurrentDevice,
          createdAt: device.createdAt,
        })),
        count: devices.length,
      };
    } catch (err) {
      console.log(err);
      throw new BadRequestException(err?.message || 'Failed to get devices');
    }
  }

  async logoutDevice(userId: string, deviceId: string) {
    try {
      const success = await this.deviceService.logoutDevice(userId, deviceId);

      if (!success) {
        throw new BadRequestException('Device not found');
      }

      return {
        success: true,
        message: 'Device logged out successfully',
      };
    } catch (err) {
      console.log(err);
      throw new BadRequestException(err?.message || 'Failed to logout device');
    }
  }

  async logoutAllDevices(userId: string, currentDeviceId?: string) {
    try {
      const count = await this.deviceService.logoutAllDevices(userId, currentDeviceId);

      return {
        success: true,
        message: `Logged out from ${count} device(s)`,
        count,
      };
    } catch (err) {
      console.log(err);
      throw new BadRequestException(err?.message || 'Failed to logout all devices');
    }
  }

  // ============ DEVELOPMENT HELPER ============

  /**
   * Get recent OTPs for development/testing
   * Only works when Mailjet is not configured (development mode)
   */
  async getRecentOTPs(email?: string) {
    try {
      // Check if in development mode
      const isMailjetConfigured = process.env.MAILJET_API_KEY && 
                                 process.env.MAILJET_API_KEY !== '0' &&
                                 process.env.MAILJET_API_KEY !== 'dummy-key-not-configured';

      if (isMailjetConfigured) {
        throw new BadRequestException('This endpoint is only available in development mode');
      }

      const query: any = {};
      
      if (email) {
        const user = await this._userModel.findOne({ email: email.toLowerCase() });
        if (user) {
          query.userID = user.id;
        }
      }

      // Get recent OTPs (last 10)
      const otps = await this._otpModel
        .find(query)
        .sort({ createdAt: -1 })
        .limit(10)
        .lean();

      const currentTime = new Date().getTime();

      const otpList = await Promise.all(
        otps.map(async (otp: any) => {
          const user = await this._userModel.findById(otp.userID);
          return {
            email: user?.email || 'Unknown',
            otp: otp.otp,
            type: otp.type,
            expiryTime: otp.expiryTime,
            isExpired: currentTime > otp.expiryTime,
            createdAt: otp.createdAt,
          };
        })
      );

      return {
        isDevelopmentMode: true,
        otps: otpList,
        count: otpList.length,
      };
    } catch (err) {
      console.log(err);
      throw new BadRequestException(err?.message || 'Failed to get OTPs');
    }
  }

  // ─── Wishlist ────────────────────────────────────────────────────────────────

  async toggleWishlist(userId: string, productId: string) {
    try {
      const user = await this._userModel.findById(userId);
      if (!user) throw new NotFoundException('User not found');

      const alreadyIn = user.wishlist.includes(productId);
      if (alreadyIn) {
        await this._userModel.findByIdAndUpdate(userId, { $pull: { wishlist: productId } });
      } else {
        await this._userModel.findByIdAndUpdate(userId, { $addToSet: { wishlist: productId } });
      }

      const updated = await this._userModel.findById(userId);
      return {
        success: true,
        added: !alreadyIn,
        message: alreadyIn ? 'Product removed from wishlist' : 'Product added to wishlist',
        wishlistIds: updated.wishlist,
      };
    } catch (err) {
      throw new BadRequestException(err?.message || 'Failed to toggle wishlist');
    }
  }

  async getWishlist(userId: string) {
    try {
      const user = await this._userModel.findById(userId);
      if (!user) throw new NotFoundException('User not found');

      const products = await this._productModel
        .find({ _id: { $in: user.wishlist } })
        .exec();

      return {
        success: true,
        wishlistIds: user.wishlist,
        products,
      };
    } catch (err) {
      throw new BadRequestException(err?.message || 'Failed to get wishlist');
    }
  }

}
