import React, { useState } from "react";
import { IoReturnUpBack } from "react-icons/io5";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";

const EditorHeader = ({ screen, setScreen, allComponents, id, PageForm }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async () => {
    try {
      const updatedPageForm = { ...PageForm };
      updatedPageForm.modules = PageForm.modules.map((module) => {
        if (module?.content?.includes("Content") && module.values.editorState) {
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

      const response = await fetch(`http://localhost:4000/api/pages/${id}`, {
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

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="flex fixed overflow-x-auto z-10 w-full top-0 bg-white py-3 px-2 border-b border-[#dfe5eb]">
      <a href="/dashboard/pages" className="px-3 py-2 mr-auto">
        <IoReturnUpBack className="w-6 h-6" color="black" />
      </a>
      <div className="flex items-center rounded-full bg-green-500 px-2 mr-2">
        Active
      </div>
      <button
        onClick={handleSubmit}
        className="bg-[#131826] rounded-full px-4 py-2"
      >
        Publish
      </button>
    </div>
  );
};

export default EditorHeader;
