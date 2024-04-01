import * as React from "react";
import { Typography, Box, Divider, Button, Link, Stack } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Logos from "./Logo";

interface LinkItemProps {
  text: string;
  href: string;
}

const LinkItem: React.FC<LinkItemProps> = ({ text, href }) => {
  return (
    <Button
      variant="text"
      sx={{
        textDecoration: "underline",
        textDecorationColor: "#FFFFF",
        color: "#FFF",
        textTransform: "capitalize",
      }}
      onClick={() => (window.location.href = href)}
    >
      {text}
    </Button>
  );
};

const linkItems = [
  { text: "Нүүр", href: "/layout/menu" },
  { text: "Холбоо барих", href: "/layout/contact" },
  { text: "Хоолны цэс", href: "/layout/menu" },
  { text: "Үйлчилгээний нөхцөл", href: "/layout/terms-of-service" },
  {
    text: "Хүргэлтийн бүс",
    href: "/layout/delivery-zone",
  },
  { text: "Нууцлалын бодлого", href: "/layout/privacy" },
];

const Footer: React.FC = () => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        width: "100%",
        backgroundColor: "#18BA51",
        backgroundImage: `url(https://i.ibb.co/HVcsPm2/background.png)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "35vh",
      }}
    >
      <Box
        component="footer"
        sx={{
          display: "flex",
          minWidth: "1200px",
          height: "70%",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 2,
            alignItems: "center",
            marginRight: 5,
          }}
        >
          <Logos />
          <Typography
            variant="subtitle1"
            sx={{ color: "#FFF", fontWeight: "bold" }}
          >
            Food Delivery
          </Typography>
        </Box>
        <Box
          component="nav"
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {linkItems.map((item, index) => (
            <LinkItem key={index} text={item.text} href={item.href} />
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "25px",
            alignContent: "center",
          }}
        >
          <Link href="https://www.facebook.com/" target="_blank">
            <FacebookOutlinedIcon
              sx={{
                color: "white",
                cursor: "pointer",
                fontSize: "30px",
              }}
            />
          </Link>
          <Link href="https://www.instagram.com/" target="_blank">
            <InstagramIcon
              sx={{
                color: "white",
                cursor: "pointer",
                fontSize: "30px",
              }}
            />
          </Link>
          <Link href="https://www.twitter.com/" target="_blank">
            <TwitterIcon
              sx={{
                color: "white",
                cursor: "pointer",
                fontSize: "30px",
              }}
            />
          </Link>
        </Box>
        <Divider sx={{ my: 2, width: "100%", bgcolor: "#FFF" }} />
        <Typography variant="caption" sx={{ color: "#FFF" }}>
          © 2024 Pinecone Foods LLC
        </Typography>
        <Typography variant="caption" sx={{ color: "#FFF" }}>
          Зохиогчийн эрх хуулиар хамгаалагдсан.
        </Typography>
      </Box>
    </Stack>
  );
};

export default Footer;
