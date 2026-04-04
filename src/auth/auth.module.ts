import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { AdminRoleGuard } from './admin-role.guard';
import { TwoFactorController, Auth2FAController } from './2fa.controller';
import { TwoFactorService } from './2fa.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/schema/user/user.schema';
import { OtpSchema } from 'src/schema/otp/otp.schema';
import { DeviceSchema } from 'src/schema/device.schema';
import { LoginHistorySchema } from 'src/schema/login-history.schema';
import { ProductSchema } from 'src/schema/product/product.schema';
import { UtilsService } from '../utils/utils.service';
import { DeviceService } from './device.service';
import { LoginHistoryService } from './login-history.service';
// Removed legacy ChatModule import

@Module({})
export class AuthModule {
  static forRoot(): DynamicModule {
    return {
      /** Register once in AppModule only. Duplicate `AuthModule.forRoot()` breaks JWT sign/verify. */
      global: true,
      imports: [
        ConfigModule,
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.registerAsync({
          global: true,
          imports: [ConfigModule],
          useFactory: (config: ConfigService) => ({
            secret:
              config.get<string>('JWT_SECRET') ||
              'fallback-secret-key-change-in-production',
            signOptions: { expiresIn: '9999999999s' },
          }),
          inject: [ConfigService],
        }),
        MongooseModule.forFeature([
          { name: 'User', schema: UserSchema },
          { name: 'Otp', schema: OtpSchema },
          { name: 'Device', schema: DeviceSchema },
          { name: 'LoginHistory', schema: LoginHistorySchema },
          { name: 'Product', schema: ProductSchema },
        ]),

        // Removed legacy ChatModule to avoid conflicts with new chat module
      ],
      controllers: [AuthController, TwoFactorController, Auth2FAController],
      providers: [
        AuthService,
        TwoFactorService,
        DeviceService,
        LoginHistoryService,
        JwtStrategy,
        UtilsService,
        AdminRoleGuard,
      ],
      exports: [AuthService, JwtModule, AdminRoleGuard],
      module: AuthModule,
    };
  }
}
