import { ApiProperty } from "@nestjs/swagger";

export class CreateOrderDTO {
    static find() {
        throw new Error('Method not implemented.');
    }
    @ApiProperty()
    deliveryType: string;
    @ApiProperty()
    flightType: string;
    @ApiProperty()
    flightNumber: string;
    @ApiProperty()
    airlineName: string;
    @ApiProperty()
    departureCountry: string;
    @ApiProperty()
    departureCity: string;
    @ApiProperty()
    departureAirport: string;
    @ApiProperty()
    departureDate: string;
    @ApiProperty()
    departureTime: string;
    @ApiProperty()
    ticketImage: string;
    @ApiProperty()
    arrivalCountry: string;
    @ApiProperty()
    arrivalCity: string;
    @ApiProperty()
    arrivalAirport: string;
    @ApiProperty()
    arrivalDate: string;
    @ApiProperty()
    arrivalTime: string;
    @ApiProperty()
    luggageWeight: number;
    @ApiProperty()
    isDropPackage: boolean;
    @ApiProperty()
    isPickupPackage: boolean;
}
export class PaginationDTO {
    @ApiProperty({ default: 0 })
    offset: string;
    @ApiProperty({ default: 10 })
    limit: string;
}
export class GetAllOrdersDTO extends PaginationDTO {
     @ApiProperty({ required: false })
     departureCountry: string;
    static offset: any;
    static limit: any;
}
export class GetOrderIdDTO {
    @ApiProperty()
    id?: string;
   
}
export class DeleteOrderIdDTO {
    @ApiProperty()
    id?: string;
   
}
export class UpdateOrderDTO {
  
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


