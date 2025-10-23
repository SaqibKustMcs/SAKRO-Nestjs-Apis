import { ApiProperty } from "@nestjs/swagger";

export class CreateCommentsDTO {
    @ApiProperty({ description: 'User ID who is creating the comment' })
    userId: string;
    
    @ApiProperty({ description: 'Post ID to comment on' })
    postId: string;
    
    @ApiProperty({ description: 'Comment text content' })
    text: string;
    
    @ApiProperty({ description: 'Parent comment ID for replies', required: false })
    parentCommentId?: string;
}
export class PaginationDTO {
    @ApiProperty({ default: 0 })
    offset: string;
    @ApiProperty({ default: 10 })
    limit: string;
}
export class GetAllCommmentDTO extends PaginationDTO {
     @ApiProperty({ required: true })
     postId: string;
    static offset: any;
    static limit: any;
}
export class GetCommentsIdDTO {
    @ApiProperty()
    id?: string;
   
}
export class DeleteCommentIdDTO {
    @ApiProperty()
    id?: string;
   
}
export class UpdateCommentsDTO {
    @ApiProperty({ description: 'Comment ID to update' })
    id: string;
    
    @ApiProperty({ description: 'Updated comment text' })
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
    commentId: string;
}


