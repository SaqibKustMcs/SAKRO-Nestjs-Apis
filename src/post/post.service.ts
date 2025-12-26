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
import { Comments } from 'src/schema/comments/comments.schema';
import { PostReport } from 'src/schema/post-report/post-report.schema';
import { PostReport as PostReportInterface } from 'src/interface/post-report/post-report.interface';
import { generateStringId } from 'src/utils/utils';

@Injectable()
export class PostService {
    constructor(
        @InjectModel(Post.name) private postModel: Model<PostInterface>,
        @InjectModel('User') private userModel: Model<User>,
        @InjectModel('Village') private villageModel: Model<VillageInterface>,
        @InjectModel(Comments.name) private commentsModel: Model<Comments>,
        @InjectModel(PostReport.name) private postReportModel: Model<PostReportInterface>,
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
        const populatedPost: any = await this.postModel
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

        // Handle villageId - return it as string if populated object is available
        let villageIdResponse: any = populatedPost.villageId;
        if (villageIdResponse && typeof villageIdResponse === 'object') {
            // If populated and is an object, return the id field
            villageIdResponse = villageIdResponse.id || populatedPost.villageId;
        }

        // Calculate total comments count (including replies)
        const commentsCount = await this.calculateCommentsCount(populatedPost.id);

        // Check if post is saved by current user
        const isSaved = currentUserId ? await this.isPostSaved(populatedPost.id, currentUserId) : false;

        return {
            id: populatedPost.id,
            userId: populatedPost.userId as any,
            villageId: villageIdResponse,
            type: populatedPost.type,
            text: populatedPost.text,
            mediaUrl: populatedPost.mediaUrl,
            mediaType: populatedPost.mediaType,
            question: populatedPost.question,
            options: optionsWithPercentages,
            totalVotes: populatedPost.totalVotes,
            likedBy: populatedPost.likedBy || [],
            likesCount: populatedPost.likesCount || 0,
            commentsCount: commentsCount, // ✅ Total comments including replies
            sharesCount: populatedPost.sharesCount || 0,
            isLiked: currentUserId ? (populatedPost.likedBy || []).includes(currentUserId) : false,
            hasVoted: populatedPost.type === 'question' ? hasVoted : undefined,
            votedOptionId: populatedPost.type === 'question' ? votedOptionId : undefined,
            isSaved: isSaved,
            isDeleted: populatedPost.isDeleted,
            createdAt: populatedPost.createdAt,
            updatedAt: populatedPost.updatedAt
        };
    }

    /**
     * Check if a post is saved by a user
     */
    private async isPostSaved(postId: string, userId: string): Promise<boolean> {
        try {
            const user = await this.userModel.findOne({ _id: userId, isDeleted: false });
            if (!user || !user.savedPosts) {
                return false;
            }
            return user.savedPosts.includes(postId);
        } catch (error) {
            console.log('❌ Error checking if post is saved:', error);
            return false;
        }
    }

    /**
     * Calculate total comments count including replies
     */
    private async calculateCommentsCount(postId: string): Promise<number> {
        try {
            // Get all comments for this post (both parent and replies)
            const allComments = await this.commentsModel.find({ 
                postId: postId, 
                isDeleted: false 
            }).exec();

            const count = allComments.length;
            console.log(`📊 Post ${postId} - Total comments count: ${count}`);
            return count;
        } catch (error) {
            console.log('❌ Error calculating comments count:', error);
            return 0;
        }
    }

