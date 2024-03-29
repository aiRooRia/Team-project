import { Box, Avatar, Typography, Button } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CallIcon from "@mui/icons-material/Call";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import HistoryIcon from "@mui/icons-material/History";
import LogoutIcon from "@mui/icons-material/Logout";
import { green } from "@mui/material/colors";
import EditIcon from "@mui/icons-material/Edit";
import { useRouter } from "next/router";

export const UserProfile = () => {
  const router = useRouter();
  const handlePush = (route: string) => {
    router.push(route);
  };

  const nameContainerStyle = {
    display: "flex",
    gap: "4px",
    flexDirection: "column",
    width: "264px",
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
  const iconContainerSryle = {
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
    <Box
      sx={{
        display: "flex",
        gap: 3,
        width: "432px",
        height: "617px",
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
            }}
          >
            <Box sx={greyContainerStyle}>
              <Box sx={iconContainerSryle}>
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
                onClick={() => handlePush("/")}
                sx={{ width: 24, height: 24 }}
              >
                <EditIcon sx={{ width: 24, height: 24, color: green[500] }} />
              </Button>
            </Box>
            <Box sx={greyContainerStyle}>
              <Box sx={iconContainerSryle}>
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
                onClick={() => handlePush("/")}
                sx={{ width: 24, height: 24 }}
              >
                <EditIcon sx={{ width: 24, height: 24, color: green[500] }} />
              </Button>
            </Box>
            <Box sx={greyContainerStyle}>
              <Box sx={iconContainerSryle}>
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
                onClick={() => handlePush("/")}
                sx={{ width: 24, height: 24 }}
              >
                <EditIcon sx={{ width: 24, height: 24, color: green[500] }} />
              </Button>
            </Box>
            <Box sx={{ ...greyContainerStyle, bgcolor: "#ffffff" }}>
              <Box sx={iconContainerSryle}>
                <HistoryIcon
                  sx={{
                    width: 24,
                    height: 24,
                  }}
                />
              </Box>
              <Box sx={nameContainerStyle}>
                <Typography sx={textBottomStyle}>Захиалгын түүх</Typography>
              </Box>
            </Box>
            <Box sx={{ ...greyContainerStyle, bgcolor: "#ffffff" }}>
              <Box sx={iconContainerSryle}>
                <Button sx={{ width: "24px", height: "24px" }}>
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
        </Box>
      </Box>
    </Box>
  );
};
