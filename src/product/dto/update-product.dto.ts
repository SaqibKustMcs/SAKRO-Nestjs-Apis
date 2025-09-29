import { ApiProperty } from '@nestjs/swagger';
import { 
  IsString, 
  IsOptional, 
  IsArray, 
  IsNumber, 
  IsEnum, 
  IsBoolean,
  Min,
  ArrayMinSize,
  ValidateNested,
  IsUrl
} from 'class-validator';
import { Type } from 'class-transformer';
import { ProductDimensionsDto } from './create-product.dto';

export class UpdateProductDTO {
  @ApiProperty({ 
    description: 'Product name',
    example: 'iPhone 15 Pro Max - Updated',
    required: false
  })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({ 
    description: 'Product description',
    example: 'Updated description for iPhone 15 Pro Max',
    required: false
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ 
    description: 'Array of product image URLs',
    example: ['https://example.com/updated-image1.jpg'],
    type: [String],
    required: false
  })
  @IsArray()
  @ArrayMinSize(1, { message: 'At least one image is required' })
  @IsUrl({}, { each: true, message: 'Each image must be a valid URL' })
  @IsOptional()
  images?: string[];

  @ApiProperty({ 
    description: 'Product video URL',
    example: 'https://example.com/updated-video.mp4',
    required: false
  })
  @IsUrl({}, { message: 'Video must be a valid URL' })
  @IsOptional()
  video?: string;

  @ApiProperty({ 
    description: 'Product price',
    example: 160000,
    minimum: 0,
    required: false
  })
  @IsNumber()
  @Min(0)
  @IsOptional()
  price?: number;

  @ApiProperty({ 
    description: 'Discounted price (must be less than regular price)',
    example: 150000,
    minimum: 0,
    required: false
  })
  @IsNumber()
  @Min(0)
  @IsOptional()
  discountPrice?: number;

  @ApiProperty({ 
    description: 'Currency code',
    example: 'PKR',
    required: false
  })
  @IsString()
  @IsOptional()
  currency?: string;

  @ApiProperty({ 
    description: 'Stock Keeping Unit (SKU)',
    example: 'IPH15PM-256-BLK-UPDATED',
    required: false
  })
  @IsString()
  @IsOptional()
  sku?: string;

  @ApiProperty({ 
    description: 'Available stock quantity',
    example: 75,
    minimum: 0,
    required: false
  })
  @IsNumber()
  @Min(0)
  @IsOptional()
  stock?: number;

  @ApiProperty({ 
    description: 'Product unit',
    example: 'piece',
    required: false
  })
  @IsString()
  @IsOptional()
  unit?: string;

  @ApiProperty({ 
    description: 'Product status',
    enum: ['ACTIVE', 'INACTIVE', 'OUT_OF_STOCK'],
    required: false
  })
  @IsEnum(['ACTIVE', 'INACTIVE', 'OUT_OF_STOCK'])
  @IsOptional()
  status?: 'ACTIVE' | 'INACTIVE' | 'OUT_OF_STOCK';

  @ApiProperty({ 
    description: 'Product tags for search and categorization',
    example: ['smartphone', 'apple', 'premium', 'updated'],
    type: [String],
    required: false
  })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  tags?: string[];

  @ApiProperty({ 
    description: 'Is this a featured product?',
    example: true,
    required: false
  })
  @IsBoolean()
  @IsOptional()
  isFeatured?: boolean;

  @ApiProperty({ 
    description: 'Product weight in grams',
    example: 250,
    minimum: 0,
    required: false
  })
  @IsNumber()
  @Min(0)
  @IsOptional()
  weight?: number;

  @ApiProperty({ 
    description: 'Product dimensions',
    type: ProductDimensionsDto,
    required: false
  })
  @ValidateNested()
  @Type(() => ProductDimensionsDto)
  @IsOptional()
  dimensions?: ProductDimensionsDto;

  @ApiProperty({ 
    description: 'Product warranty information',
    example: '2 years manufacturer warranty',
    required: false
  })
  @IsString()
  @IsOptional()
  warranty?: string;

  @ApiProperty({ 
    description: 'Product brand',
    example: 'Apple',
    required: false
  })
  @IsString()
  @IsOptional()
  brand?: string;

  @ApiProperty({ 
    description: 'Product model',
    example: 'iPhone 15 Pro Max',
    required: false
  })
  @IsString()
  @IsOptional()
  model?: string;

  @ApiProperty({ 
    description: 'Product color',
    example: 'Natural Titanium',
    required: false
  })
  @IsString()
  @IsOptional()
  color?: string;

  @ApiProperty({ 
    description: 'Product size',
    example: '512GB',
    required: false
  })
  @IsString()
  @IsOptional()
  size?: string;

  @ApiProperty({ 
    description: 'Product material',
    example: 'Titanium',
    required: false
  })
  @IsString()
  @IsOptional()
  material?: string;

  @ApiProperty({ 
    description: 'Product condition',
    enum: ['NEW', 'USED', 'REFURBISHED'],
    required: false
  })
  @IsEnum(['NEW', 'USED', 'REFURBISHED'])
  @IsOptional()
  condition?: 'NEW' | 'USED' | 'REFURBISHED';
}
