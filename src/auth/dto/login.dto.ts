import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class LoginDTO {
  @ApiProperty({ description: 'User email address', example: 'user@example.com' })
  @IsEmail({}, { message: 'Please provide a valid email address' })
  @IsNotEmpty({ message: 'Email is required' })
  @IsString()
  email: string;

  @ApiProperty({ description: 'User password' })
  @IsNotEmpty({ message: 'Password is required' })
  @IsString()
  password: string;

  @ApiProperty({ required: false })
  @IsOptional()
  deviceId?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  deviceName?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  deviceType?: 'mobile' | 'tablet' | 'desktop' | 'other';

  @ApiProperty({ required: false })
  @IsOptional()
  platform?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  browser?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  location?: string;

  @ApiProperty({ required: false, description: 'FCM token for push notifications' })
  @IsOptional()
  @IsString()
  fcmToken?: string;

  @ApiProperty({ required: false, example: 'cloth_shop_flutter' })
  @IsOptional()
  @IsString()
  appId?: string;
}
