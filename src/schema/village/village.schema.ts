import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { generateStringId } from 'src/utils/utils';

export enum VillageStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive'
}

export type VillageDocument = HydratedDocument<Village>;

@Schema()
export class Village {
  @Prop({ type: String, default: generateStringId })
  _id: string;

  @Prop({ type: String, required: true, unique: true })
  name: string;

  @Prop({ type: String, default: '' })
  description: string;

  @Prop({ 
    type: String, 
    enum: VillageStatus, 
    default: VillageStatus.ACTIVE 
  })
  status: VillageStatus;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;
}

export const VillageSchema = SchemaFactory.createForClass(Village);

VillageSchema.set('timestamps', true);
VillageSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

// Create index for unique name constraint
VillageSchema.index({ name: 1 }, { unique: true });
