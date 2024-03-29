import * as React from "react";
import { Typography, Box, Divider, Button, Link } from "@mui/material";
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
  { text: "Үйлчилгээний нөхцөл", href: "/layout/terms" },
  {
    text: "Хүргэлтийн бүс",
    href: "/layout/delivery-zone",
  },
  { text: "Нууцлалын бодлого", href: "/layout/privacy" },
];

const Footer: React.FC = () => {
  return (
    <Box sx={{ display: "flex", width: "100vw" }}>
      <Box
        component="footer"
        sx={{
          display: "flex",
          width: "100vw",
          height: "35vh",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#18BA51",
          backgroundImage: `url(https://i.ibb.co/HVcsPm2/background.png)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          gap: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 2,
            mt: 2,
            alignItems: "center",
          }}
        >
          <Logos />
          <Typography variant="h6" sx={{ color: "#FFF" }}>
            Food Delivery
          </Typography>
        </Box>
        <Box
          component="nav"
          sx={{
            display: "flex",
            gap: 4,
            justifyContent: "center",
            mt: 2,
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
            pt: "20px",
          }}
        >
          <Link href="https://www.facebook.com/" target="_blank">
            <FacebookOutlinedIcon
              sx={{
                color: "white",
                cursor: "pointer",
                fontSize: "41px",
              }}
            />
          </Link>
          <Link href="https://www.instagram.com/" target="_blank">
            <InstagramIcon
              sx={{
                color: "white",
                cursor: "pointer",
                fontSize: "41px",
              }}
            />
          </Link>
          <Link href="https://www.twitter.com/" target="_blank">
            <TwitterIcon
              sx={{
                color: "white",
                cursor: "pointer",
                fontSize: "41px",
              }}
            />
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 5,
            justifyContent: "center",
            py: 1.5,
            pr: 1.5,
            mt: 2,
          }}
        ></Box>
        <Divider sx={{ my: 2, width: "80%", bgcolor: "#FFF" }} />

        <Typography variant="body2" sx={{ mt: 2, color: "#FFF" }}>
          © 2024 Pinecone Foods LLC
        </Typography>
        <Typography variant="body2" sx={{ mt: 2, mb: 2, color: "#FFF" }}>
          Зохиогчийн эрх хуулиар хамгаалагдсан.
        </Typography>
      </Box>
      <Box sx={{}}></Box>
    </Box>
  );
};

export default Footer;
