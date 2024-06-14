import { Types } from 'mongoose';

export interface FoodStuff{
    id  : Types.ObjectId,
    name : string,
    description : string,
    price : number,
    category_id : Types.ObjectId,
    supplier_id : Types.ObjectId,
    stock_quantity : number , 

}