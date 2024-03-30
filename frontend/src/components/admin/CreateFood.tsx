import {
  Box,
  Stack,
  Typography,
  Button,
  TextField,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
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
import Switch from "@mui/material/Switch";
import { Scale } from "@mui/icons-material";
import FoodCard from "@/components/menu/FoodCard";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

interface CreateFoodProps {
  handleClose: () => void;
  open: boolean;
}

export const CreateFood = ({ handleClose, open }:CreateFoodProps) => {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      sx={{ borderRadius: "50px" }}
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
      <DialogContent dividers sx={{ width: "450px" }}>
        <Stack width={"100%"} spacing={"4px"}>
          <Typography>Хоолны нэр</Typography>
          <TextField placeholder="Food name" />
        </Stack>
        <Stack width={"100%"} spacing={"4px"}>
          <Typography>Хоолны ангилал</Typography>
          {/* <TextField placeholder="Food category" /> */}
          <FormControl fullWidth>
            {/* <InputLabel style={{ color: "#B0B8C4" }}>
                        Category
                      </InputLabel> */}
            {/* <Typography>Category</Typography> */}
            <Select
              // labelId="demo-simple-select-label"
              // id="demo-simple-select"
              // value={age}
              // label="Category"
              // onChange={handleChange}
              defaultValue="Category1"
            >
              <Menu slots={{ listbox: ListboxCategory }}>
                <MenuItem
                  sx={{ fontFamily: "Roboto" }}
                  value="Category1"
                  selected
                >
                  Category1
                </MenuItem>
                <MenuItem value={20}>Category2</MenuItem>
              </Menu>
            </Select>
          </FormControl>
        </Stack>
        <Stack width={"100%"} spacing={"4px"}>
          <Typography>Хоолны орц</Typography>
          <TextField placeholder="Food ingredients" />
        </Stack>
        <Stack width={"100%"} spacing={"4px"}>
          <Typography>Хоолны үнэ</Typography>
          <TextField placeholder="Food price" />
        </Stack>
        <Stack width={"100%"} spacing={"4px"}>
          <Stack direction="row" alignItems="center">
            <Switch {...label} />
            <Typography>Хямдралтай эсэх</Typography>
          </Stack>

          <TextField placeholder="Sale" />
        </Stack>
        <Stack width={"100%"} spacing={"4px"}>
          <Typography>Хоолны зураг</Typography>
          <TextField placeholder="Food image" />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Stack
          autoFocus
          onClick={handleClose}
          alignItems="center"
          sx={{
            ":hover": {
              cursor: "pointer",
            },
            ":active": {
              transform: "scale(0.97)",
            },
            borderRadius: 2,
            paddingX: 1.5,
            paddingY: 0.5,
            backgroundColor: "white",
            color: "#393939",
          }}
        >
          <Typography variant="subtitle1">Clear</Typography>
        </Stack>
        <Stack
          autoFocus
          onClick={handleClose}
          alignItems="center"
          sx={{
            ":hover": {
              cursor: "pointer",
            },
            ":active": {
              transform: "scale(0.97)",
            },
            borderRadius: 2,
            paddingX: 1.5,
            paddingY: 0.5,
            backgroundColor: "#393939",
            color: "white",
          }}
        >
          <Typography variant="subtitle1">Continue</Typography>
        </Stack>
      </DialogActions>
    </BootstrapDialog>
  );
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
const ListboxCategory = styled("ul")(
  ({ theme }) => `
   
   
     padding: 6px;
     min-width: 200px;
     font-family: "Roboto"
     overflow: auto;
     outline: 0px;
     background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
   
     color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
     typography: {
       fontFamily: 'Roboto',
    },
   
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
   
       background-color: ${
         theme.palette.mode === "dark" ? grey[800] : grey[100]
       };
       color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
     }
     &:active {
       cursor: "grabbing",
       transform: "scale(.80)",
     }
   
     `
);
