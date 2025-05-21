import React, { ReactNode } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="border border-red-500 bg-blue-500">
      <Sidebar />
      <div>
        <Header />
        {children}
      </div>
    </div>
  );
};

export default DefaultLayout;
