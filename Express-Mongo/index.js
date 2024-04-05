import express from "express";
import mongoose from "mongoose";
// import { UserModel } from "./model/user.model.js";
import { FoodModel } from "./model/food.model.js";

const PORT = 8080;
const app = express();
const MONGO_CONNECTION_STRING =
  "mongodb+srv://ariguun10:Oorsogoif0rmongodb@cluster0.kouvryn.mongodb.net/";

mongoose
  .connect(MONGO_CONNECTION_STRING)
  .then(() => console.log(`database connected`))
  .catch((err) => console.log(err));

app.get("/user", async (req, res) => {
  const data = await UserModel.find();
  console.log(data);
  res.send("Working");
});
app.post("/users", async (req, res) => {
  const data = await UserModel.create({ name: "Asia" });
  console.log(data);
});
app.post("/food", async (req, res) => {
  const food = await FoodModel.create({
    name: "Tsuiwan",
    image: " 33",
    ingredient: "herchsen guril",
    price: "1200",
  });
  res.send(food);
});
app.post("/insertMany", async (req, res) => {
  const data = await UserModel.insertMany([{ age: "13" }, { age: "20" }]);
  console.log(data);
  res.send(data);
});
app.put("/updateOne", async (req, res) => {
  const data = await UserModel.updateOne({ age: "13" }, { age: "1" });
});
app.get("/findbyField", async (req, res) => {
  const data = await UserModel.find({ age: "33" });
  console.log(data);
});
app.delete("/deleteByField", async (req, res) => {
  const data = await UserModel.deleteMany({ age: "33" });
  console.log(data);
});

app.listen(PORT, () => {
  console.log(`Running http://localhost:${PORT}`);
});
