import Image from "next/image";
import HeaderLogo from "./haederAsset/Frame 427319554.svg";
import { useRouter } from "next/router";
import { Button, Box, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { PersonOutline } from "@mui/icons-material";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { useState, useEffect } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { usePathname } from "next/navigation";

export const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [navbarColor, setNavbarColor] = useState("black");
  const [activeRoute, setActiveRoute] = useState<string>("");
  const [loginOrUserOrAdmin, setLoginOrUserOrAdmin] =
    useState<string>("Нэвтрэх");

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (loginOrUserOrAdmin == "Нэвтрэх") {
      handlePush("/user/login");
    } else if (loginOrUserOrAdmin == "Хэрэглэгч") {
      handlePush("/user/profile");
    } else if (loginOrUserOrAdmin == "Админ") {
      setAnchorEl(event.currentTarget);
    }
  };
  const handleProfile = () => {
    setAnchorEl(null);
    handlePush("/user/profile");
  };
  const handleMenu = () => {
    setAnchorEl(null);
    handlePush("/admin");
  };
  const handleDashboard = () => {
    setAnchorEl(null);
    handlePush("/admin/dashboard");
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setAnchorEl(null);
    handlePush("/");
  };
  const handlePush = (route: string) => {
    router.push(route);
    setActiveRoute(route);
  };

  const linkStyles = {
    py: 1,
    px: 2,
    fontWeight: "700",
    lineHeight: 2,
    fontSize: "14px",
    color: navbarColor,
    textDecoration: "none",
  };
  const headerTextStyle = {
    fontWeight: "700",
    lineHeight: "20px",
    color: "#000000",
  };
  let role: string | null = "";
  if (typeof window !== "undefined") {
    role = localStorage.getItem("role");
    console.log(role, "role");
  }

  useEffect(() => {
    if (role == "admin") {
      setLoginOrUserOrAdmin("Админ");
    } else if (role == "user") {
      setLoginOrUserOrAdmin("Хэрэглэгч");
    } else if (!role) {
      setLoginOrUserOrAdmin("Нэвтрэх");
    }
  }, [role]);

  return (
    <>
      <Box
        sx={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          bgcolor: "#ffffff",
          height: "7vh",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            bgcolor: "#ffffff",
            height: "6vh",
            minWidth: "1200px",
          }}
        >
          <Box
            sx={{
              minWidth: "1200px",
              justifyContent: "space-between",
              py: 1,
              // px: 3,
              display: "flex",
            }}
          >
            <Box sx={{ gap: 1, display: "flex", alignItems: "center" }}>
              <Box
             onClick={() => handlePush("/")}
             sx={{":hover": {cursor: "pointer"}, ":active":{scale: "95%"}}}>
                <Image
                  alt="Header logo"
                  src={HeaderLogo}
                  width={41}
                  height={41}
                />
              </Box>
              <Box sx={{ gap: 1, display: "flex" }}>
                <Box sx={{ py: 1, px: 2 }}>
                  <Button
                    onClick={() => handlePush("/")}
                    sx={{
                      ...linkStyles,
                      color: pathname === "/" ? "green" : navbarColor,
                    }}
                  >
                    НҮҮР
                  </Button>
                </Box>
                <Box sx={{ py: 1, px: 2 }}>
                  <Button
                    onClick={() => handlePush("/layout/menu")}
                    sx={{
                      ...linkStyles,
                      color:
                      pathname === "/layout/menu" ? "green" : navbarColor,
                    }}
                  >
                    ХООЛНЫ ЦЭС
                  </Button>
                </Box>
                <Box sx={{ py: 1, px: 2 }}>
                  <Button
                    onClick={() => handlePush("/layout/delivery-zone")}
                    sx={{
                      ...linkStyles,
                      color:
                      pathname === "/layout/delivery-zone"
                          ? "green"
                          : navbarColor,
                    }}
                  >
                    ХҮРГЭЛТИЙН БҮС
                  </Button>
                </Box>
              </Box>
            </Box>
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
                  gap: 1,
                  height: "40px",
                  display: "flex",

                  alignItems: "center",
                }}
              >
                <TextField
                  placeholder="Хайх"
                  InputProps={{
                    startAdornment: (
                      <SearchIcon sx={{ color: "#000000", mr: 1 }} />
                    ),
                  }}
                  inputProps={{
                    style: { padding: "8.5px" },
                  }}
                  sx={{
                    borderColor: "#000000",
                    width: "260px",
                    height: "40px",
                    borderRadius: 1,
                  }}
                />
                <Box sx={{ display: "flex" }}>
                  <Button
                    sx={{
                      gap: 1,
                      py: 1,
                      px: 2,
                      ...headerTextStyle,
                      textTransform: "capitalize",
                    }}
                  >
                    <ShoppingBasketOutlinedIcon
                      sx={{ width: 24, height: 24 }}
                    />
                    Сагс
                  </Button>
                  <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    sx={{
                      gap: 1,
                      paddingRight: 0,
                      ...headerTextStyle,
                      textTransform: "capitalize",
                    }}
                  >
                    <PersonOutline sx={{ width: 24, height: 24 }} />
                    {loginOrUserOrAdmin}
                  </Button>
                  {loginOrUserOrAdmin == "Админ" && (
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem onClick={handleProfile}>Profile</MenuItem>
                      <MenuItem onClick={handleMenu}>Food menu</MenuItem>
                      <MenuItem onClick={handleDashboard}>Dashboard</MenuItem>
                      <MenuItem onClick={handleLogOut}>Logout</MenuItem>
                    </Menu>
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
