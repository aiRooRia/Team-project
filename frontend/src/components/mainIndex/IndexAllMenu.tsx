import { Stack, Typography, Button } from "@mui/material";
import { StarIcon } from "./Images";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { DiscountFoodCard } from "../foodMenu/foodCard/DiscountFoodCard";
import { MainFoodCard } from "../foodMenu/foodCard/MainFoodCard";
import { useEffect, useState, useContext} from "react";
import { Grid } from "@mui/material";
import { OrderContext } from "../utils/context/orderContext";
import { useRouter } from "next/router";

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

export const IndexAllMenu = () => {
  const ENDPOINT_URL = process.env.NEXT_PUBLIC_ENDPOINT;
  const {selectedCategory, setSelectedcategory} = useContext(OrderContext);
  const [allCategory, setAllCategory] = useState<TCategotyData[]>([]);

  const [allFood, setAllFood] = useState<TFoodItem[]>([]);
  const [discountedFood, setDiscountedFood] = useState<TFoodItem[]>([]);
  const [filteredFood, setFilteredFood] = useState<TFoodItem[]>([]);
  const [sliceNumber, setSliceNumber] = useState<number>(4);
  const [sliceNumberCategory, setSliceNumberCategory] = useState<number>(4);
  const router = useRouter();
  const handlePush = (route: string) => {
    router.push(route);
  };
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
      setDiscountedFood(data.filter((el: TFoodItem) => el.discountRate > 0));
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

  useEffect(() => {
    fetchFoodData();
    fetchCategoryData();
  }, []);

  return (
    <Stack marginBottom={4} marginTop={3}>
      <Stack width={"100%"} direction={"column"} marginBottom={4}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          spacing={1}
          marginBottom={1}
        >
          <Stack direction={"row"} spacing={1} alignItems={"center"}>
            <StarIcon></StarIcon>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Хямдралтай
            </Typography>
          </Stack>
          <Button
            onClick={() => setSliceNumber(discountedFood.length)}
            sx={{ textTransform: "capitalize", color: "#18BA51" }}
          >
            <Typography>Бүгдийг харах </Typography>
            <ArrowForwardIosIcon
              sx={{ width: "15px", height: "15px" }}
            ></ArrowForwardIosIcon>
          </Button>
        </Stack>
        <Grid container gridColumn={4} columnGap={"60px"}>
          {discountedFood.length > 0
            ? discountedFood
                .slice(0, sliceNumber)
                .map((el) =>
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
            : null}
        </Grid>
      </Stack>
      <Stack width={"100%"} direction={"column"} marginBottom={5}>
        {allCategory?.map(
          (category) =>
            category.foodId.length > 0 && (
              <Stack marginBottom={4}>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  spacing={1}
                  marginBottom={1}
                >
                  <Stack direction={"row"} spacing={1} alignItems={"center"}>
                    <StarIcon></StarIcon>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {category.name}
                    </Typography>
                  </Stack>
                  <Button
                    onClick={() =>{
                      setSelectedcategory(category.name);
                      handlePush("/layout/menu");
                    }
                      
                    }
                    sx={{ textTransform: "capitalize", color: "#18BA51" }}
                  >
                    <Typography>Бүгдийг харах </Typography>
                    <ArrowForwardIosIcon
                      sx={{ width: "15px", height: "15px" }}
                    ></ArrowForwardIosIcon>
                  </Button>
                </Stack>

                <Grid
                  container
                  gridColumn={4}
                  columnGap={"60px"}
                  // sx={{ marginY: 5 }}
                >
                  {category.foodId
                    .slice(0, sliceNumberCategory)
                    .map((foodItem) =>
                      foodItem.discountRate === 0 || !foodItem.discountRate ? (
                        <MainFoodCard
                          foodIngredients={foodItem.ingredients}
                          foodCategory={foodItem.category}
                          id={foodItem._id}
                          foodName={foodItem.name}
                          foodPrice={foodItem.price}
                          foodImage={foodItem.image}
                          discountRate={foodItem.discountRate}
                        />
                      ) : (
                        <DiscountFoodCard
                          foodIngredients={foodItem.ingredients}
                          foodCategory={foodItem.category}
                          id={foodItem._id}
                          foodName={foodItem.name}
                          foodPrice={foodItem.price}
                          foodImage={foodItem.image}
                          discountRate={foodItem.discountRate}
                        />
                      )
                    )}
                </Grid>
              </Stack>
            )
        )}
      </Stack>

      <Stack></Stack>
    </Stack>
  );
};
