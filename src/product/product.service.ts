import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from 'src/interface/product/product.interface';
import { CreateProductDTO } from './dto/create-product.dto';
import { UpdateProductDTO } from './dto/update-product.dto';
import { ProductQueryDTO } from './dto/product-query.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private productModel: Model<Product>,
    @InjectModel('Shop') private shopModel: Model<any>,
    @InjectModel('Category') private categoryModel: Model<any>,
  ) {}

  async createProduct(createProductDto: CreateProductDTO, userId: string) {
    try {
      // Validate shop ownership
      const shop = await this.shopModel.findOne({
        _id: createProductDto.shopId,
        user: userId,
        status: 'active'
      });

      if (!shop) {
        throw new BadRequestException('Shop not found or you do not have permission to add products to this shop');
      }

      // Validate categories exist
      await this.validateCategories(createProductDto);

      // Check SKU uniqueness if provided
      if (createProductDto.sku) {
        const existingProduct = await this.productModel.findOne({ sku: createProductDto.sku });
        if (existingProduct) {
          throw new BadRequestException('SKU already exists');
        }
      }

      const product = await new this.productModel(createProductDto).save();
      return await this.getProductById(product.id);
    } catch (err) {
      console.log(err);
      throw new BadRequestException(err?.message || 'Failed to create product');
    }
  }

  async getProductById(id: string) {
    try {
      const product = await this.productModel
        .findById(id)
        .populate({
          path: 'shopId',
          populate: {
            path: 'user',
            select: 'id fullName email phoneNumber userRole userStatus profilePic createdAt updatedAt'
          }
        })
        .populate('shopCategoryId', 'id name type')
        .populate('productCategoryId', 'id name type')
        .populate('subCategoryId', 'id name type')
        .exec();

      if (!product) {
        throw new NotFoundException('Product not found');
      }

      // Increment view count
      await this.productModel.findByIdAndUpdate(id, { $inc: { viewCount: 1 } });

      return this.formatProductResponse(product);
    } catch (err) {
      console.log(err);
      if (err instanceof NotFoundException) {
        throw err;
      }
      throw new BadRequestException(err?.message || 'Failed to get product');
    }
  }

  async getAllProducts(query: ProductQueryDTO) {
    try {
      const filter: any = {};
      const sort: any = {};

      // Apply filters
      if (query.shopId) filter.shopId = query.shopId;
      if (query.shopCategoryId) filter.shopCategoryId = query.shopCategoryId;
      if (query.productCategoryId) filter.productCategoryId = query.productCategoryId;
      if (query.subCategoryId) filter.subCategoryId = query.subCategoryId;
      if (query.status) filter.status = query.status;
      if (query.isFeatured !== undefined) filter.isFeatured = query.isFeatured;
      if (query.condition) filter.condition = query.condition;
      if (query.brand) filter.brand = { $regex: query.brand, $options: 'i' };
      if (query.color) filter.color = { $regex: query.color, $options: 'i' };
      if (query.minRating) filter.rating = { $gte: query.minRating };

      // Price range filter
      if (query.minPrice || query.maxPrice) {
        filter.price = {};
        if (query.minPrice) filter.price.$gte = query.minPrice;
        if (query.maxPrice) filter.price.$lte = query.maxPrice;
      }

      // Date range filter
      if (query.createdFrom || query.createdTo) {
        filter.createdAt = {};
        if (query.createdFrom) filter.createdAt.$gte = new Date(query.createdFrom);
        if (query.createdTo) filter.createdAt.$lte = new Date(query.createdTo);
      }

      // Search filter
      if (query.search) {
        filter.$or = [
          { name: { $regex: query.search, $options: 'i' } },
          { description: { $regex: query.search, $options: 'i' } },
          { tags: { $in: [new RegExp(query.search, 'i')] } },
          { brand: { $regex: query.search, $options: 'i' } },
          { model: { $regex: query.search, $options: 'i' } }
        ];
      }

      // Sort configuration
      const sortBy = query.sortBy || 'createdAt';
      const sortOrder = query.sortOrder === 'asc' ? 1 : -1;
      sort[sortBy] = sortOrder;

      // Pagination
      const limit = query.limit || 10;
      const offset = query.offset || 0;

      const [products, total] = await Promise.all([
        this.productModel
          .find(filter)
          .populate({
            path: 'shopId',
            populate: {
              path: 'user',
              select: 'id fullName email phoneNumber userRole userStatus profilePic createdAt updatedAt'
            }
          })
          .populate('shopCategoryId', 'id name type')
          .populate('productCategoryId', 'id name type')
          .populate('subCategoryId', 'id name type')
          .sort(sort)
          .skip(offset)
          .limit(limit)
          .exec(),
        this.productModel.countDocuments(filter)
      ]);

      const formattedProducts = products.map(product => this.formatProductResponse(product));
      const totalPages = Math.ceil(total / limit);
      const currentPage = Math.floor(offset / limit) + 1;

      return {
        products: formattedProducts,
        total,
        page: currentPage,
        limit,
        totalPages
      };
    } catch (err) {
      console.log(err);
      throw new BadRequestException(err?.message || 'Failed to get products');
    }
  }

  async updateProduct(id: string, updateProductDto: UpdateProductDTO, userId: string) {
    try {
      // Check if product exists and user owns the shop
      const product = await this.productModel.findById(id);
      if (!product) {
        throw new NotFoundException('Product not found');
      }

      const shop = await this.shopModel.findOne({
        _id: product.shopId,
        user: userId
      });

      if (!shop) {
        throw new BadRequestException('You do not have permission to update this product');
      }

      // Check SKU uniqueness if provided
      if (updateProductDto.sku && updateProductDto.sku !== product.sku) {
        const existingProduct = await this.productModel.findOne({ 
          sku: updateProductDto.sku,
          _id: { $ne: id }
        });
        if (existingProduct) {
          throw new BadRequestException('SKU already exists');
        }
      }

      const updatedProduct = await this.productModel.findByIdAndUpdate(
        id,
        updateProductDto,
        { new: true }
      ).populate({
        path: 'shopId',
        populate: {
          path: 'user',
          select: 'id fullName email phoneNumber userRole userStatus profilePic createdAt updatedAt'
        }
      })
      .populate('shopCategoryId', 'id name type')
      .populate('productCategoryId', 'id name type')
      .populate('subCategoryId', 'id name type');

      return this.formatProductResponse(updatedProduct);
    } catch (err) {
      console.log(err);
      if (err instanceof NotFoundException || err instanceof BadRequestException) {
        throw err;
      }
      throw new BadRequestException(err?.message || 'Failed to update product');
    }
  }

  async deleteProduct(id: string, userId: string) {
    try {
      // Check if product exists and user owns the shop
      const product = await this.productModel.findById(id);
      if (!product) {
        throw new NotFoundException('Product not found');
      }

      const shop = await this.shopModel.findOne({
        _id: product.shopId,
        user: userId
      });

      if (!shop) {
        throw new BadRequestException('You do not have permission to delete this product');
      }

      await this.productModel.findByIdAndDelete(id);
      return { message: 'Product deleted successfully' };
    } catch (err) {
      console.log(err);
      if (err instanceof NotFoundException || err instanceof BadRequestException) {
        throw err;
      }
      throw new BadRequestException(err?.message || 'Failed to delete product');
    }
  }

  async getProductsByShop(shopId: string, query: ProductQueryDTO) {
    try {
      const shopQuery = { ...query, shopId };
      return await this.getAllProducts(shopQuery);
    } catch (err) {
      console.log(err);
      throw new BadRequestException(err?.message || 'Failed to get shop products');
    }
  }

  async getFeaturedProducts(limit: number = 10) {
    try {
      const products = await this.productModel
        .find({ isFeatured: true, status: 'ACTIVE' })
        .populate({
          path: 'shopId',
          populate: {
            path: 'user',
            select: 'id fullName email phoneNumber userRole userStatus profilePic createdAt updatedAt'
          }
        })
        .populate('shopCategoryId', 'id name type')
        .populate('productCategoryId', 'id name type')
        .populate('subCategoryId', 'id name type')
        .sort({ createdAt: -1 })
        .limit(limit)
        .exec();

      return products.map(product => this.formatProductResponse(product));
    } catch (err) {
      console.log(err);
      throw new BadRequestException(err?.message || 'Failed to get featured products');
    }
  }

  async getProductsByCategory(categoryId: string, query: ProductQueryDTO) {
    try {
      const categoryQuery = { ...query, productCategoryId: categoryId };
      return await this.getAllProducts(categoryQuery);
    } catch (err) {
      console.log(err);
      throw new BadRequestException(err?.message || 'Failed to get category products');
    }
  }

  private async validateCategories(createProductDto: CreateProductDTO) {
    // Validate shop category
    const shopCategory = await this.categoryModel.findOne({
      _id: createProductDto.shopCategoryId,
      type: 'SHOP_CATEGORY',
      status: 'ACTIVE'
    });
    if (!shopCategory) {
      throw new BadRequestException('Invalid shop category');
    }

    // Validate product category
    const productCategory = await this.categoryModel.findOne({
      _id: createProductDto.productCategoryId,
      type: 'PRODUCT_CATEGORY',
      status: 'ACTIVE'
    });
    if (!productCategory) {
      throw new BadRequestException('Invalid product category');
    }

    // Validate subcategory if provided
    if (createProductDto.subCategoryId) {
      const subCategory = await this.categoryModel.findOne({
        _id: createProductDto.subCategoryId,
        type: 'SUBCATEGORY',
        status: 'ACTIVE'
      });
      if (!subCategory) {
        throw new BadRequestException('Invalid subcategory');
      }
    }
  }

  private formatProductResponse(product: any) {
    const response = {
      id: product.id,
      shopId: product.shopId,
      shop: product.shopId,
      shopCategoryId: product.shopCategoryId,
      shopCategory: product.shopCategoryId,
      productCategoryId: product.productCategoryId,
      productCategory: product.productCategoryId,
      subCategoryId: product.subCategoryId,
      subCategory: product.subCategoryId,
      name: product.name,
      description: product.description,
      images: product.images,
      video: product.video,
      price: product.price,
      discountPrice: product.discountPrice,
      currency: product.currency,
      sku: product.sku,
      stock: product.stock,
      unit: product.unit,
      status: product.status,
      tags: product.tags,
      isFeatured: product.isFeatured,
      weight: product.weight,
      dimensions: product.dimensions,
      warranty: product.warranty,
      brand: product.brand,
      model: product.model,
      color: product.color,
      size: product.size,
      material: product.material,
      condition: product.condition,
      rating: product.rating,
      reviewCount: product.reviewCount,
      viewCount: product.viewCount,
      soldCount: product.soldCount,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    };

    // Add populated shop information
    if (product.shopId && typeof product.shopId === 'object') {
      response.shop = product.shopId;
      if (product.shopId.user && typeof product.shopId.user === 'object') {
        // Remove password from user object if it exists
        const userObj = product.shopId.user;
        delete userObj.password;
      }
    }

    // Add populated category information
    if (product.shopCategoryId && typeof product.shopCategoryId === 'object') {
      response.shopCategory = product.shopCategoryId;
    }

    if (product.productCategoryId && typeof product.productCategoryId === 'object') {
      response.productCategory = product.productCategoryId;
    }

    if (product.subCategoryId && typeof product.subCategoryId === 'object') {
      response.subCategory = product.subCategoryId;
    }

    return response;
  }
}
