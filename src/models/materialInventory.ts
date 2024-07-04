/*Material stock inventory*/ 
import {Schema, SchemaTypes, Types} from 'mongoose';
import mongooseService from "../service/mongooseService";
import Booking from "./booking";
import MaterialInventory from "../controllers/materialInventory";



export interface MaterialInventory{
    product_id : Types.ObjectId,
    quantity : number ,
    last_updated : Date , 
}


const MaterialInventorySchema = new Schema<MaterialInventory>({

    product_id : { type : SchemaTypes.ObjectId, required:  true},
    quantity : { type: Number , required : true},
    last_updated : { type : Date ,required: true},
});

const MaterialInventory = mongooseService.getMongoose().model<MaterialInventory>("MaterialInventory",MaterialInventorySchema);