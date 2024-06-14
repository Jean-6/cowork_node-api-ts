import { Types } from 'mongoose';

enum RoomType{
    CALL = 1,
    MEETING = 2,
    COSY = 3,
}

export interface Room{ 
    id  : Types.ObjectId,
    type : RoomType,
    numberOfPlaces : number,
    seatingArrangement : string, // in U | theater | classroom | meeting
}