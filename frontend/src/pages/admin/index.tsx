import { Box, Stack, Typography, Button, TextField } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddIcon from "@mui/icons-material/Add";
// import * as React from "react";
import { useState } from "react";
import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { MenuButton as BaseMenuButton } from "@mui/base/MenuButton";
import { MenuItem as BaseMenuItem, menuItemClasses } from "@mui/base/MenuItem";
// import { styled } from "@mui/system";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
// import CreateFood from "@/components/admin/CreateFood";
import * as React from "react";
// import Button from '@mui/material/Button';
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Scale } from "@mui/icons-material";
// import Typography from '@mui/material/Typography';

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
  const [showEditDeleteBox, setShowEditDeleteBox] = useState(false);
  const [bgColor, setBgColor] = useState("white");
  const [isCreateFood, setIsCreateFood] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
            width="30%"
            height="94vh"
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
              <Stack
                onClick={handleClickOpen}
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
              <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
              >
                <DialogTitle
                  sx={{
                    m: 0,
                    p: 2,
                    width: "95%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  id="customized-dialog-title"
                >
                  Create food
                </DialogTitle>
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    left: 0,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <DialogContent dividers sx={{ width: "500px" }}>
                  <Stack width={"100%"} spacing={"4px"}>
                    <Typography>Хоолны нэр</Typography>
                    <TextField placeholder="Имэйл хаягаа оруулна уу" />
                  </Stack>
                  <Stack width={"100%"} spacing={"4px"}>
                    <Typography>Хоолны ангилал</Typography>
                    <TextField placeholder="Имэйл хаягаа оруулна уу" />
                  </Stack>
                  <Stack width={"100%"} spacing={"4px"}>
                    <Typography>Хоолны орц</Typography>
                    <TextField placeholder="Имэйл хаягаа оруулна уу" />
                  </Stack>
                  <Stack width={"100%"} spacing={"4px"}>
                    <Typography>Хоолны үнэ</Typography>
                    <TextField placeholder="Имэйл хаягаа оруулна уу" />
                  </Stack>
                  <Stack width={"100%"} spacing={"4px"}>
                    <Typography>Хямдралтай эсэх</Typography>
                    <TextField placeholder="Имэйл хаягаа оруулна уу" />
                  </Stack>
                  <Stack width={"100%"} spacing={"4px"}>
                    <Typography>Хоолны зураг</Typography>
                    <TextField placeholder="Имэйл хаягаа оруулна уу" />
                  </Stack>
                </DialogContent>
                <DialogActions>
                  <Button autoFocus onClick={handleClose}>
                    Save changes
                  </Button>
                </DialogActions>
              </BootstrapDialog>
            </Stack>
            <Stack></Stack>
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
  }




  `
);
