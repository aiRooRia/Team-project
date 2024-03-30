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
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { FormikProvider, useFormik } from "formik";
import { signUpSchema } from "@/components/signup/validationSchema";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../utils/context";
import { useRouter } from "next/router";
import * as React from "react";

export const Signup = () => {
  const [warningMessage, setWarningMessage] = useState("");
  const { signUpUserInfo, setSignUpUserInfo } = useContext(UserContext);
  const { push } = useRouter();
  const formikSignUp = useFormik({
    initialValues: {
      name: "",
      password: "",
      email: "",
      location: "",
      rePassword: "",
    },
    validationSchema: signUpSchema,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  useEffect(() => {}, [warningMessage]);

  const [showPassword, setShowPassword] = React.useState(false);

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
          sx={{ fontWeight: "700px", fontSize: "28px", textAlign: "center" }}
        >
          Бүртгүүлэх
        </Typography>
        <FormikProvider value={formikSignUp}>
          <form onSubmit={formikSignUp.handleSubmit}>
            {" "}
            <Stack
              width={"100%"}
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Stack width={"100%"} spacing={"4px"}>
                <Typography>Нэр</Typography>
                <TextField placeholder="Нэрээ оруулна уу" />
              </Stack>
              <Stack width={"100%"} spacing={"4px"}>
                <Typography>Имэйл</Typography>
                <TextField
                  name="email"
                  type="email"
                  onChange={formikSignUp.handleChange}
                  value={formikSignUp.values.email}
                  placeholder="Имэйл хаягаа оруулна уу"
                />
              </Stack>
              <Stack width={"100%"} spacing={"4px"}>
                <Typography>Хаяг</Typography>
                <TextField
                  name="location"
                  type="location"
                  onChange={formikSignUp.handleChange}
                  value={formikSignUp.values.location}
                  placeholder="Та хаягаа оруулна уу"
                />
              </Stack>
              <FormControl
                sx={{ m: 1, width: "100%", display: "flex", gap: "4px" }}
              >
                <Typography>Нууц үг</Typography>
                <OutlinedInput
                  name="password"
                  typeof="location"
                  onChange={formikSignUp.handleChange}
                  value={formikSignUp.values.password}
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
                  // label="Password"
                />
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
