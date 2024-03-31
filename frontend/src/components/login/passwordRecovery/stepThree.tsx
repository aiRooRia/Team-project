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
import { FormikProvider, useFormik } from "formik";
import { FromValues2, passwordResetScheme2 } from "./validationPasswordReser";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { UserContext } from "@/components/utils/context/userContext";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

interface StepThreeProps {
  setCurrentStep: (step: number) => void;
  currentStep: number;
}
export const StepThree = ({ setCurrentStep, currentStep }: StepThreeProps) => {
  const { passwordRecoveryUser, setPasswordRecoveryUser } =
    useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const handlePush = (route: string) => {
    router.push(route);
  };
  const formikPasswordReset = useFormik<FromValues2>({
    initialValues: {
      newPassword: "",
      rePassword: "",
    },
    validationSchema: passwordResetScheme2,
    onSubmit: (values) => {
      console.log("helloo");
      console.log(values.newPassword);
      console.log(passwordRecoveryUser.newPassword, "before");

      setPasswordRecoveryUser((prev) => ({
        ...prev,
        newPassword: values.newPassword,
      }));
      console.log(passwordRecoveryUser.newPassword, "after");

      setCurrentStep(0);
      handlePush("/user/login");
    },
  });
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
      <FormikProvider value={formikPasswordReset}>
        <form
          style={{ width: "100%" }}
          onSubmit={formikPasswordReset.handleSubmit}
        >
          <FormControl sx={{ width: "100%", display: "flex", gap: "4px" }}>
            <Typography>Нууц үг</Typography>
            <OutlinedInput
              name="newPassword"
              type={showPassword ? "text" : "password"}
              onChange={formikPasswordReset.handleChange}
              value={formikPasswordReset.values.newPassword}
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
            {formikPasswordReset.errors.newPassword &&
            formikPasswordReset.touched.newPassword ? (
              <Typography color={"#EF4444"} sx={{ fontSize: "12px" }}>
                {formikPasswordReset.errors.newPassword}
              </Typography>
            ) : null}
          </FormControl>
          <FormControl sx={{ width: "100%", display: "flex", gap: "4px" }}>
            <Typography>Нууц үг давтах</Typography>
            <OutlinedInput
              name="rePassword"
              type={showPassword ? "text" : "password"}
              onChange={formikPasswordReset.handleChange}
              value={formikPasswordReset.values.rePassword}
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
            {formikPasswordReset.errors.rePassword &&
            formikPasswordReset.touched.rePassword ? (
              <Typography color={"#EF4444"} sx={{ fontSize: "12px" }}>
                {formikPasswordReset.errors.rePassword}
              </Typography>
            ) : null}
          </FormControl>
          <Button
            type="submit"
            variant="text"
            disabled={!formikPasswordReset.values.newPassword}
            sx={{
              width: "100%",
              height: 48,
              background: formikPasswordReset.values.newPassword
                ? "#18BA51"
                : "#EEEFF2",
              color: "black",
              marginTop: 4,
            }}
          >
            Үргэлжлүүлэх
          </Button>
        </form>
      </FormikProvider>
    </Stack>
  );
};
