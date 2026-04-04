import { Controller, Get, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AdminRoleGuard } from '../auth/admin-role.guard';
import { AdminDashboardService } from './admin-dashboard.service';

@ApiTags('adminApis')
@Controller('admin/dashboard')
@UseGuards(JwtAuthGuard, AdminRoleGuard)
@ApiBearerAuth()
export class AdminDashboardController {
  constructor(private readonly dashboardService: AdminDashboardService) {}

  @Get('stats')
  @ApiOperation({
    summary: 'Dashboard KPIs and charts (admin)',
    description:
      'Aggregates ecommerce orders, catalog counts, travel orders sample, and current-year monthly series.',
  })
  @ApiResponse({ status: 200, description: 'Dashboard stats' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 403, description: 'Forbidden — not admin' })
  async getStats() {
    const data = await this.dashboardService.getStats();
    return {
      success: true,
      message: 'Dashboard stats retrieved',
      data,
    };
  }
}
