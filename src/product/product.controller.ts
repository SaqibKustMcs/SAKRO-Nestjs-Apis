import { 
  Body, 
  Controller, 
  Delete, 
  Get, 
  Param, 
  Post, 
  Put, 
  Query, 
  UseGuards 
} from '@nestjs/common';
import { 
  ApiTags, 
  ApiBearerAuth, 
  ApiOperation, 
  ApiResponse, 
  ApiQuery,
  ApiParam 
} from '@nestjs/swagger';
import { ProductService } from './product.service';
import { ProductReviewService } from './product-review.service';
import { CreateProductDTO } from './dto/create-product.dto';
import { UpdateProductDTO } from './dto/update-product.dto';
import { ProductQueryDTO } from './dto/product-query.dto';
import { 
  ProductResponseDTO, 
  ProductListResponseDTO, 
  ApiResponseDTO 
} from './dto/product-response.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { User } from 'src/decorators/user.decorator';

@ApiTags('Products')
@Controller('products')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    private readonly productReviewService: ProductReviewService,
  ) {}

  @ApiOperation({ summary: 'Create a new product' })
  @ApiResponse({ 
    status: 201, 
    description: 'Product created successfully',
    type: ApiResponseDTO<ProductResponseDTO>
  })
  @ApiResponse({ status: 400, description: 'Bad request - validation failed' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 403, description: 'Forbidden - not shop owner' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  async createProduct(@Body() createProductDto: CreateProductDTO, @User() user) {
    const product = await this.productService.createProduct(createProductDto, user.id);
    return {
      success: true,
      message: 'Product created successfully',
      data: product
    };
  }

  @ApiOperation({ summary: 'List reviews for a product' })
  @ApiParam({ name: 'id', description: 'Product ID' })
  @ApiQuery({ name: 'limit', required: false })
  @ApiQuery({ name: 'offset', required: false })
  @Get(':id/reviews')
  async getProductReviews(
    @Param('id') id: string,
    @Query('limit') limit?: number,
    @Query('offset') offset?: number,
  ) {
    const result = await this.productReviewService.listReviewsForProduct(
      id,
      limit ?? 20,
      offset ?? 0,
    );
    return {
      success: true,
      message: 'Reviews retrieved',
      data: result,
    };
  }

  @ApiOperation({ summary: 'Get product by ID' })
  @ApiParam({ name: 'id', description: 'Product ID' })
  @ApiResponse({ 
    status: 200, 
    description: 'Product retrieved successfully',
    type: ApiResponseDTO<ProductResponseDTO>
  })
  @ApiResponse({ status: 404, description: 'Product not found' })
  @Get(':id')
  async getProductById(@Param('id') id: string) {
    const product = await this.productService.getProductById(id);
    return {
      success: true,
      message: 'Product retrieved successfully',
      data: product
    };
  }

  @ApiOperation({ summary: 'Get all products with advanced filters' })
  @ApiQuery({ name: 'shopId', required: false, description: 'Filter by shop ID' })
  @ApiQuery({ name: 'shopCategoryId', required: false, description: 'Filter by shop category ID' })
  @ApiQuery({ name: 'productCategoryId', required: false, description: 'Filter by product category ID' })
  @ApiQuery({ name: 'subCategoryId', required: false, description: 'Filter by subcategory ID' })
  @ApiQuery({ name: 'status', required: false, enum: ['ACTIVE', 'INACTIVE', 'OUT_OF_STOCK'] })
  @ApiQuery({ name: 'search', required: false, description: 'Search by name, description, or tags' })
  @ApiQuery({ name: 'minPrice', required: false, description: 'Minimum price filter' })
  @ApiQuery({ name: 'maxPrice', required: false, description: 'Maximum price filter' })
  @ApiQuery({ name: 'createdFrom', required: false, description: 'Filter from creation date (ISO string)' })
  @ApiQuery({ name: 'createdTo', required: false, description: 'Filter to creation date (ISO string)' })
  @ApiQuery({ name: 'sortBy', required: false, enum: ['price', 'createdAt', 'updatedAt', 'stock', 'name', 'rating', 'soldCount', 'viewCount'] })
  @ApiQuery({ name: 'sortOrder', required: false, enum: ['asc', 'desc'] })
  @ApiQuery({ name: 'limit', required: false, description: 'Number of products per page (1-100)' })
  @ApiQuery({ name: 'offset', required: false, description: 'Number of products to skip' })
  @ApiQuery({ name: 'isFeatured', required: false, description: 'Filter featured products' })
  @ApiQuery({ name: 'condition', required: false, enum: ['NEW', 'USED', 'REFURBISHED'] })
  @ApiQuery({ name: 'brand', required: false, description: 'Filter by brand' })
  @ApiQuery({ name: 'color', required: false, description: 'Filter by color' })
  @ApiQuery({ name: 'minRating', required: false, description: 'Minimum rating filter' })
  @ApiResponse({ 
    status: 200, 
    description: 'Products retrieved successfully',
    type: ApiResponseDTO<ProductListResponseDTO>
  })
  @Get()
  async getAllProducts(@Query() query: ProductQueryDTO) {
    const result = await this.productService.getAllProducts(query);
    return {
      success: true,
      message: 'Products retrieved successfully',
      data: result
    };
  }

  @ApiOperation({ summary: 'Update product by ID' })
  @ApiParam({ name: 'id', description: 'Product ID' })
  @ApiResponse({ 
    status: 200, 
    description: 'Product updated successfully',
    type: ApiResponseDTO<ProductResponseDTO>
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 403, description: 'Forbidden - not product owner' })
  @ApiResponse({ status: 404, description: 'Product not found' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async updateProduct(@Param('id') id: string, @Body() updateProductDto: UpdateProductDTO, @User() user) {
    const product = await this.productService.updateProduct(id, updateProductDto, user.id);
    return {
      success: true,
      message: 'Product updated successfully',
      data: product
    };
  }

  @ApiOperation({ summary: 'Delete product by ID' })
  @ApiParam({ name: 'id', description: 'Product ID' })
  @ApiResponse({ 
    status: 200, 
    description: 'Product deleted successfully',
    type: ApiResponseDTO<{ message: string }>
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 403, description: 'Forbidden - not product owner' })
  @ApiResponse({ status: 404, description: 'Product not found' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteProduct(@Param('id') id: string, @User() user) {
    const result = await this.productService.deleteProduct(id, user.id);
    return {
      success: true,
      message: result.message,
      data: result
    };
  }

  @ApiOperation({ summary: 'Get products by shop ID' })
  @ApiParam({ name: 'shopId', description: 'Shop ID' })
  @ApiResponse({ 
    status: 200, 
    description: 'Shop products retrieved successfully',
    type: ApiResponseDTO<ProductListResponseDTO>
  })
  @Get('shop/:shopId')
  async getProductsByShop(@Param('shopId') shopId: string, @Query() query: ProductQueryDTO) {
    const result = await this.productService.getProductsByShop(shopId, query);
    return {
      success: true,
      message: 'Shop products retrieved successfully',
      data: result
    };
  }

  @ApiOperation({ summary: 'Get featured products' })
  @ApiQuery({ name: 'limit', required: false, description: 'Number of featured products to return' })
  @ApiResponse({ 
    status: 200, 
    description: 'Featured products retrieved successfully',
    type: ApiResponseDTO<ProductResponseDTO[]>
  })
  @Get('featured/list')
  async getFeaturedProducts(@Query('limit') limit?: number) {
    const products = await this.productService.getFeaturedProducts(limit);
    return {
      success: true,
      message: 'Featured products retrieved successfully',
      data: products
    };
  }

  @ApiOperation({ summary: 'Get products by category ID' })
  @ApiParam({ name: 'categoryId', description: 'Category ID' })
  @ApiResponse({ 
    status: 200, 
    description: 'Category products retrieved successfully',
    type: ApiResponseDTO<ProductListResponseDTO>
  })
  @Get('category/:categoryId')
  async getProductsByCategory(@Param('categoryId') categoryId: string, @Query() query: ProductQueryDTO) {
    const result = await this.productService.getProductsByCategory(categoryId, query);
    return {
      success: true,
      message: 'Category products retrieved successfully',
      data: result
    };
  }
}
