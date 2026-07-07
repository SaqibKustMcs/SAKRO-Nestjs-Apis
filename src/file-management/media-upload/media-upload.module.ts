import { Module } from '@nestjs/common';
import { MediaUploadController } from './media-upload.controller';
import { CloudinaryService } from './cloudinary.service';

@Module({
  controllers: [MediaUploadController],
  providers: [CloudinaryService],
  exports: [CloudinaryService],
})
export class MediaUploadModule {}
