import Image from "next/image";
import HeaderLogo from "./haederAsset/Frame 427319554.svg";
import { useRouter } from "next/router";
import { Button, Box, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { PersonOutline, ShoppingBasket } from "@mui/icons-material";
import userButtonGreen from "./haederAsset/icon (1).svg";

export const Header = () => {

  const router = useRouter();
  const linkStyles = {
    py: 1,
    px: 2,
    fontWeight: "700",
    lineHeight: 2,
    fontSize: "14px",
    color: "#000000",
    textDecoration: "none",
  };
  const headerTExtStyle = {
    fontWeight: "700",
    lineHeight: "20px",
    color: "#000000",
  };

  const handlePush = (route: string) => {
    router.push(route);
  };

  return (
    <Box
      sx={{
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        bgcolor: "#ffffff",
      }}
    >
      <Box
        sx={{
          width: "1258px",

          justifyContent: "space-between",
          py: 1,
          px: 3,
          display: "flex",
        }}
      >
        <Box sx={{ gap: 1, display: "flex", alignItems: "center" }}>
          <Image alt="Header logo" src={HeaderLogo} width={41} height={41} />
          <Box sx={{ gap: 1, display: "flex" }}>
            <Box sx={{ py: 1, px: 2 }}>
              <Button onClick={() => handlePush("/")} sx={linkStyles}>
                НҮҮР
              </Button>
            </Box>
            <Box sx={{ py: 1, px: 2 }}>
              <Button
                onClick={() => handlePush("/layout/menu")}
                sx={linkStyles}
              >
                ХООЛНЫ ЦЭС
              </Button>
            </Box>
            <Box sx={{ py: 1, px: 2 }}>
              <Button
                onClick={() => handlePush("/layout/delivery-zone")}
                sx={linkStyles}
              >
                ХҮРГЭЛТИЙН БҮС
              </Button>
            </Box>
          </Box>
        </Box>
        <Box sx={{ gap: 1, display: "flex" }}>
          <TextField
            placeholder="Search"
            InputProps={{
              startAdornment: <SearchIcon sx={{ color: "#000000", mr: 1 }} />,
            }}
            sx={{
              borderColor: "#000000",
              width: "260px",
              py: 1,
              px: 2,
              gap: 1,
              borderRadius: 1,
            }}
          />
          <Box sx={{ display: "flex" }}>
            <Button sx={{ gap: 1, py: 1, px: 2, ...headerTExtStyle }}>
              <ShoppingBasket sx={{ width: 24, height: 24 }} />
              Сагс
            </Button>
            <Button sx={{ gap: 1, py: 1, px: 2, ...headerTExtStyle }}>
              Нэвтрэх
              <PersonOutline sx={{ width: 24, height: 24 }} />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
