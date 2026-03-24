import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AdminLoginDTO {
  @ApiProperty({ 
    description: 'Admin email address', 
    example: 'admin@jhamat.com',
    required: true
  })
  @IsEmail({}, { message: 'Please provide a valid email address' })
  @IsNotEmpty({ message: 'Email is required' })
  @IsString()
  email: string;

  @ApiProperty({ 
    description: 'Admin password',
    example: 'Admin@123',
    required: true
  })
  @IsNotEmpty({ message: 'Password is required' })
  @IsString()
  password: string;
}

