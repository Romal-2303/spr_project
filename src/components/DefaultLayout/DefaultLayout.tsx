import React, { ReactNode } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="flex w-full h-screen">
      <Sidebar />
      <div className="w-full overflow-y-scroll">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default DefaultLayout;
