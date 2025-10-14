import { Body, Controller, Get, Param, Post, Put, Patch, Delete, Query, UseGuards } from '@nestjs/common';
import { PostService } from './post.service';
import { 
  CreatePostDTO, 
  UpdatePostDTO, 
  VotePostDTO, 
  PostQueryDTO, 
  PostResponseDTO, 
  VoteResponseDTO 
} from './dto/post.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags, ApiParam } from '@nestjs/swagger';
import { User } from 'src/decorators/user.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('Community Posts')
@Controller('posts')
export class PostController {
    constructor(private readonly postService: PostService) { }

    @ApiOperation({ summary: 'Create a new community post' })
    @ApiResponse({ 
        status: 201, 
        description: 'Post created successfully', 
        type: PostResponseDTO 
    })
    @ApiResponse({ status: 400, description: 'Bad request - Invalid input' })
    @ApiResponse({ status: 401, description: 'Unauthorized - Invalid token' })
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Post()
    createPost(@Body() createPostDTO: CreatePostDTO, @User() user) {
        return this.postService.createPost(createPostDTO, user.id);
    }

    @ApiOperation({ summary: 'Get all community posts with filters and pagination' })
    @ApiResponse({ 
        status: 200, 
        description: 'Posts retrieved successfully',
        schema: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' },
                data: {
                    type: 'object',
                    properties: {
                        posts: { type: 'array', items: { $ref: '#/components/schemas/PostResponseDTO' } },
                        total: { type: 'number' },
                        offset: { type: 'number' },
                        limit: { type: 'number' }
                    }
                }
            }
        }
    })
    @ApiResponse({ status: 400, description: 'Bad request - Invalid query parameters' })
    @Get()
    getAllPosts(@Query() query: PostQueryDTO, @User() user?) {
        // Pass user ID if authenticated, otherwise undefined for public access
        return this.postService.getAllPosts(query, user?.id);
    }

    @ApiOperation({ summary: 'Get a specific post by ID' })
    @ApiResponse({ 
        status: 200, 
        description: 'Post retrieved successfully', 
        type: PostResponseDTO 
    })
    @ApiResponse({ status: 404, description: 'Post not found' })
    @ApiParam({ name: 'id', description: 'Post ID' })
    @Get(':id')
    getPostById(@Param('id') postId: string, @User() user?) {
        // Pass user ID if authenticated, otherwise undefined for public access
        return this.postService.getPostById(postId, user?.id);
    }

    @ApiOperation({ summary: 'Update a post (only owner or admin)' })
    @ApiResponse({ 
        status: 200, 
        description: 'Post updated successfully', 
        type: PostResponseDTO 
    })
    @ApiResponse({ status: 403, description: 'Forbidden - Not the post owner' })
    @ApiResponse({ status: 404, description: 'Post not found' })
    @ApiParam({ name: 'id', description: 'Post ID' })
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Put(':id')
    updatePost(@Param('id') postId: string, @Body() updatePostDTO: UpdatePostDTO, @User() user) {
        return this.postService.updatePost(postId, updatePostDTO, user.id);
    }

    @ApiOperation({ summary: 'Delete a post (only owner or admin)' })
    @ApiResponse({ 
        status: 200, 
        description: 'Post deleted successfully',
        schema: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' }
            }
        }
    })
    @ApiResponse({ status: 403, description: 'Forbidden - Not the post owner' })
    @ApiResponse({ status: 404, description: 'Post not found' })
    @ApiParam({ name: 'id', description: 'Post ID' })
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    deletePost(@Param('id') postId: string, @User() user) {
        return this.postService.deletePost(postId, user.id);
    }

    @ApiOperation({ summary: 'Vote on a question post (one vote per user)' })
    @ApiResponse({ 
        status: 200, 
        description: 'Vote recorded successfully', 
        type: VoteResponseDTO 
    })
    @ApiResponse({ status: 400, description: 'Bad request - Already voted or invalid option' })
    @ApiResponse({ status: 404, description: 'Post not found' })
    @ApiParam({ name: 'id', description: 'Post ID' })
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Post(':id/vote')
    voteOnPost(@Param('id') postId: string, @Body() votePostDTO: VotePostDTO, @User() user) {
        return this.postService.voteOnPost(postId, votePostDTO, user.id);
    }
}
