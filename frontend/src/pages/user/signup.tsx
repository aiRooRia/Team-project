import Footer from "@/components/layout/footer";
import { Signup } from "@/components/signup";
import { Stack } from "@mui/material";

export default function Home() {
  return (
    <>
      <Stack height="59vh" alignItems="center" justifyContent="center">
        <Stack
          height="100%"
          minHeight={"100%"}
          alignItems="center"
          justifyContent="center"
          width={"1200px"}
        >
          {" "}
          <Signup></Signup>
        </Stack>
      </Stack>
      <Footer />
    </>
  );
}
