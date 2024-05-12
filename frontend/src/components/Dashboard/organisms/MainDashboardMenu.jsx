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

const DashboardMenu = () => {
  const [showDashboard, setShowDashboard] = useState(true);
  const [activeTab, setActive] = useState("Home");
  const [favorite, setFavorite] = useState([]);

  const [toggle, setToggle] = useState(false);

  const addFavorite = (obj) => {
    setFavorite([...favorite, obj]);
  };

  const removeItem = (obj) => {
    console.log("obj", obj);
    setFavorite((prevItems) =>
      prevItems.filter((item) => item.label !== obj.label)
    );
  };

  const mainDashboardData = [
    {
      label: "Home",
      icon: <HomeSvg />,
    },
    {
      label: "Favorite",
      icon: <StarSvg />,
    },
    {
      label: "Posts",
      icon: <PostsSvg />,
    },
    {
      label: "Sections",
      icon: <SectionSvg />,
    },
    {
      label: "Deploy",
      icon: <AiOutlineDeploymentUnit />,
    },
  ];

  return (
    <div>
      <img
        src={toggle ? close : menu}
        alt="menu"
        className={` absolute top-4 left-4 z-[60]  w-[20px] h-[20px] object-contain cursor-pointer sm:hidden ${
          toggle && " w-[16px] h-[16px]"
        }`}
        onClick={() => setToggle(!toggle)}
      />
      <div className={`flex absolute sm:static z-50 `}>
        <div className=" sticky top-0 flex flex-col w-[64px] mxa-w-[64px] min-w-[64px] h-screen items-center py-3 px-2 justify-between bg-[#131826] ">
          <img
            src={logo}
            alt="Leonat Krasniqi Logo"
            className=" w-10 h-10 sm:w-12 sm:h-12 object-contain"
          />

          <div className="flex flex-col items-center gap-1 mb-auto pt-6">
            {mainDashboardData?.map((elm) => (
              <span
                key={elm?.label}
                onClick={() => setActive(elm?.label)}
                className={`p-3 rounded-md hover:bg-[#2B303D] text-[#434854] ${
                  activeTab === elm?.label ? "bg-[#2B303D] text-[#fff]" : ""
                }  `}
              >
                {elm?.icon}
              </span>
            ))}
          </div>

          <div className="flex flex-col items-center gap-4">
            <AiOutlineSetting />
            <Link to={`/profile`}>
             
              <img
                src={avatar}
                alt="Leonat Krasniqi Logo"
                className=" w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-full"
              />
            </Link>
          </div>

          <button
            className=" absolute bottom-[150px] right-[-10px] p-1 bg-white rounded-full"
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
        />
      </div>
    </div>
  );
};

export default DashboardMenu;
