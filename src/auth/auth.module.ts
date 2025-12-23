import { DynamicModule, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { TwoFactorController, Auth2FAController } from './2fa.controller';
import { TwoFactorService } from './2fa.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/schema/user/user.schema';
import { OtpSchema } from 'src/schema/otp/otp.schema';
import { DeviceSchema } from 'src/schema/device.schema';
import { LoginHistorySchema } from 'src/schema/login-history.schema';
import { UtilsService } from '../utils/utils.service';
import { DeviceService } from './device.service';
import { LoginHistoryService } from './login-history.service';
// Removed legacy ChatModule import

@Module({})
export class AuthModule {
  static forRoot(): DynamicModule {
    return {
      imports: [
        JwtModule.register({
          secret: process.env.JWT_SECRET,
          signOptions: { expiresIn: '9999999999s' },
          global: true, // Make JWT module global to avoid conflicts
        }),
        MongooseModule.forFeature([
          { name: 'User', schema: UserSchema },
          { name: 'Otp', schema: OtpSchema },
          { name: 'Device', schema: DeviceSchema },
          { name: 'LoginHistory', schema: LoginHistorySchema },
        ]),

        // Removed legacy ChatModule to avoid conflicts with new chat module
      ],
      controllers: [AuthController, TwoFactorController, Auth2FAController],
      providers: [AuthService, TwoFactorService, DeviceService, LoginHistoryService, JwtStrategy, UtilsService],
      module: AuthModule,
    };
  }
}
