import { Types } from 'mongoose';

export interface Computer {
    id :  Types.ObjectId,
    brand : string,
    model : string,
    numberOfCore : number,
    frquency : number,
    RAMCapacity : number,
    storageCapacity : number,
    operatingSystem : string,


}