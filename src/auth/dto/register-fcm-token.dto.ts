import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class RegisterFcmTokenDto {
  @ApiProperty({ description: 'Hardware / app-stable device id', example: 'abc-uuid' })
  @IsNotEmpty()
  @IsString()
  deviceId: string;

  @ApiProperty({ description: 'FCM registration token' })
  @IsNotEmpty()
  @IsString()
  fcmToken: string;

  @ApiProperty({ required: false, example: 'cloth_shop_flutter' })
  @IsOptional()
  @IsString()
  appId?: string;
}
