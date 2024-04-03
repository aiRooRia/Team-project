import { Router } from "express";
import { createUser, getAllUsers, getUserByField } from "../controller/users.js";

const user = Router();
user.route("/").get(getUserByField).post(createUser);
user.route("/all-users").get(getAllUsers);

export { user };
