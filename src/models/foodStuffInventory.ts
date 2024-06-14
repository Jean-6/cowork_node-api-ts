//Stock
import { Types } from 'mongoose';

export interface StuffFoodInventory{
    inventory_id : Types.ObjectId, 
    product_id : Types.ObjectId,
    quantity : number ,
    last_updated : Date , 
}