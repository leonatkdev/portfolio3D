import React, { useState } from "react";
import DashboardMenu from "../organisms/DashboardMenu";
import DashboardNavigation from "../molecules/dashboard/DashboardNavigation";
import NotFound from "../pages/client/NotFound";

const DashboardLayout = ({ children }) => {
  const isAuthenticated = JSON.parse(sessionStorage.getItem("user")) || null;
  return isAuthenticated ? (
    <div className="flex">
      <DashboardMenu />
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
