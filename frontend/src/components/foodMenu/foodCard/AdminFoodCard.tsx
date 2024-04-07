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
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

type TAdminFoodCardProps = {
  foodName: string;
  foodPrice: number;
  foodImage : string;
}
export const AdminFoodCard = ({foodName, foodPrice,foodImage } : TAdminFoodCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [openEditFood, setOpenEditFood] = React.useState(false);
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
  return (
    <Card
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
            ></EditFood>
          </Box>
          <Box>
            <Box
              onClick={handleClickOpenEditFood}
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
            <EditFood
              handleClose={handleCloseEditFood}
              open={openEditFood}
            ></EditFood>
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