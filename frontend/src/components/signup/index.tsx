import {
  Button,
  Stack,
  TextField,
  Typography,
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Checkbox,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { FormikProvider, useFormik } from "formik";
import { signUpSchema } from "@/components/signup/validationSchema";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../utils/context";
import { useRouter } from "next/router";
import * as React from "react";

export const Signup: React.FC = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [isChecked, setIsChecked] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };
  const formikSignUp = useFormik<FromValues>({
    initialValues: {
      name: null,
      location: null,
      password: null,
      email: null,
      rePassword: null,
    },
    validationSchema: signUpSchema,
    onSubmit: async (values) => {
      console.log(values);
      console.log(values);
    },
  });

  useEffect(() => {}, []);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <>
      <Stack
        direction={"column"}
        justifyContent={"flex-start"}
        spacing={5}
        width={"385px"}
        sx={{ padding: "32px" }}
      >
        <Typography
          sx={{ fontWeight: "700", fontSize: "28px", textAlign: "center" }}
        >
          Бүртгүүлэх
        </Typography>
        <FormikProvider value={formikSignUp}>
          <form onSubmit={formikSignUp.handleSubmit}>
            <Stack
              width={"100%"}
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Stack width={"100%"} spacing={"4px"}>
                <Typography>Нэр</Typography>
                <TextField
                  name="name"
                  type="text"
                  onChange={formikSignUp.handleChange}
                  value={formikSignUp.values.name}
                  placeholder="Нэрээ оруулна уу"
                />
                {formikSignUp.errors.name && formikSignUp.touched.name ? (
                  <Typography color={"#EF4444"} sx={{ fontSize: "12px" }}>
                    {formikSignUp.errors.name}
                  </Typography>
                ) : null}
              </Stack>
              <Stack width={"100%"} spacing={"4px"}>
                <Typography>Имэйл</Typography>
                <TextField
                  name="email"
                  type="text"
                  type="email"
                  onChange={formikSignUp.handleChange}
                  value={formikSignUp.values.email}
                  placeholder="Имэйл хаягаа оруулна уу"
                />
                {formikSignUp.errors.email && formikSignUp.touched.email ? (
                  <Typography color={"#EF4444"} sx={{ fontSize: "12px" }}>
                    {formikSignUp.errors.email}
                  </Typography>
                ) : null}
              </Stack>
              <Stack width={"100%"} spacing={"4px"}>
                <Typography>Хаяг</Typography>
                <TextField
                  name="location"
                  type="text"
                  type="location"
                  onChange={formikSignUp.handleChange}
                  value={formikSignUp.values.location}
                  placeholder="Та хаягаа оруулна уу"
                />
                {formikSignUp.errors.location &&
                formikSignUp.touched.location ? (
                  <Typography color={"#EF4444"} sx={{ fontSize: "12px" }}>
                    {formikSignUp.errors.location}
                  </Typography>
                ) : null}
              </Stack>
              <FormControl
                sx={{ m: 1, width: "100%", display: "flex", gap: "4px" }}
              >
                <Typography>Нууц үг</Typography>
                <OutlinedInput
                  name="password"
                  type="password"
                  typeof="location"
                  onChange={formikSignUp.handleChange}
                  value={formikSignUp.values.password}
                  placeholder="Нууц үгээ оруулна уу"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                {formikSignUp.errors.password &&
                formikSignUp.touched.password ? (
                  <Typography color={"#EF4444"} sx={{ fontSize: "12px" }}>
                    {formikSignUp.errors.password}
                  </Typography>
                ) : null}
                />
              </FormControl>
              <FormControl
                sx={{ m: 1, width: "100%", display: "flex", gap: "4px" }}
              >
                <Typography>Нууц үг давтах</Typography>
                <OutlinedInput
                  name="rePassword"
                  typeof="location"
                  onChange={formikSignUp.handleChange}
                  value={formikSignUp.values.rePassword}
                  placeholder="Нууц үгээ оруулна уу"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                {formikSignUp.errors.rePassword &&
                formikSignUp.touched.rePassword ? (
                  <Typography color={"#EF4444"} sx={{ fontSize: "12px" }}>
                    {formikSignUp.errors.rePassword}
                  </Typography>
                ) : null}
              </FormControl>
            </Stack>
          </form>
        </FormikProvider>
        <Stack direction={"row"} spacing={"8px"}>
          <CheckBoxIcon></CheckBoxIcon>
          <Typography>Үйлчилгээний нөхцөл зөвшөөрөх</Typography>
        </Stack>
        <Button
          disabled={
            formikSignUp.values.email === "" ||
            !formikSignUp.values.location ||
            formikSignUp.values.password === "" ||
            formikSignUp.values.rePassword === ""
          }
          variant="text"
          sx={{
            width: "100%",
            height: 48,
            background:
              formikSignUp.values.email === "" ||
              !formikSignUp.values.location ||
              formikSignUp.values.password === "" ||
              formikSignUp.values.rePassword === ""
                ? "#EEEFF2"
                : "#18BA51",
            color: "black",
          }}
        >
          Бүртгүүлэх
        </Button>
      </Stack>
    </>
  );
};
