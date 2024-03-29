import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
  Tooltip,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FilledInput,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import * as React from "react";

const Home = () => {
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
        width={"1440px"}
        height={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Stack
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={5}
          width={"38.5%"}
        >
          <Typography sx={{ fontWeight: "700px", fontSize: "28px" }}>
            Нэвтрэх
          </Typography>
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
                sx={{ backgroundColor: "#ECEDF0" }}
                error
                id="outlined-error-helper-text"
                placeholder="Имэйл хаягаа оруулна уу"
                helperText="Incorrect entry."
                FormHelperTextProps={{
                  sx: {
                    color: "#ff0000",
                  },
                }}
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
                  placeholder="Нууц үгээ оруулна уу"
                  // id="outlined-adornment-password"
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
                variant="text"
                sx={{
                  width: "100%",
                  height: 48,
                  background: "rgba(28, 32, 36, 0.24)",
                  color: "#EEEFF2",
                }}
              >
                Нэвтрэх
              </Button>
              <Typography>Эсвэл</Typography>
              <Button
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
        </Stack>
      </Stack>
    </>
  );
};
export default Home;
