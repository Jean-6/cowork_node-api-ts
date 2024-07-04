import mongoose, {Schema} from "mongoose";
import mongooseService from "../service/mongooseService";

enum ConfirmationOption {
    MANUAL = 1,
    NOTIFICATION = 2,
    AUTO = 3,
}

enum BookingMode{
    ONLINE ,
    PERSON ,
    AUTO
}

export interface Booking {
    resource_type : string,
    start_time : Date,
    end_time : Date,
    description : string,
    confirmation_option : ConfirmationOption,
    booking_mode : BookingMode
}

const BookingSchema = new Schema<Booking>({

    resource_type : { type : String, required: true},
    start_time : { type : Date, required : true },
    end_time : { type : Date, required : true },
    description : { type : String, required : true },
    confirmation_option : { type : Number, enum: ConfirmationOption, required: true},
    booking_mode : { type : Number, enum:BookingMode, required : true },

});

const Booking =  mongooseService.getMongoose().model<Booking>("Booking", BookingSchema);
export default Booking;