import { Stack } from "@mui/material";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { UserContext } from "@/components/utils/context/userContext";
import { UserProfile } from "./UserProfile";
export const UserProfileIndex = () => {
  const [modal, setModal] = useState(false);
  const handleModalToggle = () => {
    setModal(!modal);
  };
  const router = useRouter();
  const handlePush = (route: string) => {
    router.push(route);
  };
  const exitButtonStyle = {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    position: "absolute",
    width: "50%",
    height: "61px",
    top: "167px",
    transition: "background-color 0.3s, color 0.3s",
    borderLeft: 0,
  };
  const nameContainerStyle = {
    display: "flex",
    gap: "4px",
    flexDirection: "column",
    width: "214px",
  };
  const textTopStyle = {
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "14.32px",
    color: "#888A99",
  };
  const textBottomStyle = {
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "19.09px",
    color: "#0D1118",
  };
  const greyContainerStyle = {
    bgcolor: "#F6F6F6",
    display: "flex",
    gap: 1,
    py: "12px",
    px: "40px",
    alignItems: "center",
  };
  const iconContainerStyle = {
    width: 48,
    height: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "100px",
    border: "1px solid #EEEFF2",
    bgcolor: "#ffffff",
  };
  const [currentStep, setCurrentStep] = useState(0);
  const { userProfile, setUserProfile } = useContext(UserContext);
  const confirm = async () => {
    if (currentStep === 0) {
      setCurrentStep(currentStep + 1);
      console.log(userProfile, "userProfile");
    } else if (currentStep === 1) {
      setCurrentStep(currentStep + 1);
      console.log(userProfile, "userProfile");
    }
  };

  return (
    <>
      <Stack>
        <UserProfile
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
        ></UserProfile>
      </Stack>
    </>
  );
};
