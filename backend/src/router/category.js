import { Router } from "express";
import { getCategory, getAllCategories } from "../controller/category.js";

const category = Router();
category.route("/").get(getCategory);
category.route("/all-categories").get(getAllCategories);

export { category };