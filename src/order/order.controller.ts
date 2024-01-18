import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiProperty, ApiTags } from '@nestjs/swagger';
import { User } from 'src/decorators/user.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateOrderDTO, DeleteOrderIdDTO, GetAllOrdersDTO, GetOrderIdDTO, UpdateOrderDTO } from './dto/order.dto';
import { OrderService } from './order.service';
@ApiTags('Order')
@Controller('order')

export class OrderController {
    constructor(private readonly orderService: OrderService) { }

    @Post('createOrder')
    createOrder(@Body() createPostDTO: CreateOrderDTO) {
      return this.orderService.createOrder(createPostDTO);
    }
    @ApiBearerAuth()
@UseGuards(JwtAuthGuard)
    @Get('getAllOrders')
    getAllOrders(@Query() getAllOrdersDTO: GetAllOrdersDTO, @User() user) {
      return this.orderService.getAllOrders(getAllOrdersDTO );
    }
    @Get('getOrderById')
    getOrderById(@Query() getOrderIdDTO: GetOrderIdDTO, @User() user) {
      return this.orderService.getOrderById(getOrderIdDTO );
    }
    @Post('deleteOrderById')
    deleteOrderById(@Query() getOrderIdDTO: DeleteOrderIdDTO, @User() user) {
      return this.orderService.deleteOrderById(getOrderIdDTO );
    }
    @Post('updateOrderById')
    updateOrderById(@Body() updateOrderDTO: UpdateOrderDTO, @User() user) {
      return this.orderService.updateOrderById(updateOrderDTO.id,updateOrderDTO );
    }
    

}
