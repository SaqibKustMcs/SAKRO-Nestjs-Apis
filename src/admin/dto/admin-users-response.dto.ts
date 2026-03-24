import { ApiProperty } from '@nestjs/swagger';

export class AdminUserListItemDTO {
  @ApiProperty({ description: 'User ID' })
  id: string;

  @ApiProperty({ description: 'User email' })
  email: string;

  @ApiProperty({ description: 'User name/username' })
  name: string;

  @ApiProperty({ description: 'User full name' })
  fullName: string;

  @ApiProperty({ description: 'Phone number' })
  phoneNumber: string;

  @ApiProperty({ description: 'User role', enum: ['normal', 'seller', 'admin'] })
  userRole: 'normal' | 'seller' | 'admin';

  @ApiProperty({ description: 'User status', enum: ['active', 'inactive', 'suspended'] })
  userStatus: 'active' | 'inactive' | 'suspended';

  @ApiProperty({ description: 'User level', enum: ['beginner', 'intermediate', 'advanced', 'expert'] })
  userLevel: 'beginner' | 'intermediate' | 'advanced' | 'expert';

  @ApiProperty({ description: 'Profile picture URL', required: false })
  profilePic?: string;

  @ApiProperty({ description: 'Profile picture (legacy field)', required: false })
  pic?: string;

  @ApiProperty({ description: 'User color' })
  color: string;

  @ApiProperty({ description: 'Village' })
  village: string;

  @ApiProperty({ description: 'Country' })
  country: string;

  @ApiProperty({ description: 'Home address' })
  homeAddress: string;

  @ApiProperty({ description: 'Zipcode' })
  zipcode: string;

  @ApiProperty({ description: 'Email verified status' })
  isEmailVerified: boolean;

  @ApiProperty({ description: 'Two-factor authentication enabled' })
  isTwoFactorEnabled: boolean;

  @ApiProperty({ description: 'Biometric authentication enabled' })
  isBiometric: boolean;

  @ApiProperty({ description: 'Number of sell orders' })
  sellOrders: number;

  @ApiProperty({ description: 'Number of buy orders' })
  buyOrders: number;

  @ApiProperty({ description: 'Creation timestamp' })
  createdAt: Date;

  @ApiProperty({ description: 'Last update timestamp' })
  updatedAt: Date;
}

export class AdminUsersResponseDTO {
  @ApiProperty({ description: 'List of users', type: [AdminUserListItemDTO] })
  users: AdminUserListItemDTO[];

  @ApiProperty({ description: 'Total count of users' })
  total: number;
}


