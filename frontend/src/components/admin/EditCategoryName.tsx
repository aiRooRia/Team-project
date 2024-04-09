import { Stack, Typography, TextField, Button } from "@mui/material";
import * as React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { AdminContext } from "../utils/context/adminContext";
import { useState, useContext } from "react";
import { BootstrapDialog } from "../utils/styles";

type TEditCategoryNameProps = {
  handleClose: () => void;
  open: boolean;
  _id: string;
  handleEditCategoryButton: any;
}
type TNewCategoryInfo = {
  _id: string;
  name: string;
};

export const EditCategoryName = ({ handleClose, open, _id, handleEditCategoryButton}: TEditCategoryNameProps) => {
  const { editedCategoryInfo, setEditedCategoryInfo } =useContext(AdminContext);
  const [isClearCategoryName, setIsClearCategoryName] =
    useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isClearCategoryName) {
      event.target.value == "";
    }
    setEditedCategoryInfo({_id: _id, name: event.target.value});

    console.log(editedCategoryInfo, "editedCategoryInfo");
    
  };
  const ENDPOINT_URL = process.env.NEXT_PUBLIC_ENDPOINT;
  // const handleEditCategoryButton=async()=>{
  //   try{const data = await fetch(`${ENDPOINT_URL}/category`, {
  //     method: "PUT",
  //     headers: {
  //       Accept: "application/json, text/plain, */*",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(editedCategoryInfo),
  //   });
  //   handleClose();
  // }catch(err){
  //     console.log(err);
      
  //   }
  // }
  const handleClear = () => {
    setEditedCategoryInfo({
      _id: "",
      name: "",
    });
    setIsClearCategoryName(true);
  };
  console.log(editedCategoryInfo, "editedCategoryInfo");
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
        Edit category name
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
            // value={newCategoryInfo}
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
          onClick={handleEditCategoryButton}
          disabled={editedCategoryInfo.name === ""}
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
