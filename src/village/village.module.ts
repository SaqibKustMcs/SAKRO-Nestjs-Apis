import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VillageController } from './village.controller';
import { VillageService } from './village.service';
import { Village, VillageSchema } from '../schema/village/village.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { 
        name: Village.name, 
        schema: VillageSchema 
      }
    ])
  ],
  controllers: [VillageController],
  providers: [VillageService],
  exports: [VillageService]
})
export class VillageModule {}
