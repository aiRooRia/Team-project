import { model, Schema } from "mongoose";



export const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    phoneNumber: String,
    role: {
        type: String,
        enum: ["user", "admin"]
    }
  });

  export const UserModel = model("users", UserSchema);