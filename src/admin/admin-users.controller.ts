import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiQuery,
  ApiBody,
  ApiParam,
} from '@nestjs/swagger';
import { AuthService } from '../auth/auth.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AdminRoleGuard } from '../auth/admin-role.guard';
import { AdminUsersResponseDTO } from './dto/admin-users-response.dto';
import { UpdateAdminUserDto } from './dto/update-admin-user.dto';

@ApiTags('adminApis')
@Controller('admin/users')
@UseGuards(JwtAuthGuard, AdminRoleGuard)
@ApiBearerAuth()
export class AdminUsersController {
  constructor(private authService: AuthService) {}

  @Get()
  @ApiOperation({
    summary: 'Get all users (Admin only)',
    description:
      'Retrieve all users with optional filters. Only accessible by admin users.',
  })
  @ApiQuery({
    name: 'search',
    required: false,
    type: String,
    description: 'Search users by email, name, or fullName',
  })
  @ApiQuery({
    name: 'userRole',
    required: false,
    enum: ['normal', 'seller', 'admin'],
    description: 'Filter by user role',
  })
  @ApiQuery({
    name: 'userStatus',
    required: false,
    enum: ['active', 'inactive', 'suspended'],
    description: 'Filter by user status',
  })
  @ApiQuery({
    name: 'userLevel',
    required: false,
    enum: ['beginner', 'intermediate', 'advanced', 'expert'],
    description: 'Filter by user level',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    description: 'Number of users to return (default: 100)',
  })
  @ApiQuery({
    name: 'offset',
    required: false,
    type: Number,
    description: 'Number of users to skip (default: 0)',
  })
  @ApiResponse({
    status: 200,
    description: 'Users retrieved successfully',
    type: AdminUsersResponseDTO,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 403, description: 'Forbidden — not admin' })
  async getAllUsers(
    @Query()
    query: {
      search?: string;
      userRole?: 'normal' | 'seller' | 'admin';
      userStatus?: 'active' | 'inactive' | 'suspended';
      userLevel?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
      limit?: number;
      offset?: number;
    },
  ) {
    const result = await this.authService.getAllUsersForAdmin(query);
    return {
      success: true,
      message: 'Users retrieved successfully',
      data: result,
    };
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update user (admin)' })
  @ApiParam({
    name: 'id',
    description: 'User document id',
    example: '507f1f77bcf86cd799439011',
  })
  @ApiBody({ type: UpdateAdminUserDto })
  @ApiResponse({ status: 200, description: 'User updated' })
  @ApiResponse({ status: 404, description: 'User not found' })
  @ApiResponse({
    status: 403,
    description: 'Forbidden — e.g. demoting the last admin',
  })
  async updateUser(
    @Param('id') id: string,
    @Body() dto: UpdateAdminUserDto,
  ) {
    return this.authService.updateUserForAdmin(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Soft-delete user (admin)' })
  @ApiParam({
    name: 'id',
    description: 'User document id',
    example: '507f1f77bcf86cd799439011',
  })
  @ApiResponse({ status: 200, description: 'User soft-deleted (inactive + isDeleted)' })
  @ApiResponse({ status: 400, description: 'Cannot delete your own account' })
  @ApiResponse({ status: 404, description: 'User not found' })
  @ApiResponse({
    status: 403,
    description: 'Forbidden — e.g. deleting the last admin',
  })
  async deleteUser(
    @Param('id') id: string,
    @Req() req: Request & { user: Record<string, unknown> },
  ) {
    return this.authService.deleteUserForAdmin(id, req.user);
  }
}
