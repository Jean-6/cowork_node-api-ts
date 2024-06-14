//Stock
import { Types } from 'mongoose';

export interface MaterialInventory{
    inventory_id : Types.ObjectId, 
    product_id : Types.ObjectId,
    quantity : number ,
    last_updated : Date , 
}