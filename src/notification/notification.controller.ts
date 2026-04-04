import { Controller, Get, Param, Patch, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { User } from 'src/decorators/user.decorator';
import { NotificationService } from './notification.service';

@ApiTags('Notifications')
@Controller('notifications')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @ApiOperation({ summary: 'Unread notification count' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('unread/count')
  async unreadCount(@User() user: { id: string }) {
    const count = await this.notificationService.unreadCount(user.id);
    return { success: true, data: { count } };
  }

  @ApiOperation({ summary: 'List notifications for current user' })
  @ApiQuery({ name: 'limit', required: false })
  @ApiQuery({ name: 'offset', required: false })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get()
  async list(
    @User() user: { id: string },
    @Query('limit') limit?: string,
    @Query('offset') offset?: string,
  ) {
    const l = Math.min(parseInt(limit ?? '50', 10) || 50, 100);
    const o = parseInt(offset ?? '0', 10) || 0;
    const data = await this.notificationService.listForUser(user.id, l, o);
    return { success: true, data };
  }

  @ApiOperation({ summary: 'Mark one notification as read' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch(':id/read')
  async markRead(@User() user: { id: string }, @Param('id') id: string) {
    const doc = await this.notificationService.markRead(user.id, id);
    return { success: true, data: doc };
  }

  @ApiOperation({ summary: 'Mark all notifications as read' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch('read-all')
  async markAllRead(@User() user: { id: string }) {
    const result = await this.notificationService.markAllRead(user.id);
    return { success: true, data: result };
  }
}
