import { BadRequestException, Injectable, NotFoundException,  } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreatePostDTO, DeletePostIdDTO, GetAllPostsDTO, GetPostIdDTO, UpdatePostDTO,  } from './dto/post.dto';
// import { Post } from 'src/schema/post/post.schema';
import { ApiProperty } from '@nestjs/swagger/dist/decorators';
import { query } from 'express';
import { generateStringId } from 'src/utils/utils';
// import { User } from 'src/decorators/user.decorator';
import { Post } from 'src/schema/post/post.schema';
import { UserData } from '@app/chat/schemas/user.schema';
import { async } from 'rxjs';



// var cron = require('node-cron');

@Injectable()
export class PostService {

    // private server: Server;

    constructor(
        @InjectModel(Post.name) private postModel: Model<Post>,
        @InjectModel(UserData.name) private userModel: Model<UserData>,
       

    ){}


 

    async createPost(createPostDTO: CreatePostDTO): Promise<Post> {
        try {

          


            let postDocument = await new this.postModel(createPostDTO).save();



         

              


          


            return postDocument;

        } catch (error) {
            console.log(error);
            throw new BadRequestException(error?.message);
        }
    }
    async getAllPosts(getAllPostsDto: GetAllPostsDTO) {
        try {

            console.log(getAllPostsDto.limit);
            console.log(getAllPostsDto.offset);
            let pagination = [];
            let postData = await this.postModel
            .find({ isDeleted: false,})
            .sort({ sort: 1 })
            .populate('name')
            .skip(parseInt(getAllPostsDto.offset))
            .limit(parseInt(getAllPostsDto.limit))
            

            let posts = await Promise.all(postData.map(async (postItem) => {
                let user = postItem.userId;
                console.log('user id=====>',user)
          
                let createdBy = await this.userModel.findOne({userId:user}) .select('name isOnline userId') // Specify the fields you want to include
                .exec();;
                console.log('user id=====>console',createdBy)



            return {
                  post: postItem,
                 user: createdBy
                };
              }));
          
            return posts ;
        } catch (error) {
            console.log(error);
            throw new BadRequestException(error?.message);
        }
    }
    async getPostById(getPostIdDTO: GetPostIdDTO): Promise<Post | null>  {
        try {

            let postData = await this.postModel
            .find({ id: getPostIdDTO.id,}).exec();
           
    
            let postReturn = JSON.parse(JSON.stringify(postData[0]));

   
        
            return postReturn;
        } catch (error) {
            console.log(error);
            throw new BadRequestException(error?.message);
        }
    }
    async deletePostById(deletePostIdDTO: DeletePostIdDTO){
        try {

            let postData = await this.postModel
            .deleteOne({ id: deletePostIdDTO.id,}).exec();
    
        } catch (error) {
            console.log(error);
            throw new BadRequestException(error?.message);
        }
    }
    async updatePostById(postId: string,updatePostByDto: UpdatePostDTO){


        try {
            console.log(postId)
            console.log("updated post ",updatePostByDto)

            const updatedPost = await this.postModel
            .updateOne({ id: postId }, { $set: updatePostByDto })
          ;
          console.log("updated post nnn ",updatedPost)

            


              return updatedPost;
    
        } catch (error) {
            console.log(error);
            throw new BadRequestException(error?.message);
        }
    }



   

}
