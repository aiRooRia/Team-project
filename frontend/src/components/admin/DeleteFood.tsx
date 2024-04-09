import { Button } from "@mui/material";
import * as React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import DialogContentText from "@mui/material/DialogContentText";
import { AdminContext } from "../utils/context/adminContext";
import { useContext } from "react";

type CreateFoodProps = {
  handleClose: () => void;
  open: boolean;
  id: string;
  foodName: string;
};

export const DeleteFood = ({
  handleClose,
  open,
  id,
  foodName,
}: CreateFoodProps) => {
  const { setDeletedFoodId } = useContext(AdminContext);
  const ENDPOINT_URL = process.env.NEXT_PUBLIC_ENDPOINT;
  const deleteFood = async () => {
    try {
      const data = await fetch(`${ENDPOINT_URL}/food`, {
        method: "DELETE",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id }),
      }).then((data) => data.json());
      console.log(data);
      setDeletedFoodId(id);
    } catch (error) {
      console.log(error);
    }
    handleClose();
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{foodName}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this food?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            sx={{ textTransform: "capitalize", color: "#18BA51" }}
          >
            Disagree
          </Button>
          <Button
            onClick={deleteFood}
            sx={{ textTransform: "capitalize", color: "red" }}
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
