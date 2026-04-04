import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsUrl, IsEnum, IsArray } from 'class-validator';

export class UpdateShopDTO {
  @ApiProperty({ description: 'Name of the shop', required: false })
  @IsString()
  @IsOptional()
  shopName?: string;

  @ApiProperty({ description: 'ID of the village where the shop is located', required: false })
  @IsString()
  @IsOptional()
  villageId?: string;

  @ApiProperty({ description: 'ID of the shop category', required: false })
  @IsString()
  @IsOptional()
  categoryId?: string;

  @ApiProperty({ description: 'Profile image URL', required: false })
  @IsString()
  @IsOptional()
  @IsUrl({}, { message: 'Please provide a valid URL for profile image' })
  profileImage?: string;

  @ApiProperty({ description: 'Cover image URL', required: false })
  @IsString()
  @IsOptional()
  @IsUrl({}, { message: 'Please provide a valid URL for cover image' })
  coverImage?: string;

  @ApiProperty({ description: 'Description of the shop', required: false })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ description: 'Status of the shop', enum: ['active', 'suspended', 'closed'], required: false })
  @IsEnum(['active', 'suspended', 'closed'])
  @IsOptional()
  status?: 'active' | 'suspended' | 'closed';

  @ApiProperty({
    description: 'Badges assigned to the shop by admin',
    required: false,
    type: [String],
    enum: ['top_seller', 'new_arrival', 'premium', 'hot_deal', 'flash_sale', 'trusted', 'best_value', 'staff_pick'],
  })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  badges?: string[];
}
