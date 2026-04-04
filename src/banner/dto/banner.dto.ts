import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsBoolean,
  IsNumber,
  IsIn,
} from 'class-validator';

export class CreateBannerDTO {
  @ApiProperty({ example: 'Summer sale banner' })
  @IsString()
  title: string;

  @ApiPropertyOptional({ enum: ['carousel', 'modal'], default: 'carousel' })
  @IsOptional()
  @IsIn(['carousel', 'modal'])
  type?: string;

  @ApiPropertyOptional({ example: 'https://example.com/banner.jpg' })
  @IsOptional()
  @IsString()
  imageUrl?: string;

  @ApiPropertyOptional({
    enum: ['none', 'shop', 'product', 'category', 'url'],
    default: 'none',
  })
  @IsOptional()
  @IsIn(['none', 'shop', 'product', 'category', 'url'])
  linkType?: string;

  @ApiPropertyOptional({
    nullable: true,
    description: 'Target id when linkType is shop, product, or category',
  })
  @IsOptional()
  @IsString()
  linkId?: string | null;

  @ApiPropertyOptional({
    nullable: true,
    description: 'URL when linkType is url',
  })
  @IsOptional()
  @IsString()
  linkUrl?: string | null;

  @ApiPropertyOptional({ default: 0 })
  @IsOptional()
  @IsNumber()
  sortOrder?: number;

  @ApiPropertyOptional({ default: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  // Carousel fields
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  subtitle?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  discount?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ example: 'Shop Now' })
  @IsOptional()
  @IsString()
  buttonText?: string;

  @ApiPropertyOptional({ example: '#FFF2EE' })
  @IsOptional()
  @IsString()
  bgColorHex?: string;

  @ApiPropertyOptional({ example: '#FFF2EE' })
  @IsOptional()
  @IsString()
  gradientStartHex?: string;

  @ApiPropertyOptional({ example: '#FFE5DC' })
  @IsOptional()
  @IsString()
  gradientEndHex?: string;

  // Modal fields
  @ApiPropertyOptional({ default: false })
  @IsOptional()
  @IsBoolean()
  showOnce?: boolean;
}

/** All fields optional — safe for PUT /banners/:id */
export class UpdateBannerDTO extends PartialType(CreateBannerDTO) {}
