import { Router } from "express";
import {
  getFood,
  getAllFoods,
  createFood,
  deleteFood,
  editFood,
} from "../controller/food.js";

const food = Router();
food.route("/").get(getFood).post(createFood).delete(deleteFood).put(editFood);
food.route("/all-foods").get(getAllFoods);

export { food };
