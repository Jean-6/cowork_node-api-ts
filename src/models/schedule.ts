import {Task} from "./task";
import mongoose, {Schema} from "mongoose";

export interface Schedule{
    week_start_date : Date,
    week_end_date : Date,
    days : {
        day : string,
        task : Task[],
    },
}

const ScheduleSchema = new Schema <Schedule> ({

    week_start_date : {type : Date,required : true},
    week_end_date : {type : Date,required : true},
    days : {
        day : { type : String, required : true},
        task : { type : [], required : true},
    },
});

const Schedule = mongoose.model<Schedule>( "Schedule",ScheduleSchema);
export default Schedule;