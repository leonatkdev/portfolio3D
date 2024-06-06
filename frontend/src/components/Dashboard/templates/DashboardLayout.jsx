import React, { useState } from "react";
import MainDashboardMenu from "../organisms/MainDashboardMenu";
import DashboardNavigation from "../molecules/DashboardNavigation";
import NotFound from "../../Client/pages/NotFound";

const DashboardLayout = ({ children }) => {
  const isAuthenticated = JSON.parse(sessionStorage.getItem("user")) || null;

  console.log("isAuthenticated", isAuthenticated);

  return isAuthenticated ? (
    <div className="flex">
      <MainDashboardMenu isAdmin={isAuthenticated?.role === 'admin'} />
      <div className="w-full bg-mainBackground text-[#121827]">
        <DashboardNavigation isAdmin={isAuthenticated?.role === 'admin'}  />
        {children}
      </div>
    </div>
  ) : (
     <NotFound text="You are not authorized to view this page" />
  );
};

export default DashboardLayout; 
