import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { generateStringId } from 'src/utils/utils';

export type orderDocument = HydratedDocument<Order>;

@Schema()
export class Order {
 

    @Prop({ type: String, default: generateStringId })
    id: string;

    @Prop({ type: String, default: '' })
    deliveryType: string;

    @Prop({ type: String, default: '' })
    flightType: string;
    @Prop({ type: String, default: '' })
    flightNumber: string;
    @Prop({ type: String, default: '' })
    airlineName: string;
    @Prop({ type: String, default: '' })
    departureCountry: string;
    @Prop({ type: String, default: '' })
    departureCity: string;
    @Prop({ type: String, default: '' })
    departureAirport: string;
    @Prop({ type: String, default: '' })
    departureDate: string;
    @Prop({ type: String, default: '' })
    departureTime: string;
    @Prop({ type: String, default: '' })
    ticketImage: string;
    @Prop({ type: String, default: '' })
    arrivalCountry: string;
    @Prop({ type: String, default: '' })
    arrivalCity: string;
    @Prop({ type: String, default: '' })
    arrivalAirport: string;
    @Prop({ type: String, default: '' })
    arrivalDate: string;
    @Prop({ type: String, default: '' })
    arrivalTime: string;
    @Prop({ type: Number, default: '' })
    luggageWeight: number;
    @Prop({ type: Boolean, default: false })
    isDropPackage: boolean;

    @Prop({ type: Boolean, default: false })
    isPickupPackage: boolean;

    @Prop({ type: Boolean, default: false })
    isDeleted: boolean;
}

export const OrderSchema = SchemaFactory.createForClass(Order);

OrderSchema.set('timestamps', true);
OrderSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    },
});
