
import mongoose, { Schema } from 'mongoose';

export interface Center {
    name : string,
    address : {
        street : number,
        city : string,
        state : string,
        zip : number,
        country : string,
    },
    phone : string,
}

const CenterSchema = new Schema<Center>({
    name : { type : String, required: true},
    address : {
        street : { type : Number,required: true},
        city : { type : String, required: true},
        state : { type : String, required: true},
        zip : { type : Number, required: true},
        country : { type : String, required: true},
    },
    phone : String,
    }
);


const Center =  mongoose.model<Center>("Center", CenterSchema);
export default Center;