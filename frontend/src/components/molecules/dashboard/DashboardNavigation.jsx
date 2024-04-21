import React, { useState, useRe } from "react";
import { BsCalendarWeek } from "react-icons/bs";
import { TbMessage2, TbHelpSquareRounded, TbLogout } from "react-icons/tb";
import { PiBellBold } from "react-icons/pi";
import { AiOutlineSetting } from "react-icons/ai";
import { GrLanguage } from "react-icons/gr";
import {IoIosArrowDown} from 'react-icons/io'
import { avatar } from "../../../assets";

const DashboardNavigation = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center mb-3 p-4 ">
      <span className="text-[32px] font-semibold mr-auto">
      {/* Welcome, Sir! */}
        </span>

      <BsCalendarWeek className=" w-5 h-5 mr-3" />
      <TbMessage2 className=" w-5 h-5 mr-3" />
      <PiBellBold className=" w-5 h-5 mr-3" />

      <div onClick={() => setOpen(!open)} className="relative flex items-center ml-4">
        <img
          src={avatar}
          alt="Leonat Krasniqi Logo"
          className=" w-10 h-10 rounded-full"
        />

     < IoIosArrowDown className="ml-2" />


        <div
          className={`absolute block border w-[250px] top-12 right-2 bg-white rounded-2xl p-5 pt-4 ${
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
              <p className="font-bold tex" >Andi Ardit</p>
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
