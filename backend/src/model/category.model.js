import {model, Schema} from "mongoose";


export const CategorySchema = new Schema({
    name: String,
    something: String
})

export const CategoryModel = model("categories", CategorySchema);
