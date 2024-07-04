import { Types } from 'mongoose';

export interface Computer {
    brand : string,
    model : string,
    number_of_Core : number,
    frequency : number,
    random_access_memory_capacity : number,
    storage_capacity : number,
    operating_system : string,
    image : Image[]

}



