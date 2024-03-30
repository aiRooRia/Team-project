import { Box } from "@mui/material";
export const BlueButton = () => {
  return (
    <>
      <Box
        sx={{
          width: "48px",
          height: "48px",
          borderRadius: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid #0468C8",
        }}
      >
        <Box
          sx={{
            bgcolor: "#0468C8",
            width: "24px",
            height: "24px",
            borderRadius: "100px",
          }}
        ></Box>
      </Box>
    </>
  );
};
