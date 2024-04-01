import { useContext, useState, useEffect } from "react";
import { StepOne } from "./stepOne";
import { StepThree } from "./stepThree";
import { StepTwo } from "./stepTwo";
import { UserContext } from "@/components/utils/context";
import { Header } from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { useRouter } from "next/router";
import { Button, Stack } from "@mui/material";
export const PasswordRecovery = () => {
  const { push } = useRouter();
  const { passwordRecoveryUsers, setPasswordRecoveryUsers } =
    useContext(UserContext);
  const [currentStep, setCurrentStep] = useState(0);
  const confirm = async () => {
    if (currentStep === 0) {
      setCurrentStep(currentStep + 1);
      console.log(passwordRecoveryUsers, "passwordRecoveryUsers");
    } else if (currentStep === 1) {
      setCurrentStep(currentStep + 1);
      console.log(passwordRecoveryUsers, "passwordRecoveryUsers");
    } else if (currentStep === 2) {
      console.log(passwordRecoveryUsers, "passwordRecoveryUsers");
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_ENDPOINT}/users/login`,
          {
            method: "POST",
            headers: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(passwordRecoveryUsers),
          }
        );
        const response = await res.json();
        // if (response.success) {
        //   localStorage.setItem("id", response.user.id);
        //   push("/dashboard");
        // } else if (response.message === "failed") {
        //   setWarningMessage("Password does not match.");
        // } else if (response.message === "nodata") {
        //   setWarningMessage("Unregistered email.");
        // }
      } catch (error) {
        console.log(error);
      }
      push("/");
    }
  };
  return (
    <>
      <Header></Header>
      <Stack>
        {currentStep === 0 && <StepOne></StepOne>}
        {currentStep === 1 && <StepTwo></StepTwo>}
        {currentStep === 2 && <StepThree></StepThree>}
        <Button
          type="submit"
          onClick={confirm}
          variant="text"
          sx={{
            width: "100%",
            height: 48,
            background: "#18BA51",
            color: "white",
          }}
        >
          Үргэлжлүүлэх
        </Button>{" "}
      </Stack>

      <Footer />
    </>
  );
};
