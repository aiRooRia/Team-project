import { CategoryModel } from "../model/category.model.js";
export const getCategory = async (req, res) => {
  const { id } = req.body;
  try {
    const data = await CategoryModel.findById(id).populate("foodId");
    console.log(data);
    res.send(data);
  } catch (err) {
    console.log(err);
  }
};

export const getAllCategories = async (req, res) => {
  try {
    const data = await CategoryModel.find().populate("foodId");
    console.log(data);
    res.send(data);
  } catch (err) {
    console.log(err);
  }
};

export const createCategory = async (req, res) => {
  try {
    const newCategory = await CategoryModel.create({
      name: req.body.name,
      foodId: [],
    });
    res.send(newCategory);
  } catch (err) {
    console.log(err);
  }
};

// export const createCategory = async (req, res) => {
//   try {
//     const newCategory = await CategoryModel.create({ name: "chinese food", foodId:[]});
//     res.send(newCategory)
//   } catch (err) {
//     console.log(err);
//   }
// };
