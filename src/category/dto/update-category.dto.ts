import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsEnum, IsNumber, Min } from 'class-validator';

export class UpdateCategoryDTO {
  @ApiProperty({ 
    description: 'Name of the category',
    required: false,
    example: 'Updated Electronics'
  })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({ 
    description: 'Category status',
    enum: ['ACTIVE', 'INACTIVE'],
    required: false
  })
  @IsEnum(['ACTIVE', 'INACTIVE'])
  @IsOptional()
  status?: 'ACTIVE' | 'INACTIVE';

  @ApiProperty({ 
    description: 'Category description',
    required: false,
    example: 'Updated description'
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ 
    description: 'Category icon URL',
    required: false,
    example: 'https://example.com/updated-icon.png'
  })
  @IsString()
  @IsOptional()
  icon?: string;

  @ApiProperty({ 
    description: 'Sort order for display',
    required: false,
    example: 2,
    minimum: 0
  })
  @IsNumber()
  @Min(0)
  @IsOptional()
  sortOrder?: number;
}
