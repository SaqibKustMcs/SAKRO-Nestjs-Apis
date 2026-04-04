import { Body, Controller, Get, Param, Patch, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AdminRoleGuard } from '../auth/admin-role.guard';
import { ShopService } from '../shop/shop.service';
import { AdminUpdateShopDto } from '../shop/dto/admin-update-shop.dto';

@ApiTags('adminApis')
@Controller('admin/shops')
@UseGuards(JwtAuthGuard, AdminRoleGuard)
@ApiBearerAuth()
export class AdminShopsController {
  constructor(private readonly shopService: ShopService) {}

  @Get('categories')
  @ApiOperation({ summary: 'List active shop categories (admin, for dropdowns)' })
  @ApiResponse({ status: 200 })
  async listCategories() {
    const categories = await this.shopService.listActiveShopCategories();
    return {
      success: true,
      message: 'Categories retrieved successfully',
      data: categories,
    };
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update shop by id (admin)' })
  @ApiParam({ name: 'id', description: 'Shop id' })
  @ApiResponse({ status: 404, description: 'Not found' })
  async update(@Param('id') id: string, @Body() dto: AdminUpdateShopDto) {
    const result = await this.shopService.updateShopForAdmin(id, dto);
    return {
      success: true,
      message: result.message,
      data: result.shop,
    };
  }
}
