import { Router } from "express";
import { getCategory, getAllCategories, createCategory } from "../controller/category.js";

const category = Router();
category.route("/").get(getCategory).post(createCategory);
category.route("/all-categories").get(getAllCategories);

export { category };