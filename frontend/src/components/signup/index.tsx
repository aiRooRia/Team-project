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
  Box,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { FormikProvider, useFormik } from "formik";
import { signUpSchema, FromValues } from "@/components/signup/validationSchema";
import CheckIcon from "@mui/icons-material/Check";
import {
  useEffect,
  useState,
  ChangeEvent,
  MouseEvent,
  FC,
  useContext,
} from "react";
import * as React from "react";
import { useRouter } from "next/router";
import { UserContext } from "../utils/context/userContext";

export const Signup: FC = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const { setSignUpUserInfo } = useContext(UserContext);
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };
  const { push } = useRouter();

  const ENDPOINT_URL = process.env.NEXT_PUBLIC_ENDPOINT;
  const formikSignUp = useFormik<FromValues>({
    initialValues: {
      name: "",
      location: "",
      password: "",
      email: "",
      rePassword: "",
    },
    validationSchema: signUpSchema,
    onSubmit: async (values) => {
      setWarningMessage("");

      try {
        const data = await fetch(`${ENDPOINT_URL}/user`, {
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
          console.log(response.success, "amjilltai");

          setShowConfirmation(true);
          setTimeout(() => {
            setShowConfirmation(false);
            setSignUpUserInfo({
              name: "",
              email: "",
              password: "",
              location: "",
            });

            push("/user/login");
          }, 2000);
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  useEffect(() => {}, [warningMessage]);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const handleButtonEnable = () =>
    !formikSignUp.values.name ||
    !formikSignUp.values.email ||
    !formikSignUp.values.location ||
    !formikSignUp.values.password ||
    !formikSignUp.values.rePassword ||
    !isChecked;
  const handleButtonEnableBGChange = () =>
    !formikSignUp.values.name ||
    !formikSignUp.values.email ||
    !formikSignUp.values.location ||
    !formikSignUp.values.password ||
    !formikSignUp.values.rePassword ||
    !isChecked
      ? "#EEEFF2"
      : "#18BA51";

  return (
    <>
      {showConfirmation && (
        <Stack alignItems={"center"} spacing={2} sx={{ mt: "50px" }}>
          <Box
            sx={{
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              borderRadius: "20px",
              overflow: "hidden",
              borderColor: "#18BA51",
              borderStyle: "solid",
              borderWidth: "1px",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Stack
              direction="row"
              spacing={1}
              sx={{
                px: "24px",
                py: "10px",
                borderRadius: "20px",
              }}
            >
              <CheckIcon sx={{ color: "#18BA51" }} />
              <Typography>Амжилттай бүртгэгдлээ.</Typography>
            </Stack>
          </Box>{" "}
        </Stack>
      )}
      <Stack
        justifyContent={"center"}
        width={"40%"}
        maxHeight={"98%"}
        sx={{ scale: "65%" }}
      >
        <Typography
          variant="h1"
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
                  onChange={formikSignUp.handleChange}
                  value={formikSignUp.values.email}
                  placeholder="Имэйл хаягаа оруулна уу"
                />
                {formikSignUp.errors.email && formikSignUp.touched.email ? (
                  <Typography color={"#EF4444"} sx={{ fontSize: "12px" }}>
                    {formikSignUp.errors.email}
                  </Typography>
                ) : null}
                {warningMessage && (
                  <Typography color={"#EF4444"} sx={{ fontSize: "12px" }}>
                    {warningMessage}
                  </Typography>
                )}
              </Stack>
              <Stack width={"100%"} spacing={"4px"}>
                <Typography>Хаяг</Typography>
                <TextField
                  name="location"
                  type="text"
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
                  type={showPassword ? "text" : "password"}
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
              </FormControl>
              <FormControl
                sx={{ m: 1, width: "100%", display: "flex", gap: "4px" }}
              >
                <Typography>Нууц үг давтах</Typography>
                <OutlinedInput
                  name="rePassword"
                  type="password"
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
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={"5px"}
              sx={{ marginY: "5px" }}
            >
              <Checkbox
                checked={isChecked}
                onChange={handleCheckboxChange}
                {...label}
              />
              <Typography>Үйлчилгээний нөхцөл зөвшөөрөх</Typography>
            </Stack>
            <Button
              type="submit"
              variant="text"
              disabled={handleButtonEnable()}
              sx={{
                width: "100%",
                height: 48,
                color: "white",
                background: handleButtonEnableBGChange(),
              }}
            >
              Бүртгүүлэх
            </Button>
          </form>
        </FormikProvider>
      </Stack>
    </>
  );
};
