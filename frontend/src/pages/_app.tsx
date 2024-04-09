import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { AdminContextProvider } from "@/components/utils/context/adminContext";
import { UserContextProvider } from "@/components/utils/context/userContext";
import { OrderContextProvider } from "@/components/utils/context/orderContext";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <OrderContextProvider>
    <AdminContextProvider>
      
      <UserContextProvider>
        {/* <OrderContextProvider> */}
      <Component {...pageProps} />
      {/* </OrderContextProvider> */}
      </UserContextProvider>
      
    </AdminContextProvider>
    </OrderContextProvider>
    

  );
}
