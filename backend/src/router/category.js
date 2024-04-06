import { Router } from "express";
import { getCategory, getAllCategories, createCategory, deleteCategory } from "../controller/category.js";

const category = Router();
category.route("/").get(getCategory).post(createCategory).delete(deleteCategory);
category.route("/all-categories").get(getAllCategories);

export { category };