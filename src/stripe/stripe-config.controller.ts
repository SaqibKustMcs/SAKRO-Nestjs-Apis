import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { StripeService } from './stripe.service';

@ApiTags('Stripe')
@Controller('stripe')
export class StripeConfigController {
  constructor(private readonly stripeService: StripeService) {}

  @ApiOperation({ summary: 'Public Stripe config for mobile app' })
  @Get('config')
  getConfig() {
    return {
      success: true,
      data: {
        publishableKey: this.stripeService.getPublishableKey(),
        platformFeePercent: this.stripeService.getPlatformFeePercent(),
        enabled: this.stripeService.isConfigured,
      },
    };
  }
}
