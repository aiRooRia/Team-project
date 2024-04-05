import Login from "@/components/login/index";
import Footer from "@/components/layout/footer";
import { Stack } from "@mui/material";
// import { UserProfile } from "@/components/layout/header/UserProfile";
import { UserProfileIndex } from "@/components/layout/userProfile";
import { getUserLayout } from "@/components/layout/UserLayout";

const ProfilePage = () => {
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
          <UserProfileIndex></UserProfileIndex>
        </Stack>
      </Stack>
    </>
  );
}
ProfilePage.getLayout = getUserLayout;

export default ProfilePage;