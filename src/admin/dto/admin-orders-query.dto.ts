import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEnum, IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';

const STATUSES = [
  'pending',
  'confirmed',
  'processing',
  'shipped',
  'delivered',
  'cancelled',
  'refunded',
] as const;

export class AdminOrdersQueryDto {
  @ApiPropertyOptional({ description: 'Search order number, id, buyer, or shop id' })
  @IsOptional()
  @IsString()
  search?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  userId?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  shopId?: string;

  @ApiPropertyOptional({ enum: STATUSES })
  @IsOptional()
  @IsEnum(STATUSES)
  status?: (typeof STATUSES)[number];

  @ApiPropertyOptional({ default: 0 })
  @IsOptional()
  @Transform(({ value }) => {
    if (value === null || value === undefined || value === '') return 0;
    const n = parseInt(String(value), 10);
    return Number.isNaN(n) ? 0 : n;
  })
  @IsNumber()
  @Min(0)
  offset?: number;

  @ApiPropertyOptional({ default: 20 })
  @IsOptional()
  @Transform(({ value }) => {
    if (value === null || value === undefined || value === '') return 20;
    const n = parseInt(String(value), 10);
    return Number.isNaN(n) ? 20 : n;
  })
  @IsNumber()
  @Min(1)
  @Max(100)
  limit?: number;
}
