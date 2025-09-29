import { ApiProperty } from '@nestjs/swagger';

export class ParentCategoryDTO {
  @ApiProperty({ description: 'Parent category ID' })
  id: string;

  @ApiProperty({ description: 'Parent category name' })
  name: string;

  @ApiProperty({ description: 'Parent category type' })
  type: string;
}

export class CategoryResponseDTO {
  @ApiProperty({ description: 'Category ID' })
  id: string;

  @ApiProperty({ description: 'Category name' })
  name: string;

  @ApiProperty({ 
    description: 'Category type',
    enum: ['SHOP_CATEGORY', 'PRODUCT_CATEGORY', 'SUBCATEGORY']
  })
  type: 'SHOP_CATEGORY' | 'PRODUCT_CATEGORY' | 'SUBCATEGORY';

  @ApiProperty({ 
    description: 'Parent category ID (nullable for SHOP_CATEGORY)',
    required: false
  })
  parentCategoryId?: string;

  @ApiProperty({ 
    description: 'Shop category ID (for PRODUCT_CATEGORY and SUBCATEGORY)',
    required: false
  })
  shopCategoryId?: string;

  @ApiProperty({ 
    description: 'Product category ID (for SUBCATEGORY)',
    required: false
  })
  productCategoryId?: string;

  @ApiProperty({ 
    description: 'Category status',
    enum: ['ACTIVE', 'INACTIVE']
  })
  status: 'ACTIVE' | 'INACTIVE';

  @ApiProperty({ description: 'Category description', required: false })
  description?: string;

  @ApiProperty({ description: 'Category icon URL', required: false })
  icon?: string;

  @ApiProperty({ description: 'Sort order for display' })
  sortOrder: number;

  @ApiProperty({ description: 'Parent category details', type: ParentCategoryDTO, required: false })
  parentCategory?: ParentCategoryDTO;

  @ApiProperty({ description: 'Shop category details', type: ParentCategoryDTO, required: false })
  shopCategory?: ParentCategoryDTO;

  @ApiProperty({ description: 'Product category details', type: ParentCategoryDTO, required: false })
  productCategory?: ParentCategoryDTO;

  @ApiProperty({ description: 'Creation timestamp' })
  createdAt: Date;

  @ApiProperty({ description: 'Last update timestamp' })
  updatedAt: Date;
}
