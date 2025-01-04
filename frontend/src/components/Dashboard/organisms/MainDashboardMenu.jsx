import React, { useState } from "react";
import { logo, avatar, menu, close } from "../../../assets";
import {
  HomeSvg,
  StarSvg,
  PostsSvg,
  SectionSvg,
  ArrowSvg,
  SearchSvg,
} from "../../../assets/svg/index";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";
import SecondDashboardMenu from "../molecules/SecondDashboardMenu";
import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";


const DashboardMenu = ({ isAdmin = false, showDashboard, setShowDashboard }) => {
  const [activeTab, setActive] = useState("Posts");
  const [favorite, setFavorite] = useState([]);

  const addFavorite = (obj) => {
    setFavorite([...favorite, obj]);
  };

  const removeItem = (obj) => {
    // console.log("obj", obj);
    setFavorite((prevItems) =>
      prevItems.filter((item) => item.label !== obj.label)
    );
  };

  const mainDashboardData = [
    // {
    //   label: "Home",
    //   icon: <HomeSvg />,
    // },
     {
      label: "Posts",
      icon: <PostsSvg />,
    },
    {
      label: "Favorite",
      icon: <StarSvg />,
    },
   
  ];

  const mainDashboardDataAsAdmin = [
    ...mainDashboardData,
    {
      label: "Sections",
      icon: <SectionSvg />,
    },
    {
      label: "Deploy",
      icon: <AiOutlineDeploymentUnit />,
    },
  ];

  const mainMenu = isAdmin ? mainDashboardDataAsAdmin : mainDashboardData;

  return (
      <div className={`hidden fixed z-10 ${showDashboard ? '!flex ' :""} sm:!flex lg:flex lg:static min-h-screen max-h-screen`}>
        <div className="pt-3 sticky top-0 flex flex-col w-[64px] max-w-[64px] min-w-[64px] min-h-screen h-fit h-full items-center py-3 px-2 justify-between bg-[#131826] ">
         <Link to={'/dashboard'} >      
         <img
            src={logo}
            alt="Leonat Krasniqi Logo"
            className=" w-10 h-10 sm:w-12 sm:h-12 object-contain"
          />
         </Link>
    

          <div className="flex flex-col items-center gap-1 mb-auto pt-6">
            {mainMenu?.map((elm) => (
              <span
                key={elm?.label}
                onClick={() => {
                  setShowDashboard(true);
                  setActive(elm?.label);
                }}
                className={`p-3 rounded-md hover:bg-[#2B303D] text-[#434854] ${
                  activeTab === elm?.label ? "bg-[#2B303D] text-[#fff]" : ""
                }  `}
              >
                {elm?.icon}
              </span>
            ))}
          </div>

          <div className="flex flex-col items-center gap-4">
            <AiOutlineSetting className="w-5 h-5" />
            <Link to={`/profile`}>
              {/* <img
                src={avatar}
                alt="Leonat Krasniqi Logo"
                className=" w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-2xl border border-white"
              /> */}
              <RxAvatar  className=" w-8 h-8 "/>
            </Link>
          </div>

          <button
            className={`absolute bottom-[150px] hidden sm:flex right-[-10px] p-1 bg-white border border-1 rounded-full ${
              showDashboard && " rotate-180"
            }`}
            onClick={() => setShowDashboard(!showDashboard)}
          >
            <ArrowSvg />
          </button>
        </div>

        <SecondDashboardMenu
          showDashboard={showDashboard}
          activeTab={activeTab}
          favorite={favorite}
          addFavorite={addFavorite}
          removeItem={removeItem}
          isAdmin={isAdmin}
          setShowDashboard={setShowDashboard}
        />
      </div>
  );
};

export default DashboardMenu;
