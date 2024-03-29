import { Box, Stack, Typography, Button } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddIcon from "@mui/icons-material/Add";
import * as React from "react";
import { useState } from "react";
import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { MenuButton as BaseMenuButton } from "@mui/base/MenuButton";
import { MenuItem as BaseMenuItem, menuItemClasses } from "@mui/base/MenuItem";
import { styled } from "@mui/system";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
// import CreateFood from "@/components/admin/CreateFood";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showEditDeleteBox, setShowEditDeleteBox] = useState(false);
  const [bgColor, setBgColor] = useState("white");
  const [isCreateFood, setIsCreateFood] = useState(false);

  const showDropdown = (category: string) => {
    if (selectedCategory === category) {
      setShowEditDeleteBox(true);
    }
  };
  const changeBgColor = (categoryName: string) => {
    selectedCategory === categoryName
      ? setBgColor("white")
      : setBgColor("#18BA51");
  };
  const handleSelectCategory = (categoryName: string) => {
    setSelectedCategory(categoryName);
    changeBgColor(categoryName);
    console.log(selectedCategory);
  };
  const createHandleMenuClick = (menuItem: string) => {
    return () => {
      console.log(`Clicked on ${menuItem}`);
    };
  };
  const createFood = () => {};
  return (
    <Stack
      width="100%"
      height="94vh"
      sx={{ flexDirection: "row", position: "relative" }}
    >
      <Stack
        width="30%"
        height="100%"
        sx={{ backgroundColor: "white", alignItems: "end" }}
      ></Stack>
      <Stack
        width="70%"
        height="100%"
        sx={{ backgroundColor: "#EEEFF2" }}
      ></Stack>

      <Stack
        width="100%"
        // height="100vh"
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <Stack
          maxWidth="lg"
          // height="100vh"
          direction="row"
          sx={{ width: "1200px" }}
        >
          <Stack
            direction="column"
            spacing={2}
            width="30%"
            // height="100vh"
            sx={{ overflow: "auto", backgroundColor: "white", pr: 2 }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Food menu
            </Typography>
            <Stack direction="column" spacing={2}>
              <Stack
                onClick={() => setSelectedCategory("Desserts")}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  cursor: "default",
                  ":hover": {
                    cursor: "pointer",
                  },
                  ":active": {
                    cursor: "grabbing",
                    transform: "scale(0.97)",
                  },
                  border: 1,
                  borderColor: "lightgray",
                  borderRadius: 2,
                  padding: 1,
                  backgroundColor:
                    selectedCategory === "Desserts" ? "#18BA51" : "white",
                  color: selectedCategory === "Desserts" ? "white" : "black",
                }}
              >
                <Typography variant="subtitle1">Desserts</Typography>
                <Dropdown>
                  <MenuButton
                    sx={{
                      backgroundColor:
                        selectedCategory === "Desserts" ? "#18BA51" : "white",
                      borderColor:
                        selectedCategory === "Desserts" ? "#18BA51" : "white",
                      boxShadow: "none",
                      ":hover": {
                        backgroundColor:
                          selectedCategory === "Desserts" ? "#18BA51" : "white",
                        borderColor:
                          selectedCategory === "Desserts" ? "#18BA51" : "white",
                      },
                      ":active": {
                        backgroundColor:
                          selectedCategory === "Desserts" ? "#18BA51" : "white",
                        borderColor:
                          selectedCategory === "Desserts" ? "#18BA51" : "white",
                      },
                    }}
                  >
                    <MoreVertIcon
                      sx={{
                        color:
                          selectedCategory === "Desserts" ? "white" : "black",
                      }}
                    ></MoreVertIcon>
                  </MenuButton>
                  <Menu slots={{ listbox: Listbox }}>
                    <MenuItem
                      sx={{ display: "flex", gap: 1 }}
                      onClick={createHandleMenuClick("edit")}
                    >
                      <EditIcon></EditIcon>
                      <Typography variant="body1">Edit name</Typography>
                    </MenuItem>
                    <MenuItem
                      sx={{ display: "flex", gap: 1 }}
                      onClick={createHandleMenuClick("delete")}
                    >
                      <DeleteOutlineIcon
                        style={{ color: "red" }}
                      ></DeleteOutlineIcon>
                      <Typography color="red" variant="body1">
                        Delete category
                      </Typography>
                    </MenuItem>
                  </Menu>
                </Dropdown>
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{
                  cursor: "default",
                  ":hover": {
                    cursor: "pointer",
                  },
                  ":active": {
                    cursor: "grabbing",
                    transform: "scale(0.97)",
                  },
                  border: 1,
                  borderColor: "lightgray",
                  borderRadius: 2,
                  padding: 1,
                }}
              >
                {" "}
                <AddIcon style={{ color: "gray" }}></AddIcon>
                <Typography variant="subtitle1" style={{ color: "gray" }}>
                  Create new category
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack width="70%">
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ ml: 3, mt: 4 }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Breakfast
              </Typography>
            </Stack>
            <Stack></Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

const blue = {
  50: "#F0F7FF",
  100: "#C2E0FF",
  200: "#99CCF3",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E6",
  700: "#0059B3",
  800: "#004C99",
  900: "#003A75",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const Listbox = styled("ul")(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 200px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  box-shadow: 0px 4px 6px ${
    theme.palette.mode === "dark" ? "rgba(0,0,0, 0.50)" : "rgba(0,0,0, 0.05)"
  };
  z-index: 1;
  `
);

const MenuItem = styled(BaseMenuItem)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;
  user-select: none;

  &:last-of-type {
    border-bottom: none;
  }

  &:focus {
    outline: 3px solid ${theme.palette.mode === "dark" ? blue[600] : blue[200]};
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }

  &.${menuItemClasses.disabled} {
    color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
  }
  `
);

const MenuButton = styled(BaseMenuButton)(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  color: ${theme.palette.mode === "dark" ? grey[200] : grey[900]};
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

  &:hover {
    background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
  }

  &:active {
    background: ${theme.palette.mode === "dark" ? grey[700] : grey[100]};
  }

  &:focus-visible {
    box-shadow: 0 0 0 4px ${
      theme.palette.mode === "dark" ? blue[300] : blue[200]
    };
    outline: none;
  }
  `
);
