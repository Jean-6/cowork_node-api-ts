import {Schema} from "mongoose";
import mongooseService from "../service/mongooseService";

export interface Category{
    category_name : string ,

}
const CategorySchema = new Schema<Category>({
    category_name : { type : String ,required: true},
})

const Category = mongooseService.getMongoose().model<Category>("Category",CategorySchema);

export default Category;