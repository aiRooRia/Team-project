import { model, Schema } from "mongoose";
import { COLLECTIONS } from "../constant/index.js";

export const FoodSchema = new Schema({
  name: String,
  image: String,
  ingredients: String,
  price: Number,
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: COLLECTIONS.CATEGORY,
  },
});

export const FoodModel = model("foods", FoodSchema);
