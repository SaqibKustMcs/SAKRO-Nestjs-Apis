import { DynamicModule, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/schema/user/user.schema';
import { OtpSchema } from 'src/schema/otp/otp.schema';
import { UtilsService } from '../utils/utils.service';
import { ChatModule } from '@app/chat';

@Module({})
export class AuthModule {
  static forRoot(): DynamicModule {
    return {
      imports: [
        JwtModule.register({
          secret: process.env.JWT_SECRET,
          signOptions: { expiresIn: '9999999999s' },
        }),
        MongooseModule.forFeature([
          { name: 'User', schema: UserSchema },
          { name: 'Otp', schema: OtpSchema },
        ]),

        ChatModule,
      ],
      controllers: [AuthController],
      providers: [AuthService, JwtStrategy, UtilsService],
      module: AuthModule,
    };
  }
}
