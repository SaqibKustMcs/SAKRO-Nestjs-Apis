import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { IsBoolean, IsOptional } from 'class-validator';
import { UpdateShopDTO } from './update-shop.dto';

/** Admin can update any shop; includes verification. All fields optional. */
export class AdminUpdateShopDto extends PartialType(UpdateShopDTO) {
  @ApiPropertyOptional({ description: 'Verified badge' })
  @IsOptional()
  @IsBoolean()
  isVerified?: boolean;
}
