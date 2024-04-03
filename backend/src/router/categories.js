import { Router } from "express";
import { getAllCategories, getCategory } from "../controller/categories.js";

const category = Router();
category.route("/").get(getCategory);
category.route("/all-categories").get(getAllCategories);

export { category };