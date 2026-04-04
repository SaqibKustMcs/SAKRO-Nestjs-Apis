import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PlatformSettingsService } from './platform-settings.service';

/** No auth — used by the mobile app on startup. */
@ApiTags('app')
@Controller('app')
export class AppMaintenanceController {
  constructor(private readonly platformSettingsService: PlatformSettingsService) {}

  @Get('maintenance')
  @ApiOperation({ summary: 'Public maintenance status (for mobile app)' })
  @ApiResponse({ status: 200 })
  async getMaintenance() {
    const data = await this.platformSettingsService.getPublicMaintenance();
    return {
      success: true,
      message: 'OK',
      data,
    };
  }
}
