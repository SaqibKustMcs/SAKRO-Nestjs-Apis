import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Village, VillageDocument, VillageStatus } from '../schema/village/village.schema';
import { CreateVillageDto, GetVillagesQueryDto, UpdateVillageDto, DeleteVillageResponseDto } from './dto/village.dto';

@Injectable()
export class VillageService {
  constructor(
    @InjectModel(Village.name) private villageModel: Model<VillageDocument>,
  ) {}

  async createVillage(createVillageDto: CreateVillageDto): Promise<Village> {
    try {
      const villageData = {
        ...createVillageDto,
        status: createVillageDto.status || VillageStatus.ACTIVE,
        createdAt: new Date(),
      };

      const createdVillage = new this.villageModel(villageData);
      return await createdVillage.save();
    } catch (error) {
      // Handle unique constraint violation for name field
      if (error.code === 11000 && error.keyPattern?.name) {
        throw new ConflictException(`Village with name '${createVillageDto.name}' already exists`);
      }
      throw error;
    }
  }

  async findAll(queryDto?: GetVillagesQueryDto): Promise<Village[]> {
    const filter: any = {};

    // Add status filter if provided
    if (queryDto?.status) {
      filter.status = queryDto.status;
    }

    // Add name search filter if provided
    if (queryDto?.search) {
      filter.name = { $regex: queryDto.search, $options: 'i' };
    }

    return this.villageModel
      .find(filter)
      .select('_id name description status createdAt')
      .sort({ createdAt: -1 })
      .exec();
  }

  async findOne(id: string): Promise<Village | null> {
    return this.villageModel.findById(id).exec();
  }

  async findByName(name: string): Promise<Village | null> {
    return this.villageModel.findOne({ name }).exec();
  }

  async updateVillage(id: string, updateVillageDto: UpdateVillageDto): Promise<Village> {
    try {
      // Check if village exists
      const existingVillage = await this.villageModel.findById(id).exec();
      if (!existingVillage) {
        throw new NotFoundException(`Village with ID '${id}' not found`);
      }

      // Prepare update data, excluding undefined values
      const updateData: any = {};
      if (updateVillageDto.name !== undefined) updateData.name = updateVillageDto.name;
      if (updateVillageDto.description !== undefined) updateData.description = updateVillageDto.description;
      if (updateVillageDto.status !== undefined) updateData.status = updateVillageDto.status;

      // Update the village
      const updatedVillage = await this.villageModel
        .findByIdAndUpdate(id, updateData, { new: true, runValidators: true })
        .exec();

      if (!updatedVillage) {
        throw new NotFoundException(`Village with ID '${id}' not found`);
      }

      return updatedVillage;
    } catch (error) {
      // Handle unique constraint violation for name field
      if (error.code === 11000 && error.keyPattern?.name) {
        throw new ConflictException(`Village with name '${updateVillageDto.name}' already exists`);
      }
      
      // Re-throw NotFoundException and ConflictException
      if (error instanceof NotFoundException || error instanceof ConflictException) {
        throw error;
      }
      
      // Handle other errors
      throw error;
    }
  }

  async deleteVillage(id: string): Promise<DeleteVillageResponseDto> {
    // Check if village exists before attempting deletion
    const existingVillage = await this.villageModel.findById(id).exec();
    if (!existingVillage) {
      throw new NotFoundException(`Village with ID '${id}' not found`);
    }

    // Delete the village
    const result = await this.villageModel.findByIdAndDelete(id).exec();
    
    if (!result) {
      throw new NotFoundException(`Village with ID '${id}' not found`);
    }

    return {
      success: true,
      message: 'Village deleted successfully'
    };
  }
}
