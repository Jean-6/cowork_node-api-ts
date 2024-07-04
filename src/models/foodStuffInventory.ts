/*Food stock inventory*/ 
import mongoose, {Schema, SchemaTypes, Types} from 'mongoose';

export interface FoodStuffInventory{
    product_id : Types.ObjectId,
    quantity : number ,
    last_updated : Date , 
}

const FoodStuffInventorySchema: Schema = new Schema(

//    product_id : { type : SchemaTypes.ObjectId, required: true},
//    quantity : { type : Number ,required: true},
//    last_updated : { type : Date , required: false},

);
    
    
    const FoodStuffInventory =  mongoose.model<FoodStuffInventory>("FoodStuffInventory", FoodStuffInventorySchema);
    export default FoodStuffInventory;