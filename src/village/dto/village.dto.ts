import { IsString, IsOptional, IsEnum, IsNotEmpty } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export enum VillageStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive'
}

export class CreateVillageDto {
  @ApiProperty({
    description: 'Name of the village',
    example: 'Green Valley',
    type: String
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiPropertyOptional({
    description: 'Description of the village',
    example: 'A peaceful village surrounded by mountains',
    type: String
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiPropertyOptional({
    description: 'Status of the village',
    enum: VillageStatus,
    default: VillageStatus.ACTIVE,
    example: VillageStatus.ACTIVE
  })
  @IsEnum(VillageStatus)
  @IsOptional()
  status?: VillageStatus;
}

export class GetVillagesQueryDto {
  @ApiPropertyOptional({
    description: 'Filter villages by status',
    enum: VillageStatus,
    example: VillageStatus.ACTIVE
  })
  @IsEnum(VillageStatus)
  @IsOptional()
  @Transform(({ value }) => value?.toLowerCase())
  status?: VillageStatus;

  @ApiPropertyOptional({
    description: 'Search villages by name (case-insensitive partial match)',
    example: 'green',
    type: String
  })
  @IsString()
  @IsOptional()
  @Transform(({ value }) => value?.trim())
  search?: string;
}

export class VillageResponseDto {
  @ApiProperty({ description: 'Village unique identifier' })
  _id: string;

  @ApiProperty({ description: 'Name of the village' })
  name: string;

  @ApiProperty({ description: 'Description of the village' })
  description: string;

  @ApiProperty({ description: 'Status of the village', enum: VillageStatus })
  status: VillageStatus;

  @ApiProperty({ description: 'Creation date' })
  createdAt: Date;
}

export class UpdateVillageDto {
  @ApiPropertyOptional({
    description: 'Name of the village',
    example: 'Updated Village Name',
    type: String
  })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name?: string;

  @ApiPropertyOptional({
    description: 'Description of the village',
    example: 'Updated description of the village',
    type: String
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiPropertyOptional({
    description: 'Status of the village',
    enum: VillageStatus,
    example: VillageStatus.ACTIVE
  })
  @IsEnum(VillageStatus)
  @IsOptional()
  status?: VillageStatus;
}

export class DeleteVillageResponseDto {
  @ApiProperty({ 
    description: 'Indicates if the operation was successful',
    example: true
  })
  success: boolean;

  @ApiProperty({ 
    description: 'Success message',
    example: 'Village deleted successfully'
  })
  message: string;
}
