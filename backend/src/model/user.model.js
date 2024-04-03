import { model, Schema } from "mongoose";


export const UserSchema = new Schema({
    name: {type: String, required : true},
    email: {type: String, required : true},
    password: {type: String, required : true},
    phoneNumber: {type: String, required : true},
    address: {type: String},
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    }
  });

  export const UserModel = model("users", UserSchema);