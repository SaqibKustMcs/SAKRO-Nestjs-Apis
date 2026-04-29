import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class AdminLoginDTO {
  @ApiProperty({ 
    description: 'Admin email address', 
    example: 'admin@jhamat.com',
    required: true
  })
  @IsEmail({}, { message: 'Please provide a valid email address' })
  @IsNotEmpty({ message: 'Email is required' })
  @IsString()
  email: string;

  @ApiProperty({ 
    description: 'Admin password',
    example: 'Admin@123',
    required: true
  })
  @IsNotEmpty({ message: 'Password is required' })
  @IsString()
  password: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  deviceId?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  deviceName?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  deviceType?: 'mobile' | 'tablet' | 'desktop' | 'other';

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  platform?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  browser?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  location?: string;

  @ApiProperty({ required: false, description: 'FCM token for push notifications (e.g. admin PWA or companion app)' })
  @IsOptional()
  @IsString()
  fcmToken?: string;
}

