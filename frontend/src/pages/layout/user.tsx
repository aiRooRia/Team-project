import { Header } from "@/components/layout/header";
import Footer from "@/components/layout/footer";
// import { UserProfile } from "@/components/layout/header/UserProfile";
import { UserProfileIndex } from "@/components/layout/userProfile";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Header></Header>
      <UserProfileIndex />
      <Footer />
    </>
  );
}
