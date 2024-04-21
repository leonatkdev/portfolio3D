import React, {useState} from "react";
import { IoIosDesktop } from "react-icons/io";
// import { SlScreenSmartphone } from "react-icons/sl";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { HiOutlineDeviceTablet } from "react-icons/hi2";
import { IoReturnUpBack } from "react-icons/io5";
// import { FiLayers } from "react-icons/fi";
// import { IoLayersOutline } from "react-icons/io5";
import { TbArrowBackUp } from "react-icons/tb";
import { TbArrowForwardUp } from "react-icons/tb";
import { CiCircleMinus } from "react-icons/ci";
import { IoResizeOutline } from "react-icons/io5";

const EditorHeader = ({ screen, setScreen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  return(
  <div className="flex fixed z-10 w-full top-0  bg-white py-3 px-2  border-b border-[#dfe5eb]">
    <a href="/dashboard/pages" className="px-3 py-2">
      <IoReturnUpBack className="w-6 h-6" color="black" />
    </a>

    <div className="relative border-r border-l border-[#dfe5eb] px-3">
            <button
                onClick={toggleDropdown}
                className="px-4 py-2 text-black rounded-md  "
            >
              <span>Page: </span>
              Homepage
            </button>
            {isOpen && (
                <ul className="absolute text-black left-0 mt-2 w-48 bg-white shadow-md rounded-md overflow-hidden">
                    <li className="px-4 py-2 hover:bg-gray-100">Option 1</li>
                    <li className="px-4 py-2 hover:bg-gray-100">Option 2</li>
                    <li className="px-4 py-2 hover:bg-gray-100">Option 3</li>
                </ul>
            )}
        </div>

    <div className="flex items-center gap-2 mx-auto">
      <span
        className={
          " p-2 rounded-lg" + (screen === "resize" ? " bg-sky-600" : "")
        }
        onClick={() => setScreen("resize")}
      >
        <IoResizeOutline className="w-6 h-6" color="black" />
      </span>
      <span
        className={
          " p-2 rounded-lg" + (screen === "desktop" ? " bg-sky-600" : "")
        }
        onClick={() => setScreen("desktop")}
      >
        <IoIosDesktop className="w-6 h-6" color="black" />
      </span>
      <span
        className={
          "p-2 rounded-lg  " + (screen === "tablet" ? " bg-sky-600" : "")
        }
        onClick={() => setScreen("tablet")}
      >
        <HiOutlineDeviceTablet className="w-6 h-6" color="black" />
      </span>
      <span
        className={
          "p-2 rounded-lg  " + (screen === "mobile" ? " bg-sky-600" : "")
        }
        onClick={() => setScreen("mobile")}
      >
        <HiOutlineDevicePhoneMobile className="w-6 h-6" color="black" />
      </span>

      <span className=" text-black">1920 PX</span>
    </div>
    <div className="flex  items-center  gap-2 mr-3">
      <TbArrowBackUp className="w-6 h-6" color="black" />
      <TbArrowForwardUp className="w-6 h-6" color="black" />
    </div>
    <span className="flex  items-center gap-1 text-black mr-2">
      <CiCircleMinus className="w-6 h-6" color="black" />
      100%
    </span>

    <select id="cars" className=" rounded-full px-2 mr-2">
      <option value="volvo">Active</option>
      <option value="saab">Draft</option>
      <option value="time">Time</option>
    </select>
    <button className=" bg-sky-600 rounded-full px-4 py-2">Publish</button>
  </div>
)}


export default EditorHeader;
