import { model, Schema } from "mongoose";

export const FoodSchema = new Schema({
  name: {type: String, required : true},
  image: {type: String, required : true},
  ingredients: {type: String, required : true},
  price: {type: Number, required : true},
  discountRate : {type: Number}
});

export const FoodModel = model("foods", FoodSchema);
