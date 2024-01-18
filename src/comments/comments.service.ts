import { BadRequestException, Injectable, NotFoundException,  } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
// import { Post } from 'src/schema/post/post.schema';
import { ApiProperty } from '@nestjs/swagger/dist/decorators';
import { query } from 'express';
import { generateStringId } from 'src/utils/utils';
// import { User } from 'src/decorators/user.decorator';
import { Post } from 'src/schema/post/post.schema';
import { UserData } from '@app/chat/schemas/user.schema';
import { async } from 'rxjs';
import { CreateCommentsDTO, DeleteCommentIdDTO, GetAllCommmentDTO, GetCommentsIdDTO, UpdateCommentsDTO } from './dto/comments.dto';
import { Order } from 'src/schema/order/order.schema';
import { Comments } from 'src/schema/comments/comments.schema';



// var cron = require('node-cron');

@Injectable()
export class CommentsService {

    // private server: Server;

    constructor(
        @InjectModel(Comments.name) private commentsModel: Model<Comments>,
        // @InjectModel(UserData.name) private userModel: Model<UserData>,
       

    ){}


 

    async createComments(createCommentsDTO: CreateCommentsDTO): Promise<Comments> {
        try {

          


            let commmentDocument = await new this.commentsModel(createCommentsDTO).save();



         

              


          


            return commmentDocument;

        } catch (error) {
            console.log(error);
            throw new BadRequestException(error?.message);
        }
    }
    async getAllComments(getAllCommentsDto: GetAllCommmentDTO) {
        try {

            console.log(getAllCommentsDto.limit);
            console.log(getAllCommentsDto.offset);
            let pagination = [];
            let commentsData = await this.commentsModel
            .find({ isDeleted: false,postId:getAllCommentsDto.postId})
            .sort({ sort: 1 })
            .populate('postId')
            .skip(parseInt(getAllCommentsDto.offset))
            .limit(parseInt(getAllCommentsDto.limit))
            

            let commment = await Promise.all(commentsData.map(async (Item) => {
        
            return {
                  comment: Item,
                //  user: createdBy
                };
              }));
          
            return commment ;
        } catch (error) {
            console.log(error);
            throw new BadRequestException(error?.message);
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



   

}
