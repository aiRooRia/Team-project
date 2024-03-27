import * as React from "react";
import { useState } from "react";

import { Button, Box } from "@mui/material";
const [selected, setSelected] = useState("");
export const FoodCategoryToggle = (): JSX.Element => {
  const buttonStyle = {
    width: "280.5px",
    border: "1px solid",
    borderRadius: 1,
    px: 1,
    py: 2,
    borderColor: "#D6D8DB",
    color: "#000000",
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
        <Button onClick={() => setSelected("Breakfast")} sx={buttonStyle}>
          Breakfast
        </Button>
        <Button sx={buttonStyle}>Soup</Button>
        <Button sx={buttonStyle}>Main Course</Button>
        <Button sx={buttonStyle}>Dessert</Button>
      </Box>
    </Box>
  );
};
