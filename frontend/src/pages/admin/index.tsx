import { Stack, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { MenuButton as BaseMenuButton } from "@mui/base/MenuButton";
import { MenuItem as BaseMenuItem } from "@mui/base/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import { CreateFood } from "@/components/admin/CreateFood";
import { AdminFoodCard } from "@/components/menu/FoodCard";
import Grid from "@mui/material/Grid";
import { CreateCategory } from "@/components/admin/CreateNewCategory";
import { AdminContext } from "@/components/utils/adminContext";
import { EditCategoryName } from "@/components/admin/EditCategoryName";
import { EmptyMenu } from "@/components/admin/MenuIsEmpty";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [bgColor, setBgColor] = useState("white");
  const [openCreateFood, setOpenCreateFood] = React.useState(false);
  const [openCreateCategory, setOpenCreateCategory] = React.useState(false);
  const [openEditCategoryName, setOpenEditCategoryName] = React.useState(false);

  const handleClickOpenCreateFood: () => void = () => {
    setOpenCreateFood(true);
  };
  const handleCloseCreateFood: () => void = () => {
    setOpenCreateFood(false);
  };
  const handleClickOpenCreateCategory: () => void = () => {
    setOpenCreateCategory(true);
  };
  const handleCloseCreateCategory: () => void = () => {
    setOpenCreateCategory(false);
  };
  const handleCloseEditCategoryName: () => void = () => {
    setOpenEditCategoryName(false);
  };
  const handleClickOpenEditCategoryName: () => void = () => {
    setOpenEditCategoryName(true);
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
        height="94vh"
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
          height="94vh"
          direction="row"
          sx={{ width: "1200px" }}
        >
          <Stack
            direction="column"
            spacing={2}
            width="28%"
            height="95vh"
            sx={{
              overflow: "auto",
              backgroundColor: "white",
              pr: 2,
              paddingTop: "10px",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", marginTop: "10px" }}
            >
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
                    transform: "scale(.99)",
                  },
                  border: 1,
                  borderColor: "lightgray",
                  borderRadius: 2,
                  paddingX: 1,
                  paddingY: 0.75,
                  backgroundColor:
                    selectedCategory === "Desserts" ? "#18BA51" : "white",
                  color: selectedCategory === "Desserts" ? "white" : "black",
                }}
              >
                <Typography variant="subtitle1">Desserts</Typography>
                <Dropdown>
                  <MenuButton
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      backgroundColor:
                        selectedCategory === "Desserts" ? "#18BA51" : "white",
                      borderColor:
                        selectedCategory === "Desserts" ? "#18BA51" : "white",
                      height: "22px",
                      ":active": {
                        cursor: "grabbing",
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
                      onClick={handleClickOpenEditCategoryName}
                    >
                      <EditIcon></EditIcon>
                      <Typography variant="body1">Edit name</Typography>
                    </MenuItem>
                    <EditCategoryName
                      handleClose={handleCloseEditCategoryName}
                      open={openEditCategoryName}
                    ></EditCategoryName>
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
                onClick={handleClickOpenCreateCategory}
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{
                  height: "40px",
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
                  paddingX: 1,
                }}
              >
                {" "}
                <AddIcon style={{ color: "gray" }}></AddIcon>
                <Typography variant="subtitle1" style={{ color: "gray" }}>
                  Create new category
                </Typography>
              </Stack>
              <CreateCategory
                handleClose={handleCloseCreateCategory}
                open={openCreateCategory}
              ></CreateCategory>
            </Stack>
          </Stack>
          <Stack width="72%">
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ ml: 3, mt: 3, mb: "4px", height: "6vh" }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Desserts
              </Typography>
              <Stack
                onClick={handleClickOpenCreateFood}
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
                  paddingX: 1,
                  paddingY: 0.75,
                  backgroundColor: "#18BA51",
                  color: "white",
                }}
              >
                <Typography variant="subtitle1">Add new food</Typography>
              </Stack>
              <CreateFood
                handleClose={handleCloseCreateFood}
                open={openCreateFood}
              ></CreateFood>
            </Stack>
            {/* <EmptyMenu></EmptyMenu> */}
            <Stack
              direction="row"
              alignItems="start"
              sx={{ pl: 3, pt: 4, height: "80vh", overflow: "auto" }}
            >
              <Grid
                container
                rowSpacing={1}
                columnSpacing={1}
                overflow="auto"
                gridColumn={3}
                columnGap="35.5px"
                rowGap="20px"
              >
                <AdminFoodCard></AdminFoodCard>
                <AdminFoodCard></AdminFoodCard>
                <AdminFoodCard></AdminFoodCard>
                <AdminFoodCard></AdminFoodCard>
                <AdminFoodCard></AdminFoodCard>
                <AdminFoodCard></AdminFoodCard>
                <AdminFoodCard></AdminFoodCard>
                <AdminFoodCard></AdminFoodCard>
                <AdminFoodCard></AdminFoodCard>
                <AdminFoodCard></AdminFoodCard>
                <AdminFoodCard></AdminFoodCard>
              </Grid>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

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
  user-select: none;
  &:last-of-type {
    border-bottom: none;
  }
  &:focus {
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }
  &:active {
    cursor: "grabbing",
    transform: "scale(.80)",
  }
  `
);

const MenuButton = styled(BaseMenuButton)(
  ({ theme }) => `
  border-radius: 8px;
  color: white;
  cursor: pointer;
  border: 1px solid;
  &:active {
    cursor: "grabbing",
    transform: "scale(.80)",
  }
  &:hover {
    background-color: "red"
  }  `
);
