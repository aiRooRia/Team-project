import { Stack, Typography, TextField, Button } from "@mui/material";
import * as React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { BootstrapDialog } from "../utils/styles";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

type TCreateCategoryProps = {
  handleClose: () => void;
  capitalizeFirstLetter: Function;
  open: boolean;
  newCategoryInfo: string;
  setNewCategoryInfo: Dispatch<SetStateAction<string>>;
};

export const CreateCategory = ({
  handleClose,
  capitalizeFirstLetter,
  open,
  setNewCategoryInfo,
}: TCreateCategoryProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [warningMessage, setWarningMessage] = useState<string>("");
  const [isClearCategoryName, setIsClearCategoryName] =
    useState<boolean>(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsClearCategoryName(false);
    if (isClearCategoryName) {
      event.target.value = "";
    } else {
      setInputValue(event.target.value);
    }
  };
  const handleClear = () => {
    setInputValue("");
    setWarningMessage("");
    setIsClearCategoryName(true);
  };

  const ENDPOINT_URL = process.env.NEXT_PUBLIC_ENDPOINT;
  const handleSubmit = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    setNewCategoryInfo(inputValue);
    try {
      const data = await fetch(`${ENDPOINT_URL}/category`, {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: capitalizeFirstLetter(inputValue) }),
      });
      const response = await data.json();
      if (response.message) {
        setWarningMessage(response.message);
      } else if (response.success) {
        handleClose();
        setInputValue("");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
            value={inputValue}
          />
          {warningMessage && (
            <Typography color={"#EF4444"} sx={{ fontSize: "12px" }}>
              {warningMessage}
            </Typography>
          )}
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
          onClick={handleSubmit}
          disabled={inputValue.length === 0}
          href=""
          sx={{
            ":hover": {
              cursor: "pointer",
            },
            cursor: "pointer",
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
