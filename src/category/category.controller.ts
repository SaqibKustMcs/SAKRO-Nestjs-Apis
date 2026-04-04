import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiQuery,
  ApiParam,
} from '@nestjs/swagger';
import { CategoryService } from './category.service';
import { CreateCategoryDTO } from './dto/create-category.dto';
import { UpdateCategoryDTO } from './dto/update-category.dto';
import { CategoryQueryDTO } from './dto/category-query.dto';
import { CategoryResponseDTO } from './dto/category-response.dto';

/**
 * Route order: static paths before `:id`, otherwise `GET /category` may not hit list
 * and `GET /category/hierarchy/all` could be captured as `:id`.
 */
@ApiTags('Category')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @ApiOperation({ summary: 'Create a new category' })
  @ApiResponse({
    status: 201,
    description: 'Category created successfully',
    type: CategoryResponseDTO,
  })
  @ApiResponse({ status: 400, description: 'Bad request - validation failed' })
  @Post()
  createCategory(@Body() createCategoryDto: CreateCategoryDTO) {
    return this.categoryService.createCategory(createCategoryDto);
  }

  @ApiOperation({ summary: 'Get all categories with optional filters' })
  @ApiQuery({ name: 'type', required: false, enum: ['SHOP_CATEGORY', 'PRODUCT_CATEGORY', 'SUBCATEGORY'] })
  @ApiQuery({ name: 'shopCategoryId', required: false, description: 'Filter by shop category ID' })
  @ApiQuery({ name: 'productCategoryId', required: false, description: 'Filter by product category ID' })
  @ApiQuery({ name: 'status', required: false, enum: ['ACTIVE', 'INACTIVE'] })
  @ApiQuery({ name: 'search', required: false, description: 'Search by category name' })
  @ApiResponse({
    status: 200,
    description: 'Categories retrieved successfully',
    type: [CategoryResponseDTO],
  })
  @Get()
  getAllCategories(@Query() query: CategoryQueryDTO) {
    return this.categoryService.getAllCategories(query);
  }

  @ApiOperation({ summary: 'Get categories by type' })
  @ApiParam({ name: 'type', enum: ['SHOP_CATEGORY', 'PRODUCT_CATEGORY', 'SUBCATEGORY'] })
  @ApiResponse({
    status: 200,
    description: 'Categories retrieved successfully',
    type: [CategoryResponseDTO],
  })
  @Get('type/:type')
  getCategoriesByType(@Param('type') type: 'SHOP_CATEGORY' | 'PRODUCT_CATEGORY' | 'SUBCATEGORY') {
    return this.categoryService.getCategoriesByType(type);
  }

  @ApiOperation({ summary: 'Get complete category hierarchy' })
  @ApiResponse({
    status: 200,
    description: 'Category hierarchy retrieved successfully',
  })
  @Get('hierarchy/all')
  getCategoryHierarchy() {
    return this.categoryService.getCategoryHierarchy();
  }

  @ApiOperation({ summary: 'Get category by ID' })
  @ApiParam({ name: 'id', description: 'Category ID' })
  @ApiResponse({
    status: 200,
    description: 'Category retrieved successfully',
    type: CategoryResponseDTO,
  })
  @ApiResponse({ status: 404, description: 'Category not found' })
  @Get(':id')
  getCategoryById(@Param('id') id: string) {
    return this.categoryService.getCategoryById(id);
  }

  @ApiOperation({ summary: 'Update category by ID' })
  @ApiParam({ name: 'id', description: 'Category ID' })
  @ApiResponse({
    status: 200,
    description: 'Category updated successfully',
    type: CategoryResponseDTO,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'Category not found' })
  @Put(':id')
  updateCategory(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDTO) {
    return this.categoryService.updateCategory(id, updateCategoryDto);
  }

  @ApiOperation({ summary: 'Delete category by ID' })
  @ApiParam({ name: 'id', description: 'Category ID' })
  @ApiResponse({ status: 200, description: 'Category deleted successfully' })
  @ApiResponse({ status: 400, description: 'Bad request - category has children' })
  @ApiResponse({ status: 404, description: 'Category not found' })
  @Delete(':id')
  deleteCategory(@Param('id') id: string) {
    return this.categoryService.deleteCategory(id);
  }
}
