import { Body, Controller, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from 'src/decorators/user.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { EcommerceOrderService } from './ecommerce-order.service';
import { CreateEcommerceOrderDTO, GetAllOrdersDTO, UpdateOrderStatusDTO } from './dto/ecommerce-order.dto';

@ApiTags('E-commerce Orders')
@Controller('orders')
export class EcommerceOrderController {
  constructor(private readonly ecommerceOrderService: EcommerceOrderService) {}

  @ApiOperation({ summary: 'Create a new e-commerce order' })
  @ApiResponse({ status: 201, description: 'Order created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  async createOrder(@Body() createOrderDTO: CreateEcommerceOrderDTO) {
    const order = await this.ecommerceOrderService.createOrder(createOrderDTO);
    return {
      success: true,
      message: 'Order created successfully',
      data: order,
    };
  }

  @ApiOperation({ summary: 'Get all e-commerce orders' })
  @ApiQuery({ name: 'userId', required: false, description: 'Filter by buyer ID' })
  @ApiQuery({ name: 'shopId', required: false, description: 'Filter by shop ID' })
  @ApiQuery({ name: 'status', required: false, description: 'Filter by order status' })
  @ApiQuery({ name: 'offset', required: false, type: Number, description: 'Pagination offset' })
  @ApiQuery({ name: 'limit', required: false, type: Number, description: 'Pagination limit' })
  @ApiResponse({ status: 200, description: 'Orders retrieved successfully' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllOrders(@Query() query: GetAllOrdersDTO) {
    const orders = await this.ecommerceOrderService.getAllOrders(query);
    return {
      success: true,
      message: 'Orders retrieved successfully',
      data: orders,
    };
  }

  @ApiOperation({ summary: 'Get order by ID' })
  @ApiParam({ name: 'id', description: 'Order ID' })
  @ApiResponse({ status: 200, description: 'Order retrieved successfully' })
  @ApiResponse({ status: 404, description: 'Order not found' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getOrderById(@Param('id') orderId: string) {
    const order = await this.ecommerceOrderService.getOrderById(orderId);
    return {
      success: true,
      message: 'Order retrieved successfully',
      data: order,
    };
  }

  @ApiOperation({ summary: 'Update order status' })
  @ApiParam({ name: 'id', description: 'Order ID' })
  @ApiResponse({ status: 200, description: 'Order status updated successfully' })
  @ApiResponse({ status: 404, description: 'Order not found' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Put(':id/status')
  async updateOrderStatus(@Param('id') orderId: string, @Body() updateStatusDTO: UpdateOrderStatusDTO) {
    const order = await this.ecommerceOrderService.updateOrderStatus(orderId, updateStatusDTO.status);
    return {
      success: true,
      message: 'Order status updated successfully',
      data: order,
    };
  }

  @ApiOperation({ summary: 'Cancel order' })
  @ApiParam({ name: 'id', description: 'Order ID' })
  @ApiResponse({ status: 200, description: 'Order cancelled successfully' })
  @ApiResponse({ status: 404, description: 'Order not found' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Put(':id/cancel')
  async cancelOrder(@Param('id') orderId: string) {
    const order = await this.ecommerceOrderService.cancelOrder(orderId);
    return {
      success: true,
      message: 'Order cancelled successfully',
      data: order,
    };
  }
}

