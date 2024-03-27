import * as React from "react";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Box from "@mui/material/Box";

export const FoodCategoryToggle = (): JSX.Element => {
  const [alignment, setAlignment] = React.useState<string | null>("left");

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setAlignment(newAlignment);
  };
  return (
    <Box>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton sx={{}} value="left" aria-label="left aligned">
          Breakfast
        </ToggleButton>
        <ToggleButton sx={{}} value="center" aria-label="centered">
          Soup
        </ToggleButton>
        <ToggleButton sx={{}} value="right" aria-label="right aligned">
          Main Course
        </ToggleButton>
        <ToggleButton sx={{}} value="justify" aria-label="justified">
          Desert
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};
