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
    // console.log(data);
    res.send(data);
  } catch (err) {
    console.log(err);
  }
};

export const createCategory = async (req, res) => {
  console.log(req.body.name, "req body name");
  try {
    const existingCategory = await CategoryModel.findOne({ name: req.body.name });
    if (existingCategory) {
      return res.send({ message: "Бүртгэгдсэн категори байна" });
    } else {
      try {
        const newCategory = await CategoryModel.create({
          name: req.body.name,
          foodId: [],
        });
        res.send({success : true});
      } catch (err) {
        console.log(err);
      }
    }
   
  } catch (err) {
    console.log(err);
  }
};

// export const createCategory = async (req, res) => {
//   try {
//     const newCategory = await CategoryModel.create({ name: "Soup", foodId:[]});
//     res.send(newCategory)
//   } catch (err) {
//     console.log(err);
//   }
// };


export const deleteCategory = async(req,res) => {
  try{
    const data = await CategoryModel.deleteOne({name : req.body.name})
    res.send({ok: data})
  } catch(err){
    console.log(err);
  }
}

export const editCategory = async (req, res) => {
  const { _id, name} =
    req.body;
console.log(req.body, "++++++++++++++");
  try {
    const editedCategory = await CategoryModel.findOneAndUpdate(
      { _id: _id },
      {
        name: name,        
      },
      { new: true }
    );
    console.log(editedCategory, "--------------------");  
    res.status(200).send({success: true});
    
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
};