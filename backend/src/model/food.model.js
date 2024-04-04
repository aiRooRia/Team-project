import { model, Schema } from "mongoose";
import { COLLECTIONS } from "../constant/index.js";

export const FoodSchema = new Schema({
  name: {type: String, required : true},
  image: {type: String, required : false},
  ingredients: {type: String, required : true},
  price: {type: Number, required : true},
  discountRate : {type: Number},
  category: {type: String, required: true}
});

export const FoodModel = model(COLLECTIONS.FOOD, FoodSchema);
