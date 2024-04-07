import { Stack, Typography, TextField, Select, Button } from "@mui/material";
import { Menu } from "@mui/base/Menu";
import * as React from "react";
import { styled } from "@mui/material/styles";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Switch from "@mui/material/Switch";
import { FormikProvider, useFormik } from "formik";
import { FromValues, createFoodSchema } from "./validationSchema";
import InputAdornment from "@mui/material/InputAdornment";
import { useEffect } from "react";
import { BootstrapDialog, MenuItem, focusedInputBorderColor, ListboxCategory } from "../utils/styles";


interface CreateFoodProps {
  handleClose: () => void;
  open: boolean;
}

export const CreateFood = ({ handleClose, open }: CreateFoodProps) => {
  const formikCreateFood = useFormik<FromValues>({
    initialValues: {
      foodName: "",
      foodCategory: "Category1",
      foodIngredients: "",
      foodPrice: 0,
      isDiscount: false,
      discountRate: 0,
      foodImage: "",
    },
    validationSchema: createFoodSchema,
    onSubmit: async (values, { setFieldValue }) => {
      console.log(values.discountRate);
      if (!values.isDiscount) {
        console.log("discount false");
        //    values.discountRate === "";
        setFieldValue("discountRate", "");
      }
      console.log(values, "hoo values");
    },
  });
  useEffect(() => {}, [formikCreateFood.values.discountRate]);
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
          left: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <FormikProvider value={formikCreateFood}>
        <form
          onSubmit={formikCreateFood.handleSubmit}
          style={{ width: "100%" }}
        >
          <DialogContent dividers sx={{ width: "450px" }}>
            <Stack width={"100%"} spacing={"4px"}>
              <Typography>Хоолны нэр</Typography>
              <TextField
                sx={focusedInputBorderColor}
                placeholder="Food name"
                onChange={formikCreateFood.handleChange}
                value={formikCreateFood.values.foodName}
                name="foodName"
              />
            </Stack>
            {formikCreateFood.errors.foodName &&
            formikCreateFood.touched.foodName ? (
              <Typography color={"#EF4444"} sx={{ fontSize: "12px" }}>
                {formikCreateFood.errors.foodName}
              </Typography>
            ) : null}
            <Stack width={"100%"} spacing={"4px"}>
              <Typography>Хоолны ангилал</Typography>
              <Menu
                style={{ borderColor: "red" }}
                slots={{ listbox: ListboxCategory }}
              >
                <Select
                  onChange={formikCreateFood.handleChange}
                  value={formikCreateFood.values.foodCategory}
                  name="foodCategory"
                  // sx={{
                  //   borderColor: "orange",
                  //   width: "100%",
                  //   "& .MuiOutlinedInput-root": {
                  //     "&.Mui-focused fieldset": {
                  //       borderColor: "green",                  // it needs to be fixed
                  //     },
                  //   },
                  // }}
                >
                  <MenuItem sx={{ width: "100%" }} value="Category1" default>
                    <Typography variant="body1">Category1</Typography>
                  </MenuItem>
                  <MenuItem value="Category2">
                    <Typography variant="body1">Category2</Typography>{" "}
                  </MenuItem>
                </Select>
              </Menu>
            </Stack>
            {formikCreateFood.errors.foodCategory &&
            formikCreateFood.touched.foodCategory ? (
              <Typography color={"#EF4444"} sx={{ fontSize: "12px" }}>
                {formikCreateFood.errors.foodCategory}
              </Typography>
            ) : null}
            <Stack width={"100%"} spacing={"4px"}>
              <Typography>Хоолны орц</Typography>
              <TextField
                sx={focusedInputBorderColor}
                placeholder="Food ingredients"
                onChange={formikCreateFood.handleChange}
                value={formikCreateFood.values.foodIngredients}
                name="foodIngredients"
              />
            </Stack>
            {formikCreateFood.errors.foodIngredients &&
            formikCreateFood.touched.foodIngredients ? (
              <Typography color={"#EF4444"} sx={{ fontSize: "12px" }}>
                {formikCreateFood.errors.foodIngredients}
              </Typography>
            ) : null}
            <Stack width={"100%"} spacing={"4px"}>
              <Typography>Хоолны үнэ</Typography>
              <TextField
                placeholder="Food price"
                sx={focusedInputBorderColor}
                onChange={(event) => {
                  const value = parseFloat(event.target.value);
                  formikCreateFood.setFieldValue("foodPrice", value);
                }}
                value={
                  Number.isNaN(formikCreateFood.values.foodPrice)
                    ? 0
                    : formikCreateFood.values.foodPrice
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">₮</InputAdornment>
                  ),
                }}
                name="foodPrice"
              />
            </Stack>
            {formikCreateFood.errors.foodPrice &&
            formikCreateFood.touched.foodPrice ? (
              <Typography color={"#EF4444"} sx={{ fontSize: "12px" }}>
                {formikCreateFood.errors.foodPrice}
              </Typography>
            ) : null}
            <Stack width={"100%"} spacing={"4px"}>
              <Stack direction="row" alignItems="center">
                <Switch
                  checked={formikCreateFood.values.isDiscount}
                  onChange={formikCreateFood.handleChange}
                  name="isDiscount"
                />
                <Typography>Хямдралтай эсэх</Typography>
              </Stack>

              <TextField
                disabled={!formikCreateFood.values.isDiscount}
                placeholder="Discount"
                sx={focusedInputBorderColor}
                onChange={(event) => {
                  const value = parseFloat(event.target.value);
                  formikCreateFood.setFieldValue("discountRate", value);
                }}
                value={
                  Number.isNaN(formikCreateFood.values.discountRate)
                    ? 0
                    : formikCreateFood.values.discountRate
                }
                name="discountRate"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">%</InputAdornment>
                  ),
                }}
              />
            </Stack>
            {formikCreateFood.errors.isDiscount &&
            formikCreateFood.errors.discountRate &&
            formikCreateFood.touched.discountRate ? (
              <Typography color={"#EF4444"} sx={{ fontSize: "12px" }}>
                {formikCreateFood.errors.discountRate}
              </Typography>
            ) : null}
            <Stack width={"100%"} spacing={"4px"}>
              <Typography>Хоолны зураг</Typography>
              <TextField
                sx={focusedInputBorderColor}
                placeholder="Food image"
                onChange={formikCreateFood.handleChange}
                value={formikCreateFood.values.foodImage}
                name="foodImage"
              />
            </Stack>
            {formikCreateFood.errors.foodImage &&
            formikCreateFood.touched.foodImage ? (
              <Typography color={"#EF4444"} sx={{ fontSize: "12px" }}>
                {formikCreateFood.errors.foodImage}
              </Typography>
            ) : null}
          </DialogContent>

          <DialogActions>
            {/* <Button                     clear button works, but syntax is wrong
              type="button"
              onClick={formikCreateFood.resetForm}
              sx={{
                ":hover": {
                  backgroundColor: "white",
                },
                backgroundColor: "white",
                color: "#393939",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{ textTransform: "capitalize" }}
              >
                Clear
              </Typography>
            </Button> */}
            <Button
              type="submit"
              disabled={
                !formikCreateFood.values.foodName ||
                !formikCreateFood.values.foodCategory ||
                !formikCreateFood.values.foodIngredients ||
                !formikCreateFood.values.foodPrice ||
                (formikCreateFood.values.isDiscount &&
                  !formikCreateFood.values.discountRate)
              }
              sx={{
                ":hover": {
                  backgroundColor: "#393939",
                },
                backgroundColor: "#393939",
                color: "white",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{ textTransform: "capitalize" }}
              >
                Continue
              </Typography>
            </Button>
          </DialogActions>
        </form>
      </FormikProvider>
    </BootstrapDialog>
  );
};


