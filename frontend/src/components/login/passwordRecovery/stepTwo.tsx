import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
export const StepTwo = () => {
  const [password, setPassword] = useState("");
  type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

  const handlePasswordChange = (event: ChangeEvent) => {
    setPassword(event.target.value);
  };
  return (
    <>
      <Stack
        width={"100vw"}
        height={"100vh"}
        display={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ backgroundColor: "rgba(0, 0, 0, 0.50)" }}
      >
        <Stack
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={5}
          width={"400px"}
          border={"3px"}
          borderRadius={"10px"}
          padding={"32px"}
          sx={{ backgroundColor: "white" }}
        >
          <Typography sx={{ fontWeight: "700px", fontSize: "28px" }}>
            Нууц үг сэргээх
          </Typography>

          <Stack width={"100%"} spacing={"4px"}>
            <Typography> Нууц үг сэргээх код</Typography>
            <TextField
              name="email"
              placeholder="Нууц үгээ оруулна уу"
              onChange={handlePasswordChange}
            />
          </Stack>

          <Button
            type="submit"
            variant="text"
            sx={{
              width: "100%",
              height: 48,
              background: password ? "#18BA51" : "#EEEFF2",
              color: "white",
            }}
          >
            Үргэлжлүүлэх
          </Button>
        </Stack>
      </Stack>
    </>
  );
};
