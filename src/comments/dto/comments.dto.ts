import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateCommentsDTO {
    @ApiProperty({ description: 'User ID who is creating the comment' })
    @IsString()
    @IsOptional() // Made optional since controller sets it from JWT
    userId: string;
    
    @ApiProperty({ description: 'Post ID to comment on' })
    @IsString()
    @IsNotEmpty()
    postId: string;
    
    @ApiProperty({ description: 'Comment text content' })
    @IsString()
    @IsNotEmpty()
    text: string;
    
    @ApiProperty({ description: 'Parent comment ID for replies', required: false })
    @IsString()
    @IsOptional()
    parentCommentId?: string;
}
export class PaginationDTO {
    @ApiProperty({ default: 0 })
    @IsString()
    @IsOptional()
    offset: string;
    
    @ApiProperty({ default: 10 })
    @IsString()
    @IsOptional()
    limit: string;
}

export class GetAllCommmentDTO extends PaginationDTO {
    @ApiProperty({ required: true })
    @IsString()
    @IsNotEmpty()
    postId: string;
    
    static offset: any;
    static limit: any;
}
export class GetCommentsIdDTO {
    @ApiProperty()
    @IsString()
    @IsOptional()
    id?: string;
}

export class DeleteCommentIdDTO {
    @ApiProperty()
    @IsString()
    @IsOptional()
    id?: string;
}

export class UpdateCommentsDTO {
    @ApiProperty({ description: 'Comment ID to update' })
    @IsString()
    @IsNotEmpty()
    id: string;
    
    @ApiProperty({ description: 'Updated comment text' })
    @IsString()
    @IsNotEmpty()
    text: string;
}

export class CommentResponseDTO {
    @ApiProperty({ description: 'Comment ID' })
    id: string;

    @ApiProperty({ description: 'User who created the comment' })
    userId: any;

    @ApiProperty({ description: 'Post ID this comment belongs to' })
    postId: string;

    @ApiProperty({ description: 'Comment text content' })
    text: string;

    @ApiProperty({ description: 'Parent comment ID for replies', required: false })
    parentCommentId?: string;

    @ApiProperty({ description: 'List of user IDs who liked this comment' })
    likedBy: string[];

    @ApiProperty({ description: 'Total number of likes' })
    likesCount: number;

    @ApiProperty({ description: 'Number of replies (only for parent comments)', required: false })
    replyCount?: number;

    @ApiProperty({ description: 'Whether the current user has liked this comment', required: false })
    isLiked?: boolean;

    @ApiProperty({ description: 'Whether the comment is deleted' })
    isDeleted: boolean;

    @ApiProperty({ description: 'Comment creation date' })
    createdAt: Date;

    @ApiProperty({ description: 'Comment last update date' })
    updatedAt: Date;
}

export class LikeCommentDTO {
    @ApiProperty({ description: 'Comment ID to like/unlike' })
    @IsString()
    @IsNotEmpty()
    commentId: string;
}


