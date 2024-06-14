import { Types } from 'mongoose';

export interface User {
    id :  Types.ObjectId,
    username : string,
    email : string,
    phone : string,
    password : string,
    created_at : Date,

}