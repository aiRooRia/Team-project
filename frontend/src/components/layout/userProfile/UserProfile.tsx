import {
  Box,
  Avatar,
  Typography,
  Button,
  Stack,
  TextField,
} from "@mui/material";
import { useRouter } from "next/router";
import EditIcon from "@mui/icons-material/Edit";
import { green } from "@mui/material/colors";
import { useContext, useState } from "react";
import HistoryIcon from "@mui/icons-material/History";
import LogoutIcon from "@mui/icons-material/Logout";
import { UserContext } from "@/components/utils/context/userContext";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { FormikProvider, useFormik } from "formik";
import { FromValues, userProfileSchema } from "./validationSchema";

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
  const [disable, setDisable] = useState(true);
  const [saveButton, setSaveButton] = useState(false);
  const handleButton = () => {
    setSaveButton(true);
  };
  const handleEdit = () => {
    setDisable(false);
    handleButton();
  };
  const textFieldNoBorder = {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "& .MuiOutlinedInput-input": {
      padding: 0,
    },
  };
  const formikUserProfile = useFormik<FromValues>({
    initialValues: {
      name: userProfile.name,
      phoneNumber: userProfile.phone,
      email: userProfile.email,
    },
    validationSchema: userProfileSchema,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
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
        <Stack>
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
              {userProfile.name}
            </Typography>
          </Box>
        </Stack>
        <FormikProvider value={formikUserProfile}>
          <form onSubmit={formikUserProfile.handleSubmit}>
            <Stack spacing={"8px"}>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                borderRadius={"10px"}
                sx={{ backgroundColor: "#F6F6F6", px: "20px", py: "8px" }}
              >
                <Stack direction={"row"} spacing={"8px"}>
                  <Stack
                    justifyContent={"center"}
                    alignItems={"center"}
                    sx={{
                      backgroundColor: "white",
                      border: "1px solid #eeeff2",
                      borderRadius: "50%",
                      width: "50px",
                      height: "50px",
                    }}
                  >
                    <PersonOutlinedIcon
                      sx={{
                        fontSize: "30px",
                      }}
                    />
                  </Stack>
                  <Box>
                    <Typography>Нэр</Typography>
                    <TextField
                      name="name"
                      type="text"
                      disabled={disable}
                      onChange={formikUserProfile.handleChange}
                      value={formikUserProfile.values.name}
                      placeholder="Нэрээ оруулна уу"
                      sx={textFieldNoBorder}
                    ></TextField>
                    {formikUserProfile.errors.name &&
                    formikUserProfile.touched.name ? (
                      <Typography color={"#EF4444"} sx={{ fontSize: "12px" }}>
                        {formikUserProfile.errors.name}
                      </Typography>
                    ) : null}
                  </Box>
                </Stack>
                <Button
                  onClick={() => {
                    handleEdit();
                  }}
                  sx={{ width: 24, height: 24 }}
                >
                  <EditIcon sx={{ width: 24, height: 24, color: green[500] }} />
                </Button>
              </Stack>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                borderRadius={"10px"}
                sx={{ backgroundColor: "#F6F6F6", px: "20px", py: "8px" }}
              >
                <Stack direction={"row"} spacing={"8px"}>
                  <Stack
                    justifyContent={"center"}
                    alignItems={"center"}
                    sx={{
                      backgroundColor: "white",
                      border: "1px solid #eeeff2",
                      borderRadius: "50%",
                      width: "50px",
                      height: "50px",
                    }}
                  >
                    <PhoneIcon
                      sx={{
                        fontSize: "30px",
                      }}
                    />
                  </Stack>
                  <Box>
                    <Typography>Утасны дугаар</Typography>
                    <TextField
                      name="phoneNumber"
                      type="text"
                      disabled={disable}
                      onChange={formikUserProfile.handleChange}
                      value={formikUserProfile.values.phoneNumber}
                      placeholder="Утасны дугаараа оруулна уу"
                      sx={textFieldNoBorder}
                    ></TextField>
                    {formikUserProfile.errors.phoneNumber &&
                    formikUserProfile.touched.phoneNumber ? (
                      <Typography color={"#EF4444"} sx={{ fontSize: "12px" }}>
                        {formikUserProfile.errors.phoneNumber}
                      </Typography>
                    ) : null}
                  </Box>
                </Stack>
                <Button
                  onClick={() => {
                    handleEdit();
                  }}
                  sx={{ width: 24, height: 24 }}
                >
                  <EditIcon sx={{ width: 24, height: 24, color: green[500] }} />
                </Button>
              </Stack>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                borderRadius={"10px"}
                sx={{ backgroundColor: "#F6F6F6", px: "20px", py: "8px" }}
              >
                <Stack direction={"row"} spacing={"8px"}>
                  <Stack
                    justifyContent={"center"}
                    alignItems={"center"}
                    sx={{
                      backgroundColor: "white",
                      border: "1px solid #eeeff2",
                      borderRadius: "50%",
                      width: "50px",
                      height: "50px",
                    }}
                  >
                    <EmailIcon
                      sx={{
                        fontSize: "30px",
                      }}
                    />
                  </Stack>
                  <Box>
                    <Typography>Имэйл хаяг</Typography>
                    <TextField
                      name="email"
                      type="text"
                      disabled={disable}
                      onChange={formikUserProfile.handleChange}
                      value={formikUserProfile.values.email}
                      placeholder="Имэйл хаягаа оруулна уу"
                      sx={textFieldNoBorder}
                    ></TextField>
                    {formikUserProfile.errors.email &&
                    formikUserProfile.touched.email ? (
                      <Typography color={"#EF4444"} sx={{ fontSize: "12px" }}>
                        {formikUserProfile.errors.email}
                      </Typography>
                    ) : null}
                  </Box>
                </Stack>
                <Button
                  onClick={() => {
                    handleEdit();
                  }}
                  sx={{ width: 24, height: 24 }}
                >
                  <EditIcon sx={{ width: 24, height: 24, color: green[500] }} />
                </Button>
              </Stack>
              <Stack sx={{ display: !saveButton ? "block" : "none" }}>
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
                    <Typography
                      sx={{ ...textBottomStyle, textTransform: "none" }}
                    >
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
              </Stack>
            </Stack>

            <Button
              type="submit"
              variant="text"
              sx={{
                width: "100%",
                height: 48,
                background: "#18BA51",
                color: "black",
                marginTop: 4,
                display: saveButton ? "block" : "none",
              }}
            >
              Хадгалах
            </Button>
          </form>
        </FormikProvider>
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
              localStorage.removeItem("token");
              localStorage.removeItem("role");
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
