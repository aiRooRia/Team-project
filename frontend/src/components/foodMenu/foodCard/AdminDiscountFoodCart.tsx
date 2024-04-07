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
import { EditFood } from "@/components/admin/EditFood";
import { DeleteFood } from "@/components/admin/DeleteFood";

type TAdminDiscountFoodCardProps = {
    foodName: string;
    foodPrice: number;
    foodImage : string;
    discountRate: number;
    id: string;
    foodCategory: string;
    foodIngredients: string;
  }
export const AdminDiscountFoodCard = ({foodName, foodPrice, foodImage, discountRate, id, foodCategory, foodIngredients}:TAdminDiscountFoodCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [openEditFood, setOpenEditFood] = useState(false);
  const [openDeleteFood, setOpenDeleteFood] = useState(false);
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

  const handleMouseEnter = () => {
    setIsHovered(true);
    setTimeout(() => {
      setIsVisible(true);
    }, 2);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsVisible(false);
  };
  const handleCloseEditFood: () => void = () => {
    setOpenEditFood(false);
  };
  const handleClickOpenEditFood = () => {
    setOpenEditFood(true);
  };
  const handleCloseDeleteFood: () => void = () => {
    setOpenDeleteFood(false);
  };
  const handleClickOpenDeleteFood = () => {
    setOpenDeleteFood(true);
  };
  return (
    <Card
    key={id}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "255px",
        backgroundColor: "transparent",
        height: "230px",
        boxShadow: 0,
      }}
    >
      <Box
        sx={{
          position: "relative",
          backgroundColor: "black",
          borderRadius: "10px",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CardMedia
          component="img"
          alt="Өглөөний хоол"
          src={foodImage==="image" || !foodImage ? foodInfo[0].imgUrl :foodImage}
          loading="lazy"
          sx={{
            width: "100%",
            height: "150px",
            borderRadius: "10px",
            backgroundColor: isHovered ? "black" : "transparent",
            opacity: isHovered ? 0.5 : 1,
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
            opacity: isVisible ? "60%" : null,
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
        {isVisible && (
          <>
            <Box>
              <Box
                onClick={handleClickOpenEditFood}
                sx={{
                  position: "absolute",
                  top: "37%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "50%",
                  height: "30px",
                  borderRadius: "20px",
                  transition: "background-color 0.5s, opacity 0.3s",

                  opacity: "80%",
                  border: "none",
                  cursor: "pointer",
                  zIndex: 1,
                  color: "black",
                  backgroundColor: "white",
                  ":hover": {
                    cursor: "pointer",
                  },
                  ":active": {
                    cursor: "grabbing",
                    scale: ".99",
                  },
                }}
              >
                <Typography
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Edit
                </Typography>
              </Box>
              <EditFood
                handleClose={handleCloseEditFood}
                open={openEditFood}
                foodName={foodName}
              foodCategory={foodCategory}
              foodPrice={foodPrice}
              foodImage={foodImage}
              _id={id}
              foodIngredients={foodIngredients}
              discountRate={discountRate}
              ></EditFood>
            </Box>
            <Box>
              <Box
                onClick={handleClickOpenDeleteFood}
                sx={{
                  position: "absolute",
                  top: "63%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "50%",
                  height: "30px",
                  borderRadius: "20px",
                  transition: "background-color 0.5s, opacity 0.3s",

                  opacity: "80%",
                  border: "none",
                  cursor: "pointer",
                  zIndex: 1,
                  color: "black",
                  backgroundColor: "white",
                  ":hover": {
                    cursor: "pointer",
                  },
                  ":active": {
                    cursor: "grabbing",
                    scale: ".99",
                  },
                }}
              >
                <Typography
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "red",
                  }}
                >
                  Delete
                </Typography>
              </Box>
              <DeleteFood
                handleClose={handleCloseDeleteFood}
                open={openDeleteFood}
                id={id}
              foodName={foodName}
              ></DeleteFood>
            </Box>
          </>
        )}
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
          <Typography sx={{ color: "#18BA51" }}>{discountedPrice}₮</Typography>
          <Typography
            variant="body2"
            sx={{ color: "#272727", textDecoration: "line-through" }}
          >
            {foodPrice}₮
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};
