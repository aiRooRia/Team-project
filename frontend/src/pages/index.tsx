import { Header } from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { PasswordRecovery } from "@/components/login/passwordRecovery";

export default function Home() {
  return (
    <>
      <Header></Header>
      <PasswordRecovery />
      <Footer />
    </>
  );
}
