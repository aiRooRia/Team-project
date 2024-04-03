import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { OrderModel } from "./src/model/order.model.js";
import { order } from "./src/router/orders.js";
import { user } from "./src/router/users.js";
import { category } from "./src/router/categories.js";
import { food } from "./src/router/foods.js";

const port = 9000;
const app = express();
app.use(express.json());
dotenv.config();

mongoose
  .connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => console.log(`database connected successfully`))
  .catch((err) => console.log(err));

app.use("/user", user);
app.use("/category", category);
app.use("/food", food);
app.use("/order", order);



app.listen(port, () => {
  console.log(`Create new port http://localhost:${port}`);
});
