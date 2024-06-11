import React, { useState, useRe } from "react";
import { BsCalendarWeek } from "react-icons/bs";
import { TbMessage2, TbHelpSquareRounded, TbLogout } from "react-icons/tb";
import { PiBellBold } from "react-icons/pi";
import { AiOutlineSetting } from "react-icons/ai";
import { GrLanguage } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import { avatar, menu, close } from "../../../assets";

const DashboardNavigation = ({showDashboard, setShowDashboard}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center mb-3 p-4 ">
      <img
        src={showDashboard ? close : menu}
        alt="menu"
        className={` w-[20px] h-[20px] object-contain cursor-pointer lg:hidden invert ${
          showDashboard && " w-[16px] h-[16px] "
        }`}
        onClick={() => setShowDashboard(!showDashboard)}
      />

      <PiBellBold className=" w-5 h-5 ml-auto" />

      <div
        onClick={() => setOpen(!open)}
        className="relative flex items-center ml-4"
      >
        <img
          src={avatar}
          alt="Leonat Krasniqi Logo"
          className=" w-10 h-10 rounded-full"
        />

        <IoIosArrowDown className="ml-2" />

        <div
          className={`absolute z-30 block border w-[250px] top-12 right-2 bg-white rounded-2xl p-5 pt-4 ${
            !open && "hidden"
          }`}
        >
          <div className="flex mb-4 gap-3">
            <img
              src={avatar}
              width={40}
              height={40}
              className="w-10 h-10 rounded-full"
            ></img>
            <div>
              <p className="font-bold tex">Leo</p>
              <span className="text-sm">Team Lead</span>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-2 text-[15px]">
            <AiOutlineSetting className="w-6 h-6" />
            Seetings & privacy
          </div>
          <div className="flex  items-center gap-2 mb-2 text-[15px]">
            <TbHelpSquareRounded className="w-6 h-6" />
            Help
          </div>
          <div className="flex  items-center gap-2 mb-2 text-[15px]">
            <GrLanguage className="w-6 h-6" />
            Language
          </div>
          <div className="flex  items-center gap-2 text-[15px] ">
            <TbLogout className="w-6 h-6" />
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavigation;
