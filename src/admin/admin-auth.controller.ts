import { Body, Controller, Post, Req, HttpCode, HttpStatus } from '@nestjs/common';
import { Request } from 'express';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { AuthService } from '../auth/auth.service';
import { AdminLoginDTO } from './dto/admin-login.dto';
import { AdminLoginResponseDTO } from './dto/admin-login-response.dto';

@ApiTags('adminApis')
@Controller('admin/auth')
export class AdminAuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ 
    summary: 'Admin login',
    description: 'Authenticate admin user and return JWT token. Only users with ADMIN role can access.'
  })
  @ApiBody({ type: AdminLoginDTO })
  @ApiResponse({ 
    status: 200, 
    description: 'Login successful',
    type: AdminLoginResponseDTO
  })
  @ApiResponse({ 
    status: 401, 
    description: 'Invalid credentials or user is not an admin'
  })
  @ApiResponse({ 
    status: 400, 
    description: 'Bad request - validation error'
  })
  async adminLogin(@Body() loginDto: AdminLoginDTO, @Req() req: Request) {
    console.log('🔵 [ADMIN AUTH CONTROLLER] Admin login request received');
    console.log('📦 [ADMIN AUTH CONTROLLER] Email:', loginDto?.email);
    
    // Get IP address from request
    const ipAddress = req.ip || req.connection.remoteAddress || 'Unknown';
    console.log('🌐 [ADMIN AUTH CONTROLLER] IP Address:', ipAddress);

    // Call auth service with admin flag
    const result = await this.authService.adminLogin(loginDto, ipAddress);
    
    return {
      success: true,
      message: 'Admin login successful',
      data: result
    };
  }
}

