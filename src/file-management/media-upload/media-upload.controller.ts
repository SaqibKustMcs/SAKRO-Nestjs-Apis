import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  Param,
  Get,
  Res,
  UseGuards,
  HttpException,
  HttpStatus,
  Req,
  BadRequestException,
  Logger,
} from '@nestjs/common';
import * as path from 'path';
import { memoryStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiBody, ApiTags, ApiConsumes } from '@nestjs/swagger';
import { CloudinaryService } from './cloudinary.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

const IMAGE_MIMES = new Set([
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/gif',
  'image/webp',
  'image/heic',
  'image/heif',
]);

const VIDEO_MIMES = new Set([
  'video/mp4',
  'video/quicktime',
  'video/x-msvideo',
  'video/avi',
]);

const AUDIO_MIMES = new Set([
  'audio/mpeg',
  'audio/mp4',
  'audio/wav',
  'audio/x-wav',
  'audio/m4a',
]);

const DOC_MIMES = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'text/plain',
]);

function getAllowedExtensions(): string[] {
  const raw =
    process.env.whiteListedExtensions ||
    '.jpg,.jpeg,.png,.gif,.mp4,.mov,.avi,.pdf,.doc,.docx,.txt,.m4a,.wav,.mp3';
  return raw
    .split(',')
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);
}

function isAllowedUpload(file: Express.Multer.File): boolean {
  const ext = path.extname(file.originalname || '').toLowerCase();
  const allowed = getAllowedExtensions();
  if (ext && allowed.includes(ext)) return true;

  const mime = (file.mimetype || '').toLowerCase();
  if (IMAGE_MIMES.has(mime) && allowed.some((e) => ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.heic', '.heif'].includes(e))) {
    return true;
  }
  if (VIDEO_MIMES.has(mime) && allowed.some((e) => ['.mp4', '.mov', '.avi'].includes(e))) {
    return true;
  }
  if (AUDIO_MIMES.has(mime) && allowed.some((e) => ['.m4a', '.wav', '.mp3'].includes(e))) {
    return true;
  }
  if (DOC_MIMES.has(mime) && allowed.some((e) => ['.pdf', '.doc', '.docx', '.txt'].includes(e))) {
    return true;
  }
  return false;
}

const fileFilter = (req, file, callback) => {
  if (isAllowedUpload(file)) {
    return callback(null, true);
  }
  req.fileValidationError = 'Invalid file type';
  return callback(new Error('Invalid file type'), false);
};

@ApiTags('media-upload')
@Controller('media-upload')
@ApiBearerAuth()
export class MediaUploadController {
  private readonly logger = new Logger(MediaUploadController.name);

  constructor(private readonly _cloudinaryService: CloudinaryService) {}

  @UseGuards(JwtAuthGuard)
  @Post('mediaFiles/:folderName')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(
    FileInterceptor('file', {
      storage: memoryStorage(),
      limits: {
        fileSize: 25 * 1024 * 1024,
      },
      fileFilter: fileFilter,
    }),
  )
  async uploadAvatar(
    @UploadedFile() file: Express.Multer.File,
    @Param('folderName') folderName: string,
    @Req() req,
  ) {
    req.setTimeout(10 * 60 * 1000);

    if (req.fileValidationError) {
      throw new BadRequestException(req.fileValidationError);
    }
    if (!file?.buffer?.length) {
      throw new BadRequestException('No file uploaded');
    }
    if (!this._cloudinaryService.isConfigured) {
      throw new HttpException(
        'Media storage is not configured (Cloudinary credentials missing).',
        HttpStatus.SERVICE_UNAVAILABLE,
      );
    }

    const folder = (folderName || 'misc').toLowerCase();

    try {
      const result = await this._cloudinaryService.uploadBuffer(
        file.buffer,
        folder,
      );

      return {
        url: result.secure_url,
        secure_url: result.secure_url,
        publicId: result.public_id,
        resourceType: result.resource_type,
        format: result.format,
        bytes: result.bytes,
        width: result.width,
        height: result.height,
        originalName: file.originalname,
        mimeType: file.mimetype,
      };
    } catch (err: any) {
      this.logger.error(
        `Cloudinary upload failed (${folder}): ${err?.message ?? err}`,
        err?.stack,
      );
      throw new HttpException(
        err?.message || 'Failed to upload media to cloud storage',
        err?.http_code || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('mediaFiles/:folderName/:fileName')
  async mediaFiles(
    @Param('fileName') fileName: string,
    @Res() res,
  ): Promise<any> {
    return res.status(HttpStatus.NOT_FOUND).json({
      success: false,
      message:
        'Local media serving is deprecated. This asset was not found; please re-upload.',
      fileName,
    });
  }
}
