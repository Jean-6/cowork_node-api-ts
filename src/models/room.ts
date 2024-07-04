import mongoose, {Schema} from "mongoose";
enum RoomType{
    CALL = 1,
    MEETING = 2,
    COSY = 3,
}

enum SeatingArrangement{
    U = 0 ,
    THEATER = 1 ,
    CLASSROOM = 2 ,
    MEETING = 3  ,
}

export interface Room{
    room_type : string,
    number_of_place : number,
    seating_arrangement : SeatingArrangement,
}

const RoomSchema = new Schema<Room>({
    room_type : { type : String ,enum : RoomType, required : true },
    number_of_place : { type : Number, required: true },
    seating_arrangement : { type : Number , enum : SeatingArrangement,required : true },
});


const Room = mongoose.model<Room>("Room",RoomSchema);

export default Room;
