import { Header } from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { UserProfile } from "@/components/layout/header/UserProfile";
import { Box } from "@mui/material";
export default function Home() {
  return (
    <Box sx={{ width: "100%", height: "100vh", position: "relative" }}>
      <Header></Header>
      <UserProfile />
      <Footer />
    </Box>
  );
}
