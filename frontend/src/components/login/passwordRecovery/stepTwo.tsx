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
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "@/components/utils/context/userContext";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

interface StepOneProps {
  setCurrentStep: (step: number) => void;
  currentStep: number;
}
export const StepTwo = ({ setCurrentStep, currentStep }: StepOneProps) => {
  const [password, setPassword] = useState("");
  type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

  const handlePasswordChange = (event: ChangeEvent) => {
    setPassword(event.target.value);
  };
  const { passwordRecoveryUser, setPasswordRecoveryUser } =
    useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <Stack
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      spacing={5}
      width={"30%"}
      sx={{ scale: "90%" }}
    >
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        Нууц үг сэргээх
      </Typography>
      <Typography variant="body1" color={"#695C08"}>
        Таны{" "}
        <span style={{ color: "#18BA51", fontWeight: "600" }}>
          {passwordRecoveryUser.email}
        </span>{" "}
        хаяг руу сэргээх код илгээх болно.{" "}
      </Typography>
      <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
        <Typography>Нууц үг сэргээх код</Typography>
        <OutlinedInput
          id="outlined-adornment-password"
          onChange={handlePasswordChange}
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

      <Button
        onClick={() => {
          setCurrentStep(currentStep + 1);
        }}
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
  );
};
