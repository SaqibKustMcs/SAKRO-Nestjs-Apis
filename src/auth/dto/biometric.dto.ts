import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty } from 'class-validator';

export class UpdateBiometricStatusDTO {
  @ApiProperty({ 
    description: 'Enable or disable biometric authentication', 
    example: true,
    type: Boolean 
  })
  @IsNotEmpty({ message: 'Biometric status is required' })
  @IsBoolean({ message: 'Biometric status must be a boolean value' })
  isBiometric: boolean;
}

export class BiometricResponseDTO {
  @ApiProperty({ description: 'Success status' })
  success: boolean;

  @ApiProperty({ description: 'Response message' })
  message: string;

  @ApiProperty({ description: 'Updated biometric status' })
  data: {
    isBiometric: boolean;
  };
}

