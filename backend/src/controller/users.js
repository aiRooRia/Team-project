import { UserModel } from "../model/user.model.js";

export const getUserByField = async (req, res) => {  //Login-d shiglana
  const {email, password} = req.body
  try {
    const data = await UserModel.find({ email: email, password: password});
  console.log(data);

  res.send(data);
  } catch (err) {
    console.log(err);
  }
};
export const getUserById = async (req, res) => {
  const {id} = req.body
  try {
    const data = await UserModel.findById(id);
  console.log(data);

  res.send(data);
  } catch (err) {
    console.log(err);
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const data = await UserModel.find();
  console.log(data);
  res.send(data);
  } catch (err) {
    console.log(err);
  }
};

export const createUser = async (req, res) => {  //signup -d ashiglana
  const {name, email, password, phoneNumber, address} = req.body
  try{
    const newUser = await UserModel.create({name: name, email: email, password: password, phoneNumber: phoneNumber, address: address});
    res.send(newUser)
  }
  catch(err){
    console.log(err);
  }
}

// export const createUser = async (req, res) => {  //signup -d ashiglana
//   try{
//     const newUser = await UserModel.create({name: "Bat", email: "bat@gmail.com", password: "12345678", phoneNumber: "00000000"});
//     res.send(newUser)
//   }
//   catch(err){
//     console.log(err);
//   }
// }

export const updateUser = async (req, res) => {   //edit profile-d ashiglana
  const {id, name, email, phoneNumber} = req.body
  try{
    const updatedUserData = await UserModel.updateOne({_id: id}, {name: name, email: email, phoneNumber: phoneNumber});
    res.send(updatedUserData)
  }
  catch(err){
    console.log(err);
  }
}

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
export const getUserEmail = async (req, res) => {  //forget password-d shiglana
  const {email} = req.body
  try {
    const data = await UserModel.find({ email: email});
  console.log(data);

  res.send(data);
  } catch (err) {
    console.log(err);
  }
};
export const updateUserPassword = async (req, res) => {    //forget password-d ashiglana 
  const {id, newPassword} = req.body
  try{
    const updatedUserData = await UserModel.updateOne({_id: id}, {password: newPassword});
    res.send(updatedUserData)
  }
  catch(err){
    console.log(err);
  }
}