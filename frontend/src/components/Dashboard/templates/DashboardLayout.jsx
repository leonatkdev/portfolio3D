import React, { useState } from "react";
import MainDashboardMenu from "../organisms/MainDashboardMenu";
import DashboardNavigation from "../molecules/DashboardNavigation";
import NotFound from "../../Client/pages/NotFound";

const DashboardLayout = ({ children }) => {
  const isAuthenticated = JSON.parse(sessionStorage.getItem("user")) || null;
  return isAuthenticated ? (
    <div className="flex">
      <MainDashboardMenu />
      <div className="w-full bg-mainBackground text-[#121827]">
        <DashboardNavigation />
        {children}
      </div>
    </div>
  ) : (
     <NotFound text="You are not authorized to view this page" />
  );
};

export default DashboardLayout; 
