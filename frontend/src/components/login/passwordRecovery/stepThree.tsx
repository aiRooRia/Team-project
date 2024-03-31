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
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import * as React from "react";

export const StepThree = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <>
      <Stack
        width={"100vw"}
        height={"100vh"}
        display={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ backgroundColor: "rgba(0, 0, 0, 0.50)" }}
      >
        <Stack
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={5}
          width={"400px"}
          border={"3px"}
          borderRadius={"10px"}
          padding={"32px"}
          sx={{ backgroundColor: "white" }}
        >
          <Typography
            sx={{ fontWeight: "700px", fontSize: "28px", fontStyle: "normal" }}
          >
            Шинэ нууц үг зохиох
          </Typography>
          <FormControl
            sx={{ m: 1, width: "100%", display: "flex", gap: "4px" }}
          >
            <Typography
              sx={{
                fontWeight: "400px",
                fontSize: "14px",
                fontStyle: "normal",
              }}
            >
              Нууц үг
            </Typography>
            <OutlinedInput
              name="password"
              type="password"
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
            {/* {formikSignUp.errors.password && formikSignUp.touched.password ? (
              <Typography color={"#EF4444"} sx={{ fontSize: "12px" }}>
                {formikSignUp.errors.password}
              </Typography>
            ) : null} */}
          </FormControl>
          <FormControl
            sx={{ m: 1, width: "100%", display: "flex", gap: "4px" }}
          >
            <Typography
              sx={{
                fontWeight: "400px",
                fontSize: "14px",
                fontStyle: "normal",
              }}
            >
              Нууц үг давтах
            </Typography>
            <OutlinedInput
              name="rePassword"
              type="password"
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
            {/* {formikSignUp.errors.rePassword &&
            formikSignUp.touched.rePassword ? (
              <Typography color={"#EF4444"} sx={{ fontSize: "12px" }}>
                {formikSignUp.errors.rePassword}
              </Typography>
            ) : null} */}
          </FormControl>
          <Button
            type="submit"
            variant="text"
            sx={{
              width: "100%",
              height: 48,
              background: password ? "#18BA51" : "#EEEFF2",
              color: "white",
            }}
          >
            Үргэлжлүүлэх
          </Button>
        </Stack>
      </Stack>
    </>
  );
};
