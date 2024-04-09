import { Router } from "express";
import { getFood, getAllFoods, createFood, deleteFood, editFood } from "../controller/food.js";

const food = Router();
food.route("/").post(createFood).delete(deleteFood).put(editFood);
food.route("/all-foods").get(getAllFoods);
food.route("/getFood").post(getFood)

export { food };