import { FoodModel } from "../model/food.model.js";

export const getFood = async (req, res) => {
    const {id} = req.body
    try {
      const data = await FoodModel.findById(id);
    console.log(data);
  
//     res.send(data);
res.send("food ajillaa")
    } catch (err) {
      console.log(err);
    }
  };
  
  export const getAllFoods = async (req, res) => {
    try {
      const data = await FoodModel.find();
    console.log(data);
  
    res.send(data);
    } catch (err) {
      console.log(err);
    }
  };