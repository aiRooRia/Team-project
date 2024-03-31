import { useContext, useState, useEffect } from "react";
import { StepOne } from "./stepOne";
import { StepThree } from "./stepThree";
import { StepTwo } from "./stepTwo";
import { UserContext } from "@/components/utils/context/userContext";
import { useRouter } from "next/router";
import { Button, Stack } from "@mui/material";
export const PasswordRecovery = () => {
  const { push } = useRouter();
  const { passwordRecoveryUser, setPasswordRecoveryUser } =
    useContext(UserContext);
  const [currentStep, setCurrentStep] = useState(0);
  const confirm = async () => {
    if (currentStep === 0) {
      setCurrentStep(currentStep + 1);
      console.log(passwordRecoveryUser, "passwordRecoveryUsers");
    } else if (currentStep === 1) {
      setCurrentStep(currentStep + 1);
      console.log(passwordRecoveryUser, "passwordRecoveryUsers");
    } else if (currentStep === 2) {
      console.log(passwordRecoveryUser, "passwordRecoveryUsers");

      push("/");
    }
  };

  return (
    <>
      <Stack
        width={"100%"}
        height={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
      > <Stack  width={"1200px"}
      height={"100%"}
      justifyContent={"center"}
      alignItems={"center"}>
{currentStep === 0 && (
          <StepOne
            setCurrentStep={setCurrentStep}
            currentStep={currentStep}
          ></StepOne>
        )}
        {currentStep === 1 && <StepTwo setCurrentStep={setCurrentStep}
            currentStep={currentStep}></StepTwo>}
        {currentStep === 2 && <StepThree setCurrentStep={setCurrentStep}
            currentStep={currentStep}></StepThree>}
      </Stack>       
      </Stack>
    </>
  );
};
