// import "@/styles/globals.css";
// import type { AppProps } from "next/app";
// import { UserContextProvider } from "@/components/utils/context/userContext";
// import { Header } from "@/components/layout/header";
// import { AdminContextProvider } from "@/components/utils/context/adminContext";
// export default function App({ Component, pageProps }: AppProps) {
//   return (
//     <AdminContextProvider>
//       <UserContextProvider>
//         <Header></Header>
//         <Component {...pageProps} />
//       </UserContextProvider>
//     </AdminContextProvider>
//   );
// }
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
}