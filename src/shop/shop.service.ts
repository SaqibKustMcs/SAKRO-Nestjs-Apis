import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Shop } from 'src/interface/shop/shop.interface';
import { User } from 'src/interface/user/user.interface';
import { AdminUpdateShopDto } from './dto/admin-update-shop.dto';
import { CreateShopDTO } from './dto/create-shop.dto';
import { UpdateShopDTO } from './dto/update-shop.dto';

@Injectable()
export class ShopService {
  constructor(
    @InjectModel('Shop') private shopModel: Model<Shop>,
    @InjectModel('User') private userModel: Model<User>,
    @InjectModel('ShopCategory') private readonly shopCategoryModel: Model<Record<string, unknown>>,
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

  async getShopById(shopId: string, userId?: string) {
    try {
      const shop = await this.shopModel
        .findById(shopId)
        .populate('user', 'id fullName email phoneNumber userRole userStatus profilePic createdAt updatedAt')
        .populate('villageId', 'id name')
        .populate('categoryId', 'id name')
        .populate('followers', 'id fullName email profilePic')
        .exec();

      if (!shop) {
        throw new Error('Shop not found');
      }

      // Remove password from user object
      if (shop && shop.user) {
        const userObj = shop.user as any;
        delete userObj.password;
      }

      // Add isFollowing flag if userId is provided
      if (userId) {
        const shopObj: any = shop.toObject ? shop.toObject() : (shop as any);
        shopObj.isFollowing = shop.followers && shop.followers.some((follower: any) => {
          const followerId = typeof follower === 'string' ? follower : (follower._id || follower.id);
          return followerId === userId;
        });
        return shopObj;
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

  /** Admin: update any shop by id (no owner check). */
  async updateShopForAdmin(shopId: string, dto: AdminUpdateShopDto) {
    try {
      const existing = await this.shopModel.findOne({ _id: shopId }).exec();
      if (!existing) {
        throw new NotFoundException('Shop not found');
      }

      const patch: Record<string, unknown> = {};
      for (const [key, value] of Object.entries(dto)) {
        if (value !== undefined) {
          patch[key] = value;
        }
      }

      const updatedShop = await this.shopModel
        .findByIdAndUpdate(shopId, patch, { new: true })
        .populate('user', 'id fullName email phoneNumber userRole userStatus profilePic createdAt updatedAt')
        .populate('villageId', 'id name')
        .populate('categoryId', 'id name')
        .exec();

      if (updatedShop && updatedShop.user) {
        const userObj = updatedShop.user as { password?: string };
        delete userObj.password;
      }

      return {
        shop: updatedShop,
        message: 'Shop updated successfully',
      };
    } catch (err) {
      if (err instanceof NotFoundException) {
        throw err;
      }
      console.log(err);
      throw new BadRequestException(err?.message || 'Failed to update shop');
    }
  }

  async listActiveShopCategories(): Promise<{ id: string; name: string }[]> {
    const rows = await this.shopCategoryModel
      .find({ isActive: true })
      .sort({ name: 1 })
      .lean()
      .exec();
    return rows.map((r) => ({
      id: String(r._id ?? ''),
      name: String(r.name ?? ''),
    }));
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
      console.log('🔍 Getting shops for user:', userId);
      
      const shops = await this.shopModel
        .find({ user: userId })
        .populate('user', 'id fullName email phoneNumber userRole userStatus profilePic createdAt updatedAt')
        .populate('villageId', 'id name')
        .populate('categoryId', 'id name')
        .sort({ createdAt: -1 })
        .exec();

      console.log('✅ Found shops:', shops.length);

      // If no shops found, return empty array instead of throwing error
      if (!shops || shops.length === 0) {
        console.log('ℹ️ No shops found for user, returning empty array');
        return [];
      }

      // Remove password from user objects
      shops.forEach(shop => {
        if (shop && shop.user) {
          const userObj = shop.user as any;
          delete userObj.password;
        }
      });

      return shops;
    } catch (err) {
      console.log('❌ Error getting user shops:', err);
      // Return empty array instead of throwing error
      // This prevents 400 error when user has no shops
      return [];
    }
  }

  async toggleFollowShop(shopId: string, userId: string) {
    try {
      const shop = await this.shopModel.findById(shopId);
      if (!shop) {
        throw new Error('Shop not found');
      }

      // Check if user is already following
      const isFollowing = shop.followers && shop.followers.includes(userId);
      
      let updatedShop;
      if (isFollowing) {
        // Unfollow: remove user from followers array
        updatedShop = await this.shopModel.findByIdAndUpdate(
          shopId,
          { $pull: { followers: userId } },
          { new: true }
        ).populate('user', 'id fullName email phoneNumber userRole userStatus profilePic createdAt updatedAt')
         .populate('villageId', 'id name')
         .populate('categoryId', 'id name')
         .populate('followers', 'id fullName email profilePic');
      } else {
        // Follow: add user to followers array
        updatedShop = await this.shopModel.findByIdAndUpdate(
          shopId,
          { $addToSet: { followers: userId } },
          { new: true }
        ).populate('user', 'id fullName email phoneNumber userRole userStatus profilePic createdAt updatedAt')
         .populate('villageId', 'id name')
         .populate('categoryId', 'id name')
         .populate('followers', 'id fullName email profilePic');
      }

      // Remove password from user object
      if (updatedShop && updatedShop.user) {
        const userObj = updatedShop.user as any;
        delete userObj.password;
      }

      return {
        shop: updatedShop,
        isFollowing: !isFollowing,
        message: isFollowing ? 'Shop unfollowed successfully' : 'Shop followed successfully'
      };
    } catch (err) {
      console.log(err);
      throw new BadRequestException(err?.message || 'Failed to toggle follow shop');
    }
  }

  async getShopFollowers(shopId: string, userId: string) {
    try {
      const shop = await this.shopModel.findById(shopId)
        .populate('followers', 'id fullName email profilePic')
        .exec();

      if (!shop) {
        throw new Error('Shop not found');
      }

      // Check if user is the shop owner
      const isOwner = shop.ownerId === userId || shop.user === userId;
      if (!isOwner) {
        throw new Error('Only shop owner can view followers');
      }

      return {
        followers: shop.followers || [],
        count: shop.followers ? shop.followers.length : 0
      };
    } catch (err) {
      console.log(err);
      throw new BadRequestException(err?.message || 'Failed to get shop followers');
    }
  }

  async getFollowedShops(userId: string) {
    try {
      const shops = await this.shopModel
        .find({ status: 'active', followers: userId })
        .populate('user', 'id fullName email phoneNumber userRole userStatus profilePic createdAt updatedAt')
        .populate('villageId', 'id name')
        .populate('categoryId', 'id name')
        .populate('followers', 'id fullName email profilePic')
        .sort({ createdAt: -1 })
        .exec();

      return shops.map(shop => {
        if (shop.user) {
          const userObj = shop.user as any;
          delete userObj.password;
        }
        const shopObj: any = shop.toObject ? shop.toObject() : (shop as any);
        shopObj.isFollowing = true;
        return shopObj;
      });
    } catch (err) {
      console.log(err);
      throw new BadRequestException(err?.message || 'Failed to get followed shops');
    }
  }
}
