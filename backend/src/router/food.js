import { Router } from "express";
import { getFood, getAllFoods, createFood } from "../controller/food.js";

const food = Router();
food.route("/").get(getFood).post(createFood);
food.route("/all-foods").get(getAllFoods);

export { food };