import {
  Body,
  Controller,
  Get,
  Param,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AdminRoleGuard } from '../auth/admin-role.guard';
import { EcommerceOrderService } from '../order/ecommerce-order.service';
import { UpdateOrderStatusDTO } from '../order/dto/ecommerce-order.dto';
import { AdminOrdersQueryDto } from './dto/admin-orders-query.dto';

@ApiTags('adminApis')
@Controller('admin/orders')
@UseGuards(JwtAuthGuard, AdminRoleGuard)
@ApiBearerAuth()
export class AdminOrdersController {
  constructor(private readonly ecommerceOrderService: EcommerceOrderService) {}

  @Get()
  @ApiOperation({ summary: 'List e-commerce orders (admin)' })
  @ApiResponse({ status: 200, description: 'Paginated orders + total' })
  async list(@Query() query: AdminOrdersQueryDto) {
    const result = await this.ecommerceOrderService.getAllOrdersForAdmin({
      search: query.search,
      userId: query.userId,
      shopId: query.shopId,
      status: query.status,
      limit: query.limit,
      offset: query.offset,
    });
    return {
      success: true,
      message: 'Orders retrieved successfully',
      data: result,
    };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get e-commerce order by id (admin)' })
  @ApiParam({ name: 'id', description: 'Order id' })
  @ApiResponse({ status: 404, description: 'Not found' })
  async getOne(@Param('id') id: string) {
    const order = await this.ecommerceOrderService.getOrderByIdWithNames(id);
    return {
      success: true,
      message: 'Order retrieved successfully',
      data: order,
    };
  }

  @Put(':id/status')
  @ApiOperation({ summary: 'Update order status (admin)' })
  @ApiParam({ name: 'id', description: 'Order id' })
  async updateStatus(
    @Param('id') id: string,
    @Body() dto: UpdateOrderStatusDTO,
  ) {
    const order = await this.ecommerceOrderService.updateOrderStatus(
      id,
      dto.status,
    );
    const data = await this.ecommerceOrderService.wrapOrderForAdmin(order);
    return {
      success: true,
      message: 'Order status updated successfully',
      data,
    };
  }

  @Put(':id/cancel')
  @ApiOperation({ summary: 'Cancel order (admin)' })
  @ApiParam({ name: 'id', description: 'Order id' })
  async cancel(@Param('id') id: string) {
    const order = await this.ecommerceOrderService.cancelOrder(id);
    const data = await this.ecommerceOrderService.wrapOrderForAdmin(order);
    return {
      success: true,
      message: 'Order cancelled successfully',
      data,
    };
  }
}
