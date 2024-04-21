import React, { useState } from "react";
import DashboardMenu from "../organisms/DashboardMenu";
import DashboardNavigation from "../molecules/dashboard/DashboardNavigation";

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
    <div>You don't have access Mate</div>
  );
};

export default DashboardLayout; 
