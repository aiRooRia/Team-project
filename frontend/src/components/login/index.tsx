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
import { useRouter } from "next/router";
import { FormikProvider, useFormik } from "formik";
import { loginSchema } from "./validationSchema";
import { useState, useEffect } from "react";

const Login = () => {
  const { push } = useRouter();
  const [warningMessage, setWarningMessage] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  // Define formikLogin outside the return statement
  const formikLogin = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      console.log(values);
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_ENDPOINT}/users/login`,
          {
            method: "POST",
            headers: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          }
        );
        const response = await res.json();
        if (response.success) {
          localStorage.setItem("id", response.user.id);
          push("/dashboard");
        } else if (response.message === "failed") {
          setWarningMessage("Password does not match.");
        } else if (response.message === "nodata") {
          setWarningMessage("Unregistered email.");
        }
      } catch (error) {
        console.log(error);
      }
    },
  });
  useEffect(() => {}, [warningMessage]);

  return (
    <>
      <Stack
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        spacing={"32px"}
        width={"385px"}
        sx={{ padding: "32px" }}
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
                </FormControl>
                <Button sx={{ color: "black" }} size="small">
                  Нууц үг сэргээх
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
                    formikLogin.values.email === "" ||
                    formikLogin.values.password === ""
                  }
                  variant="text"
                  sx={{
                    width: "100%",
                    height: 48,
                    background:
                      formikLogin.values.email === "" ||
                      formikLogin.values.password === ""
                        ? "#EEEFF2"
                        : "#18BA51",
                    color: "#EEEFF2",
                  }}
                >
                  Нэвтрэх
                </Button>
                <Typography>Эсвэл</Typography>
                <Button
                  type="button"
                  variant="text"
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
