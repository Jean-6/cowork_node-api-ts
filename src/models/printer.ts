import { Types } from 'mongoose';

export interface Printer {
    id  : Types.ObjectId,
    type : string, // jet d'encre | thermique | laser | multifonction
    resolution: string,
    printingSpeed : number,
    capacity : number,
    connectivity: string,
    paperFormat : string,
    advancedFeatures: string,

}