import { Schema, model } from "mongoose";
import { COLLECTIONS } from "../constant/index.js";


export const UserSchema = new Schema({
     name: {type: String, required : true},
     email: {type: String, required : true},
     password:{type: String, required : true},
     phoneNumber:{type: String, required : false},
     address: String,
     role:{type:String,
     enum: ["user", "admin"],
     default: "user"}

});

export const UserModel = model(COLLECTIONS.USER, UserSchema)

