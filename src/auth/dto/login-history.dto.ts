import { IsOptional, IsEnum, IsDateString, IsNumber, Min, Max } from 'class-validator';

export class GetLoginHistoryDTO {
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(100)
  limit?: number;

  @IsOptional()
  @IsEnum(['success', 'failed', 'blocked'])
  status?: 'success' | 'failed' | 'blocked';

  @IsOptional()
  @IsDateString()
  startDate?: string;

  @IsOptional()
  @IsDateString()
  endDate?: string;
}

export class LoginHistoryResponseDTO {
  id: string;
  deviceName: string;
  deviceType: string;
  platform: string;
  browser: string;
  ipAddress: string;
  location?: string;
  loginMethod: string;
  status: string;
  failureReason?: string;
  loginAt: Date;
}

export class LoginStatisticsDTO {
  totalLogins: number;
  successfulLogins: number;
  failedLogins: number;
  lastLogin: Date | null;
  uniqueDevices: number;
  uniqueLocations: number;
}

