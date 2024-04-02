import { Router } from "express";
import { getUser } from "../controller/users";

const user = Router();
user.route("/").get(getUser);

export { user };
