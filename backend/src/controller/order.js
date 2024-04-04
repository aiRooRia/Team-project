import { OrderModel } from "../model/order.model.js";
import { UserModel } from "../model/user.model.js";
import moment from "moment";

function generateOrderNumber() {
  const now = moment();
  const formattedDate = now.format("HHmmssSSS");
  return formattedDate;
}

export const getOrder = async (req, res) => {
  const { id } = req.body;
  try {
    const data = await OrderModel.findById(id)
      .populate("userId")
      .populate("foods");
    res.send(data);
  } catch (err) {
    console.log(err);
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const data = await OrderModel.find().populate("userId").populate("foods");
    res.send(data);
  } catch (err) {
    console.log(err);
  }
};

export const createOrder = async (req, res) => {
  const {userId, foods, totalPrice, distring, khoroo, apartment} = req.body
const orderNumber = generateOrderNumber();
  try{
    const newOrder = await OrderModel.create({userId: userId, orderNumber: orderNumber, foods: foods, totalPrice: totalPrice, distring: distring,khoroo:khoroo,apartment:apartment });
    res.send(newOrder)
  }
  catch(err){
    console.log(err);
  }
}

// export const createOrder = async (req, res) => {
//   const {
//     userId,
//     orderNumber,
//     foods,
//     totalPrice,
//     distring,
//     khoroo,
//     apartment,
//   } = req.body;
//   try {
//     const orderNumber = generateOrderNumber();
//     const newOrder = await OrderModel.create({
//       userId: "660cdd6fcacdca233ac8cce7",
//       orderNumber: orderNumber,
//       foods: ["660e9d24be20f2175941bffc"],
//       totalPrice: "1000",
//       distring: "suh",
//       khoroo: "1",
//       apartment: "1",
//     });
//     res.send(newOrder);
//   } catch (err) {
//     console.log(err);
//   }
// };
