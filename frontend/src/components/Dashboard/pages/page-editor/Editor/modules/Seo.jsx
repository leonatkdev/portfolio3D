
import React from 'react'
import GoogleLogo from "../../../../../../assets/google-logo-text.webp";
import logo from "../../../../../../assets/logoWhite.svg";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

const Seo = () => {
    return (
      <div className="">
        <div>
          <label
            htmlFor="title"
            className="block text-base font-medium leading-6 "
          >
            Meta Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="block w-full selection bg-white rounded-md border-0 py-2 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder=" Meta Title"
          />
          <span className="block pt-1 text-sm">
            Recommended: <strong>70</strong> characters. You've used
            <span className=" text-lime-700"> 18</span>
          </span>
  
          <label
            htmlFor="title"
            className="block text-base font-medium leading-6 mt-8"
          >
            Meta description
          </label>
          <textarea
            type="text"
            name="title"
            id="title"
            className="block w-full selection bg-white rounded-md border-0 py-2 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder=" Meta Title"
          />
          <span className=" block pt-1  text-sm">
            Recommended: <strong>156</strong> characters. You've used
            <span className="text-lime-700"> 0</span>
          </span>
        </div>
        <span className="text-base font-medium leading-6">
          Search engine result preview
        </span>
        <div className="bg-white border rounded-sm p-4">
          <div className="flex gap-3 items-center">
            <img src={GoogleLogo} width={100} height={100} />
            <span className="bg-[#f5f5f5] rounded-full h-10 w-full">
              <HiMiniMagnifyingGlass className=" w-6 h-6 flex ml-auto mt-2 mr-3" />
            </span>
          </div>
  
          <div className="mt-2">
            <div className="flex gap-3 items-center">
              <img
                src={logo}
                alt="Website Logo"
                className=" w-7 h-7 rounded-full bg-[#f1f3f4] border-[#ecedef]  object-contain fill-white"
              />
              <div>
                <h3 className=" text-lg text-[#1841d2]">Meta Title | Keyword</h3>
                <span className=" text-[13px] font-semibold text-[#9599a9]">
                  www.websiteName.com
                </span>
              </div>
            </div>
  
            <p className=" text-sm text-[#3f4855] mt-1">
              Meta description - Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s
            </p>
          </div>
        </div>
  
        <div>Twitter Cards</div>
  
        <div>Facebook Cards</div>
      </div>
    );
  };

  export default Seo;