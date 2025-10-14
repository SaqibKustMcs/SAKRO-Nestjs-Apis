import { BadRequestException, Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { 
  CreatePostDTO, 
  UpdatePostDTO, 
  VotePostDTO, 
  PostQueryDTO, 
  PostResponseDTO, 
  PostOptionResponseDTO,
  VoteResponseDTO 
} from './dto/post.dto';
import { Post, PostOption } from 'src/schema/post/post.schema';
import { Post as PostInterface, PostOption as PostOptionInterface } from 'src/interface/post/post.interface';
import { User } from 'src/interface/user/user.interface';
import { VillageInterface } from 'src/interface/village/village.interface';
import { generateStringId } from 'src/utils/utils';

@Injectable()
export class PostService {
    constructor(
        @InjectModel(Post.name) private postModel: Model<PostInterface>,
        @InjectModel('User') private userModel: Model<User>,
        @InjectModel('Village') private villageModel: Model<VillageInterface>,
    ) {}

    private validatePostData(createPostDTO: CreatePostDTO): void {
        const { type, text, mediaUrl, mediaType, question, options } = createPostDTO;

        switch (type) {
            case 'text':
                if (!text || text.trim().length === 0) {
                    throw new BadRequestException('Text content is required for text posts');
                }
                break;
            case 'image':
            case 'video':
                if (!mediaUrl || mediaUrl.trim().length === 0) {
                    throw new BadRequestException('Media URL is required for image/video posts');
                }
                if (!mediaType) {
                    throw new BadRequestException('Media type is required for image/video posts');
                }
                break;
            case 'question':
                if (!question || question.trim().length === 0) {
                    throw new BadRequestException('Question text is required for question posts');
                }
                if (!options || options.length < 2) {
                    throw new BadRequestException('At least 2 options are required for question posts');
                }
                break;
        }
    }

    private async populatePostData(post: any, currentUserId?: string): Promise<PostResponseDTO> {
        const populatedPost = await this.postModel
            .findById(post._id)
            .populate('userId', 'id fullName email profilePic')
            .populate('villageId', 'id name')
            .lean();

        if (!populatedPost) {
            throw new NotFoundException('Post not found');
        }

        // Calculate vote percentages for question posts
        let optionsWithPercentages: PostOptionResponseDTO[] = [];
        let hasVoted = false;
        let votedOptionId: string | undefined;

        if (populatedPost.type === 'question' && populatedPost.options) {
            const totalVotes = populatedPost.totalVotes || 0;
            
            optionsWithPercentages = populatedPost.options.map(option => {
                const isVotedByCurrentUser = currentUserId ? option.votes.includes(currentUserId) : false;
                
                // Track if user has voted and which option
                if (isVotedByCurrentUser) {
                    hasVoted = true;
                    votedOptionId = option.id;
                }

                return {
                    id: option.id,
                    text: option.text,
                    voteCount: option.votes.length,
                    percentage: totalVotes > 0 ? Math.round((option.votes.length / totalVotes) * 100) : 0,
                    isVotedByCurrentUser
                };
            });
        }

        return {
            id: populatedPost.id,
            userId: populatedPost.userId as any,
            villageId: populatedPost.villageId as any,
            type: populatedPost.type,
            text: populatedPost.text,
            mediaUrl: populatedPost.mediaUrl,
            mediaType: populatedPost.mediaType,
            question: populatedPost.question,
            options: optionsWithPercentages,
            totalVotes: populatedPost.totalVotes,
            hasVoted: populatedPost.type === 'question' ? hasVoted : undefined,
            votedOptionId: populatedPost.type === 'question' ? votedOptionId : undefined,
            isDeleted: populatedPost.isDeleted,
            createdAt: populatedPost.createdAt,
            updatedAt: populatedPost.updatedAt
        };
    }

    async createPost(createPostDTO: CreatePostDTO, userId: string): Promise<{ success: boolean; message: string; data: PostResponseDTO }> {
        try {
            // Validate post type specific requirements
            this.validatePostData(createPostDTO);

            const postData = {
                ...createPostDTO,
                userId,
                options: createPostDTO.options?.map(option => ({
                    id: generateStringId(),
                    text: option.text,
                    votes: []
                })) || []
            };

            const postDocument = await new this.postModel(postData).save();
            const populatedPost = await this.populatePostData(postDocument, userId);

            return {
                success: true,
                message: 'Post created successfully',
                data: populatedPost
            };
        } catch (error) {
            console.log(error);
            throw new BadRequestException(error?.message || 'Failed to create post');
        }
    }

    async getAllPosts(query: PostQueryDTO, currentUserId?: string): Promise<{ success: boolean; message: string; data: { posts: PostResponseDTO[]; total: number; offset: number; limit: number } }> {
        try {
            const { type, villageId, userId, search, offset = 0, limit = 10, sortBy = 'createdAt', sortOrder = 'desc' } = query;

            // Build filter object
            const filter: any = { isDeleted: false };

            if (type) filter.type = type;
            if (villageId) filter.villageId = villageId;
            if (userId) filter.userId = userId;
            if (search) {
                filter.$or = [
                    { text: { $regex: search, $options: 'i' } },
                    { question: { $regex: search, $options: 'i' } }
                ];
            }

            // Build sort object
            const sort: any = {};
            sort[sortBy] = sortOrder === 'desc' ? -1 : 1;

            // Get total count
            const total = await this.postModel.countDocuments(filter);

            // Get posts with pagination
            const posts = await this.postModel
                .find(filter)
                .populate('userId', 'id fullName email profilePic')
                .populate('villageId', 'id name')
                .sort(sort)
                .skip(offset)
                .limit(limit)
                .lean();

            // Process posts to include vote percentages and user voting status
            const processedPosts: PostResponseDTO[] = await Promise.all(
                posts.map(async (post) => {
                    let optionsWithPercentages: PostOptionResponseDTO[] = [];
                    let hasVoted = false;
                    let votedOptionId: string | undefined;

                    if (post.type === 'question' && post.options) {
                        const totalVotes = post.totalVotes || 0;
                        optionsWithPercentages = post.options.map(option => {
                            const isVotedByCurrentUser = currentUserId ? option.votes.includes(currentUserId) : false;
                            
                            // Track if user has voted and which option
                            if (isVotedByCurrentUser) {
                                hasVoted = true;
                                votedOptionId = option.id;
                            }

                            return {
                                id: option.id,
                                text: option.text,
                                voteCount: option.votes.length,
                                percentage: totalVotes > 0 ? Math.round((option.votes.length / totalVotes) * 100) : 0,
                                isVotedByCurrentUser
                            };
                        });
                    }

                    return {
                        id: post.id,
                        userId: post.userId as any,
                        villageId: post.villageId as any,
                        type: post.type,
                        text: post.text,
                        mediaUrl: post.mediaUrl,
                        mediaType: post.mediaType,
                        question: post.question,
                        options: optionsWithPercentages,
                        totalVotes: post.totalVotes,
                        hasVoted: post.type === 'question' ? hasVoted : undefined,
                        votedOptionId: post.type === 'question' ? votedOptionId : undefined,
                        isDeleted: post.isDeleted,
                        createdAt: post.createdAt,
                        updatedAt: post.updatedAt
                    };
                })
            );

            return {
                success: true,
                message: 'Posts retrieved successfully',
                data: {
                    posts: processedPosts,
                    total,
                    offset,
                    limit
                }
            };
        } catch (error) {
            console.log(error);
            throw new BadRequestException(error?.message || 'Failed to retrieve posts');
        }
    }

    async getPostById(postId: string, currentUserId?: string): Promise<{ success: boolean; message: string; data: PostResponseDTO }> {
        try {
            const post = await this.postModel
                .findOne({ id: postId, isDeleted: false })
                .populate('userId', 'id fullName email profilePic')
                .populate('villageId', 'id name')
                .lean();

            if (!post) {
                throw new NotFoundException('Post not found');
            }

            const populatedPost = await this.populatePostData(post, currentUserId);

            return {
                success: true,
                message: 'Post retrieved successfully',
                data: populatedPost
            };
        } catch (error) {
            console.log(error);
            throw new BadRequestException(error?.message || 'Failed to retrieve post');
        }
    }

    async updatePost(postId: string, updatePostDTO: UpdatePostDTO, userId: string): Promise<{ success: boolean; message: string; data: PostResponseDTO }> {
        try {
            const post = await this.postModel.findOne({ id: postId, isDeleted: false });

            if (!post) {
                throw new NotFoundException('Post not found');
            }

            // Check if user is the owner or admin
            if (post.userId !== userId) {
                // You might want to check if user is admin here
                throw new ForbiddenException('You can only update your own posts');
            }

            // Validate update data
            if (updatePostDTO.options) {
                updatePostDTO.options = updatePostDTO.options.map(option => ({
                    id: generateStringId(),
                    text: option.text,
                    votes: []
                }));
            }

            const updatedPost = await this.postModel
                .findOneAndUpdate(
                    { id: postId },
                    { $set: updatePostDTO },
                    { new: true }
                )
                .populate('userId', 'id fullName email profilePic')
                .populate('villageId', 'id name')
                .lean();

            const populatedPost = await this.populatePostData(updatedPost, userId);

            return {
                success: true,
                message: 'Post updated successfully',
                data: populatedPost
            };
        } catch (error) {
            console.log(error);
            throw new BadRequestException(error?.message || 'Failed to update post');
        }
    }

    async deletePost(postId: string, userId: string): Promise<{ success: boolean; message: string }> {
        try {
            const post = await this.postModel.findOne({ id: postId, isDeleted: false });

            if (!post) {
                throw new NotFoundException('Post not found');
            }

            // Check if user is the owner or admin
            if (post.userId !== userId) {
                // You might want to check if user is admin here
                throw new ForbiddenException('You can only delete your own posts');
            }

            await this.postModel.findOneAndUpdate(
                { id: postId },
                { $set: { isDeleted: true } }
            );

            return {
                success: true,
                message: 'Post deleted successfully'
            };
        } catch (error) {
            console.log(error);
            throw new BadRequestException(error?.message || 'Failed to delete post');
        }
    }

    async voteOnPost(postId: string, votePostDTO: VotePostDTO, userId: string): Promise<VoteResponseDTO> {
        try {
            const post = await this.postModel.findOne({ id: postId, isDeleted: false });

            if (!post) {
                throw new NotFoundException('Post not found');
            }

            if (post.type !== 'question') {
                throw new BadRequestException('Voting is only allowed on question posts');
            }

            // Check if user has already voted
            const hasVoted = post.options.some(option => option.votes.includes(userId));
            if (hasVoted) {
                throw new BadRequestException('You have already voted on this post');
            }

            // Find the option to vote for
            const optionIndex = post.options.findIndex(option => option.id === votePostDTO.optionId);
            if (optionIndex === -1) {
                throw new BadRequestException('Invalid option ID');
            }

            // Add user's vote
            post.options[optionIndex].votes.push(userId);
            post.totalVotes = (post.totalVotes || 0) + 1;

            await post.save();

            const populatedPost = await this.populatePostData(post, userId);

            return {
                success: true,
                message: 'Vote recorded successfully',
                data: populatedPost
            };
        } catch (error) {
            console.log(error);
            throw new BadRequestException(error?.message || 'Failed to record vote');
        }
    }
}