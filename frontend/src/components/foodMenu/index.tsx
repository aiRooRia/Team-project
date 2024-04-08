import { Stack, Grid } from "@mui/material";
import { DiscountFoodCard } from "./foodCard/DiscountFoodCard";
import { MainFoodCard } from "./foodCard/MainFoodCard";
import { Discount, LogoDev } from "@mui/icons-material";
import { useState, useEffect, useContext } from "react";
import { FoodCategoryToggle } from "./foodCategoryToggle";
import { EmptyMenu } from "../admin/MenuIsEmpty";
import { OrderContext } from "../utils/context/orderContext";

type TCategotyData = {
  _id: string;
  name: string;
  foodId: TFoodItem[];
};
type TFoodItem = {
  name: string;
  price: number;
  image: string;
  category: string;
  discountRate: number;
  _id: string;
  ingredients: string;
};

export const FoodMenu = () => {
  const ENDPOINT_URL = process.env.NEXT_PUBLIC_ENDPOINT;
  const {selectedCategory, setSelectedcategory} = useContext(OrderContext);
  const [allCategory, setAllCategory] = useState<TCategotyData[]>([]);

  const [allFood, setAllFood] = useState<TFoodItem[]>([]);
  const [filteredFood, setFilteredFood] = useState<TFoodItem[]>([]);

  const fetchFoodData = async () => {
    try {
      const data = await fetch(`${ENDPOINT_URL}/food/all-foods`, {
        method: "GET",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      }).then((data) => data.json());
      setAllFood(data);
      setFilteredFood(data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchCategoryData = async () => {
    try {
      const data = await fetch(`${ENDPOINT_URL}/category/all-categories`, {
        method: "GET",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      }).then((data) => data.json());
      setAllCategory(data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(allCategory, "allcategory");

  const filterFoodByCategory = (clickedCategory: string) => {
    if (selectedCategory !== "") {
       const categoryData = allCategory.filter((el) => el.name === clickedCategory);
       const foodItems = categoryData.flatMap((category) => category.foodId);
       setFilteredFood(foodItems);
    }
   };
  useEffect(() => {
    fetchFoodData();
    fetchCategoryData();
  }, []);
  useEffect(() => {
    filterFoodByCategory(selectedCategory);
  }, [selectedCategory]);
  return (
    <Stack height={"100%"} justifyContent={"start"}>
     
      <Stack
        minHeight={"53vh"}
        alignItems="center"
        width={"100%"}
      >
         <FoodCategoryToggle
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedcategory}
        allCategory={allCategory}
      ></FoodCategoryToggle>
        <Grid container gridColumn={4} columnGap={"60px"}  sx={{ marginY: 5 }}>
        {filteredFood.length > 0 ? (
                  filteredFood.map((el) =>
                    el.discountRate === 0 || !el.discountRate ? (
                      <MainFoodCard
                        foodIngredients={el.ingredients}
                        foodCategory={el.category}
                        id={el._id}
                        foodName={el.name}
                        foodPrice={el.price}
                        foodImage={el.image}
                        discountRate={el.discountRate}
                      />
                    ) : (
                      <DiscountFoodCard
                        foodIngredients={el.ingredients}
                        foodCategory={el.category}
                        id={el._id}
                        foodName={el.name}
                        foodPrice={el.price}
                        foodImage={el.image}
                        discountRate={el.discountRate}
                      />
                    )
                  )
                ) : (
                  <EmptyMenu></EmptyMenu>
                )}
        </Grid>
      </Stack>
    </Stack>
  );
};
