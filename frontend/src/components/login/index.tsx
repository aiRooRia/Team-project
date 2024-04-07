import {
  Button,
  Stack,
  TextField,
  Typography,
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import * as React from "react";
import { FormikProvider, useFormik } from "formik";
import { loginSchema, FromValues } from "./validationSchema";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [warningMessage, setWarningMessage] = useState("");
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const router = useRouter();
  const handlePush = (route: string) => {
    router.push(route);
  };
  const ENDPOINT_URL = process.env.NEXT_PUBLIC_ENDPOINT
  const formikLogin = useFormik<FromValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      console.log(values);
      try {
        const data = await fetch(`${ENDPOINT_URL}/user/login`, {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        const response = await data.json();
              
        if (response.message) {
          setWarningMessage(response.message);
        } else if (response.success) {
          localStorage.setItem("token", response.token);
          localStorage.setItem("role", response.role);
          console.log(response, "response");
          
          console.log(response.role, "role");
          
          response?.role === "user" ? handlePush("/") : handlePush("/admin")
          setWarningMessage("");
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
      <Stack
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        spacing={"32px"}
        width={"30%"}
        height={"90%"}
        sx={{ padding: "32px", scale: "80%" }}
      >
        <Typography sx={{ fontWeight: "700px", fontSize: "28px" }}>
          Нэвтрэх
        </Typography>
        <FormikProvider value={formikLogin}>
          <form onSubmit={formikLogin.handleSubmit} style={{ width: "100%" }}>
            <Stack
              width={"100%"}
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Stack width={"100%"} spacing={"4px"}>
                <Typography>Имэйл</Typography>
                <TextField
                  placeholder="Имэйл хаягаа оруулна уу"
                  onChange={formikLogin.handleChange}
                  value={formikLogin.values.email}
                  name="email"
                />
                {formikLogin.errors.email && formikLogin.touched.email ? (
                  <Typography color={"#EF4444"} sx={{ fontSize: "12px" }}>
                    {formikLogin.errors.email}
                  </Typography>
                ) : null}
              </Stack>
              <Stack
                width={"100%"}
                spacing={"4px"}
                direction={"column"}
                alignItems={"flex-end"}
              >
                <FormControl
                  sx={{ m: 1, width: "100%", display: "flex", gap: "4px" }}
                >
                  <Typography>Нууц үг</Typography>
                  <OutlinedInput
                    onChange={formikLogin.handleChange}
                    value={formikLogin.values.password}
                    placeholder="Нууц үгээ оруулна уу"
                    type={showPassword ? "text" : "password"}
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
                    name="password"
                  />
                  {formikLogin.errors.password &&
                  formikLogin.touched.password ? (
                    <Typography color={"#EF4444"} sx={{ fontSize: "12px" }}>
                      {formikLogin.errors.password}
                    </Typography>
                  ) : null}
                  {warningMessage && (
                  <Typography color={"#EF4444"} sx={{ fontSize: "12px" }}>
                    {warningMessage}
                  </Typography>
                )}
                </FormControl>
                <Button
                  onClick={() => {
                    handlePush("/user/reset-password");
                  }}
                  sx={{ color: "black", textTransform: "capitalize" }}
                >
                  <Typography variant="body2"> Нууц үг сэргээх</Typography>
                </Button>
              </Stack>
              <Stack
                width={"100%"}
                direction={"column"}
                alignItems={"center"}
                spacing={"32px"}
              >
                <Button
                  type="submit"
                  disabled={
                    !formikLogin.values.email || !formikLogin.values.password
                  }
                  variant="text"
                  sx={{
                    width: "100%",
                    height: 48,
                    background:
                      formikLogin.values.email && formikLogin.values.password
                        ? "#18BA51"
                        : "#EEEFF2",
                    color: "#EEEFF2",
                  }}
                >
                  Нэвтрэх
                </Button>
                <Typography>Эсвэл</Typography>
                <Button
                  type="button"
                  variant="text"
                  onClick={() => handlePush("/user/signup")}
                  sx={{
                    width: "100%",
                    height: 48,
                    background: "white",
                    border: 1,
                    borderColor: "#18BA51",
                    color: "black",
                  }}
                >
                  Бүртгүүлэх
                </Button>
              </Stack>
            </Stack>
          </form>
        </FormikProvider>
      </Stack>
    </>
  );
};
export default Login;
