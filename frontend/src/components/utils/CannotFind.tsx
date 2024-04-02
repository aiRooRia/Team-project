import Image from "next/image";
import { Box, Typography } from "@mui/material";
import BoxImage from "./utilsImages/Screenshot 2024-01-05 at 17.39 1.svg";

export const CannotFind = () => {
  return (
    <Box
      sx={{
        width: "208px",
        display: "flex",
        gap: "32px",
        flexDirection: "column",
        mx: "auto",
      }}
    >
      <Box sx={{ mx: "auto" }}>
        <Image src={BoxImage} alt="BoxImage" width={133} height={133} />
      </Box>
      <Typography
        sx={{
          color: "#8B8E95",
          lineHeight: "16.71px",
          fontSize: "14px",
          fontWeight: "400",
        }}
      >
        Уучлаарай илэрц олдсонгүй...
      </Typography>
    </Box>
  );
};
