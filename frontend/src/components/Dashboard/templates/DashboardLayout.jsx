import React, { useState, useRef, useEffect } from "react";
import MainDashboardMenu from "../organisms/MainDashboardMenu";
import DashboardNavigation from "../molecules/DashboardNavigation";
import { IoClose } from "react-icons/io5";
import AUTHModal from "../molecules/AuthModal";

const DashboardLayout = ({ children }) => {
  const [showDashboard, setShowDashboard] = useState(true);
  const [showModaAuth, setShowModalAuth] = useState(false);

  const isAuthenticated = JSON.parse(sessionStorage.getItem("user")) || null;

  return (
    <>
      <div className="flex">
        <MainDashboardMenu
          isAdmin={isAuthenticated?.role === "admin"}
          showDashboard={showDashboard}
          setShowDashboard={setShowDashboard}
        />
        <div className="w-full bg-mainBackground text-[#121827] min-h-screen">
          <DashboardNavigation
            isAdmin={isAuthenticated?.role === "admin"}
            showDashboard={showDashboard}
            setShowDashboard={setShowDashboard}
          />
          {React.Children.map(children, (child) =>
            React.cloneElement(child, {
              isAdmin: isAuthenticated?.role === "admin",
              showModaAuth: showModaAuth, 
              setShowModalAuth: setShowModalAuth
            })
          )}
        </div>
      </div>
      {
        showModaAuth && (
          <AUTHModal showModaAuth={showModaAuth} setShowModalAuth={setShowModalAuth} />
        )
      }
    </>
  );
};

export default DashboardLayout;
