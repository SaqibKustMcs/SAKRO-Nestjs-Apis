import { ApiProperty } from '@nestjs/swagger';

export class DevOtpResponseDTO {
  @ApiProperty({ description: 'User email' })
  email: string;

  @ApiProperty({ description: 'OTP code' })
  otp: string;

  @ApiProperty({ description: 'OTP type' })
  type: string;

  @ApiProperty({ description: 'Expiry time' })
  expiryTime: number;

  @ApiProperty({ description: 'Is expired' })
  isExpired: boolean;

  @ApiProperty({ description: 'Created at' })
  createdAt: Date;
}

export class DevOtpListResponseDTO {
  @ApiProperty({ description: 'Development mode status' })
  isDevelopmentMode: boolean;

  @ApiProperty({ description: 'List of recent OTPs', type: [DevOtpResponseDTO] })
  otps: DevOtpResponseDTO[];

  @ApiProperty({ description: 'Total count' })
  count: number;
}

