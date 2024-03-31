import { Button, Stack, TextField, Typography } from "@mui/material";
import { FormikProvider, useFormik } from "formik";
import { passwordResetScheme, FromValues } from "./validationPasswordReser";
export const StepOne = () => {
  const formikPasswordReset = useFormik<FromValues>({
    initialValues: {
      email: "",
    },
    validationSchema: passwordResetScheme,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
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
          <Typography sx={{ fontWeight: "700px", fontSize: "28px" }}>
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
                  name="email"
                  onChange={formikPasswordReset.handleChange}
                  value={formikPasswordReset.values.email}
                  placeholder="Имэйл хаягаа оруулна уу"
                />
              </Stack>
              {formikPasswordReset.errors.email &&
              formikPasswordReset.touched.email ? (
                <Typography
                  color="error"
                  sx={{ fontSize: "12px", padding: "4px" }}
                >
                  {formikPasswordReset.errors.email}
                </Typography>
              ) : null}
            </form>
          </FormikProvider>
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
