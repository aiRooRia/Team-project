import { Router } from "express";

const user = Router();
user.route("/").get(getUser)

export {user};