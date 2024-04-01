import { Stack, Grid } from "@mui/material";
import { FoodCategoryToggle } from "./foodCategoryToggle";
import { DiscountFoodCard, MainFoodCard } from "./FoodCard";
import { Discount } from "@mui/icons-material";
export const FoodMenu = () => {
  return (
    <Stack height={"100%"} justifyContent={"start"}>
      <FoodCategoryToggle />
      <Stack
        height={"53vh"}
        alignItems="center"
        width={"100%"}
        sx={{ marginTop: 5 }}
      >
        <Grid container overflow="auto" gridColumn={4} columnGap={"54px"}>
          <MainFoodCard></MainFoodCard>
          <MainFoodCard></MainFoodCard>
          {/* <DiscountFoodCard></DiscountFoodCard> */}
          <DiscountFoodCard></DiscountFoodCard>
        </Grid>
      </Stack>
    </Stack>
  );
};
