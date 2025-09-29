import { ApiProperty } from '@nestjs/swagger';

export class UserResponseDTO {
  @ApiProperty({ description: 'User ID' })
  id: string;

  @ApiProperty({ description: 'Full name of the user' })
  fullName: string;

  @ApiProperty({ description: 'Email address' })
  email: string;

  @ApiProperty({ description: 'Phone number' })
  phoneNumber: string;

  @ApiProperty({ description: 'User role', enum: ['normal', 'seller', 'admin'] })
  userRole: 'normal' | 'seller' | 'admin';

  @ApiProperty({ description: 'User status', enum: ['active', 'inactive', 'suspended'] })
  userStatus: 'active' | 'inactive' | 'suspended';

  @ApiProperty({ description: 'Profile picture URL' })
  profilePic: string;

  @ApiProperty({ description: 'Creation timestamp' })
  createdAt: Date;

  @ApiProperty({ description: 'Last update timestamp' })
  updatedAt: Date;
}

export class VillageResponseDTO {
  @ApiProperty({ description: 'Village ID' })
  id: string;

  @ApiProperty({ description: 'Village name' })
  name: string;
}

export class CategoryResponseDTO {
  @ApiProperty({ description: 'Category ID' })
  id: string;

  @ApiProperty({ description: 'Category name' })
  name: string;
}

export class ShopResponseDTO {
  @ApiProperty({ description: 'Shop ID' })
  id: string;

  @ApiProperty({ description: 'Shop name' })
  shopName: string;

  @ApiProperty({ description: 'Shop owner ID' })
  ownerId: string;

  @ApiProperty({ description: 'Shop owner details', type: UserResponseDTO })
  user: UserResponseDTO;

  @ApiProperty({ description: 'Village details', type: VillageResponseDTO })
  villageId: VillageResponseDTO;

  @ApiProperty({ description: 'Category details', type: CategoryResponseDTO })
  categoryId: CategoryResponseDTO;

  @ApiProperty({ description: 'Profile image URL' })
  profileImage: string;

  @ApiProperty({ description: 'Cover image URL' })
  coverImage: string;

  @ApiProperty({ description: 'Shop description' })
  description: string;

  @ApiProperty({ description: 'Number of likes' })
  likes: number;

  @ApiProperty({ description: 'Array of follower user IDs' })
  followers: string[];

  @ApiProperty({ description: 'Array of product IDs' })
  products: string[];

  @ApiProperty({ description: 'Shop rating' })
  rating: number;

  @ApiProperty({ description: 'Array of review IDs' })
  reviews: string[];

  @ApiProperty({ description: 'Verification status' })
  isVerified: boolean;

  @ApiProperty({ description: 'Shop status', enum: ['active', 'suspended', 'closed'] })
  status: 'active' | 'suspended' | 'closed';

  @ApiProperty({ description: 'Creation timestamp' })
  createdAt: Date;

  @ApiProperty({ description: 'Last update timestamp' })
  updatedAt: Date;
}
