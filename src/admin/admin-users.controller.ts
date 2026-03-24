import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { AuthService } from '../auth/auth.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AdminUsersResponseDTO } from './dto/admin-users-response.dto';

@ApiTags('adminApis')
@Controller('admin/users')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class AdminUsersController {
  constructor(private authService: AuthService) {}

  @Get()
  @ApiOperation({ 
    summary: 'Get all users (Admin only)',
    description: 'Retrieve all users with optional filters. Only accessible by admin users.'
  })
  @ApiQuery({ 
    name: 'search', 
    required: false, 
    type: String,
    description: 'Search users by email, name, or fullName'
  })
  @ApiQuery({ 
    name: 'userRole', 
    required: false, 
    enum: ['normal', 'seller', 'admin'],
    description: 'Filter by user role'
  })
  @ApiQuery({ 
    name: 'userStatus', 
    required: false, 
    enum: ['active', 'inactive', 'suspended'],
    description: 'Filter by user status'
  })
  @ApiQuery({ 
    name: 'userLevel', 
    required: false, 
    enum: ['beginner', 'intermediate', 'advanced', 'expert'],
    description: 'Filter by user level'
  })
  @ApiQuery({ 
    name: 'limit', 
    required: false, 
    type: Number,
    description: 'Number of users to return (default: 100)'
  })
  @ApiQuery({ 
    name: 'offset', 
    required: false, 
    type: Number,
    description: 'Number of users to skip (default: 0)'
  })
  @ApiResponse({ 
    status: 200, 
    description: 'Users retrieved successfully',
    type: AdminUsersResponseDTO
  })
  @ApiResponse({ 
    status: 401, 
    description: 'Unauthorized - Invalid or missing token'
  })
  @ApiResponse({ 
    status: 403, 
    description: 'Forbidden - User is not an admin'
  })
  async getAllUsers(@Query() query: {
    search?: string;
    userRole?: 'normal' | 'seller' | 'admin';
    userStatus?: 'active' | 'inactive' | 'suspended';
    userLevel?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
    limit?: number;
    offset?: number;
  }) {
    console.log('🔵 [ADMIN USERS CONTROLLER] Get all users request received');
    console.log('📦 [ADMIN USERS CONTROLLER] Query params:', query);
    
    try {
      const result = await this.authService.getAllUsersForAdmin(query);
      console.log('✅ [ADMIN USERS CONTROLLER] Users retrieved:', result.total, 'total users');
      console.log('✅ [ADMIN USERS CONTROLLER] Returning', result.users?.length || 0, 'users');
      
      return {
        success: true,
        message: 'Users retrieved successfully',
        data: result
      };
    } catch (error) {
      console.error('❌ [ADMIN USERS CONTROLLER] Error:', error);
      throw error;
    }
  }
}

