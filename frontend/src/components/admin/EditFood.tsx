import { Stack, Typography, TextField, Select, Button } from "@mui/material";
import { Menu } from "@mui/base/Menu";
import * as React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Switch from "@mui/material/Switch";
import { FormikProvider, useFormik } from "formik";
import { TFromValues, createFoodSchema } from "./validationSchema";
import InputAdornment from "@mui/material/InputAdornment";
import { useEffect, useState, useContext } from "react";
import {
  BootstrapDialog,
  MenuItem,
  focusedInputBorderColor,
  ListboxCategory,
} from "../utils/styles";
import { AdminContext } from "../utils/context/adminContext";

interface CreateFoodProps {
  handleClose: () => void;
  open: boolean;
  foodName: string;
  foodPrice: number;
  foodImage: string;
  _id: string;
  foodCategory: string;
  foodIngredients: string;
  discountRate: number;
}
type TCategotyData = {
  name: string;
  _id: string;
};
type TEditedFoodInfo = {
  name: string;
  category: string;
  ingredients: string;
  price: number;
  discountRate: number;
  image: string;
};
export const EditFood = ({
  handleClose,
  open,
  foodName,
  foodPrice,
  foodImage,
  discountRate,
  _id,
  foodCategory,
  foodIngredients,
}: CreateFoodProps) => {
  const [allCategory, setAllCategory] = useState<TCategotyData[]>([]);
  const { setEditedFoodInfo } = useContext(AdminContext);
  const ENDPOINT_URL = process.env.NEXT_PUBLIC_ENDPOINT;
  const fetchCategoryData = async () => {
    try {
      const data = await fetch(`${ENDPOINT_URL}/category/all-categories`, {
        method: "GET",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      }).then((data) => data.json());
      setAllCategory(data);
    } catch (error) {
      console.log(error);
    }
  };
  function capitalizeFirstLetter(inputText: string) {
    if (!inputText || typeof inputText !== "string") {
      return "";
    }
    return inputText.charAt(0).toUpperCase() + inputText.slice(1).toLowerCase();
  }
  const formikCreateFood = useFormik<TFromValues>({
    initialValues: {
      id: _id,
      name: foodName,
      category: foodCategory,
      ingredients: foodIngredients,
      price: foodPrice,
      isDiscount: discountRate > 0 ? true : false,
      discountRate: discountRate,
      image: foodImage,
    },
    validationSchema: createFoodSchema,
    onSubmit: async (values, { resetForm }: any) => {
      values.name = capitalizeFirstLetter(values.name);
      try {
        const data = await fetch(`${ENDPOINT_URL}/food`, {
          method: "PUT",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        setEditedFoodInfo((prev: TEditedFoodInfo) => ({
          ...prev,
          _id: values?.id,
          name: values?.name,
          category: values?.category,
          image: values?.image,
          ingredients: values?.ingredients,
          price: values?.price,
          discountRate: values?.discountRate,
        }));
      } catch (err) {
        console.log(err);
      }
      resetForm();
      handleClose();
    },
  });
  const disabled = (): boolean => {
    return (
      !formikCreateFood.values.name ||
      !formikCreateFood.values.category ||
      !formikCreateFood.values.ingredients ||
      !formikCreateFood.values.price ||
      (formikCreateFood.values.isDiscount &&
        !formikCreateFood.values.discountRate)
    );
  };

  useEffect(() => {
    fetchCategoryData();
  }, []);
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
        Edit food
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
                value={formikCreateFood.values.name}
                name="name"
              />
            </Stack>
            {formikCreateFood.errors.name && formikCreateFood.touched.name ? (
              <Typography color={"#EF4444"} sx={{ fontSize: "12px" }}>
                {formikCreateFood.errors.name}
              </Typography>
            ) : null}
            <Stack width={"100%"} spacing={"0px"}>
              <Typography>Хоолны ангилал</Typography>
              <Menu
                style={{ borderColor: "red" }}
                slots={{ listbox: ListboxCategory }}
              >
                <Select
                  onChange={formikCreateFood.handleChange}
                  value={formikCreateFood.values.category}
                  placeholder="Choose category"
                  name="category"
                  sx={{
                    borderColor: "orange",
                    width: "100%",
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "green", // it needs to be fixed
                      },
                    },
                  }}
                >
                  {allCategory?.map((el, i) => (
                    <MenuItem key={el._id} value={el.name}>
                      <Typography variant="body1">{el.name}</Typography>{" "}
                    </MenuItem>
                  ))}
                </Select>
              </Menu>
            </Stack>
            {formikCreateFood.errors.category &&
            formikCreateFood.touched.category ? (
              <Typography color={"#EF4444"} sx={{ fontSize: "12px" }}>
                {formikCreateFood.errors.category}
              </Typography>
            ) : null}
            <Stack width={"100%"} spacing={"4px"}>
              <Typography>Хоолны орц</Typography>
              <TextField
                sx={focusedInputBorderColor}
                placeholder="Food ingredients"
                onChange={formikCreateFood.handleChange}
                value={formikCreateFood.values.ingredients}
                name="ingredients"
              />
            </Stack>
            {formikCreateFood.errors.ingredients &&
            formikCreateFood.touched.ingredients ? (
              <Typography color={"#EF4444"} sx={{ fontSize: "12px" }}>
                {formikCreateFood.errors.ingredients}
              </Typography>
            ) : null}
            <Stack width={"100%"} spacing={"4px"}>
              <Typography>Хоолны үнэ</Typography>
              <TextField
                placeholder="Food price"
                sx={focusedInputBorderColor}
                onChange={(event) => {
                  const value = parseFloat(event.target.value);
                  formikCreateFood.setFieldValue("price", value);
                }}
                value={
                  Number.isNaN(formikCreateFood.values.price)
                    ? 0
                    : formikCreateFood.values.price
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">₮</InputAdornment>
                  ),
                }}
                name="price"
              />
            </Stack>
            {formikCreateFood.errors.price && formikCreateFood.touched.price ? (
              <Typography color={"#EF4444"} sx={{ fontSize: "12px" }}>
                {formikCreateFood.errors.price}
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
                value={formikCreateFood.values.image}
                name="image"
              />
            </Stack>
            {formikCreateFood.errors.image && formikCreateFood.touched.image ? (
              <Typography color={"#EF4444"} sx={{ fontSize: "12px" }}>
                {formikCreateFood.errors.image}
              </Typography>
            ) : null}
          </DialogContent>

          <DialogActions>
            {/* <Button      
            // href=""               ajillana/ aldatai
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
              disabled={disabled()}
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
