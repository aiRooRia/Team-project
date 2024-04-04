import { CategoryModel } from "../model/category.model.js";
import { FoodModel } from "../model/food.model.js";

export const getFood = async (req, res) => {
  const { id } = req.body;
  try {
    const data = await FoodModel.findById(id);
    res.send(data);
  } catch (err) {
    console.log(err);
  }
};

export const getAllFoods = async (req, res) => {
  try {
    const data = await FoodModel.find();
    res.send(data);
  } catch (err) {
    console.log(err);
  }
};

export const createFood = async (req, res) => {
  const { name, image, ingredients, price, discountRate } = req.body;
  try {
    const newFood = await FoodModel.create({
      name: name,
      image: image,
      ingredients: ingredients,
      price: price,
      discountRate: discountRate,
    });
    await CategoryModel.findOneAndUpdate(
      { name: newFood.category },
      { $push: { foodId: newFood._id } }
    );
    res.send(newFood);
  } catch (err) {
    console.log(err);
  }
};

// export const createFood = async (req, res) => {
//   // const {name, ingredients, price, discountRate} = req.body
//   try {
//     const newFood = await FoodModel.create({
//       name: "bansh",
//       ingredients: "mah, guril",
//       price: "1000",
//       discountRate: "10",
//       category: "chinese food",
//     });
//     await CategoryModel.findOneAndUpdate(
//       { name: newFood.category },
//       { $push: { foodId: newFood._id } }
//     );

//     res.send(newFood);
//   } catch (err) {
//     console.log(err);
//   }
// };
