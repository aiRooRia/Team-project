import { model, Schema } from "mongoose";
import { COLLECTIONS } from "../constant";

export const OrderSchema = new Schema({
  userId: {
    type: String,
    required: true,
    ref: COLLECTIONS.USER,
  },
  orderNumber: Number,
  foods: [
    {
      type: Schema.Types.ObjectId,
      ref: COLLECTIONS.FOOD
    },
  ],
  totalPrice: Int8Array,   
  process: {
    type: String,
    enum: ["PENDING", "SUCCESS"],
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  distring: String,
  khoroo: String,
  apartment: String,
});


export const OrderModel = model("orders", OrderSchema);