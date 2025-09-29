import { VillageStatus } from '../../schema/village/village.schema';

export interface VillageInterface {
  _id: string;
  name: string;
  description?: string;
  status: VillageStatus;
  createdAt: Date;
}