    async createPost(createPostDTO: CreatePostDTO, userId: string): Promise<{ success: boolean; message: string; data: PostResponseDTO }> {
        try {
            // Validate villageId first
            if (!createPostDTO.villageId || createPostDTO.villageId.trim().length === 0) {
                throw new BadRequestException('Village ID is required for creating posts');
            }

            // Validate post type specific requirements
            this.validatePostData(createPostDTO);

            // Build post data, only including fields that are relevant for each post type
            const postData: any = {
                villageId: createPostDTO.villageId.trim(),
                type: createPostDTO.type,
                userId,
                options: createPostDTO.options?.map(option => ({
                    id: generateStringId(),
                    text: option.text,
                    votes: []
                })) || []
            };

            // Include text for all post types (required for text posts, optional for others)
            if (createPostDTO.text !== undefined && createPostDTO.text !== null) {
                postData.text = createPostDTO.text;
            }

            // Only include mediaType for image/video posts when mediaType is actually provided
            if ((createPostDTO.type === 'image' || createPostDTO.type === 'video') && 
                createPostDTO.mediaType && 
                createPostDTO.mediaType !== null && 
                createPostDTO.mediaType !== undefined) {
                postData.mediaType = createPostDTO.mediaType;
            }

            // Include mediaUrl for image/video posts when provided
            if (createPostDTO.mediaUrl !== undefined && createPostDTO.mediaUrl !== null) {
                postData.mediaUrl = createPostDTO.mediaUrl;
            }

            // Include question for question posts
            if (createPostDTO.question !== undefined && createPostDTO.question !== null) {
                postData.question = createPostDTO.question;
            }

            console.log('📝 Creating post with data:', JSON.stringify(postData, null, 2));

            const postDocument = await new this.postModel(postData).save();
            const populatedPost = await this.populatePostData(postDocument, userId);

            console.log('✅ Post created successfully:', postDocument.id);

            return {
                success: true,
                message: 'Post created successfully',
                data: populatedPost
            };
        } catch (error) {
            console.log('❌ Error creating post:', error);
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

            // Get posts with pagination - try to populate villageId but handle gracefully if it fails
            const posts: any[] = await this.postModel
                .find(filter)
                .populate('userId', 'id fullName email profilePic')
                .populate('villageId', 'id name')
                .sort(sort)
                .skip(offset)
                .limit(limit)
                .lean();

            console.log(`📊 Processing ${posts.length} posts with comments count calculation...`);

            // Process posts to include vote percentages and user voting status
            const processedPosts: PostResponseDTO[] = await Promise.all(
                posts.map(async (post: any) => {
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
                        
                        // Debug logging for poll posts
                        if (hasVoted) {
                            console.log(`🗳️ User ${currentUserId} has voted on poll post ${post.id} - option: ${votedOptionId}`);
                        }
                    }

                    // Handle villageId properly - get the raw value if population failed
                    let villageIdResponse: any = null;
                    
                    // First try to get the populated value
                    if (post.villageId && typeof post.villageId === 'object') {
                        villageIdResponse = (post.villageId as any).id || (post.villageId as any)._id;
                    } else if (post.villageId && typeof post.villageId === 'string') {
                        // If it's a string, it's the raw value (population failed)
                        villageIdResponse = post.villageId;
                    } else {
                        // Try to get the raw value from the database
                        try {
                            const rawPost = await this.postModel.findById(post._id).select('villageId').lean();
                            villageIdResponse = rawPost?.villageId || null;
                        } catch (error) {
                            console.log('Error getting raw villageId:', error);
                            villageIdResponse = null;
                        }
                    }

                    // Calculate comments count for this post
                    const commentsCount = await this.calculateCommentsCount(post.id);

                    return {
                        id: post.id,
                        userId: post.userId as any,
                        villageId: villageIdResponse,
                        type: post.type,
                        text: post.text || '', // Use text field from schema
                        mediaUrl: post.mediaUrl || '',
                        mediaType: post.mediaType || null,
                        question: post.question || '',
                        options: optionsWithPercentages,
                        totalVotes: post.totalVotes || 0,
                        likedBy: post.likedBy || [],
                        likesCount: post.likesCount || 0,
                        commentsCount: commentsCount, // ✅ Total comments including replies
                        sharesCount: post.sharesCount || 0, // ✅ Shares count
                        isLiked: currentUserId ? (post.likedBy || []).includes(currentUserId) : false,
                        hasVoted: post.type === 'question' ? hasVoted : undefined,
                        votedOptionId: post.type === 'question' ? votedOptionId : undefined,
                        isDeleted: post.isDeleted || false,
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

            // Remove id from updatePostDTO if present (we use postId from URL parameter)
            const { id, ...updateFields } = updatePostDTO;
            
            const updatedPost = await this.postModel
                .findOneAndUpdate(
                    { id: postId },
                    { $set: updateFields },
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

    async toggleLike(postId: string, userId: string): Promise<{ success: boolean; message: string; data: PostResponseDTO }> {
        try {
            const post = await this.postModel.findOne({ id: postId, isDeleted: false });

            if (!post) {
                throw new NotFoundException('Post not found');
            }

            const isLiked = post.likedBy.includes(userId);

            if (isLiked) {
                // Unlike the post
                post.likedBy = post.likedBy.filter(id => id !== userId);
                post.likesCount = Math.max(0, post.likesCount - 1);
            } else {
                // Like the post
                post.likedBy.push(userId);
                post.likesCount = post.likesCount + 1;
            }

            await post.save();

            const populatedPost = await this.populatePostData(post, userId);

            return {
                success: true,
                message: isLiked ? 'Post unliked successfully' : 'Post liked successfully',
                data: populatedPost
            };
        } catch (error) {
            console.log(error);
            throw new BadRequestException(error?.message || 'Failed to toggle like');
        }
    }

    async sharePost(postId: string, userId: string): Promise<{ success: boolean; message: string; data: PostResponseDTO }> {
        try {
            console.log(`🔗 User ${userId} sharing post ${postId}`);
            
            const post: any = await this.postModel.findOne({ id: postId, isDeleted: false });

            if (!post) {
                throw new NotFoundException('Post not found');
            }

            // Increment share count
            post.sharesCount = (post.sharesCount || 0) + 1;

            await post.save();

            console.log(`✅ Post ${postId} share count: ${post.sharesCount}`);

            const populatedPost = await this.populatePostData(post, userId);

            return {
                success: true,
                message: 'Post shared successfully',
                data: populatedPost
            };
        } catch (error) {
            console.log('❌ Error sharing post:', error);
            throw new BadRequestException(error?.message || 'Failed to share post');
        }
    }

    async toggleSavePost(postId: string, userId: string): Promise<{ success: boolean; message: string; data: PostResponseDTO }> {
        try {
            console.log(`💾 User ${userId} toggling save for post ${postId}`);
            
            const post = await this.postModel.findOne({ id: postId, isDeleted: false });

            if (!post) {
                throw new NotFoundException('Post not found');
            }

            const user = await this.userModel.findOne({ _id: userId, isDeleted: false });

            if (!user) {
                throw new NotFoundException('User not found');
            }

            // Check if post is already saved
            const isSaved = user.savedPosts && user.savedPosts.includes(postId);

            if (isSaved) {
                // Unsave the post
                user.savedPosts = user.savedPosts.filter((id: string) => id !== postId);
                await user.save();
                console.log(`✅ Post ${postId} unsaved by user ${userId}`);
            } else {
                // Save the post
                if (!user.savedPosts) {
                    user.savedPosts = [];
                }
                user.savedPosts.push(postId);
                await user.save();
                console.log(`✅ Post ${postId} saved by user ${userId}`);
            }

            const populatedPost = await this.populatePostData(post, userId);

            return {
                success: true,
                message: isSaved ? 'Post unsaved successfully' : 'Post saved successfully',
                data: populatedPost
            };
        } catch (error) {
            console.log('❌ Error toggling save post:', error);
            throw new BadRequestException(error?.message || 'Failed to save/unsave post');
        }
    }

    async getSavedPosts(userId: string, query: PostQueryDTO): Promise<{ success: boolean; message: string; data: { posts: PostResponseDTO[]; total: number; offset: number; limit: number } }> {
        try {
            console.log(`📚 Fetching saved posts for user ${userId}`);
            console.log(`📋 Query params:`, JSON.stringify(query));

            if (!userId) {
                throw new BadRequestException('User ID is required');
            }

            const user = await this.userModel.findOne({ _id: userId, isDeleted: false });

            if (!user) {
                throw new NotFoundException('User not found');
            }

            const savedPostIds = user.savedPosts || [];
            console.log(`💾 User has ${savedPostIds.length} saved posts`);

            if (savedPostIds.length === 0) {
                return {
                    success: true,
                    message: 'No saved posts found',
                    data: {
                        posts: [],
                        total: 0,
                        offset: query.offset || 0,
                        limit: query.limit || 10
                    }
                };
            }

            // Ensure offset and limit are numbers with proper defaults
            const offset = query.offset !== undefined && query.offset !== null ? Number(query.offset) : 0;
            const limit = query.limit !== undefined && query.limit !== null ? Number(query.limit) : 10;
            const sortBy = query.sortBy || 'createdAt';
            const sortOrder = query.sortOrder || 'desc';
            
            // Validate offset and limit are valid numbers
            if (isNaN(offset) || offset < 0) {
                throw new BadRequestException('Invalid offset value');
            }
            if (isNaN(limit) || limit < 1 || limit > 100) {
                throw new BadRequestException('Invalid limit value. Must be between 1 and 100');
            }

            console.log(`📊 Pagination: offset=${offset}, limit=${limit}, sortBy=${sortBy}, sortOrder=${sortOrder}`);

            // Build filter for saved posts
            const filter: any = { 
                id: { $in: savedPostIds },
                isDeleted: false 
            };

            // Build sort object
            const sort: any = {};
            sort[sortBy] = sortOrder === 'desc' ? -1 : 1;

            // Get total count
            const total = await this.postModel.countDocuments(filter);

            // Get posts with pagination
            const posts: any[] = await this.postModel
                .find(filter)
                .populate('userId', 'id fullName email profilePic')
                .populate('villageId', 'id name')
                .sort(sort)
                .skip(offset)
                .limit(limit)
                .lean();

            console.log(`📊 Processing ${posts.length} saved posts...`);

            // Process posts to include vote percentages and user voting status
            const processedPosts: PostResponseDTO[] = await Promise.all(
                posts.map(async (post: any) => {
                    let optionsWithPercentages: PostOptionResponseDTO[] = [];
                    let hasVoted = false;
                    let votedOptionId: string | undefined;

                    if (post.type === 'question' && post.options) {
                        const totalVotes = post.totalVotes || 0;
                        optionsWithPercentages = post.options.map(option => {
                            const isVotedByCurrentUser = option.votes.includes(userId);
                            
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

                    // Handle villageId
                    let villageIdResponse: any = null;
                    if (post.villageId && typeof post.villageId === 'object') {
                        villageIdResponse = (post.villageId as any).id || (post.villageId as any)._id;
                    } else if (post.villageId && typeof post.villageId === 'string') {
                        villageIdResponse = post.villageId;
                    }

                    // Calculate comments count
                    const commentsCount = await this.calculateCommentsCount(post.id);

                    return {
                        id: post.id,
                        userId: post.userId as any,
                        villageId: villageIdResponse,
                        type: post.type,
                        text: post.text || '',
                        mediaUrl: post.mediaUrl || '',
                        mediaType: post.mediaType || null,
                        question: post.question || '',
                        options: optionsWithPercentages,
                        totalVotes: post.totalVotes || 0,
                        likedBy: post.likedBy || [],
                        likesCount: post.likesCount || 0,
                        commentsCount: commentsCount,
                        sharesCount: post.sharesCount || 0,
                        isLiked: (post.likedBy || []).includes(userId),
                        hasVoted: post.type === 'question' ? hasVoted : undefined,
                        votedOptionId: post.type === 'question' ? votedOptionId : undefined,
                        isSaved: true, // All posts in saved posts list are saved
                        isDeleted: post.isDeleted || false,
                        createdAt: post.createdAt,
                        updatedAt: post.updatedAt
                    };
                })
            );

            return {
                success: true,
                message: 'Saved posts retrieved successfully',
                data: {
                    posts: processedPosts,
                    total,
                    offset,
                    limit
                }
            };
        } catch (error) {
            console.log('❌ Error fetching saved posts:', error);
            console.log('❌ Error stack:', error?.stack);
            if (error instanceof NotFoundException || error instanceof BadRequestException) {
                throw error;
            }
            throw new BadRequestException(error?.message || 'Failed to retrieve saved posts');
        }
    }

    async reportPost(postId: string, userId: string, reason: string, description?: string): Promise<{ success: boolean; message: string; data: any }> {
        try {
            console.log(`🚨 User ${userId} reporting post ${postId} for reason: ${reason}`);

            // Check if post exists
            const post = await this.postModel.findOne({ id: postId, isDeleted: false });
            if (!post) {
                throw new NotFoundException('Post not found');
            }

            // Check if user already reported this post
            const existingReport = await this.postReportModel.findOne({
                postId: postId,
                reportedBy: userId,
                isDeleted: false
            });

            if (existingReport) {
                throw new BadRequestException('You have already reported this post');
            }

            // Check if user is trying to report their own post
            if (post.userId === userId) {
                throw new BadRequestException('You cannot report your own post');
            }

            // Create the report
            const report = new this.postReportModel({
                postId: postId,
                reportedBy: userId,
                reason: reason,
                description: description || '',
                isResolved: false,
                isDeleted: false
            });

            await report.save();

            console.log(`✅ Post ${postId} reported successfully by user ${userId}`);

            return {
                success: true,
                message: 'Post reported successfully. Our team will review it shortly.',
                data: {
                    id: report.id,
                    postId: report.postId,
                    reportedBy: report.reportedBy,
                    reason: report.reason,
                    description: report.description,
                    isResolved: report.isResolved,
                    createdAt: report.createdAt
                }
            };
        } catch (error) {
            console.log('❌ Error reporting post:', error);
            if (error instanceof NotFoundException || error instanceof BadRequestException) {
                throw error;
            }
            throw new BadRequestException(error?.message || 'Failed to report post');
        }
    }
}