import { OrderModel } from "../model/order.model.js";

export const getOrder = async (req, res) => {
    const {id} = req.body
    console.log(req.body, "----------------------");
    try {
      const data = await OrderModel.findById(id);
    console.log(data);
  
    res.send(data);
    } catch (err) {
      console.log(err);
    }
  };
  
  export const getAllOrders = async (req, res) => {
    try {
      const data = await OrderModel.find();
    console.log(data);
  
    res.send(data);
    } catch (err) {
      console.log(err);
    }
  };