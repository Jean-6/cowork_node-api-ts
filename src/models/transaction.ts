import { Types  } from 'mongoose';

export interface Transaction {
    id :  Types.ObjectId,
    amount: number,
    date : Date,
    description : string,
}