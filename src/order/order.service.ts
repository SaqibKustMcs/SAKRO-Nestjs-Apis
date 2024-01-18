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
import { CreateOrderDTO, DeleteOrderIdDTO, GetAllOrdersDTO, GetOrderIdDTO, UpdateOrderDTO } from './dto/order.dto';
import { Order } from 'src/schema/order/order.schema';



// var cron = require('node-cron');

@Injectable()
export class OrderService {

    // private server: Server;

    constructor(
        @InjectModel(Order.name) private orderModel: Model<Order>,
        // @InjectModel(UserData.name) private userModel: Model<UserData>,
       

    ){}


 

    async createOrder(createOrderDTO: CreateOrderDTO): Promise<Order> {
        try {

          


            let orderDocument = await new this.orderModel(createOrderDTO).save();



         

              


          


            return orderDocument;

        } catch (error) {
            console.log(error);
            throw new BadRequestException(error?.message);
        }
    }
    async getAllOrders(getAllOrdersDto: GetAllOrdersDTO) {
        try {

            console.log(getAllOrdersDto.limit);
            console.log(getAllOrdersDto.offset);
            let pagination = [];
            let orderData = await this.orderModel
            .find({ isDeleted: false,})
            .sort({ sort: 1 })
            .populate('departureCountry')
            .skip(parseInt(getAllOrdersDto.offset))
            .limit(parseInt(getAllOrdersDto.limit))
            

            let orders = await Promise.all(orderData.map(async (orderItem) => {
                // let user = postItem.userId;
                // console.log('user id=====>',user)
          
                // let createdBy = await this.userModel.findOne({userId:user}) .select('name isOnline userId') // Specify the fields you want to include
                // .exec();;
                // console.log('user id=====>console',createdBy)



            return {
                  order: orderItem,
                //  user: createdBy
                };
              }));
          
            return orders ;
        } catch (error) {
            console.log(error);
            throw new BadRequestException(error?.message);
        }
    }
    async getOrderById(getOrderIdDTO: GetOrderIdDTO): Promise<Order | null>  {
        try {

            let orderData = await this.orderModel
            .find({ id: getOrderIdDTO.id,}).exec();
           
    
            let postReturn = JSON.parse(JSON.stringify(orderData[0]));

   
        
            return postReturn;
        } catch (error) {
            console.log(error);
            throw new BadRequestException(error?.message);
        }
    }
    async deleteOrderById(deleteOrderIdDTO: DeleteOrderIdDTO){
        try {

            let postData = await this.orderModel
            .deleteOne({ id: deleteOrderIdDTO.id,}).exec();
    
        } catch (error) {
            console.log(error);
            throw new BadRequestException(error?.message);
        }
    }
    async updateOrderById(postId: string,updateOrderByDto: UpdateOrderDTO){


        try {
            console.log(postId)
            console.log("updated post ",updateOrderByDto)

            const updatedOrder = await this.orderModel
            .updateOne({ id: postId }, { $set: updateOrderByDto })
          ;
          console.log("updated post nnn ",updatedOrder)

            


              return updatedOrder;
    
        } catch (error) {
            console.log(error);
            throw new BadRequestException(error?.message);
        }
    }



   

}
