import {Router} from "express";
import { createUser, getAllUsers, getUserByField, getUserEmail, updateUser, updateUserPassword } from "../controller/users.js";

const user = Router();
user.route("/").get(getUserByField).post(createUser).put(updateUser);
user.route("/all-users").get(getAllUsers)
user.route("/update-password").get(getUserEmail).post(updateUserPassword);

export {user};