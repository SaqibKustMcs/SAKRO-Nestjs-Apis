import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateChatRoomDto {
  @ApiProperty({ 
    description: 'Buyer user ID',
    example: '64f1a2b3c4d5e6f7g8h9i0j1'
  })
  @IsString()
  @IsNotEmpty()
  buyerId: string;

  @ApiProperty({ 
    description: 'Seller user ID',
    example: '64f1a2b3c4d5e6f7g8h9i0j2'
  })
  @IsString()
  @IsNotEmpty()
  sellerId: string;

  @ApiProperty({ 
    description: 'Shop ID where the chat is happening',
    example: '64f1a2b3c4d5e6f7g8h9i0j3'
  })
  @IsString()
  @IsNotEmpty()
  shopId: string;
}
