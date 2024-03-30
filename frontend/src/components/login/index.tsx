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

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const formikLogin = useFormik<FromValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

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
                    !formikLogin.values.email || !formikLogin.values.password
                  }
                  variant="text"
                  sx={{
                    width: "100%",
                    height: 48,
                    background: "#18BA51",
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
