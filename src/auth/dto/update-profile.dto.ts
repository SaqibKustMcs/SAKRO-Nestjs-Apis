import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsPhoneNumber, IsEnum } from 'class-validator';

export class UpdateProfileDTO {
  @ApiProperty({ description: 'Full name of the user' })
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @ApiProperty({ description: 'Phone number of the user' })
  @IsString()
  @IsNotEmpty()
  phoneNumber: string;

  @ApiProperty({ description: 'Village selected from dropdown' })
  @IsString()
  @IsNotEmpty()
  village: string;

  @ApiProperty({ description: 'Country of the user' })
  @IsString()
  @IsNotEmpty()
  country: string;

  @ApiProperty({ description: 'Home address of the user' })
  @IsString()
  @IsNotEmpty()
  homeAddress: string;

  @ApiProperty({ description: 'Profile picture URL', required: false })
  @IsString()
  @IsOptional()
  profilePic?: string;

  @ApiProperty({ description: 'Zipcode of the user' })
  @IsString()
  @IsNotEmpty()
  zipcode: string;
}
