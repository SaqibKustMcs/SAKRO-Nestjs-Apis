import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsEnum, IsString, IsNumber, Min, Max, IsDateString } from 'class-validator';
import { Transform } from 'class-transformer';

export class ProductQueryDTO {
  @ApiProperty({ 
    description: 'Filter by shop ID',
    example: 'shop_123',
    required: false
  })
  @IsString()
  @IsOptional()
  shopId?: string;

  @ApiProperty({ 
    description: 'Filter by shop category ID',
    example: 'cat_123',
    required: false
  })
  @IsString()
  @IsOptional()
  shopCategoryId?: string;

  @ApiProperty({ 
    description: 'Filter by product category ID',
    example: 'cat_456',
    required: false
  })
  @IsString()
  @IsOptional()
  productCategoryId?: string;

  @ApiProperty({ 
    description: 'Filter by subcategory ID',
    example: 'cat_789',
    required: false
  })
  @IsString()
  @IsOptional()
  subCategoryId?: string;

  @ApiProperty({ 
    description: 'Filter by product status',
    enum: ['ACTIVE', 'INACTIVE', 'OUT_OF_STOCK'],
    required: false
  })
  @IsEnum(['ACTIVE', 'INACTIVE', 'OUT_OF_STOCK'])
  @IsOptional()
  status?: 'ACTIVE' | 'INACTIVE' | 'OUT_OF_STOCK';

  @ApiProperty({ 
    description: 'Search by product name, description, or tags',
    example: 'iPhone',
    required: false
  })
  @IsString()
  @IsOptional()
  search?: string;

  @ApiProperty({ 
    description: 'Minimum price filter',
    example: 1000,
    minimum: 0,
    required: false
  })
  @Transform(({ value }) => parseFloat(value))
  @IsNumber()
  @Min(0)
  @IsOptional()
  minPrice?: number;

  @ApiProperty({ 
    description: 'Maximum price filter',
    example: 200000,
    minimum: 0,
    required: false
  })
  @Transform(({ value }) => parseFloat(value))
  @IsNumber()
  @Min(0)
  @IsOptional()
  maxPrice?: number;

  @ApiProperty({ 
    description: 'Filter products created from this date (ISO string)',
    example: '2025-01-01T00:00:00.000Z',
    required: false
  })
  @IsDateString()
  @IsOptional()
  createdFrom?: string;

  @ApiProperty({ 
    description: 'Filter products created until this date (ISO string)',
    example: '2025-12-31T23:59:59.999Z',
    required: false
  })
  @IsDateString()
  @IsOptional()
  createdTo?: string;

  @ApiProperty({ 
    description: 'Sort by field',
    enum: ['price', 'createdAt', 'updatedAt', 'stock', 'name', 'rating', 'soldCount', 'viewCount'],
    default: 'createdAt',
    required: false
  })
  @IsEnum(['price', 'createdAt', 'updatedAt', 'stock', 'name', 'rating', 'soldCount', 'viewCount'])
  @IsOptional()
  sortBy?: 'price' | 'createdAt' | 'updatedAt' | 'stock' | 'name' | 'rating' | 'soldCount' | 'viewCount';

  @ApiProperty({ 
    description: 'Sort order',
    enum: ['asc', 'desc'],
    default: 'desc',
    required: false
  })
  @IsEnum(['asc', 'desc'])
  @IsOptional()
  sortOrder?: 'asc' | 'desc';

  @ApiProperty({ 
    description: 'Number of products to return per page',
    example: 10,
    minimum: 1,
    maximum: 100,
    default: 10,
    required: false
  })
  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  @Min(1)
  @Max(100)
  @IsOptional()
  limit?: number;

  @ApiProperty({ 
    description: 'Number of products to skip for pagination',
    example: 0,
    minimum: 0,
    default: 0,
    required: false
  })
  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  @Min(0)
  @IsOptional()
  offset?: number;

  @ApiProperty({ 
    description: 'Filter by featured products only',
    example: true,
    required: false
  })
  @Transform(({ value }) => value === 'true')
  @IsOptional()
  isFeatured?: boolean;

  @ApiProperty({ 
    description: 'Filter by product condition',
    enum: ['NEW', 'USED', 'REFURBISHED'],
    required: false
  })
  @IsEnum(['NEW', 'USED', 'REFURBISHED'])
  @IsOptional()
  condition?: 'NEW' | 'USED' | 'REFURBISHED';

  @ApiProperty({ 
    description: 'Filter by product brand',
    example: 'Apple',
    required: false
  })
  @IsString()
  @IsOptional()
  brand?: string;

  @ApiProperty({ 
    description: 'Filter by product color',
    example: 'Black',
    required: false
  })
  @IsString()
  @IsOptional()
  color?: string;

  @ApiProperty({ 
    description: 'Filter by minimum rating',
    example: 4.0,
    minimum: 0,
    maximum: 5,
    required: false
  })
  @Transform(({ value }) => parseFloat(value))
  @IsNumber()
  @Min(0)
  @Max(5)
  @IsOptional()
  minRating?: number;
}
