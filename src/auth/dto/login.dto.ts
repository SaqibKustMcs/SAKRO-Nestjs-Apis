import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class LoginDTO {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty({ required: false })
  @IsOptional()
  deviceId?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  deviceName?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  deviceType?: 'mobile' | 'tablet' | 'desktop' | 'other';

  @ApiProperty({ required: false })
  @IsOptional()
  platform?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  browser?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  location?: string;
}
