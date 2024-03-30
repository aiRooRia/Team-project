import {
  Stack,
  Typography,
  TextField,
  Select,
  FormControl,

} from "@mui/material";

import { Menu } from "@mui/base/Menu";
import { MenuItem as BaseMenuItem, menuItemClasses } from "@mui/base/MenuItem";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Switch from "@mui/material/Switch";


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

export const CreateFood = ({ handleClose, open }: CreateFoodProps) => {
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
          <TextField
            sx={{
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "green",
                },
            }}
            placeholder="Food name"
          />
        </Stack>
        <Stack
          width={"100%"}
          spacing={"4px"}
        >
          <Typography>Хоолны ангилал</Typography>
          <FormControl fullWidth>
            <Select
              defaultValue="Category1"
              sx={{
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "green", // Change border color to red when focused
                  },
              }}
            >
              <Menu slots={{ listbox: ListboxCategory }}>
                {/* <MenuList> */}
                <MenuItem value="Category1" selected>
                  <Typography variant="body1">Category1</Typography>
                </MenuItem>
                <MenuItem value="Category2    ">
                  <Typography variant="body1">Category1</Typography>{" "}
                </MenuItem>
                {/* </MenuList> */}
              </Menu>
            </Select>
          </FormControl>
        </Stack>
        <Stack width={"100%"} spacing={"4px"}>
          <Typography>Хоолны орц</Typography>
          <TextField
            sx={{
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "green", // Change border color to red when focused
                },
              // '& .MuiOutlinedInput-root': {
              //   '& fieldset': {
              //     borderColor: 'red', // Ensure border color is red when focused
              //   },
              //   '&:hover fieldset': {
              //     borderColor: 'red', // Change border color to red on hover
              //   },
              // },
            }}
            placeholder="Food ingredients"
          />
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
