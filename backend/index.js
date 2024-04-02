import express from "express";
import mongoose from "mongoose";
import { CategoryModel } from "./src/model/category.model.js";


const port = 9000;
const app = express();
app.use(express.json());


mongoose
  .connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => console.log(`database connected successfully`))
  .catch((err) => console.log(err));

app.put("/user", (req, res) => {
  res.send("successful");
});

app.post("/user", async (req, res) => {
  const data = await CategoryModel.create({ name: "test" });
  console.log(data);
  res.send("ajillaaa");
});

app.listen(port, () => {
  console.log(`Create new port http://localhost:${port}`);
});
