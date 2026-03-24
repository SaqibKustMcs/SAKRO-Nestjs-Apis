import { ApiProperty } from '@nestjs/swagger';

export class AdminUserDTO {
  @ApiProperty({ description: 'User ID' })
  id: string;

  @ApiProperty({ description: 'User email' })
  email: string;

  @ApiProperty({ description: 'User full name' })
  fullName: string;

  @ApiProperty({ description: 'User role' })
  userRole: string;

  @ApiProperty({ description: 'User status' })
  userStatus: string;

  @ApiProperty({ description: 'Profile picture URL', required: false })
  profilePic?: string;
}

export class AdminLoginResponseDTO {
  @ApiProperty({ description: 'JWT access token' })
  accessToken: string;

  @ApiProperty({ description: 'JWT refresh token', required: false })
  refreshToken?: string;

  @ApiProperty({ description: 'Admin user information', type: AdminUserDTO })
  user: AdminUserDTO;

  @ApiProperty({ description: 'Token expiration time in seconds' })
  expiresIn: number;
}

