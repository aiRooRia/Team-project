import { Box } from "@mui/material";
import Image from "next/image";
import CheckImage from "../utilsImages/check.svg";
export const GreenButton = () => {
  return (
    <>
      <Box
        sx={{
          width: "48px",
          height: "48px",
          borderRadius: "100px",
          bgcolor: "#18BA51",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image src={CheckImage} alt="checkImage" width={16.3} height={12.03} />
      </Box>
    </>
  );
};
