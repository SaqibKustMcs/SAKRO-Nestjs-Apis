import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { User } from 'src/decorators/user.decorator';
import { StripeService } from './stripe.service';
import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

class ConnectOnboardDTO {
  @ApiProperty()
  @IsString()
  shopId: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  refreshUrl?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  returnUrl?: string;
}

@ApiTags('Stripe Connect')
@Controller('stripe/connect')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class StripeConnectController {
  constructor(private readonly stripeService: StripeService) {}

  @ApiOperation({ summary: 'Start Stripe Connect onboarding for a shop (seller)' })
  @ApiResponse({ status: 201, description: 'Onboarding link created' })
  @Post('onboard')
  async onboard(@Body() dto: ConnectOnboardDTO, @User() user: { id: string }) {
    const result = await this.stripeService.createConnectOnboardingLink(
      dto.shopId,
      user.id,
      dto.refreshUrl,
      dto.returnUrl,
    );
    return {
      success: true,
      message: 'Stripe onboarding link created',
      data: result,
    };
  }

  @ApiOperation({ summary: 'Get Stripe Connect status for a shop' })
  @ApiParam({ name: 'shopId', description: 'Shop ID' })
  @Get('status/:shopId')
  async status(
    @Param('shopId') shopId: string,
    @User() user: { id: string },
  ) {
    const data = await this.stripeService.getConnectStatus(shopId, user.id);
    return { success: true, data };
  }
}
