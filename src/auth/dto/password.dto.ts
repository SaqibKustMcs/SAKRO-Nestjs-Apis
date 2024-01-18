import { ApiProperty } from '@nestjs/swagger';

export class PasswordDTO {
  @ApiProperty()
  password: string;
}
