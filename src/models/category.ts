import { Types } from 'mongoose';

export interface Category{
    category_id : Types.ObjectId,
    category_name : string ,
}