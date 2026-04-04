import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBannerDTO, UpdateBannerDTO } from './dto/banner.dto';

@Injectable()
export class BannerService {
  constructor(@InjectModel('Banner') private readonly bannerModel: Model<any>) {}

  // ── Public ─────────────────────────────────────────────────────────────────

  async getCarouselBanners(): Promise<any[]> {
    return this.bannerModel
      .find({ type: 'carousel', isActive: true })
      .sort({ sortOrder: 1, createdAt: -1 })
      .exec();
  }

  async getModalBanners(): Promise<any[]> {
    return this.bannerModel
      .find({ type: 'modal', isActive: true })
      .sort({ sortOrder: 1, createdAt: -1 })
      .exec();
  }

  // ── Admin ──────────────────────────────────────────────────────────────────

  async getAllBanners(type?: string): Promise<any[]> {
    const filter: any = {};
    if (type) filter.type = type;
    return this.bannerModel.find(filter).sort({ sortOrder: 1, createdAt: -1 }).exec();
  }

  async getBannerById(id: string): Promise<any> {
    const banner = await this.bannerModel.findOne({ _id: id }).exec();
    if (!banner) throw new NotFoundException('Banner not found');
    return banner;
  }

  async createBanner(dto: CreateBannerDTO): Promise<any> {
    const banner = new this.bannerModel(dto);
    return banner.save();
  }

  async updateBanner(id: string, dto: UpdateBannerDTO): Promise<any> {
    const banner = await this.bannerModel
      .findOneAndUpdate({ _id: id }, { $set: dto }, { new: true })
      .exec();
    if (!banner) throw new NotFoundException('Banner not found');
    return banner;
  }

  async deleteBanner(id: string): Promise<void> {
    const result = await this.bannerModel.deleteOne({ _id: id }).exec();
    if (result.deletedCount === 0) throw new NotFoundException('Banner not found');
  }

  async toggleActive(id: string): Promise<any> {
    const banner = await this.bannerModel.findOne({ _id: id }).exec();
    if (!banner) throw new NotFoundException('Banner not found');
    banner.isActive = !banner.isActive;
    return banner.save();
  }
}
