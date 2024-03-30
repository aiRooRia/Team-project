import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";

function FoodCard() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "250px",
        backgroundColor: "transparent",
        height: "270px",
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
          src="https://i.ibb.co/M5kGkcy/unsplash-fdl-ZBWIP0a-M.png"
          loading="lazy"
          sx={{
            width: "250px",
            height: "170px",
            borderRadius: "10px",
            backgroundColor: isHovered ? "black" : "transparent",
            opacity: isHovered ? 0.5 : 1,
            transition: "background-color 0.3s, opacity 0.3s",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.25)",
          }}
        />
        {isVisible && (
          <Box
            sx={{
              position: "absolute",
              top: "50%",
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
        )}
      </Box>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: null,
        }}
      >
        <Typography variant="h6">Өглөөний хоол</Typography>
        <Typography sx={{ color: "#18BA51" }}>4,800₮</Typography>
      </CardContent>
    </Card>
  );
}

export default FoodCard;
