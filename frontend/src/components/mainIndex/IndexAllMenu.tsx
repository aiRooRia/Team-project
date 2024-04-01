import { Stack, Typography, Button } from "@mui/material";
import { StarIcon } from "./Images";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { DiscountFoodCard, MainFoodCard } from "@/components/foodMenu/FoodCard";

export const IndexAllMenu = () => {
  return (
    <Stack marginBottom={4} marginTop={3}>
      <Stack width={"100%"} direction={"column"} marginBottom={3}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          spacing={1}
          marginBottom={2}
        >
          <Stack direction={"row"} spacing={1} alignItems={"center"}>
            <StarIcon></StarIcon>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Хямдралтай
            </Typography>
          </Stack>
          <Button sx={{ textTransform: "capitalize", color: "#18BA51" }}>
            <Typography>Бүгдийг харах </Typography>
            <ArrowForwardIosIcon
              sx={{ width: "15px", height: "15px" }}
            ></ArrowForwardIosIcon>
          </Button>
        </Stack>

        <Stack direction={"row"} justifyContent={"space-between"}>
          <DiscountFoodCard></DiscountFoodCard>
          <DiscountFoodCard></DiscountFoodCard>
          <DiscountFoodCard></DiscountFoodCard>
          <DiscountFoodCard></DiscountFoodCard>
        </Stack>
      </Stack>
      <Stack width={"100%"} direction={"column"} marginBottom={3}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          spacing={1}
          marginBottom={2}
        >
          <Stack direction={"row"} spacing={1} alignItems={"center"}>
            <StarIcon></StarIcon>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Үндсэн хоол
            </Typography>
          </Stack>
          <Button sx={{ textTransform: "capitalize", color: "#18BA51" }}>
            <Typography>Бүгдийг харах </Typography>
            <ArrowForwardIosIcon
              sx={{ width: "15px", height: "15px" }}
            ></ArrowForwardIosIcon>
          </Button>
        </Stack>

        <Stack direction={"row"} justifyContent={"space-between"}>
          <MainFoodCard></MainFoodCard>
          <MainFoodCard></MainFoodCard>
          <MainFoodCard></MainFoodCard>
          <MainFoodCard></MainFoodCard>
        </Stack>
      </Stack>

      <Stack></Stack>
    </Stack>
  );
};
