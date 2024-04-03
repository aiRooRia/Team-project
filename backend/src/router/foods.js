import { Router } from "express";
import { getAllFoods, getFood } from "../controller/foods.js";

const food = Router();
food.route("/").get(getFood);
food.route("/all-foods").get(getAllFoods);

export { food };