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



  
app.put("/user", (req, res) => {
  res.send("successful");
});
app.use("/user", user);
app.use("/category", category);
app.use("/food", food);
app.use("/order", order);


app.post("/order", async (req, res) => {
  // const data = await CategoryModel.create({
  //   name: "test",
  //   something: "helloo",
  // });

  // const hello = await UserModel.create({
  //   name: "Galaa",
  //   email: "something@gmail.com",
  //   password: "ahe",
  //   phoneNumber: "2341324132",
  //   role: "hi",
  // });
  // try {
  //   const food = await FoodModel.create({
  //     name: "tsuivan",
  //     image: "image",
  //     ingredients: "mah guril",
  //     price: 10000,
  //     categoryId: "660cdba387805ebf6fc92fcd",
  //   });
  //   console.log(food);
  // } catch (e) {
  //   console.error(e);
  // }
  try {
    const order = await OrderModel.create({
      userId: "660cdd6fcacdca233ac8cce7",
      orderNumber: 1,
      foods: [
        "660cdf9aa2b28c343accd112",
      ],
      totalPrice: 10000,   
      process: "PENDING",
      distring: "Sukhbaatar",
      khoroo: "1",
      apartment: "2",
    });
    console.log(order);
  } catch (e) {
    console.error(e);
  }
  res.send("ajillaaa");
});
console.log( Date.now , "date----");

app.listen(port, () => {
  console.log(`Create new port http://localhost:${port}`);
});
