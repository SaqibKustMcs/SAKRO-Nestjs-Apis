import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { User } from 'src/decorators/user.decorator';
import {
  ConfirmStripePaymentDTO,
  CreateStripePaymentIntentDTO,
} from 'src/order/dto/ecommerce-order.dto';
import { StripeService } from './stripe.service';

@ApiTags('Stripe Payments')
@Controller('orders/stripe')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class StripeOrderController {
  constructor(private readonly stripeService: StripeService) {}

  @ApiOperation({
    summary: 'Create Stripe PaymentIntent (buyer pays, 5% platform fee to seller)',
  })
  @ApiResponse({ status: 201, description: 'Payment intent created' })
  @Post('create-payment-intent')
  async createPaymentIntent(
    @Body() dto: CreateStripePaymentIntentDTO,
    @User() user: { id: string },
  ) {
    const data = await this.stripeService.createPaymentIntent(
      dto.orderId,
      user.id,
    );
    return {
      success: true,
      message: 'Payment intent created',
      data,
    };
  }

  @ApiOperation({ summary: 'Confirm Stripe payment after client-side success' })
  @ApiResponse({ status: 200, description: 'Payment confirmed' })
  @Post('confirm-payment')
  async confirmPayment(
    @Body() dto: ConfirmStripePaymentDTO,
    @User() user: { id: string },
  ) {
    const order = await this.stripeService.confirmPayment(
      dto.orderId,
      dto.paymentIntentId,
      user.id,
    );
    return {
      success: true,
      message: 'Payment confirmed',
      data: order,
    };
  }
}
