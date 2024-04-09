import { Router } from "express";
import { getOrder, getAllOrders, createOrder } from "../controller/order.js";

const order = Router();
order.route("/").get(getOrder).post(createOrder);
order.route("/all-orders").get(getAllOrders);

export { order };