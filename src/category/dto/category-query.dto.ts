import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsEnum, IsString } from 'class-validator';

export class CategoryQueryDTO {
  @ApiProperty({ 
    description: 'Filter by category type',
    enum: ['SHOP_CATEGORY', 'PRODUCT_CATEGORY', 'SUBCATEGORY'],
    required: false
  })
  @IsEnum(['SHOP_CATEGORY', 'PRODUCT_CATEGORY', 'SUBCATEGORY'])
  @IsOptional()
  type?: 'SHOP_CATEGORY' | 'PRODUCT_CATEGORY' | 'SUBCATEGORY';

  @ApiProperty({ 
    description: 'Filter by shop category ID',
    required: false,
    example: 'shop_cat_123'
  })
  @IsString()
  @IsOptional()
  shopCategoryId?: string;

  @ApiProperty({ 
    description: 'Filter by product category ID',
    required: false,
    example: 'product_cat_123'
  })
  @IsString()
  @IsOptional()
  productCategoryId?: string;

  @ApiProperty({ 
    description: 'Filter by status',
    enum: ['ACTIVE', 'INACTIVE'],
    required: false
  })
  @IsEnum(['ACTIVE', 'INACTIVE'])
  @IsOptional()
  status?: 'ACTIVE' | 'INACTIVE';

  @ApiProperty({ 
    description: 'Search by category name',
    required: false,
    example: 'electronics'
  })
  @IsString()
  @IsOptional()
  search?: string;
}
