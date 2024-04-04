import {Router} from "express";
import { createUser, getUserByField, getUserEmail, updateUser, updateUserPassword } from "../controller/users.js";

const user = Router();
user.route("/").get(getUserByField).post(createUser).put(updateUser);
user.route("/update-password").get(getUserEmail).post(updateUserPassword);

export {user};