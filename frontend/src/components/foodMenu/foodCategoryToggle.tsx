import React, { useState } from "react";
import { Button, Box, Typography, Stack } from "@mui/material";
import { Dispatch, SetStateAction, FC } from "react";

type TFoodCategoryToggleProps = {
  selectedCategory: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
  allCategory: any;
};
export const FoodCategoryToggle: FC<TFoodCategoryToggleProps> = ({
  selectedCategory,
  setSelectedCategory,
  allCategory,
}) => {
  const buttonStyle = {
    width: "260px",
    border: "1px solid",
    borderRadius: 1,
    px: 1,
    py: 2,
    borderColor: "#D6D8DB",
    color: "#000000",
    transition: "background-color 0.3s, color 0.3s",
    marginTop: 1,
  };
 const handleClickCategory = (name: string) => {
  setSelectedCategory(name)
 }
  return (
    <Box
      sx={{
        justifyContent: "start",
        display: "flex",
        alignContent: "center",
        gap: 2,
        minHeight: "5vh",
        mt: 1,
      }}
    >
      <Box
        sx={{
          width: "1200px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {allCategory.map((el: any, i: number) => (
          <Stack
            key={el._id}
            onClick={() => handleClickCategory(el.name)}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{
              ...buttonStyle,
              bgcolor: selectedCategory === el.name ? "#18ba51" : "#ffffff",
              color: selectedCategory === el.name ? "#FFFFFF" : "#000000",
              "&:hover": {
                bgcolor: selectedCategory === el.name ? "#18ba51" : "#f0f0f0",
                color: selectedCategory === el.name ? "#FFFFFF" : "#000000",
              },
              textTransform: "capitalize",
              fontWeight: 500,
              height: 6,
            }}
          >
            <Typography>{el.name}</Typography>
          </Stack>
        ))}
      </Box>
    </Box>
  );
};
