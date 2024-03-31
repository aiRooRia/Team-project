import Login from "@/components/login/index";
import Footer from "@/components/layout/footer";
import { Stack } from "@mui/material";

export default function Home() {
  return (
    <>
      <Stack height="59vh" alignItems="center" justifyContent="center">
        <Stack
          height="100%"
          alignItems="center"
          justifyContent="center"
          width={"1200px"}
        >
          {" "}
          <Login></Login>
        </Stack>
      </Stack>
      <Footer />
    </>
  );
}