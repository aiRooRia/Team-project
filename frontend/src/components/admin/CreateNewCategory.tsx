import { Stack, Typography, TextField, Button } from "@mui/material";
import { MenuItem as BaseMenuItem } from "@mui/base/MenuItem";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { AdminContext } from "../utils/adminContext";
import { useState } from "react";

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

export const CreateCategory = ({ handleClose, open }: CreateFoodProps) => {
  const { newCategoryInfo, setNewCategoryInfo } =
    React.useContext(AdminContext);
  const [isClearCategoryName, setIsClearCategoryName] =
    useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(isClearCategoryName);

    if (isClearCategoryName) {
      event.target.value == "";
    }
    setNewCategoryInfo({ name: event.target.value });
  };
  const handleClear = () => {
    setNewCategoryInfo({ name: "" }); // Clear the input field by setting the name to an empty string
    setIsClearCategoryName(true);
  };
  const label = { inputProps: { "aria-label": "Switch demo" } };
  console.log(newCategoryInfo);

  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title-category"
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
        id="customized-dialog-title-category"
      >
        Create new category
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          left: 8,
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
            onChange={handleInputChange}
            placeholder="Food name"
            value={newCategoryInfo.name}
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Stack
          autoFocus
          onClick={handleClear}
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
        <Button
          onClick={handleClose}
          disabled={newCategoryInfo.name === ""}
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
          <Typography variant="body1" sx={{ textTransform: "capitalize" }}>
            continue
          </Typography>
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
};
