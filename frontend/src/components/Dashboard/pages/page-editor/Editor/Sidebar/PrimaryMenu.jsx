import React, { useState } from "react";
import SubMenu from "./SecondaryMenu";
import { LuPlusCircle } from "react-icons/lu";
import { RxCardStackMinus } from "react-icons/rx";
import { IoIosColorPalette } from "react-icons/io";
import { HiMenu } from "react-icons/hi";
import { SiGoogledocs } from "react-icons/si";

import { IoLayersOutline } from "react-icons/io5";

<IoLayersOutline className="w-6 h-6" color="black" />;

const sectionsMenu = [
  {
    section: "Page",
    label: "Page Info",
    icon: <SiGoogledocs className="w-6 h-6" color="white" />,
  },
  {
    section: "Elements",
    label: "Add Elements",
    icon: <LuPlusCircle className="w-6 h-6" color="white" />,
  },

  {
    section: "Sections",
    label: "Add Section",
    icon: <RxCardStackMinus className="w-6 h-6" color="white" />,
  },
  {
    section: "Menu",
    label: "Site Pages and Menu",
    icon: <HiMenu className="w-6 h-6" color="white" />,
  },
  {
    section: "Theme",
    label: "Add Theme colors",
    icon: <IoIosColorPalette className="w-6 h-6" color="white" />,
  },
  {
    section: "DOM",
    label: "DOM",
    icon: <IoLayersOutline className="w-6 h-6" color="white" />,
  },
];

const MainMenu = ({
  activeTab,
  setActiveTab,
  nestedData,
  setNestedData,
  handleDragStart,
  PageForm,
  setPageForm,
}) => {
  const handleShowSubMenu = (section) => {
    setActiveTab(section);
  };

  return (
    <>
      <div className="flex gap-1 flex-col w-[64px] min-w-[64px] h-screen items-center py-3 px-2 bg-[#131826] rounded-md">
        {sectionsMenu.map((item) => (
          <span
            key={item.section}
            onClick={() => handleShowSubMenu(item.section)}
            className={`p-3 rounded-md hover:bg-[#2B303D] text-[#434854] ${
              activeTab === item.section ? "bg-[#030405] text-[#fff]" : ""
            }`}
          >
            {item.icon}
          </span>
        ))}
      </div>

      <SubMenu
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        nestedData={nestedData}
        setNestedData={setNestedData}
        handleDragStart={handleDragStart}
        PageForm={PageForm}
        setPageForm={setPageForm}
      />
    </>
  );
};

export default MainMenu;
