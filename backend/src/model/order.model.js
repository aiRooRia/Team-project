import { model, Schema } from "mongoose";
import { COLLECTIONS } from "../constant/index.js";

const FoodItemSchema = new Schema({
  foodId: {
     type: Schema.Types.ObjectId,
     required: true,
     ref: COLLECTIONS.FOOD,
  },
  quantity: {
     type: Number,
     required: true,
  },
 });

export const OrderSchema = new Schema({
  userId: {
    type: String,
    required: true,
    ref: COLLECTIONS.USER,
  },
  orderNumber: {
    type: Number,
    required: true,
  },
 foods: [FoodItemSchema],
  totalPrice: {
    type: Number,
    required: true,
  },
  process: {
    type: String,
    enum: ["Progress", "Delivered", "Waiting", "Active"],
    default: "Waiting",
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  distring: {
    type: String,
    required: true,
  },
  khoroo: {
    type: String,
    required: true,
  },
  apartment: {
    type: String,
    required: true,
  },
  payment: {
    type: String,
    enum: ["Paid", "Not Paid"],
    default: "Not Paid"
  },
});

export const OrderModel = model(COLLECTIONS.ORDER, OrderSchema);
