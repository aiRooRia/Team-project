import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { UserContextProvider } from "@/components/utils/context/userContext";
import { Header } from "@/components/layout/header";
import { AdminContextProvider } from "@/components/utils/context/adminContext";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <AdminContextProvider>
      <UserContextProvider>
        <Header></Header>
        <Component {...pageProps} />
      </UserContextProvider>
    </AdminContextProvider>
  );
}
