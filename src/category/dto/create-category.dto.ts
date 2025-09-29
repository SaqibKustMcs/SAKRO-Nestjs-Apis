import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsEnum, IsNumber, Min } from 'class-validator';

export class CreateCategoryDTO {
  @ApiProperty({ 
    description: 'Name of the category',
    example: 'Electronics'
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ 
    description: 'Type of category',
    enum: ['SHOP_CATEGORY', 'PRODUCT_CATEGORY', 'SUBCATEGORY'],
    example: 'SHOP_CATEGORY'
  })
  @IsEnum(['SHOP_CATEGORY', 'PRODUCT_CATEGORY', 'SUBCATEGORY'])
  @IsNotEmpty()
  type: 'SHOP_CATEGORY' | 'PRODUCT_CATEGORY' | 'SUBCATEGORY';

  @ApiProperty({ 
    description: 'Parent category ID (nullable for SHOP_CATEGORY)',
    required: false,
    example: null
  })
  @IsString()
  @IsOptional()
  parentCategoryId?: string;

  @ApiProperty({ 
    description: 'Shop category ID (required for PRODUCT_CATEGORY and SUBCATEGORY)',
    required: false,
    example: 'shop_cat_123'
  })
  @IsString()
  @IsOptional()
  shopCategoryId?: string;

  @ApiProperty({ 
    description: 'Product category ID (required for SUBCATEGORY)',
    required: false,
    example: 'product_cat_123'
  })
  @IsString()
  @IsOptional()
  productCategoryId?: string;

  @ApiProperty({ 
    description: 'Category status',
    enum: ['ACTIVE', 'INACTIVE'],
    default: 'ACTIVE',
    required: false
  })
  @IsEnum(['ACTIVE', 'INACTIVE'])
  @IsOptional()
  status?: 'ACTIVE' | 'INACTIVE';

  @ApiProperty({ 
    description: 'Category description',
    required: false,
    example: 'Electronic devices and accessories'
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ 
    description: 'Category icon URL',
    required: false,
    example: 'https://example.com/icon.png'
  })
  @IsString()
  @IsOptional()
  icon?: string;

  @ApiProperty({ 
    description: 'Sort order for display',
    required: false,
    example: 1,
    minimum: 0
  })
  @IsNumber()
  @Min(0)
  @IsOptional()
  sortOrder?: number;
}
