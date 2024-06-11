import React, { useState } from "react";
import MainDashboardMenu from "../organisms/MainDashboardMenu";
import DashboardNavigation from "../molecules/DashboardNavigation";
import NotFound from "../../Client/pages/NotFound";

const DashboardLayout = ({ children }) => {
  const [showDashboard, setShowDashboard] = useState(false);

  const isAuthenticated = JSON.parse(sessionStorage.getItem("user")) || null;

  console.log("isAuthenticated", isAuthenticated);

  return isAuthenticated ? (
    <div className="flex">
      <MainDashboardMenu isAdmin={isAuthenticated?.role === 'admin'} showDashboard={showDashboard} setShowDashboard={setShowDashboard}/>
      <div className="w-full bg-mainBackground text-[#121827] min-h-screen">
        <DashboardNavigation isAdmin={isAuthenticated?.role === 'admin'}  showDashboard={showDashboard} setShowDashboard={setShowDashboard} />
        {children}
      </div>
    </div>
  ) : (
     <NotFound text="You are not authorized to view this page" />
  );
};

export default DashboardLayout; 
