import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  PlatformSettings,
  PlatformSettingsSchema,
} from 'src/schema/platform-settings/platform-settings.schema';
import { PlatformSettingsService } from './platform-settings.service';
import { AppMaintenanceController } from './app-maintenance.controller';
import { AdminPlatformSettingsController } from './admin-platform-settings.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PlatformSettings.name, schema: PlatformSettingsSchema },
    ]),
  ],
  controllers: [AppMaintenanceController, AdminPlatformSettingsController],
  providers: [PlatformSettingsService],
  exports: [PlatformSettingsService],
})
export class PlatformSettingsModule {}
