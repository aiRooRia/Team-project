import { Button, Stack, TextField, Typography } from "@mui/material";
import { FormikProvider, useFormik } from "formik";
import { passwordResetScheme, FromValues } from "./validationPasswordReser";
import { log } from "console";
import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "@/components/utils/context/userContext";
import { Scale } from "@mui/icons-material";

interface StepOneProps {
  setCurrentStep: (step: number) => void;
  currentStep: number;
}
export const StepOne = ({ setCurrentStep, currentStep }: StepOneProps) => {
  const { passwordRecoveryUser, setPasswordRecoveryUser } =
    useContext(UserContext);
  const formikPasswordReset = useFormik<FromValues>({
    initialValues: {
      email: "",
    },
    validationSchema: passwordResetScheme,
    onSubmit: async (values) => {
      console.log("helloo");
      console.log(values);
      setPasswordRecoveryUser((prev) => ({ ...prev, email: values.email }));
      setCurrentStep(currentStep + 1);
    },
  });
  useEffect(() => {}, []);
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
          <Stack width={"100%"} spacing={"4px"}>
            <Typography>Имэйл</Typography>
            <TextField
              sx={{ width: "100%" }}
              name="email"
              onChange={formikPasswordReset.handleChange}
              value={formikPasswordReset.values.email}
              placeholder="Имэйл хаягаа оруулна уу"
            />
            {formikPasswordReset.errors.email &&
            formikPasswordReset.touched.email ? (
              <Typography
                color="error"
                sx={{ fontSize: "12px", padding: "4px" }}
              >
                {formikPasswordReset.errors.email}
              </Typography>
            ) : null}
          </Stack>
          <Button
            type="submit"
            variant="text"
            disabled={!formikPasswordReset.values.email}
            sx={{
              width: "100%",
              height: 48,
              background: formikPasswordReset.values.email
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
