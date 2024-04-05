
import { Header } from "./header";
import { ReactElement, ReactNode } from "react";
import React from "react";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header/>
      {children}
    </>
  );
};
export const getAdminLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};