import { Router } from "express";
import { getFood, getAllFoods } from "../controller/food.js";

const food = Router();
food.route("/").get(getFood);
food.route("/all-foods").get(getAllFoods);

export { food };