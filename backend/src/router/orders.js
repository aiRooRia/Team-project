import { Router } from "express";
import { getOrder, getAllOrders } from "../controller/orders.js";

const order = Router();
order.route("/").get(getOrder);
order.route("/all-orders").get(getAllOrders);

export { order };