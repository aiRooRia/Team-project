import Login from "@/components/login/index";
import Footer from "@/components/layout/footer";
import { Stack } from "@mui/material";
import { getUserLayout } from "@/components/layout/UserLayout";

const LoginPage = () => {
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
    </>
  );
}
LoginPage.getLayout = getUserLayout;

export default LoginPage;