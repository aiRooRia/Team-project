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

type TAdminFoodCardProps = {
  foodName: string;
  foodPrice: number;
  foodImage : string;
  id: string;
  foodCategory: string;
  foodIngredients: string;
  discountRate: number;
}
export const AdminFoodCard = ({foodName, foodPrice,foodImage, id, foodCategory, foodIngredients,discountRate } : TAdminFoodCardProps) => {
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
      discount: 0,
    },
  ];
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
          // ref=""
          src={foodImage==="image" || !foodImage ? foodInfo[0].imgUrl : foodImage}
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
        <Typography sx={{ color: "#18BA51" }}>{foodPrice}₮</Typography>
      </CardContent>
    </Card>
  );
};