
enum RoomType{
    CALL = 1,
    MEETING = 2,
    COSY = 3,
}

export interface Room{
    id :  string,
    type : RoomType,
    numberOfPlaces : number,
    seatingArrangement : string, // in U | theater | classroom | meeting
}