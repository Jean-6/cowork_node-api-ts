import {Expression, Types} from "mongoose";

export interface Task {

    title : string,
    description : string,
    start_time : Date,
    end_time : Date,
    user_id : Types.ObjectId,

}