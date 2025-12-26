import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEnum, IsOptional, IsNotEmpty, MaxLength } from 'class-validator';

export class ReportPostDTO {
  @ApiProperty({ 
    description: 'Reason for reporting the post', 
    enum: ['spam', 'inappropriate', 'harassment', 'false_information', 'violence', 'other'],
    example: 'spam'
  })
  @IsEnum(['spam', 'inappropriate', 'harassment', 'false_information', 'violence', 'other'])
  @IsNotEmpty()
  reason: 'spam' | 'inappropriate' | 'harassment' | 'false_information' | 'violence' | 'other';

  @ApiProperty({ 
    description: 'Additional details about the report (optional)', 
    example: 'This post contains misleading information',
    required: false,
    maxLength: 500
  })
  @IsOptional()
  @IsString()
  @MaxLength(500)
  description?: string;
}

export class ReportPostResponseDTO {
  @ApiProperty({ description: 'Report ID' })
  id: string;

  @ApiProperty({ description: 'Post ID that was reported' })
  postId: string;

  @ApiProperty({ description: 'User ID who reported the post' })
  reportedBy: string;

  @ApiProperty({ description: 'Reason for the report' })
  reason: string;

  @ApiProperty({ description: 'Additional description', required: false })
  description?: string;

  @ApiProperty({ description: 'Whether the report has been resolved' })
  isResolved: boolean;

  @ApiProperty({ description: 'Creation timestamp' })
  createdAt: Date;
}

