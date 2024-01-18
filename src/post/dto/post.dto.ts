import { ApiProperty } from "@nestjs/swagger";

export class CreatePostDTO {
    static find() {
        throw new Error('Method not implemented.');
    }
   
    @ApiProperty()
    name: string;
    @ApiProperty()
    userId: string;
    @ApiProperty()
    pic: string;
    @ApiProperty()
    color: string;
    @ApiProperty()
    isEmailVerified: boolean;
    @ApiProperty()
    isDeleted: boolean;
}
export class PaginationDTO {
    @ApiProperty({ default: 0 })
    offset: string;
    @ApiProperty({ default: 10 })
    limit: string;
}
export class GetAllPostsDTO extends PaginationDTO {
     @ApiProperty({ required: false })
     name: string;
    static offset: any;
    static limit: any;
}
export class GetPostIdDTO {
    @ApiProperty()
    id?: string;
   
}
export class DeletePostIdDTO {
    @ApiProperty()
    id?: string;
   
}
export class UpdatePostDTO {
  
    @ApiProperty()
    id: string;
    @ApiProperty()
    name: string;
    
    @ApiProperty()
    pic: string;
    @ApiProperty()
    color: string;
    @ApiProperty()
    isDeleted: boolean;

   
}
