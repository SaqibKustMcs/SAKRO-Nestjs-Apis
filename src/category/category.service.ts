import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from 'src/interface/category/category.interface';
import { CreateCategoryDTO } from './dto/create-category.dto';
import { UpdateCategoryDTO } from './dto/update-category.dto';
import { CategoryQueryDTO } from './dto/category-query.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel('Category') private categoryModel: Model<Category>,
  ) {}

  async createCategory(createCategoryDto: CreateCategoryDTO) {
    try {
      // Validate parent categories exist
      await this.validateParentCategories(createCategoryDto);

      const category = await new this.categoryModel(createCategoryDto).save();
      return await this.getCategoryById(category.id);
    } catch (err) {
      console.log(err);
      throw new BadRequestException(err?.message || 'Failed to create category');
    }
  }

  async getCategoryById(id: string) {
    try {
      const category = await this.categoryModel
        .findById(id)
        .populate('parentCategoryId', 'id name type')
        .populate('shopCategoryId', 'id name type')
        .populate('productCategoryId', 'id name type')
        .exec();

      if (!category) {
        throw new NotFoundException('Category not found');
      }

      return this.formatCategoryResponse(category);
    } catch (err) {
      console.log(err);
      if (err instanceof NotFoundException) {
        throw err;
      }
      throw new BadRequestException(err?.message || 'Failed to get category');
    }
  }

  async getAllCategories(query: CategoryQueryDTO) {
    try {
      const filter: any = {};

      // Apply filters
      if (query.type) {
        filter.type = query.type;
      }
      if (query.shopCategoryId) {
        filter.shopCategoryId = query.shopCategoryId;
      }
      if (query.productCategoryId) {
        filter.productCategoryId = query.productCategoryId;
      }
      if (query.status) {
        filter.status = query.status;
      }
      if (query.search) {
        filter.name = { $regex: query.search, $options: 'i' };
      }

      const categories = await this.categoryModel
        .find(filter)
        .populate('parentCategoryId', 'id name type')
        .populate('shopCategoryId', 'id name type')
        .populate('productCategoryId', 'id name type')
        .sort({ sortOrder: 1, createdAt: -1 })
        .exec();

      return categories.map(category => this.formatCategoryResponse(category));
    } catch (err) {
      console.log(err);
      throw new BadRequestException(err?.message || 'Failed to get categories');
    }
  }

  async updateCategory(id: string, updateCategoryDto: UpdateCategoryDTO) {
    try {
      const category = await this.categoryModel.findById(id);
      if (!category) {
        throw new NotFoundException('Category not found');
      }

      const updatedCategory = await this.categoryModel.findByIdAndUpdate(
        id,
        updateCategoryDto,
        { new: true }
      ).populate('parentCategoryId', 'id name type')
       .populate('shopCategoryId', 'id name type')
       .populate('productCategoryId', 'id name type');

      return this.formatCategoryResponse(updatedCategory);
    } catch (err) {
      console.log(err);
      if (err instanceof NotFoundException) {
        throw err;
      }
      throw new BadRequestException(err?.message || 'Failed to update category');
    }
  }

  async deleteCategory(id: string) {
    try {
      const category = await this.categoryModel.findById(id);
      if (!category) {
        throw new NotFoundException('Category not found');
      }

      // Check if category has children
      const hasChildren = await this.categoryModel.findOne({
        $or: [
          { parentCategoryId: id },
          { shopCategoryId: id },
          { productCategoryId: id }
        ]
      });

      if (hasChildren) {
        throw new BadRequestException('Cannot delete category with child categories');
      }

      await this.categoryModel.findByIdAndDelete(id);
      return { message: 'Category deleted successfully' };
    } catch (err) {
      console.log(err);
      if (err instanceof NotFoundException || err instanceof BadRequestException) {
        throw err;
      }
      throw new BadRequestException(err?.message || 'Failed to delete category');
    }
  }

  async getCategoriesByType(type: 'SHOP_CATEGORY' | 'PRODUCT_CATEGORY' | 'SUBCATEGORY') {
    try {
      const categories = await this.categoryModel
        .find({ type, status: 'ACTIVE' })
        .populate('parentCategoryId', 'id name type')
        .populate('shopCategoryId', 'id name type')
        .populate('productCategoryId', 'id name type')
        .sort({ sortOrder: 1, name: 1 })
        .exec();

      return categories.map(category => this.formatCategoryResponse(category));
    } catch (err) {
      console.log(err);
      throw new BadRequestException(err?.message || 'Failed to get categories by type');
    }
  }

  async getCategoryHierarchy() {
    try {
      const shopCategories = await this.categoryModel
        .find({ type: 'SHOP_CATEGORY', status: 'ACTIVE' })
        .sort({ sortOrder: 1, name: 1 })
        .exec();

      const hierarchy = [];

      for (const shopCategory of shopCategories) {
        const productCategories = await this.categoryModel
          .find({ 
            type: 'PRODUCT_CATEGORY', 
            shopCategoryId: shopCategory.id,
            status: 'ACTIVE' 
          })
          .sort({ sortOrder: 1, name: 1 })
          .exec();

        const shopCategoryWithChildren = {
          ...this.formatCategoryResponse(shopCategory),
          children: []
        };

        for (const productCategory of productCategories) {
          const subcategories = await this.categoryModel
            .find({ 
              type: 'SUBCATEGORY', 
              productCategoryId: productCategory.id,
              status: 'ACTIVE' 
            })
            .sort({ sortOrder: 1, name: 1 })
            .exec();

          shopCategoryWithChildren.children.push({
            ...this.formatCategoryResponse(productCategory),
            children: subcategories.map(sub => this.formatCategoryResponse(sub))
          });
        }

        hierarchy.push(shopCategoryWithChildren);
      }

      return hierarchy;
    } catch (err) {
      console.log(err);
      throw new BadRequestException(err?.message || 'Failed to get category hierarchy');
    }
  }

  private async validateParentCategories(createCategoryDto: CreateCategoryDTO) {
    // Validate shopCategoryId exists for PRODUCT_CATEGORY and SUBCATEGORY
    if (createCategoryDto.shopCategoryId) {
      const shopCategory = await this.categoryModel.findOne({
        _id: createCategoryDto.shopCategoryId,
        type: 'SHOP_CATEGORY',
        status: 'ACTIVE'
      });
      if (!shopCategory) {
        throw new BadRequestException('Invalid shopCategoryId');
      }
    }

    // Validate productCategoryId exists for SUBCATEGORY
    if (createCategoryDto.productCategoryId) {
      const productCategory = await this.categoryModel.findOne({
        _id: createCategoryDto.productCategoryId,
        type: 'PRODUCT_CATEGORY',
        status: 'ACTIVE'
      });
      if (!productCategory) {
        throw new BadRequestException('Invalid productCategoryId');
      }
    }
  }

  private formatCategoryResponse(category: any) {
    const response = {
      id: category.id,
      name: category.name,
      type: category.type,
      parentCategoryId: category.parentCategoryId,
      shopCategoryId: category.shopCategoryId,
      productCategoryId: category.productCategoryId,
      status: category.status,
      description: category.description,
      icon: category.icon,
      sortOrder: category.sortOrder,
      createdAt: category.createdAt,
      updatedAt: category.updatedAt,
    };

    // Add populated parent information
    if (category.parentCategoryId && typeof category.parentCategoryId === 'object') {
      response['parentCategory'] = {
        id: category.parentCategoryId.id,
        name: category.parentCategoryId.name,
        type: category.parentCategoryId.type
      };
    }

    if (category.shopCategoryId && typeof category.shopCategoryId === 'object') {
      response['shopCategory'] = {
        id: category.shopCategoryId.id,
        name: category.shopCategoryId.name,
        type: category.shopCategoryId.type
      };
    }

    if (category.productCategoryId && typeof category.productCategoryId === 'object') {
      response['productCategory'] = {
        id: category.productCategoryId.id,
        name: category.productCategoryId.name,
        type: category.productCategoryId.type
      };
    }

    return response;
  }
}
