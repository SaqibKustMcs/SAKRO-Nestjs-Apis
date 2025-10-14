import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, Length } from 'class-validator';

export class Verify2FADTO {
  @ApiProperty({ 
    description: '6-digit TOTP token from Google Authenticator',
    example: '123456',
    minLength: 6,
    maxLength: 6
  })
  @IsString()
  @IsNotEmpty()
  @Length(6, 6, { message: 'Token must be exactly 6 digits' })
  token: string;
}

export class Login2FADTO {
  @ApiProperty({ 
    description: 'User email address',
    example: 'user@example.com'
  })
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ 
    description: 'User password',
    example: 'password123'
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({ 
    description: '6-digit TOTP token from Google Authenticator (required if 2FA is enabled)',
    example: '123456',
    required: false
  })
  @IsString()
  @Length(6, 6, { message: 'Token must be exactly 6 digits' })
  token?: string;
}

export class Enable2FAResponseDTO {
  @ApiProperty({ description: 'QR code as base64 string for Google Authenticator' })
  qrCode: string;

  @ApiProperty({ description: 'Manual entry key for Google Authenticator' })
  manualEntryKey: string;

  @ApiProperty({ description: 'OTPAUTH URL for Google Authenticator' })
  otpauthUrl: string;
}

export class Verify2FAResponseDTO {
  @ApiProperty({ description: 'Whether 2FA verification was successful' })
  verified: boolean;

  @ApiProperty({ description: 'Whether 2FA is now enabled for the user' })
  enabled: boolean;
}

export class Login2FAResponseDTO {
  @ApiProperty({ description: 'JWT access token' })
  accessToken: string;

  @ApiProperty({ description: 'User information' })
  user: {
    id: string;
    email: string;
    fullName: string;
    userRole: string;
    isTwoFactorEnabled: boolean;
  };
}

