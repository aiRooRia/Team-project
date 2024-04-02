import { Box, Avatar, Typography, Button } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useRouter } from "next/router";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import CallIcon from "@mui/icons-material/Call";
import EditIcon from "@mui/icons-material/Edit";
import { green } from "@mui/material/colors";
import { useContext, useState } from "react";

import HistoryIcon from "@mui/icons-material/History";
import LogoutIcon from "@mui/icons-material/Logout";
import { UserContext } from "@/components/utils/context/userContext";
interface StepOneProps {
  setCurrentStep: (step: number) => void;
  currentStep: number;
}
export const UserProfile = ({ setCurrentStep, currentStep }: StepOneProps) => {
  const [modal, setModal] = useState(false);
  const handlePush = (route: string) => {
    router.push(route);
  };
  const router = useRouter();
  const handleModalToggle = () => {
    setModal(!modal);
  };
  const { userProfile, setUserProfile } = useContext(UserContext);

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
    py: 1,
    px: "20px",
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

  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: 3,
          width: "432px",
          mx: "auto",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 5,
            flexDirection: "column",
            width: "432px",
          }}
        >
          <Avatar
            sx={{ width: "120px", height: "120px", mx: "auto" }}
            alt="Cindy Baker"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR25OJBgnpPt2mxR57shHQrWrY3cQZU62cDDnLWstP97ZHncDnzCzwutdMSC1FgLYNdqiI&usqp=CAU"
          />
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "28px",
              lineHeight: "33.41px",
              textAlign: "center",
              color: "#0D1118",
            }}
          >
            Сэнгэ
          </Typography>
        </Box>
        <Box sx={{ display: "flex", pt: 2, gap: 5 }}>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: "center",
                flexDirection: "column",
                marginLeft: "25px",
              }}
            >
              <Box sx={greyContainerStyle}>
                <Box sx={iconContainerStyle}>
                  <PersonOutlineIcon
                    sx={{
                      width: 24,
                      height: 24,
                    }}
                  />
                </Box>
                <Box sx={nameContainerStyle}>
                  <Typography sx={textTopStyle}>Таны нэр</Typography>
                  <Typography sx={textBottomStyle}>Сэнгэ</Typography>
                </Box>
                <Button
                  onClick={() => setCurrentStep(currentStep + 1)}
                  sx={{ width: 24, height: 24 }}
                >
                  <EditIcon sx={{ width: 24, height: 24, color: green[500] }} />
                </Button>
              </Box>
              <Box sx={greyContainerStyle}>
                <Box sx={iconContainerStyle}>
                  <CallIcon
                    sx={{
                      width: 24,
                      height: 24,
                    }}
                  />
                </Box>
                <Box sx={nameContainerStyle}>
                  <Typography sx={textTopStyle}>Утасны дугаар</Typography>
                  <Typography sx={textBottomStyle}>85464933</Typography>
                </Box>
                <Button
                  onClick={() => setCurrentStep(currentStep + 1)}
                  sx={{ width: 24, height: 24 }}
                >
                  <EditIcon sx={{ width: 24, height: 24, color: green[500] }} />
                </Button>
              </Box>
              <Box sx={greyContainerStyle}>
                <Box sx={iconContainerStyle}>
                  <ForwardToInboxIcon
                    sx={{
                      width: 24,
                      height: 24,
                    }}
                  />
                </Box>
                <Box sx={nameContainerStyle}>
                  <Typography sx={textTopStyle}>Имэйл хаяг</Typography>
                  <Typography sx={textBottomStyle}>
                    Ssenge1515@gmail.com
                  </Typography>
                </Box>
                <Button
                  onClick={() => setCurrentStep(currentStep + 1)}
                  sx={{ width: 24, height: 24 }}
                >
                  <EditIcon sx={{ width: 24, height: 24, color: green[500] }} />
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ ...greyContainerStyle, bgcolor: "#ffffff" }}>
          <Box sx={iconContainerStyle}>
            <HistoryIcon
              sx={{
                width: 24,
                height: 24,
              }}
            />
          </Box>
          <Button onClick={() => handlePush("")}>
            <Typography sx={{ ...textBottomStyle, textTransform: "none" }}>
              Захиалгын түүх
            </Typography>
          </Button>
        </Box>
        <Box sx={{ ...greyContainerStyle, bgcolor: "#ffffff" }}>
          <Box sx={iconContainerStyle}>
            <Button
              onClick={handleModalToggle}
              sx={{ width: "24px", height: "24px" }}
            >
              <LogoutIcon
                sx={{
                  width: 24,
                  height: 24,
                  color: "#000000",
                }}
              />
            </Button>
          </Box>
          <Box sx={nameContainerStyle}>
            <Typography sx={textBottomStyle}>Гарах</Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          bottom: 0,
          left: 0,
          background: "rgba(0, 0, 0, 0.5)",
          display: modal ? "block" : "none",
          height: "100%",
        }}
      >
        <Box
          sx={{
            mx: "auto",
            marginTop: "200px",
            bgcolor: "#ffffff",
            borderRadius: "20px",
            height: "228px",
            width: "384px",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              top: "40px",
              height: "102px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                lineHeight: "30px",
                fontSize: "20px",
                fontWeight: "600",
                color: "#171717",
              }}
            >
              Та системээс гарахдаа итгэлтэй байна уу?
            </Typography>
          </Box>
          <Button
            onClick={() => {
              handlePush("/");
              handleModalToggle();
            }}
            sx={{
              ...exitButtonStyle,
              bgcolor: "rgba(24, 186, 81, 0.2)",
              color: "#8B8E95",
              borderRadius: "0 0 0 20px",
              "&:hover": {
                bgcolor: "rgba(24, 186, 81, 0.2)",
                color: "#8B8E95",
                borderBottomRightRadius: 0,
              },
            }}
          >
            Тийм
          </Button>
          <Button
            onClick={handleModalToggle}
            sx={{
              ...exitButtonStyle,
              right: 0,
              bgcolor: "#18BA51",
              color: "#ffffff",
              "&:hover": {
                bgcolor: "#18BA51",
                color: "#ffffff",
              },
              borderRadius: "0 ,0 ,20px, 0 ",
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: "20px",
            }}
          >
            Үгүй
          </Button>
        </Box>
      </Box>
    </>
  );
};
