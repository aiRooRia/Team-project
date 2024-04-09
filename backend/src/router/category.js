import { Router } from "express";
import { getCategory, getAllCategories, createCategory, deleteCategory, editCategory } from "../controller/category.js";

const category = Router();
category.route("/").get(getCategory).post(createCategory).delete(deleteCategory).put(editCategory);
category.route("/all-categories").get(getAllCategories);

export { category };