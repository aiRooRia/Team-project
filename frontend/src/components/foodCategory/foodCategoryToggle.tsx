import React, { useState } from "react";
import { Button, Box } from "@mui/material";

export const FoodCategoryToggle = (): JSX.Element => {
  const [selected, setSelected] = useState("");

  const buttonStyle = {
    width: "280.5px",
    border: "1px solid",
    borderRadius: 1,
    px: 1,
    py: 2,
    borderColor: "#D6D8DB",
    color: "#000000",
    transition: "background-color 0.3s, color 0.3s",
  };

  return (
    <Box
      sx={{
        justifyContent: "center",
        display: "flex",
        alignContent: "center",
        px: "32px",
        py: "120px",
        gap: 2,
      }}
    >
      <Box sx={{ width: "1200px", display: "flex", gap: "26px" }}>
        <Button
          onClick={() => setSelected("Breakfast")}
          sx={{
            ...buttonStyle,
            bgcolor: selected === "Breakfast" ? "#18ba51" : "#ffffff",
            color: selected === "Breakfast" ? "#FFFFFF" : "#000000",
            "&:hover": {
              bgcolor: selected === "Breakfast" ? "#18ba51" : "#f0f0f0",
              color: selected === "Breakfast" ? "#FFFFFF" : "#000000",
            },
          }}
        >
          Breakfast
        </Button>

        <Button
          onClick={() => setSelected("Soup")}
          sx={{
            ...buttonStyle,
            bgcolor: selected === "Soup" ? "#18ba51" : "#ffffff",
            color: selected === "Soup" ? "#FFFFFF" : "#000000",
            "&:hover": {
              bgcolor: selected === "Soup" ? "#18ba51" : "#f0f0f0",
              color: selected === "Soup" ? "#FFFFFF" : "#000000",
            },
          }}
        >
          Soup
        </Button>
        <Button
          onClick={() => setSelected("MainCourse")}
          sx={{
            ...buttonStyle,
            bgcolor: selected === "MainCourse" ? "#18ba51" : "#ffffff",
            color: selected === "MainCourse" ? "#FFFFFF" : "#000000",
            "&:hover": {
              bgcolor: selected === "MainCourse" ? "#18ba51" : "#f0f0f0",
              color: selected === "MainCourse" ? "#FFFFFF" : "#000000",
            },
          }}
        >
          Main Course
        </Button>
        <Button
          onClick={() => setSelected("Dessert")}
          sx={{
            ...buttonStyle,
            bgcolor: selected === "Dessert" ? "#18ba51" : "#ffffff",
            color: selected === "Dessert" ? "#FFFFFF" : "#000000",
            "&:hover": {
              bgcolor: selected === "Dessert" ? "#18ba51" : "#f0f0f0",
              color: selected === "Dessert" ? "#FFFFFF" : "#000000",
            },
          }}
        >
          Dessert
        </Button>
      </Box>
    </Box>
  );
};
