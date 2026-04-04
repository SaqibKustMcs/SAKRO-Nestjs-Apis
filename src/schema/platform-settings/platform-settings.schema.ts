import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

/** Singleton row (`key: global`) for app-wide flags (maintenance, etc.). */
@Schema({ collection: 'platform_settings', timestamps: true })
export class PlatformSettings {
  @Prop({ type: String, unique: true, default: 'global' })
  key: string;

  @Prop({ type: Boolean, default: false })
  maintenanceMode: boolean;

  @Prop({ type: String, default: '' })
  maintenanceMessage: string;
}

export type PlatformSettingsDocument = HydratedDocument<PlatformSettings>;
export const PlatformSettingsSchema = SchemaFactory.createForClass(PlatformSettings);
