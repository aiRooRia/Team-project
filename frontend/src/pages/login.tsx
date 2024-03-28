import { Box, Button, Container, TextField } from "@mui/material";
import { green } from "@mui/material/colors";

const Home = () => {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "1440px",
          height: "100vh",
        }}
      >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <Button
          variant="text"
          sx={{ width: 385, height: 48, color: "#18BA51", border: 1 }}
        >
          Бүртгүүлэх
        </Button>
      </Container>
    </>
  );
};
export default Home;
