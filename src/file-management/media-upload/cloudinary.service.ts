import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';
import { Readable } from 'stream';

@Injectable()
export class CloudinaryService implements OnModuleInit {
  private readonly logger = new Logger(CloudinaryService.name);
  private configured = false;

  onModuleInit() {
    const cloudName = process.env.CLOUDINARY_CLOUD_NAME?.trim();
    const apiKey = process.env.CLOUDINARY_API_KEY?.trim();
    const apiSecret = process.env.CLOUDINARY_API_SECRET?.trim();

    if (cloudName && apiKey && apiSecret) {
      cloudinary.config({
        cloud_name: cloudName.toLowerCase(),
        api_key: apiKey,
        api_secret: apiSecret,
        secure: true,
      });
      this.configured = true;
      this.logger.log(`✅ Cloudinary configured (cloud: ${cloudName.toLowerCase()})`);
    } else {
      this.logger.warn(
        '⚠️  Cloudinary env vars missing (CLOUDINARY_CLOUD_NAME / API_KEY / API_SECRET) — media upload will fail',
      );
    }
  }

  get isConfigured() {
    return this.configured;
  }

  /**
   * Stream a file buffer to Cloudinary. Handles images, video, and raw files
   * via `resource_type: 'auto'`. Nothing is written to the local disk.
   *
   * @param buffer   Raw file bytes (from multer memoryStorage)
   * @param folder   Logical subfolder, e.g. "images", "videos", "profile"
   * @returns        Cloudinary upload result (use `secure_url`)
   */
  uploadBuffer(buffer: Buffer, folder: string): Promise<UploadApiResponse> {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: `mandiqor/${folder}`,
          resource_type: 'auto',
        },
        (error, result) => {
          if (error) return reject(error);
          if (!result) return reject(new Error('Cloudinary returned no result'));
          resolve(result);
        },
      );
      Readable.from(buffer).pipe(uploadStream);
    });
  }
}
