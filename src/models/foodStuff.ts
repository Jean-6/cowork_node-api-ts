import { Types } from 'mongoose';

export interface FoodStuff{
    name : string,
    description : string,
    price : number,
    category_id : Types.ObjectId,
    supplier_id : Types.ObjectId,
    stock_quantity : number ,
    image : Image[]

}