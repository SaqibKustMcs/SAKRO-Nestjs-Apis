import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  PlatformSettings,
  PlatformSettingsDocument,
} from 'src/schema/platform-settings/platform-settings.schema';
import { UpdatePlatformSettingsDto } from './dto/update-platform-settings.dto';

const GLOBAL_KEY = 'global';

const DEFAULT_MESSAGE =
  'We are temporarily unavailable. Please try again later.';

@Injectable()
export class PlatformSettingsService {
  constructor(
    @InjectModel(PlatformSettings.name)
    private readonly model: Model<PlatformSettingsDocument>,
  ) {}

  async getOrCreate(): Promise<PlatformSettingsDocument> {
    let doc = await this.model.findOne({ key: GLOBAL_KEY }).exec();
    if (!doc) {
      doc = await this.model.create({
        key: GLOBAL_KEY,
        maintenanceMode: false,
        maintenanceMessage: '',
      });
    }
    return doc;
  }

  /** Public/mobile: whether the shopping app should show maintenance UI. */
  async getPublicMaintenance(): Promise<{
    maintenanceMode: boolean;
    maintenanceMessage: string;
  }> {
    const doc = await this.getOrCreate();
    const message =
      (doc.maintenanceMessage && doc.maintenanceMessage.trim()) ||
      DEFAULT_MESSAGE;
    return {
      maintenanceMode: Boolean(doc.maintenanceMode),
      maintenanceMessage: message,
    };
  }

  async updateForAdmin(dto: UpdatePlatformSettingsDto): Promise<PlatformSettingsDocument> {
    const doc = await this.getOrCreate();
    if (dto.maintenanceMode !== undefined) {
      doc.maintenanceMode = dto.maintenanceMode;
    }
    if (dto.maintenanceMessage !== undefined) {
      doc.maintenanceMessage = dto.maintenanceMessage;
    }
    return doc.save();
  }
}
