import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class DeviceInfoDTO {
  @ApiProperty({ 
    description: 'Unique device identifier', 
    example: 'abc123xyz456' 
  })
  @IsNotEmpty()
  @IsString()
  deviceId: string;

  @ApiProperty({ 
    description: 'Device name', 
    example: 'iPhone 13 Pro' 
  })
  @IsNotEmpty()
  @IsString()
  deviceName: string;

  @ApiProperty({ 
    description: 'Device type', 
    example: 'mobile',
    enum: ['mobile', 'tablet', 'desktop', 'other']
  })
  @IsNotEmpty()
  @IsString()
  deviceType: 'mobile' | 'tablet' | 'desktop' | 'other';

  @ApiProperty({ 
    description: 'Platform/OS', 
    example: 'iOS 16.0' 
  })
  @IsNotEmpty()
  @IsString()
  platform: string;

  @ApiProperty({ 
    description: 'Browser name', 
    example: 'Safari',
    required: false
  })
  @IsOptional()
  @IsString()
  browser?: string;

  @ApiProperty({ 
    description: 'IP Address', 
    example: '192.168.1.1',
    required: false
  })
  @IsOptional()
  @IsString()
  ipAddress?: string;

  @ApiProperty({ 
    description: 'Location', 
    example: 'New York, USA',
    required: false
  })
  @IsOptional()
  @IsString()
  location?: string;

  @ApiProperty({
    description: 'Firebase Cloud Messaging token for this device',
    required: false,
  })
  @IsOptional()
  @IsString()
  fcmToken?: string;

  @ApiProperty({
    description: 'Client app id (e.g. cloth_shop_flutter) for multi-app FCM routing',
    example: 'cloth_shop_flutter',
    required: false,
  })
  @IsOptional()
  @IsString()
  appId?: string;
}

export class LogoutDeviceDTO {
  @ApiProperty({ 
    description: 'Device ID to logout', 
    example: '507f1f77bcf86cd799439011' 
  })
  @IsNotEmpty()
  @IsString()
  deviceId: string;
}

export class DeviceResponseDTO {
  @ApiProperty({ description: 'Device ID' })
  id: string;

  @ApiProperty({ description: 'Device identifier' })
  deviceId: string;

  @ApiProperty({ description: 'Device name' })
  deviceName: string;

  @ApiProperty({ description: 'Device type' })
  deviceType: string;

  @ApiProperty({ description: 'Platform/OS' })
  platform: string;

  @ApiProperty({ description: 'Browser name' })
  browser: string;

  @ApiProperty({ description: 'IP Address' })
  ipAddress: string;

  @ApiProperty({ description: 'Location' })
  location: string;

  @ApiProperty({ description: 'Last active timestamp' })
  lastActive: Date;

  @ApiProperty({ description: 'Is this the current device' })
  isCurrentDevice: boolean;

  @ApiProperty({ description: 'Login timestamp' })
  createdAt: Date;
}

export class DevicesListResponseDTO {
  @ApiProperty({ description: 'Success status' })
  success: boolean;

  @ApiProperty({ description: 'List of devices', type: [DeviceResponseDTO] })
  devices: DeviceResponseDTO[];

  @ApiProperty({ description: 'Total count' })
  count: number;
}

