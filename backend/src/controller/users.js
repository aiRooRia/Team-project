import { UserModel } from "../model/user.model.js";
import bcryct from "bcrypt";

export const getUserByField = async (req, res) => {
  //Login-d shiglana
  const { email, password } = req.body;
  try {
    const data = await UserModel.find({ email: email, password: password });

    res.send(data);
    const isValid = await bcryct.compare(password, data[0].password);
    if (isValid) {
      res.send({
        success: true,
      });
    } else {
      res.send({
        message: "failed",
      });
    }
  } catch (err) {
    console.log(err);
  }
};
export const getUserById = async (req, res) => {
  const { id } = req.body;
  try {
    const data = await UserModel.findById(id);

    res.send(data);
  } catch (err) {
    console.log(err);
  }
};
export const getAllUsers = async (req, res) => {
  try {
    const data = await UserModel.find();
    res.send(data);
  } catch (err) {
    console.log(err);
  }
};

export const createUser = async (req, res) => {
  //signup -d ashiglana
  const { name, email, password, phoneNumber, address } = req.body;
  const salt = bcryct.genSaltSync(1);
  const hashedPassword = await bcryct.hash(password, salt);
  try {
    const existingUser = await UserModel.findOne({ email: email });
    if (existingUser) {
      return res.send({ message: "И-мэйл бүртгэлтэй байна" });
    } else {
      try {
        const newUser = await UserModel.create({
          name: name,
          email: email,
          password: hashedPassword,
          phoneNumber: phoneNumber,
          address: address,
        });
        // res.send(newUser);
        res.send({ success: true });
      } catch (err) {
        console.log(err);
      }
    }
  } catch (err) {
    console.log(err);
  }
};

export const updateUser = async (req, res) => {
  //edit profile-d ashiglana
  const { id, name, email, phoneNumber } = req.body;
  try {
    const updatedUserData = await UserModel.updateOne(
      { _id: id },
      { name: name, email: email, phoneNumber: phoneNumber }
    );
    res.send(updatedUserData);
  } catch (err) {
    console.log(err);
  }
};

export const getUserEmail = async (req, res) => {
  //forget password-d shiglana
  const { email } = req.body;
  // try {
  //   const checkUser = await UserModel.findOne({ email });
  //   if (checkUser) {
  //     return res.status(400).json({ message: "И-майл бүртгэлтэй байна" });
  //   }
  //   const newUser = await UserModel.create({
  //     name,
  //     email,
  //     password: dataWithHashedPassword,
  //     phoneNumber,
  //     address: location,
  //   });
  //   console.log(newUser);
  //   res.status(201).json({ success: true });
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).json({ message: "Internal server error" });
  // }
};

export const updateUserPassword = async (req, res) => {
  //forget password-d ashiglana
  const { id, newPassword } = req.body;
  try {
    const updatedUserData = await UserModel.updateOne(
      { _id: id },
      { password: newPassword }
    );
    res.send(updatedUserData);
  } catch (err) {
    console.log(err);
  }
};
