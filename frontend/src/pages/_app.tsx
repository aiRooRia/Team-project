import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { UserContextProvider } from "@/components/utils/context";
import { Header } from "@/components/layout/header";
import { AdminContextProvider } from "@/components/utils/adminContext";
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
