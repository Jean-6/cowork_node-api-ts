
import { Types } from 'mongoose';

export interface Center {
    id :  Types.ObjectId,
    name : string,
    address : {
        street : number,
        city : string,
        state : string,
        postalCode : number,
        country : string,
    },
    phone : string,

}