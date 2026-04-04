import {
  Body, Controller, Delete, Get, Param,
  Post, Put, Query, UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { BannerService } from './banner.service';
import { CreateBannerDTO, UpdateBannerDTO } from './dto/banner.dto';

@ApiTags('Banners')
@Controller('banners')
export class BannerController {
  constructor(private readonly bannerService: BannerService) {}

  // ── Public endpoints (no auth required) ─────────────────────────────────────

  @ApiOperation({ summary: 'Get active carousel banners' })
  @Get('carousel')
  async getCarouselBanners() {
    const banners = await this.bannerService.getCarouselBanners();
    return { success: true, data: banners };
  }

  @ApiOperation({ summary: 'Get active modal banners' })
  @Get('modal')
  async getModalBanners() {
    const banners = await this.bannerService.getModalBanners();
    return { success: true, data: banners };
  }

  // ── Admin / authenticated endpoints ──────────────────────────────────────────

  @ApiOperation({ summary: 'Get all banners (admin)' })
  @ApiQuery({ name: 'type', required: false, enum: ['carousel', 'modal'] })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllBanners(@Query('type') type?: string) {
    const banners = await this.bannerService.getAllBanners(type);
    return { success: true, data: banners };
  }

  @ApiOperation({ summary: 'Get banner by id' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getBannerById(@Param('id') id: string) {
    const banner = await this.bannerService.getBannerById(id);
    return { success: true, data: banner };
  }

  @ApiOperation({ summary: 'Create a banner' })
  @ApiBody({ type: CreateBannerDTO })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  async createBanner(@Body() dto: CreateBannerDTO) {
    const banner = await this.bannerService.createBanner(dto);
    return { success: true, message: 'Banner created', data: banner };
  }

  @ApiOperation({ summary: 'Update a banner' })
  @ApiBody({ type: UpdateBannerDTO })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async updateBanner(@Param('id') id: string, @Body() dto: UpdateBannerDTO) {
    const banner = await this.bannerService.updateBanner(id, dto);
    return { success: true, message: 'Banner updated', data: banner };
  }

  @ApiOperation({ summary: 'Toggle banner active/inactive' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Put(':id/toggle')
  async toggleBanner(@Param('id') id: string) {
    const banner = await this.bannerService.toggleActive(id);
    return { success: true, message: 'Banner toggled', data: banner };
  }

  @ApiOperation({ summary: 'Delete a banner' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteBanner(@Param('id') id: string) {
    await this.bannerService.deleteBanner(id);
    return { success: true, message: 'Banner deleted' };
  }
}
