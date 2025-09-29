import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsUrl } from 'class-validator';

export class CreateShopDTO {
  @ApiProperty({ description: 'Name of the shop' })
  @IsString()
  @IsNotEmpty()
  shopName: string;

  @ApiProperty({ description: 'ID of the village where the shop is located' })
  @IsString()
  @IsNotEmpty()
  villageId: string;

  @ApiProperty({ description: 'ID of the shop category' })
  @IsString()
  @IsNotEmpty()
  categoryId: string;

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
}
