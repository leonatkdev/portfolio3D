import React, { useState } from "react";
import SubMenu from "./SecondaryMenu";
import { LuPlusCircle } from "react-icons/lu";
import { RxCardStackMinus } from "react-icons/rx";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoIosColorPalette } from "react-icons/io";
import { HiMenu } from "react-icons/hi";
import { SiGoogledocs } from "react-icons/si";

import { IoLayersOutline } from "react-icons/io5";

const guestSectionsMenu = [
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
];

const MainMenu = ({
  activeTab,
  setActiveTab,
  nestedData,
  setNestedData,
  handleDragStart,
  PageForm,
  setPageForm,
  authors,
  isAdmin,
}) => {
  const [showSide, setShowSide] = useState(true);

  const handleShowSubMenu = (section) => {
    setActiveTab(section);
  };

  const adminSectionsMenu = [
    ...guestSectionsMenu,
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

  const sectionsMenu = isAdmin ? adminSectionsMenu : guestSectionsMenu;

  console.log("test", showSide);

  return (
    <div>
      <div
        className={`hidden sm:flex gap-1 flex-col w-[64px] min-w-[64px] h-screen items-center py-3 px-2 bg-[#131826] ${
          showSide && " !flex sm:flex"
        } `}
      >
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
        authors={authors}
      />

      <div
        onClick={() => {
          setShowSide(!showSide)
        }}
        className="fixed flex items-center justify-center min-h-12 min-w-12 z-10 rounded-r-lg top-1/2 bg-stone-400 sm:hidden"
      >
        <MdKeyboardDoubleArrowRight color="black" className="w-6 h-6" />
      </div>
    </div>
  );
};

export default MainMenu;
