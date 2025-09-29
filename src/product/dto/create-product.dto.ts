import { ApiProperty } from '@nestjs/swagger';
import { 
  IsString, 
  IsNotEmpty, 
  IsOptional, 
  IsArray, 
  IsNumber, 
  IsEnum, 
  IsBoolean,
  Min,
  Max,
  ArrayMinSize,
  ValidateNested,
  IsUrl
} from 'class-validator';
import { Type } from 'class-transformer';

export class ProductDimensionsDto {
  @ApiProperty({ 
    description: 'Product length in cm',
    example: 10,
    required: false
  })
  @IsNumber()
  @Min(0)
  @IsOptional()
  length?: number;

  @ApiProperty({ 
    description: 'Product width in cm',
    example: 5,
    required: false
  })
  @IsNumber()
  @Min(0)
  @IsOptional()
  width?: number;

  @ApiProperty({ 
    description: 'Product height in cm',
    example: 3,
    required: false
  })
  @IsNumber()
  @Min(0)
  @IsOptional()
  height?: number;
}

export class CreateProductDTO {
  @ApiProperty({ 
    description: 'Shop ID where the product belongs',
    example: 'shop_123'
  })
  @IsString()
  @IsNotEmpty()
  shopId: string;

  @ApiProperty({ 
    description: 'Shop category ID',
    example: 'cat_123'
  })
  @IsString()
  @IsNotEmpty()
  shopCategoryId: string;

  @ApiProperty({ 
    description: 'Product category ID',
    example: 'cat_456'
  })
  @IsString()
  @IsNotEmpty()
  productCategoryId: string;

  @ApiProperty({ 
    description: 'Subcategory ID (optional)',
    example: 'cat_789',
    required: false
  })
  @IsString()
  @IsOptional()
  subCategoryId?: string;

  @ApiProperty({ 
    description: 'Product name',
    example: 'iPhone 15 Pro Max'
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ 
    description: 'Product description',
    example: 'Latest iPhone with advanced features',
    required: false
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ 
    description: 'Array of product image URLs',
    example: ['https://example.com/image1.jpg', 'https://example.com/image2.jpg'],
    type: [String]
  })
  @IsArray()
  @ArrayMinSize(1, { message: 'At least one image is required' })
  @IsUrl({}, { each: true, message: 'Each image must be a valid URL' })
  images: string[];

  @ApiProperty({ 
    description: 'Product video URL',
    example: 'https://example.com/video.mp4',
    required: false
  })
  @IsUrl({}, { message: 'Video must be a valid URL' })
  @IsOptional()
  video?: string;

  @ApiProperty({ 
    description: 'Product price',
    example: 150000,
    minimum: 0
  })
  @IsNumber()
  @Min(0)
  price: number;

  @ApiProperty({ 
    description: 'Discounted price (must be less than regular price)',
    example: 140000,
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
    default: 'PKR',
    required: false
  })
  @IsString()
  @IsOptional()
  currency?: string;

  @ApiProperty({ 
    description: 'Stock Keeping Unit (SKU)',
    example: 'IPH15PM-256-BLK',
    required: false
  })
  @IsString()
  @IsOptional()
  sku?: string;

  @ApiProperty({ 
    description: 'Available stock quantity',
    example: 50,
    minimum: 0,
    default: 0
  })
  @IsNumber()
  @Min(0)
  stock: number;

  @ApiProperty({ 
    description: 'Product unit',
    example: 'piece',
    default: 'piece',
    required: false
  })
  @IsString()
  @IsOptional()
  unit?: string;

  @ApiProperty({ 
    description: 'Product status',
    enum: ['ACTIVE', 'INACTIVE', 'OUT_OF_STOCK'],
    default: 'ACTIVE',
    required: false
  })
  @IsEnum(['ACTIVE', 'INACTIVE', 'OUT_OF_STOCK'])
  @IsOptional()
  status?: 'ACTIVE' | 'INACTIVE' | 'OUT_OF_STOCK';

  @ApiProperty({ 
    description: 'Product tags for search and categorization',
    example: ['smartphone', 'apple', 'premium'],
    type: [String],
    required: false
  })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  tags?: string[];

  @ApiProperty({ 
    description: 'Is this a featured product?',
    example: false,
    default: false,
    required: false
  })
  @IsBoolean()
  @IsOptional()
  isFeatured?: boolean;

  @ApiProperty({ 
    description: 'Product weight in grams',
    example: 240,
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
    example: '1 year manufacturer warranty',
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
    example: 'Space Black',
    required: false
  })
  @IsString()
  @IsOptional()
  color?: string;

  @ApiProperty({ 
    description: 'Product size',
    example: '256GB',
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
    default: 'NEW',
    required: false
  })
  @IsEnum(['NEW', 'USED', 'REFURBISHED'])
  @IsOptional()
  condition?: 'NEW' | 'USED' | 'REFURBISHED';
}
