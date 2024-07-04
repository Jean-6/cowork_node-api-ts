import mongoose, {Schema} from "mongoose";
import mongooseService from "../service/mongooseService";

export interface User {
    username : string,
    email : string,
    phone : string,
    password : string,
    created_at : Date,

}

const UserSchema = new Schema<User>({

    username : { type : String, required : true },
    email : { type : String, required : true },
    phone : { type : String, required : true },
    password : { type : String, required : true },
    created_at : { type : Date, required : false },
});

const User = mongooseService.getMongoose().model<User>("User",UserSchema);

export default User;