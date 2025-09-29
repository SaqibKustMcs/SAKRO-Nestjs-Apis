import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Shop } from 'src/interface/shop/shop.interface';
import { User } from 'src/interface/user/user.interface';
import { CreateShopDTO } from './dto/create-shop.dto';
import { UpdateShopDTO } from './dto/update-shop.dto';

@Injectable()
export class ShopService {
  constructor(
    @InjectModel('Shop') private shopModel: Model<Shop>,
    @InjectModel('User') private userModel: Model<User>,
  ) {}

  async createShop(createShopDto: CreateShopDTO, userId: string) {
    try {
      // Check if user already has a shop
      const existingShop = await this.shopModel.findOne({ 
        user: userId,
        status: { $ne: 'closed' }
      });

      if (existingShop) {
        throw new Error('User already has an active shop');
      }

      // Create the shop
      const shopData = {
        ...createShopDto,
        ownerId: userId,
        user: userId,
        profileImage: createShopDto.profileImage || '',
        coverImage: createShopDto.coverImage || '',
        description: createShopDto.description || '',
      };

      const newShop = await new this.shopModel(shopData).save();

      // Update user role to 'seller'
      const updatedUser = await this.userModel.findByIdAndUpdate(
        userId,
        { userRole: 'seller' },
        { new: true }
      );

      if (!updatedUser) {
        throw new Error('User not found');
      }

      // Populate the shop with user details
      const populatedShop = await this.shopModel
        .findById(newShop.id)
        .populate('user', 'id fullName email phoneNumber userRole userStatus profilePic createdAt updatedAt')
        .populate('villageId', 'id name')
        .populate('categoryId', 'id name')
        .exec();

      // Remove password from user object
      if (populatedShop && populatedShop.user) {
        const userObj = populatedShop.user as any;
        delete userObj.password;
      }

      return {
        shop: populatedShop,
        message: 'Shop created successfully and user role updated to seller'
      };
    } catch (err) {
      console.log(err);
      throw new BadRequestException(err?.message || 'Failed to create shop');
    }
  }

  async getShopById(shopId: string) {
    try {
      const shop = await this.shopModel
        .findById(shopId)
        .populate('user', 'id fullName email phoneNumber userRole userStatus profilePic createdAt updatedAt')
        .populate('villageId', 'id name')
        .populate('categoryId', 'id name')
        .exec();

      if (!shop) {
        throw new Error('Shop not found');
      }

      // Remove password from user object
      if (shop && shop.user) {
        const userObj = shop.user as any;
        delete userObj.password;
      }

      return shop;
    } catch (err) {
      console.log(err);
      throw new BadRequestException(err?.message || 'Failed to get shop');
    }
  }

  async getAllShops() {
    try {
      const shops = await this.shopModel
        .find({ status: 'active' })
        .populate('user', 'id fullName email phoneNumber userRole userStatus profilePic createdAt updatedAt')
        .populate('villageId', 'id name')
        .populate('categoryId', 'id name')
        .sort({ createdAt: -1 })
        .exec();

      // Remove password from user objects
      shops.forEach(shop => {
        if (shop && shop.user) {
          const userObj = shop.user as any;
          delete userObj.password;
        }
      });

      return shops;
    } catch (err) {
      console.log(err);
      throw new BadRequestException(err?.message || 'Failed to get shops');
    }
  }

  async updateShop(shopId: string, updateShopDto: UpdateShopDTO, userId: string) {
    try {
      // Check if shop exists and user is the owner
      const shop = await this.shopModel.findOne({ 
        _id: shopId, 
        user: userId,
        status: { $ne: 'closed' }
      });

      if (!shop) {
        throw new Error('Shop not found or you do not have permission to update this shop');
      }

      // Update the shop
      const updatedShop = await this.shopModel.findByIdAndUpdate(
        shopId,
        updateShopDto,
        { new: true }
      ).populate('user', 'id fullName email phoneNumber userRole userStatus profilePic createdAt updatedAt')
       .populate('villageId', 'id name')
       .populate('categoryId', 'id name');

      // Remove password from user object
      if (updatedShop && updatedShop.user) {
        const userObj = updatedShop.user as any;
        delete userObj.password;
      }

      return {
        shop: updatedShop,
        message: 'Shop updated successfully'
      };
    } catch (err) {
      console.log(err);
      throw new BadRequestException(err?.message || 'Failed to update shop');
    }
  }

  async deleteShop(shopId: string, userId: string) {
    try {
      // Check if shop exists and user is the owner
      const shop = await this.shopModel.findOne({ 
        _id: shopId, 
        user: userId 
      });

      if (!shop) {
        throw new Error('Shop not found or you do not have permission to delete this shop');
      }

      // Soft delete by setting status to 'closed'
      const deletedShop = await this.shopModel.findByIdAndUpdate(
        shopId,
        { status: 'closed' },
        { new: true }
      ).populate('user', 'id fullName email phoneNumber userRole userStatus profilePic createdAt updatedAt')
       .populate('villageId', 'id name')
       .populate('categoryId', 'id name');

      // Remove password from user object
      if (deletedShop && deletedShop.user) {
        const userObj = deletedShop.user as any;
        delete userObj.password;
      }

      // Optionally, revert user role to 'normal' if they have no other active shops
      const activeShops = await this.shopModel.countDocuments({ 
        user: userId, 
        status: { $ne: 'closed' } 
      });

      if (activeShops === 0) {
        await this.userModel.findByIdAndUpdate(
          userId,
          { userRole: 'normal' }
        );
      }

      return {
        message: 'Shop deleted successfully',
        shop: deletedShop
      };
    } catch (err) {
      console.log(err);
      throw new BadRequestException(err?.message || 'Failed to delete shop');
    }
  }

  async getShopsByOwner(userId: string) {
    try {
      const shops = await this.shopModel
        .find({ user: userId })
        .populate('user', 'id fullName email phoneNumber userRole userStatus profilePic createdAt updatedAt')
        .populate('villageId', 'id name')
        .populate('categoryId', 'id name')
        .sort({ createdAt: -1 })
        .exec();

      // Remove password from user objects
      shops.forEach(shop => {
        if (shop && shop.user) {
          const userObj = shop.user as any;
          delete userObj.password;
        }
      });

      return shops;
    } catch (err) {
      console.log(err);
      throw new BadRequestException(err?.message || 'Failed to get user shops');
    }
  }
}
