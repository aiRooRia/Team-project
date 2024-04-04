import { model, Schema } from "mongoose";
import { COLLECTIONS } from "../constant/index.js";

export const CategorySchema = new Schema({
  name: String,
  foodId: [
    {
      type: Schema.Types.ObjectId,
      ref: COLLECTIONS.FOOD,
    },
  ],
});

export const CategoryModel = model(COLLECTIONS.CATEGORY, CategorySchema);
