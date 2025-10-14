import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ShopService } from './shop.service';
import { CreateShopDTO } from './dto/create-shop.dto';
import { UpdateShopDTO } from './dto/update-shop.dto';
import { ShopResponseDTO } from './dto/shop-response.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { User } from 'src/decorators/user.decorator';

@ApiTags('Shop')
@Controller('shop')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @ApiOperation({ summary: 'Create a new shop' })
  @ApiResponse({ 
    status: 201, 
    description: 'Shop created successfully',
    type: ShopResponseDTO
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('create')
  createShop(@Body() createShopDto: CreateShopDTO, @User() user) {
    return this.shopService.createShop(createShopDto, user.id);
  }

  @ApiOperation({ summary: 'Get shops owned by the authenticated user' })
  @ApiResponse({ 
    status: 200, 
    description: 'User shops retrieved successfully',
    type: [ShopResponseDTO]
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('my-shops')
  getMyShops(@User() user) {
    return this.shopService.getShopsByOwner(user.id);
  }

  @ApiOperation({ summary: 'Get all active shops' })
  @ApiResponse({ 
    status: 200, 
    description: 'Shops retrieved successfully',
    type: [ShopResponseDTO]
  })
  @Get()
  getAllShops() {
    return this.shopService.getAllShops();
  }

  @ApiOperation({ summary: 'Get shop by ID' })
  @ApiResponse({ 
    status: 200, 
    description: 'Shop retrieved successfully',
    type: ShopResponseDTO
  })
  @ApiResponse({ status: 404, description: 'Shop not found' })
  @Get(':id')
  getShopById(@Param('id') id: string) {
    return this.shopService.getShopById(id);
  }

  @ApiOperation({ summary: 'Update shop by ID' })
  @ApiResponse({ 
    status: 200, 
    description: 'Shop updated successfully',
    type: ShopResponseDTO
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 403, description: 'Forbidden - Not shop owner' })
  @ApiResponse({ status: 404, description: 'Shop not found' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  updateShop(@Param('id') id: string, @Body() updateShopDto: UpdateShopDTO, @User() user) {
    return this.shopService.updateShop(id, updateShopDto, user.id);
  }

  @ApiOperation({ summary: 'Delete shop by ID' })
  @ApiResponse({ 
    status: 200, 
    description: 'Shop deleted successfully',
    type: ShopResponseDTO
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 403, description: 'Forbidden - Not shop owner' })
  @ApiResponse({ status: 404, description: 'Shop not found' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  deleteShop(@Param('id') id: string, @User() user) {
    return this.shopService.deleteShop(id, user.id);
  }
}
