import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDTO, DeletePostIdDTO, GetAllPostsDTO, GetPostIdDTO, UpdatePostDTO } from './dto/post.dto';
import { ApiBearerAuth, ApiProperty, ApiTags } from '@nestjs/swagger';
import { User } from 'src/decorators/user.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
@ApiTags('Post')
@Controller('post')
export class PostController {
    constructor(private readonly postService: PostService) { }

  
    @Post('createPost')
    createPost(@Body() createPostDTO: CreatePostDTO) {
      return this.postService.createPost(createPostDTO);
    }


    @Get('getAllPosts')
    getAllPosts(@Query() getAllPostsDTO: GetAllPostsDTO, @User() user) {
      return this.postService.getAllPosts(getAllPostsDTO );
    }
    @Get('getPostById')
    getPostById(@Query() getPostIdDTO: GetPostIdDTO, @User() user) {
      return this.postService.getPostById(getPostIdDTO );
    }
    @Post('deletePostById')
    deletePostById(@Query() getPostIdDTO: DeletePostIdDTO, @User() user) {
      return this.postService.deletePostById(getPostIdDTO );
    }
    @Post('updatePostById')
    updatePostById(@Body() updatePostDTO: UpdatePostDTO, @User() user) {
      return this.postService.updatePostById(updatePostDTO.id,updatePostDTO );
    }
    

}
