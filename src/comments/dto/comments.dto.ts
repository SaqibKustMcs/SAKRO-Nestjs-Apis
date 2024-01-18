import { ApiProperty } from "@nestjs/swagger";

export class CreateCommentsDTO {
    static find() {
        throw new Error('Method not implemented.');
    }
    @ApiProperty()
    userId: string;
    @ApiProperty()
    postId: string;
    @ApiProperty()
    text: string;
    

}
export class PaginationDTO {
    @ApiProperty({ default: 0 })
    offset: string;
    @ApiProperty({ default: 10 })
    limit: string;
}
export class GetAllCommmentDTO extends PaginationDTO {
     @ApiProperty({ required: true })
     postId: string;
    static offset: any;
    static limit: any;
}
export class GetCommentsIdDTO {
    @ApiProperty()
    id?: string;
   
}
export class DeleteCommentIdDTO {
    @ApiProperty()
    id?: string;
   
}
export class UpdateCommentsDTO {
  
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


