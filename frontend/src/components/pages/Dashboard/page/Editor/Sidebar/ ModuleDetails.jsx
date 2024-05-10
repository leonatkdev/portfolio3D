import React from "react";
import { IoClose } from "react-icons/io5";

const ModuleDetails = ({setElmClicked}) => {
  const BoxStyleEditor = () => {
    return (
      <div className="flex justify-center items-center w-fit mx-auto bg-green-300 p-4">
        <div className="relative border-dashed border-2 border-green-500">
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
            0
          </div>
          <div className="border-0 p-0">
            <div className="p-7 bg-blue-300 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                30
              </div>

              <div className="w-[78px] h-[14px] bg-blue-200 flex justify-center items-center"></div>

              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                30
              </div>
            </div>
          </div>{" "}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full">
            0
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full">
            0
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col fixed top-[65px] right-0 h-full bg-[#131826] w-[250px]">
      <div className="flex justify-between p-4">
        <span className=" text-lg font-medium">All Settings</span>
        <IoClose
          onClick={() => setElmClicked(null)}
          width={24}
          height={24}
          className=" w-6 h-6"
        />
      </div>

      <BoxStyleEditor />
    </div>
  );
};

export default ModuleDetails;
