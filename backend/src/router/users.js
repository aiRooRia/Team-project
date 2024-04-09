import {Router} from "express";
import { createUser, getAllUsers, getUserByField, getUserById, getUserEmail, updateUser, updateUserPassword } from "../controller/users.js";

const user = Router();

user.route("/login").post(getUserByField);
user.route("/logged-in-user").post(getUserById);
user.route("/").post(createUser).put(updateUser);
user.route("/all-users").get(getAllUsers);
user.route("/update-password").get(getUserEmail).post(updateUserPassword);

export {user};