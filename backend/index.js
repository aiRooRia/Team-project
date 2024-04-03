import express from "express";
import mongoose from "mongoose";
import { CategoryModel } from "./src/model/category.model.js";
import { UserModel } from "./src/model/user.model.js";
import dotenv from "dotenv";
import { FoodModel } from "./src/model/food.model.js";

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

app.post("/user", async (req, res) => {
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
  try {
    const food = await FoodModel.create({
      name: "tsuivan",
      image: "image",
      ingredients: "mah guril",
      price: 10000,
      categoryId: "660cdba387805ebf6fc92fcd",
    });
    console.log(food);
  } catch (e) {
    console.error(e);
  }
  res.send("ajillaaa");
});

app.listen(port, () => {
  console.log(`Create new port http://localhost:${port}`);
});
