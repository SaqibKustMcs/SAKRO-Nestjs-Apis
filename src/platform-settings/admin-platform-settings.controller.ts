import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AdminRoleGuard } from '../auth/admin-role.guard';
import { PlatformSettingsService } from './platform-settings.service';
import { UpdatePlatformSettingsDto } from './dto/update-platform-settings.dto';

@ApiTags('adminApis')
@Controller('admin/platform-settings')
@UseGuards(JwtAuthGuard, AdminRoleGuard)
@ApiBearerAuth()
export class AdminPlatformSettingsController {
  constructor(private readonly platformSettingsService: PlatformSettingsService) {}

  @Get()
  @ApiOperation({ summary: 'Get platform settings (admin)' })
  @ApiResponse({ status: 200 })
  async get() {
    const doc = await this.platformSettingsService.getOrCreate();
    return {
      success: true,
      message: 'Platform settings retrieved',
      data: {
        maintenanceMode: doc.maintenanceMode,
        maintenanceMessage: doc.maintenanceMessage ?? '',
      },
    };
  }

  @Patch()
  @ApiOperation({ summary: 'Update platform settings (admin)' })
  @ApiResponse({ status: 200 })
  async patch(@Body() dto: UpdatePlatformSettingsDto) {
    const doc = await this.platformSettingsService.updateForAdmin(dto);
    return {
      success: true,
      message: 'Platform settings updated',
      data: {
        maintenanceMode: doc.maintenanceMode,
        maintenanceMessage: doc.maintenanceMessage ?? '',
      },
    };
  }
}
