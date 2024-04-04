import mongoose, { Schema } from "mongoose";
// import { COLLECTIONS } from "../constant";
import { COLLECTIONS } from "../constant/index.js";
export const FoodModel = mongoose.model(
  COLLECTIONS.FOOD,
  new Schema({
    name: String,
    image: String,
    ingredient: String,
    price: Number,
  })
);
