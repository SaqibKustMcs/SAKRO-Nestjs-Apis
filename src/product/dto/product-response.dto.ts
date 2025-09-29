import { ApiProperty } from '@nestjs/swagger';

export class ProductDimensionsResponseDTO {
  @ApiProperty({ description: 'Product length in cm' })
  length: number;

  @ApiProperty({ description: 'Product width in cm' })
  width: number;

  @ApiProperty({ description: 'Product height in cm' })
  height: number;
}

export class ShopOwnerResponseDTO {
  @ApiProperty({ description: 'User ID' })
  id: string;

  @ApiProperty({ description: 'User role', enum: ['normal', 'seller', 'admin'] })
  userRole: 'normal' | 'seller' | 'admin';

  @ApiProperty({ description: 'Full name of the user' })
  fullName: string;

  @ApiProperty({ description: 'Email address' })
  email: string;

  @ApiProperty({ description: 'Phone number' })
  phoneNumber: string;

  @ApiProperty({ description: 'User status', enum: ['active', 'inactive', 'suspended'] })
  userStatus: 'active' | 'inactive' | 'suspended';

  @ApiProperty({ description: 'Profile picture URL' })
  profilePic: string;

  @ApiProperty({ description: 'Creation timestamp' })
  createdAt: Date;

  @ApiProperty({ description: 'Last update timestamp' })
  updatedAt: Date;
}

export class ShopResponseDTO {
  @ApiProperty({ description: 'Shop ID' })
  id: string;

  @ApiProperty({ description: 'Shop name' })
  shopName: string;

  @ApiProperty({ description: 'Shop owner ID' })
  ownerId: string;

  @ApiProperty({ description: 'Shop owner details', type: ShopOwnerResponseDTO })
  user: ShopOwnerResponseDTO;

  @ApiProperty({ description: 'Village details' })
  villageId: {
    id: string;
    name: string;
  };

  @ApiProperty({ description: 'Category details' })
  categoryId: {
    id: string;
    name: string;
  };

  @ApiProperty({ description: 'URL of the shop profile image' })
  profileImage: string;

  @ApiProperty({ description: 'URL of the shop cover image' })
  coverImage: string;

  @ApiProperty({ description: 'Description of the shop' })
  description: string;

  @ApiProperty({ description: 'Number of likes for the shop' })
  likes: number;

  @ApiProperty({ description: 'List of user IDs following the shop' })
  followers: string[];

  @ApiProperty({ description: 'List of product IDs sold by the shop' })
  products: string[];

  @ApiProperty({ description: 'Shop rating' })
  rating: number;

  @ApiProperty({ description: 'List of review IDs for the shop' })
  reviews: string[];

  @ApiProperty({ description: 'Is the shop verified?' })
  isVerified: boolean;

  @ApiProperty({ description: 'Status of the shop', enum: ['active', 'suspended', 'closed'] })
  status: 'active' | 'suspended' | 'closed';

  @ApiProperty({ description: 'Creation timestamp' })
  createdAt: Date;

  @ApiProperty({ description: 'Last update timestamp' })
  updatedAt: Date;
}

export class CategoryResponseDTO {
  @ApiProperty({ description: 'Category ID' })
  id: string;

  @ApiProperty({ description: 'Category name' })
  name: string;

  @ApiProperty({ description: 'Category type' })
  type: string;
}

export class ProductResponseDTO {
  @ApiProperty({ description: 'Product ID' })
  id: string;

  @ApiProperty({ description: 'Shop ID' })
  shopId: string;

  @ApiProperty({ description: 'Shop details', type: ShopResponseDTO })
  shop: ShopResponseDTO;

  @ApiProperty({ description: 'Shop category ID' })
  shopCategoryId: string;

  @ApiProperty({ description: 'Shop category details', type: CategoryResponseDTO })
  shopCategory: CategoryResponseDTO;

  @ApiProperty({ description: 'Product category ID' })
  productCategoryId: string;

  @ApiProperty({ description: 'Product category details', type: CategoryResponseDTO })
  productCategory: CategoryResponseDTO;

  @ApiProperty({ description: 'Subcategory ID', required: false })
  subCategoryId?: string;

  @ApiProperty({ description: 'Subcategory details', type: CategoryResponseDTO, required: false })
  subCategory?: CategoryResponseDTO;

  @ApiProperty({ description: 'Product name' })
  name: string;

  @ApiProperty({ description: 'Product description' })
  description: string;

  @ApiProperty({ description: 'Array of product image URLs', type: [String] })
  images: string[];

  @ApiProperty({ description: 'Product video URL' })
  video: string;

  @ApiProperty({ description: 'Product price' })
  price: number;

  @ApiProperty({ description: 'Discounted price' })
  discountPrice: number;

  @ApiProperty({ description: 'Currency code' })
  currency: string;

  @ApiProperty({ description: 'Stock Keeping Unit' })
  sku: string;

  @ApiProperty({ description: 'Available stock quantity' })
  stock: number;

  @ApiProperty({ description: 'Product unit' })
  unit: string;

  @ApiProperty({ description: 'Product status', enum: ['ACTIVE', 'INACTIVE', 'OUT_OF_STOCK'] })
  status: 'ACTIVE' | 'INACTIVE' | 'OUT_OF_STOCK';

  @ApiProperty({ description: 'Product tags', type: [String] })
  tags: string[];

  @ApiProperty({ description: 'Is this a featured product?' })
  isFeatured: boolean;

  @ApiProperty({ description: 'Product weight in grams' })
  weight: number;

  @ApiProperty({ description: 'Product dimensions', type: ProductDimensionsResponseDTO })
  dimensions: ProductDimensionsResponseDTO;

  @ApiProperty({ description: 'Product warranty information' })
  warranty: string;

  @ApiProperty({ description: 'Product brand' })
  brand: string;

  @ApiProperty({ description: 'Product model' })
  model: string;

  @ApiProperty({ description: 'Product color' })
  color: string;

  @ApiProperty({ description: 'Product size' })
  size: string;

  @ApiProperty({ description: 'Product material' })
  material: string;

  @ApiProperty({ description: 'Product condition', enum: ['NEW', 'USED', 'REFURBISHED'] })
  condition: 'NEW' | 'USED' | 'REFURBISHED';

  @ApiProperty({ description: 'Product rating' })
  rating: number;

  @ApiProperty({ description: 'Number of reviews' })
  reviewCount: number;

  @ApiProperty({ description: 'Number of views' })
  viewCount: number;

  @ApiProperty({ description: 'Number of sold items' })
  soldCount: number;

  @ApiProperty({ description: 'Creation timestamp' })
  createdAt: Date;

  @ApiProperty({ description: 'Last update timestamp' })
  updatedAt: Date;
}

export class ProductListResponseDTO {
  @ApiProperty({ description: 'Array of products', type: [ProductResponseDTO] })
  products: ProductResponseDTO[];

  @ApiProperty({ description: 'Total number of products' })
  total: number;

  @ApiProperty({ description: 'Current page number' })
  page: number;

  @ApiProperty({ description: 'Number of products per page' })
  limit: number;

  @ApiProperty({ description: 'Total number of pages' })
  totalPages: number;
}

export class ApiResponseDTO<T> {
  @ApiProperty({ description: 'Success status' })
  success: boolean;

  @ApiProperty({ description: 'Response message' })
  message: string;

  @ApiProperty({ description: 'Response data' })
  data: T;
}
