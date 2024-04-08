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

export const MainFoodCard = ({foodName, foodPrice, foodImage, discountRate, id, foodCategory, foodIngredients}:TDiscountFoodCardProps) => {
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
 let discountedPrice = 0;
  const foodInfo = [
    {
      imgUrl: "/goyhoolpizza.png",
      foodName: "Өглөөний хоол",
      foodPrice: "4,800",
      foodIngredients: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
      quantity: "",
    },
  ];
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
            loading="lazy"
            sx={{
              width: "100%",
              height: "150px",
              borderRadius: "10px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.25)",
            }}
          />
        </Box>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: null,
          }}
        >
          <Typography variant="h6">{foodInfo[0].foodName}</Typography>
          <Typography sx={{ color: "#18BA51" }}>
            {foodInfo[0].foodPrice}₮
          </Typography>
        </CardContent>
      </Card>
      <FoodModal handleClose={handleClose} open={open} foodName={foodName} discountedPrice={foodPrice} foodPrice={discountedPrice} imgUrl={foodImage} foodIngredients={foodIngredients}></FoodModal>
    </>
  );
};