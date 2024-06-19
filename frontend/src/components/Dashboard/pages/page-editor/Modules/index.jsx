import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { LuPlus } from "react-icons/lu";
import CodeEditor from "./Code";

const ModulesComponent = ({
  value,
  index,
  itemsRef,
  handleContentChange,
  handleSave,
  setIsEditingText,
}) => {
  const renderContent = () => {
    switch (value.component) {
      case "Content":
        return (
          <div key={index}>
            <Editor
              editorState={value.values.editorState}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              onEditorStateChange={(newEditorState) =>
                handleContentChange(index, newEditorState)
              }
              onFocus={() => {
                setIsEditingText(true);
              }}
              onBlur={() => {
                setIsEditingText(false);
              }}
            />
          </div>
        );
      case "Image":
        return (
          <div
            key={index}
            className="flex bg-gray-300 rounded-2xl p-6 justify-center items-center  min-h-[250px] text-2xl font-bold gap-4"
          >
            <LuPlus className=" h-8 w-8" />
            Add Photo
          </div>
        );
      case "Code":
        return (
          <div>
            <CodeEditor />
          </div>
        );
      default:
        return (
          <p
            key={index}
            className="px-4 py-2"
            ref={(el) => (itemsRef.current[index] = el)}
          >
            {value.content}
          </p>
        );
    }
  };

  return renderContent();
};

export default ModulesComponent;
