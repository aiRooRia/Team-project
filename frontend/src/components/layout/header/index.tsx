import Box from "@mui/material/Box";

export const Header = () => {
  return (
    <Box>
      <Box
        sx={{
          bgcolor: "#ffffff",
          color: "black",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          width: "full",
          justifyItems: "center",
          alignItems: "center",
        }}
      ></Box>
    </Box>
  );
};
