import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiProperty, ApiTags } from '@nestjs/swagger';
import { User } from 'src/decorators/user.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CommentsService } from './comments.service';
import { CreateCommentsDTO, DeleteCommentIdDTO, GetAllCommmentDTO, GetCommentsIdDTO, UpdateCommentsDTO } from './dto/comments.dto';
@ApiTags('Comments')
@Controller('comment')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)

export class CommentsController {
    constructor(private readonly commentService: CommentsService) { }

    @Post('createComment')
    createComment(@Body() createCommentDTO: CreateCommentsDTO) {
      return this.commentService.createComments(createCommentDTO);
    }
  
    @Get('getAllComments')
    getAllComments(@Query() getAllCommentsDTO: GetAllCommmentDTO, @User() user) {
      return this.commentService.getAllComments(getAllCommentsDTO );
    }
    @Get('getCommentById')
    getCommentById(@Query() getCommentIdDTO: GetCommentsIdDTO, @User() user) {
      return this.commentService.getCommentsById(getCommentIdDTO );
    }
    @Post('deleteCommentById')
    deleteCommentById(@Query() getCommentIdDTO: DeleteCommentIdDTO, @User() user) {
      return this.commentService.deleteCommentsById(getCommentIdDTO );
    }
    @Post('updateCommentById')
    updateCommentById(@Body() updateCommentDTO: UpdateCommentsDTO, @User() user) {
      return this.commentService.updateCommentsById(updateCommentDTO.id,updateCommentDTO );
    }
    

}
