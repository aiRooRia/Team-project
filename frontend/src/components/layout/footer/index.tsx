import * as React from "react";
import { Typography, Box, Container, Divider, Button } from "@mui/material";

import Logos from "./Logo";

interface LinkItemProps {
     text: string;
}

const LinkItem: React.FC<LinkItemProps> = ({ text }) => {
     return (
          <Button
               variant="text"
               sx={{
                    textDecoration: "underline",
                    textDecorationColor: "#FFFFF",
                    color: "#FFF",
               }}
          >
               {text}
          </Button>
     );
};

const linkItems = [
     "Нүүр",
     "Холбоо барих",
     "Хоолны цэс",
     "Үйлчилгээний нөхцөл",
     "Хүргэлтийн бүс",
     "Нууцлалын бодлого",
];

const Footer: React.FC = () => {
     return (
          <Box
               component="footer"
               sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    p: 2,
                    background: "#18BA51",
                    backgroundImage:
                         "file:///Users/23LP9559/Downloads/background.png",
               }}
          >
               <Box
                    component="footer"
                    sx={{
                         backgroundImage: " ",
                         opacity: 0.8,
                         position: "absolute",

                         width: 100,
                         height: "auto",
                    }}
               ></Box>
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
                         <LinkItem key={index} text={item} />
                    ))}
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
               <Divider sx={{ my: 2, width: "100%", bgcolor: "#FFF" }} />

               <Typography variant="body2" sx={{ mt: 2, color: "#FFF" }}>
                    © 2024 Pinecone Foods LLC
               </Typography>
               <Typography variant="body2" sx={{ mt: 2, mb: 2, color: "#FFF" }}>
                    Зохиогчийн эрх хуулиар хамгаалагдсан.
               </Typography>
          </Box>
     );
};

export default Footer;
