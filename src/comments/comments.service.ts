import { BadRequestException, Injectable, NotFoundException,  } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
// import { Post } from 'src/schema/post/post.schema';
import { ApiProperty } from '@nestjs/swagger/dist/decorators';
import { query } from 'express';
import { generateStringId } from 'src/utils/utils';
// import { User } from 'src/decorators/user.decorator';
import { Post } from 'src/schema/post/post.schema';
// Removed legacy chat user schema import
import { async } from 'rxjs';
import { CreateCommentsDTO, DeleteCommentIdDTO, GetAllCommmentDTO, GetCommentsIdDTO, UpdateCommentsDTO, CommentResponseDTO, LikeCommentDTO } from './dto/comments.dto';
import { Order } from 'src/schema/order/order.schema';
import { Comments } from 'src/schema/comments/comments.schema';
import { User } from 'src/schema/user/user.schema';



// var cron = require('node-cron');

@Injectable()
export class CommentsService {

    // private server: Server;

    constructor(
        @InjectModel(Comments.name) private commentsModel: Model<Comments>,
        @InjectModel('users') private userModel: Model<User>,
        @InjectModel(Post.name) private postModel: Model<Post>,
    ){}


 

    async createComments(createCommentsDTO: CreateCommentsDTO): Promise<{ success: boolean; message: string; data: CommentResponseDTO }> {
        try {
            console.log('💬 Creating comment with data:', {
                postId: createCommentsDTO.postId,
                userId: createCommentsDTO.userId,
                text: createCommentsDTO.text,
                parentCommentId: createCommentsDTO.parentCommentId
            });

            // Validate that the post exists
            const post = await this.postModel.findOne({ id: createCommentsDTO.postId, isDeleted: false });
            if (!post) {
                console.log(`❌ Post not found: ${createCommentsDTO.postId}`);
                throw new NotFoundException('Post not found');
            }
            console.log('✅ Post found:', post.id);

            // Validate that the user exists
            // Note: User schema uses _id as primary key, not id
            const user = await this.userModel.findOne({ _id: createCommentsDTO.userId, isDeleted: false });
            if (!user) {
                console.log(`❌ User not found: ${createCommentsDTO.userId}`);
                throw new NotFoundException('User not found');
            }
            console.log('✅ User found:', user._id);

            // Create the comment
            const commentDocument = await new this.commentsModel({
                ...createCommentsDTO,
                likesCount: 0,
                likedBy: [],
            }).save();

            console.log('✅ Comment created:', commentDocument.id);

            // Populate the comment with user data
            const populatedComment = await this.populateCommentData(commentDocument, createCommentsDTO.userId);

            return {
                success: true,
                message: 'Comment created successfully',
                data: populatedComment
            };

        } catch (error) {
            console.log('❌ Error creating comment:', error?.message);
            console.log('❌ Full error:', error);
            throw new BadRequestException(error?.message || 'Failed to create comment');
        }
    }
    async getAllComments(getAllCommentsDto: GetAllCommmentDTO, currentUserId?: string): Promise<{ success: boolean; message: string; data: CommentResponseDTO[] }> {
        try {
            const commentsData = await this.commentsModel
                .find({ isDeleted: false, postId: getAllCommentsDto.postId })
                .sort({ createdAt: -1 }) // Sort by newest first
                .skip(parseInt(getAllCommentsDto.offset))
                .limit(parseInt(getAllCommentsDto.limit));

            const populatedComments = await Promise.all(
                commentsData.map(async (comment) => {
                    return await this.populateCommentData(comment, currentUserId);
                })
            );

            return {
                success: true,
                message: 'Comments fetched successfully',
                data: populatedComments
            };
        } catch (error) {
            console.log(error);
            throw new BadRequestException(error?.message || 'Failed to fetch comments');
        }
    }
    async getCommentsById(getCommentsIdDTO: GetCommentsIdDTO): Promise<Comments | null>  {
        try {

            let commentsData = await this.commentsModel
            .find({ id: getCommentsIdDTO.id,}).exec();
           
    
            let commentReturn = JSON.parse(JSON.stringify(commentsData[0]));

   
        
            return commentReturn;
        } catch (error) {
            console.log(error);
            throw new BadRequestException(error?.message);
        }
    }
    async deleteCommentsById(deleteCommentIdDTO: DeleteCommentIdDTO){
        try {

            let postData = await this.commentsModel
            .deleteOne({ id: deleteCommentIdDTO.id,}).exec();
    
        } catch (error) {
            console.log(error);
            throw new BadRequestException(error?.message);
        }
    }
    async updateCommentsById(postId: string,updateCommentsDTO: UpdateCommentsDTO){


        try {
            console.log(postId)
            console.log("updated post ",updateCommentsDTO)

            const comments = await this.commentsModel
            .updateOne({ id: postId }, { $set: updateCommentsDTO })
          ;
          console.log("updated post nnn ",comments)

            


              return comments;
    
        } catch (error) {
            console.log(error);
            throw new BadRequestException(error?.message);
        }
    }

    async toggleLikeComment(commentId: string, userId: string): Promise<{ success: boolean; message: string; data: CommentResponseDTO }> {
        try {
            const comment = await this.commentsModel.findOne({ id: commentId, isDeleted: false });

            if (!comment) {
                throw new NotFoundException('Comment not found');
            }

            const isLiked = comment.likedBy.includes(userId);

            if (isLiked) {
                // Unlike the comment
                comment.likedBy = comment.likedBy.filter(id => id !== userId);
                comment.likesCount = Math.max(0, comment.likesCount - 1);
            } else {
                // Like the comment
                comment.likedBy.push(userId);
                comment.likesCount = comment.likesCount + 1;
            }

            await comment.save();

            const populatedComment = await this.populateCommentData(comment, userId);

            return {
                success: true,
                message: isLiked ? 'Comment unliked successfully' : 'Comment liked successfully',
                data: populatedComment
            };
        } catch (error) {
            console.log(error);
            throw new BadRequestException(error?.message || 'Failed to toggle like');
        }
    }

    private async populateCommentData(comment: any, currentUserId?: string): Promise<CommentResponseDTO> {
        try {
            // Populate user data
            // Note: User schema uses _id as primary key, not id
            const user = await this.userModel.findOne({ _id: comment.userId, isDeleted: false });
            
            return {
                id: comment.id,
                userId: user ? {
                    id: user._id,
                    fullName: user.fullName,
                    profilePic: user.profilePic,
                    email: user.email,
                } : null,
                postId: comment.postId,
                text: comment.text,
                parentCommentId: comment.parentCommentId,
                likedBy: comment.likedBy || [],
                likesCount: comment.likesCount || 0,
                isLiked: currentUserId ? (comment.likedBy || []).includes(currentUserId) : false,
                isDeleted: comment.isDeleted,
                createdAt: comment.createdAt,
                updatedAt: comment.updatedAt
            };
        } catch (error) {
            console.log('Error populating comment data:', error);
            throw error;
        }
    }
}
