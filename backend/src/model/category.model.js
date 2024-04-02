import {model, Schema} from "mongoose";


export const CategorySchema = new Schema({
    name: String,
})

export const CategoryModel = model("categories", CategorySchema);
