import React, { useState } from "react";
import { IoReturnUpBack } from "react-icons/io5";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosSave } from "react-icons/io";

const EditorHeader = ({ allComponents, id, PageForm }) => {
  const [status, setStatus] = useState(
    (PageForm?.status && PageForm?.status[0]) || "Inactive"
  );
  const [showStatuses, setShowStatuses] = useState(false);

  const handleSubmit = async () => {
    try {
      const updatedPageForm = { ...PageForm };
      updatedPageForm.modules = PageForm.modules.map((module) => {
        if (
          module?.component?.includes("Content") &&
          module.values.editorState
        ) {
          return {
            ...module,
            values: {
              text: JSON.stringify(
                convertToRaw(module.values.editorState.getCurrentContent())
              ),
            },
          };
        }
        return module;
      });

      const response = await fetch(`https://portfolio3d-c4gq.onrender.com/api/pages/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedPageForm),
      });

      const result = await response.json();
      console.log("Data updated", result);
    } catch (err) {
      console.error(err);
    }
  };

  const statuset = ["Active", "Draft", "Inactive"];

  const fileredFromStatus = statuset?.filter((sts) => sts !== status);

  const getStatusDOM = (st, onClickFunc, index, costumeStyle) => {
    switch (st) {
      case "Active":
        return (
          <div
            onClick={() => onClickFunc("Active")}
            className={`flex items-center gap-2 text-sm text-black mr-2  after:block after:w-2 after:h-2 after:rounded-full after:bg-green-500 ${
              costumeStyle && costumeStyle
            } ${index === 0 && " border-b "}`}
          >
            Active
          </div>
        );
      case "Draft":
        return (
          <div
            onClick={() => onClickFunc("Draft")}
            className={`flex items-center gap-2 text-sm text-black mr-2   after:block after:w-2 after:h-2 after:rounded-full after:bg-slate-400
              ${costumeStyle && costumeStyle} ${index === 0 && " border-b "}`}
          >
            Draft
          </div>
        );
      case "Inactive":
        return (
          <div
            onClick={() => onClickFunc("Inactive")}
            className={`flex items-center  gap-2 text-sm text-black  mr-2  after:block after:w-2 after:h-2 after:rounded-full after:bg-red-500 ${
              costumeStyle && costumeStyle
            } ${index === 0 && " border-b "}`}
          >
            Inactive
          </div>
        );
    }
  };

  const openstatusModal = () => setShowStatuses(!showStatuses);

  return (
    <div className="flex fixed z-30 w-full top-0 bg-white py-3 px-2 border-b border-[#dfe5eb]">
      <a href="/dashboard/pages" className="px-3 py-2 mr-auto">
        <IoReturnUpBack className="w-6 h-6" color="black" />
      </a>
      <div className="relative content-center mr-3 sm:mr-6 min-w-28">
        {getStatusDOM(status, openstatusModal, "", "px-2")} <IoIosArrowDown color="black" className=" absolute right-0 top-1/2 -translate-y-1/2" />
        {showStatuses && (
          <div className=" absolute top-full bg-white border rounded-lg min-w-28">
            {fileredFromStatus?.map((stat, index) =>
              getStatusDOM(stat, (pros) => setStatus(pros), index, "p-4")
            )}
          </div>
        )}
      </div>

      <button
        onClick={handleSubmit}
        className=" flex items-center  gap-1 bg-[#131826] rounded-full px-8 py-2 mr-4 text-lg bg-gradient-to-r from-cyan-500 to-blue-500 "
      >
        <IoIosSave />
        Publish
      </button>
    </div>
  );
};

export default EditorHeader;
