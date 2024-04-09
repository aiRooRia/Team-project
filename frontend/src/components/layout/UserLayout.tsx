import Footer from "./footer/index";
import { Header } from "./header/index";
import { ReactNode, ReactElement } from "react";
import React from "react";

const UserLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export const getUserLayout = (page: ReactElement): ReactNode => {
  return <UserLayout>{page}</UserLayout>;
};
