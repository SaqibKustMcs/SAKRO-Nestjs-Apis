import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiParam,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AdminRoleGuard } from '../auth/admin-role.guard';
import { ProductService } from '../product/product.service';
import { CreateProductDTO } from '../product/dto/create-product.dto';
import { UpdateProductDTO } from '../product/dto/update-product.dto';
import { ProductQueryDTO } from '../product/dto/product-query.dto';

@ApiTags('adminApis')
@Controller('admin/products')
@UseGuards(JwtAuthGuard, AdminRoleGuard)
@ApiBearerAuth()
export class AdminProductsController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  @ApiOperation({
    summary: 'List products (admin)',
    description: 'Same filters as public catalog; admin-only.',
  })
  @ApiResponse({ status: 200, description: 'Paginated products' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 403, description: 'Forbidden — not admin' })
  async list(@Query() query: ProductQueryDTO) {
    const result = await this.productService.getAllProducts(query);
    return {
      success: true,
      message: 'Products retrieved successfully',
      data: result,
    };
  }

  @Post()
  @ApiOperation({ summary: 'Create product (admin)' })
  @ApiResponse({ status: 201, description: 'Created' })
  @ApiResponse({ status: 400, description: 'Validation error' })
  async create(@Body() dto: CreateProductDTO) {
    const product = await this.productService.createProductAsAdmin(dto);
    return {
      success: true,
      message: 'Product created successfully',
      data: product,
    };
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update product (admin)' })
  @ApiParam({ name: 'id', description: 'Product id' })
  @ApiResponse({ status: 200, description: 'Updated' })
  @ApiResponse({ status: 404, description: 'Not found' })
  async update(@Param('id') id: string, @Body() dto: UpdateProductDTO) {
    const product = await this.productService.updateProductAsAdmin(id, dto);
    return {
      success: true,
      message: 'Product updated successfully',
      data: product,
    };
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete product (admin)' })
  @ApiParam({ name: 'id', description: 'Product id' })
  @ApiResponse({ status: 200, description: 'Deleted' })
  @ApiResponse({ status: 404, description: 'Not found' })
  async remove(@Param('id') id: string) {
    const result = await this.productService.deleteProductAsAdmin(id);
    return {
      success: true,
      message: result.message,
      data: result,
    };
  }
}
