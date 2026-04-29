import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AdminRoleGuard } from '../auth/admin-role.guard';
import { NotificationService } from '../notification/notification.service';
import { CreateAdminNotificationDto } from './dto/create-admin-notification.dto';

@ApiTags('adminApis')
@Controller('admin/notifications')
@UseGuards(JwtAuthGuard, AdminRoleGuard)
@ApiBearerAuth()
export class AdminNotificationsController {
  constructor(private readonly notificationService: NotificationService) {}

  @Get()
  @ApiOperation({ summary: 'List notifications (admin)' })
  @ApiQuery({ name: 'userId', required: false })
  @ApiQuery({ name: 'type', required: false })
  @ApiQuery({ name: 'search', required: false })
  @ApiQuery({ name: 'limit', required: false })
  @ApiQuery({ name: 'offset', required: false })
  async list(
    @Query('userId') userId?: string,
    @Query('type') type?: string,
    @Query('search') search?: string,
    @Query('limit') limit?: string,
    @Query('offset') offset?: string,
  ) {
    const l = Math.min(parseInt(limit ?? '50', 10) || 50, 100);
    const o = parseInt(offset ?? '0', 10) || 0;
    const data = await this.notificationService.listAdmin(l, o, {
      userId: userId?.trim(),
      type: type?.trim(),
      search: search?.trim(),
    });
    return { success: true, data };
  }

  @Post()
  @ApiOperation({ summary: 'Create notification for a user (admin)' })
  @ApiBody({ type: CreateAdminNotificationDto })
  async create(@Body() dto: CreateAdminNotificationDto) {
    const doc = await this.notificationService.createForUser(dto.userId.trim(), {
      title: dto.title.trim(),
      body: dto.body.trim(),
      type: dto.type,
      imageUrl: dto.imageUrl?.trim(),
      pushSource: 'admin',
    });
    const plain =
      doc && typeof (doc as { toObject?: () => unknown }).toObject === 'function'
        ? (doc as { toObject: () => unknown }).toObject()
        : doc;
    return { success: true, data: plain };
  }
}
