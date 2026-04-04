import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { User } from 'src/decorators/user.decorator';
import { ProductReviewService } from './product-review.service';
import { CreateProductReviewDto } from './dto/create-product-review.dto';

@ApiTags('Products')
@Controller('product-reviews')
export class ProductReviewWriteController {
  constructor(private readonly productReviewService: ProductReviewService) {}

  @Post()
  @ApiOperation({ summary: 'Submit a product review (delivered orders only)' })
  @ApiResponse({ status: 201 })
  @ApiResponse({ status: 409, description: 'Already reviewed' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async create(@Body() dto: CreateProductReviewDto, @User() user: { id: string }) {
    const data = await this.productReviewService.createReview(user.id, dto);
    return {
      success: true,
      message: 'Review submitted',
      data,
    };
  }
}
