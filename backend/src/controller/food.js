import { CategoryModel } from "../model/category.model.js";
import { FoodModel } from "../model/food.model.js";

export const getFood = async (req, res) => {
  const { id } = req.body;
  try {
    const data = await FoodModel.findById(id);
    res.status(200).send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
};

export const getAllFoods = async (req, res) => {
  try {
    const data = await FoodModel.find();
    res.status(200).send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
};

export const createFood = async (req, res) => {
  const { name, image, ingredients, price, discountRate, category } = req.body;
  try {
    const newFood = await FoodModel.create({
      name: name,
      image: image,
      ingredients: ingredients,
      price: price,
      discountRate: discountRate,
      category: category,
    });
    await CategoryModel.findOneAndUpdate(
      { name: newFood.category },
      { $push: { foodId: newFood._id } }
    );
    res.status(200).send(newFood);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
};
export const editFood = async (req, res) => {
  const { id, name, image, ingredients, price, discountRate, category } =
    req.body;
  try {
    const editedFood = await FoodModel.findOneAndUpdate(
      { _id: id },
      {
        name: name,
        image: image,
        ingredients: ingredients,
        price: price,
        discountRate: discountRate,
        category: category,
      }
    );
    res.status(200).send(editedFood);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
};
export const deleteFood = async (req, res) => {
  try {
    const food = await FoodModel.deleteOne({ _id: req.body.id });
    res.status(200).send(food);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
};

