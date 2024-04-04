import { OrderModel } from "../model/order.model.js";

export const getOrder = async (req, res) => {
    const {id} = req.body
    try {
      const data = await OrderModel.findById(id);
  
    res.send("order ajillaa");
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