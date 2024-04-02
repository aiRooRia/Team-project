import { Stack, Grid } from "@mui/material";
import { FoodCategoryToggle } from "./foodCategoryToggle";
import { DiscountFoodCard } from "./foodCard/DiscountFoodCard";
import { MainFoodCard } from "./foodCard/MainFoodCard";
import { Discount } from "@mui/icons-material";
export const FoodMenu = () => {
  return (
    <Stack height={"100%"} justifyContent={"start"}>
      <FoodCategoryToggle />
      <Stack
        minHeight={"53vh"}
        alignItems="center"
        width={"100%"}
        sx={{ marginY: 5 }}
      >
        <Grid container gridColumn={4} columnGap={"60px"}>
          <MainFoodCard></MainFoodCard>
          <MainFoodCard></MainFoodCard>
          <DiscountFoodCard></DiscountFoodCard>
          <DiscountFoodCard></DiscountFoodCard>
          <MainFoodCard></MainFoodCard>
          <MainFoodCard></MainFoodCard>
          <DiscountFoodCard></DiscountFoodCard>
          <DiscountFoodCard></DiscountFoodCard>
          <MainFoodCard></MainFoodCard>
          <MainFoodCard></MainFoodCard>
          <DiscountFoodCard></DiscountFoodCard>
          <DiscountFoodCard></DiscountFoodCard>
        </Grid>
      </Stack>
    </Stack>
  );
};
