import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { user } from "./src/router/users.js";
import { category } from "./src/router/category.js";
import { food } from "./src/router/food.js";
import { order } from "./src/router/order.js";
import cors from "cors";
const port = 9000;
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const connection = process.env.MONGO_CONNECTION_STRING;
mongoose
  .connect(connection)
  .then(() => console.log("database connected successfully"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("ajillaa");
});
app.get("/test", (req, res) => {
  res.send("test ajillaa");
});

app.use("/user", user);
app.use("/category", category);
app.use("/food", food);
app.use("/order", order);


app.listen(port, () => {
  console.log(`Create new port http://localhost:${port}`);
});
