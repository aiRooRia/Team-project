import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import { Box } from "@mui/system";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { BootstrapDialog } from "@/components/utils/styles";
import { FoodModal } from "./ModalFood";

type TDiscountFoodCardProps = {
  foodName: string;
  foodPrice: number;
  foodImage : string;
  discountRate: number;
  id: string;
  foodCategory: string;
  foodIngredients: string;
}

export const DiscountFoodCard = ({foodName, foodPrice, foodImage, discountRate, id, foodCategory, foodIngredients}:TDiscountFoodCardProps) => {
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const foodInfo = [
    {
      imgUrl: "/goyhool2.png",
      foodName: "Өглөөний хоол",
      foodPrice: "4800",
      foodIngredients: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
      quantity: "",
      discount: 20,
    },
  ];
  let discountedPrice =
    ((100 - discountRate) / 100) * (foodPrice);
  return (
    <>
      <Card
        onClick={handleClickOpen}
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "255px",
          backgroundColor: "transparent",
          height: "230px",
          boxShadow: 0,
          ":hover": {
            cursor: "pointer",
            scale: "101%",
          },
          ":active": {
            scale: "99%",
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            backgroundColor: "black",
            borderRadius: "10px",
          }}
        >
          <CardMedia
            component="img"
            alt="Өглөөний хоол"
            src={foodImage ? foodImage : foodInfo[0].imgUrl}
            // loading="lazy"
            sx={{
              width: "100%",
              height: "150px",
              borderRadius: "10px",
              transition: "background-color 0.3s, opacity 0.3s",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.25)",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "10px",
              right: "10px",
              width: "20%",
              height: "30px",
              borderRadius: "20px",
              borderStyle: "solid",
              borderWidth: "1px",
              borderColor: "white",
              cursor: "pointer",
              zIndex: 1,
              color: "white",
              backgroundColor: "#18BA51 ",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {discountRate}%
            </Typography>
          </Box>
        </Box>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: null,
          }}
        >
          <Typography variant="h6">{foodName}</Typography>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Typography sx={{ color: "#18BA51" }}>
              {discountedPrice}₮
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#272727", textDecoration: "line-through" }}
            >
              {foodPrice}₮
            </Typography>
          </Stack>
        </CardContent>
      </Card>
      <FoodModal handleClose={handleClose} open={open} foodName={foodName} discountedPrice={discountedPrice} foodPrice={foodPrice} imgUrl={foodImage} foodIngredients={foodIngredients}></FoodModal>
    </>
  );
};
