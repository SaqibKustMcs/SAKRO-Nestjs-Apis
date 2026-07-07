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
  Query,
  Req,
  BadRequestException,
} from '@nestjs/common';
import * as path from 'path';
import { memoryStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiBody, ApiTags, ApiConsumes } from '@nestjs/swagger';
import { CloudinaryService } from './cloudinary.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

const fileFilter = (req, file, callback) => {
  const ext = path.extname(file.originalname);
  const whitelist = process.env.whiteListedExtensions || '';
  if (!whitelist.includes(ext.toLowerCase())) {
    req.fileValidationError = 'Invalid file type';
    return callback(
      new HttpException('Invalid file type', HttpStatus.BAD_REQUEST),
      false,
    );
  }
  return callback(null, true);
};

@ApiTags('media-upload')
@Controller('media-upload')
@ApiBearerAuth()
export class MediaUploadController {
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
      // Keep the file in memory only — nothing is written to the project/disk.
      storage: memoryStorage(),
      limits: {
        fileSize: 25 * 1024 * 1024, // 25MB (covers images, short videos, docs)
      },
      fileFilter: fileFilter,
    }),
  )
  async uploadAvatar(
    @UploadedFile() file,
    @Param('folderName') folderName: string,
    @Req() req,
  ) {
    req.setTimeout(10 * 60 * 1000);

    if (!file?.buffer) {
      throw new BadRequestException('No file uploaded');
    }
    if (!this._cloudinaryService.isConfigured) {
      throw new HttpException(
        'Media storage is not configured (Cloudinary credentials missing).',
        HttpStatus.SERVICE_UNAVAILABLE,
      );
    }

    const folder = (folderName || 'misc').toLowerCase();
    const result = await this._cloudinaryService.uploadBuffer(
      file.buffer,
      folder,
    );

    // Response mirrors the previous multer shape so existing clients that read
    // `res.url` keep working — now `url` is a permanent Cloudinary HTTPS link.
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
  }

  /**
   * Backward-compat redirect for legacy DB records that still store
   * `/media-upload/mediaFiles/...` URLs. New uploads return absolute
   * Cloudinary URLs and never hit this route.
   */
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
