import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsEnum, IsOptional, IsArray, IsNumber, IsBoolean, IsNotEmpty, ValidateNested, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';

export class PostOptionDTO {
  @ApiProperty({ description: 'Option text', example: 'Option 1' })
  @IsString()
  @IsNotEmpty()
  text: string;
}

export class CreatePostDTO {
  @ApiProperty({ 
    description: 'Village ID where the post is created', 
    example: 'village123' 
  })
  @IsString()
  @IsNotEmpty()
  villageId: string;

  @ApiProperty({ 
    description: 'Post type', 
    enum: ['text', 'image', 'video', 'question'],
    example: 'text'
  })
  @IsEnum(['text', 'image', 'video', 'question'])
  type: 'text' | 'image' | 'video' | 'question';

  @ApiProperty({ 
    description: 'Post text content', 
    example: 'This is a great post!',
    required: false
  })
  @IsOptional()
  @IsString()
  text?: string;

  @ApiProperty({ 
    description: 'Media URL for image/video posts', 
    example: 'https://example.com/image.jpg',
    required: false
  })
  @IsOptional()
  @IsString()
  mediaUrl?: string;

  @ApiProperty({ 
    description: 'Media type for image/video posts', 
    enum: ['image', 'video'],
    example: 'image',
    required: false
  })
  @IsOptional()
  @IsEnum(['image', 'video'])
  mediaType?: 'image' | 'video';

  @ApiProperty({ 
    description: 'Question text for question posts', 
    example: 'What is your favorite color?',
    required: false
  })
  @IsOptional()
  @IsString()
  question?: string;

  @ApiProperty({ 
    description: 'Options for question posts', 
    type: [PostOptionDTO],
    required: false
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PostOptionDTO)
  options?: PostOptionDTO[];
}

export class UpdatePostDTO {
  @ApiProperty({ description: 'Post ID to update' })
  @IsString()
  @IsNotEmpty()
  id: string;

  @ApiProperty({ 
    description: 'Updated post text', 
    required: false
  })
  @IsOptional()
  @IsString()
  text?: string;

  @ApiProperty({ 
    description: 'Updated media URL', 
    required: false
  })
  @IsOptional()
  @IsString()
  mediaUrl?: string;

  @ApiProperty({ 
    description: 'Updated media type', 
    enum: ['image', 'video'],
    required: false
  })
  @IsOptional()
  @IsEnum(['image', 'video'])
  mediaType?: 'image' | 'video';

  @ApiProperty({ 
    description: 'Updated question text', 
    required: false
  })
  @IsOptional()
  @IsString()
  question?: string;

  @ApiProperty({ 
    description: 'Updated options', 
    type: [PostOptionDTO],
    required: false
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PostOptionDTO)
  options?: PostOptionDTO[];
}

export class VotePostDTO {
  @ApiProperty({ 
    description: 'Option ID to vote for', 
    example: 'option123'
  })
  @IsString()
  @IsNotEmpty()
  optionId: string;
}

export class PostQueryDTO {
  @ApiProperty({ 
    description: 'Filter by post type', 
    enum: ['text', 'image', 'video', 'question'],
    required: false
  })
  @IsOptional()
  @IsEnum(['text', 'image', 'video', 'question'])
  type?: 'text' | 'image' | 'video' | 'question';

  @ApiProperty({ 
    description: 'Filter by village ID', 
    required: false
  })
  @IsOptional()
  @IsString()
  villageId?: string;

  @ApiProperty({ 
    description: 'Filter by user ID', 
    required: false
  })
  @IsOptional()
  @IsString()
  userId?: string;

  @ApiProperty({ 
    description: 'Search in post text', 
    required: false
  })
  @IsOptional()
  @IsString()
  search?: string;

  @ApiProperty({ 
    description: 'Page offset for pagination', 
    default: 0,
    minimum: 0
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  offset?: number = 0;

  @ApiProperty({ 
    description: 'Number of posts per page', 
    default: 10,
    minimum: 1,
    maximum: 100
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @Max(100)
  limit?: number = 10;

  @ApiProperty({ 
    description: 'Sort by field', 
    enum: ['createdAt', 'totalVotes'],
    default: 'createdAt'
  })
  @IsOptional()
  @IsEnum(['createdAt', 'totalVotes'])
  sortBy?: 'createdAt' | 'totalVotes' = 'createdAt';

  @ApiProperty({ 
    description: 'Sort order', 
    enum: ['asc', 'desc'],
    default: 'desc'
  })
  @IsOptional()
  @IsEnum(['asc', 'desc'])
  sortOrder?: 'asc' | 'desc' = 'desc';
}

// Response DTOs
export class PostOptionResponseDTO {
  @ApiProperty({ description: 'Option ID' })
  id: string;

  @ApiProperty({ description: 'Option text' })
  text: string;

  @ApiProperty({ description: 'Number of votes for this option' })
  voteCount: number;

  @ApiProperty({ description: 'Percentage of total votes' })
  percentage: number;

  @ApiProperty({ description: 'Whether the current user voted for this option', required: false })
  isVotedByCurrentUser?: boolean;
}

export class PostResponseDTO {
  @ApiProperty({ description: 'Post ID' })
  id: string;

  @ApiProperty({ description: 'User ID who created the post' })
  userId: string;

  @ApiProperty({ description: 'Village ID where post was created' })
  villageId: string;

  @ApiProperty({ description: 'Post type', enum: ['text', 'image', 'video', 'question'] })
  type: 'text' | 'image' | 'video' | 'question';

  @ApiProperty({ description: 'Post text content' })
  text: string;

  @ApiProperty({ description: 'Media URL' })
  mediaUrl: string;

  @ApiProperty({ description: 'Media type', enum: ['image', 'video'] })
  mediaType: 'image' | 'video' | null;

  @ApiProperty({ description: 'Question text for question posts' })
  question: string;

  @ApiProperty({ description: 'Options for question posts', type: [PostOptionResponseDTO] })
  options: PostOptionResponseDTO[];

  @ApiProperty({ description: 'Total votes for question posts' })
  totalVotes: number;

  @ApiProperty({ description: 'Whether the current user has voted on this question post', required: false })
  hasVoted?: boolean;

  @ApiProperty({ description: 'The option ID that the current user voted for', required: false })
  votedOptionId?: string;

  @ApiProperty({ description: 'Is post deleted' })
  isDeleted: boolean;

  @ApiProperty({ description: 'Creation timestamp' })
  createdAt: Date;

  @ApiProperty({ description: 'Last update timestamp' })
  updatedAt: Date;
}

export class VoteResponseDTO {
  @ApiProperty({ description: 'Success status' })
  success: boolean;

  @ApiProperty({ description: 'Response message' })
  message: string;

  @ApiProperty({ description: 'Updated post data', type: PostResponseDTO })
  data: PostResponseDTO;
}
