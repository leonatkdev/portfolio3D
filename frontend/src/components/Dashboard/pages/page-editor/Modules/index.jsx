import React, { useRef } from "react";
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
  handleCodeChange,
  handleImageChange,
  setIsEditingText,
}) => {
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

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
            className="flex flex-col bg-gray-300 rounded-2xl p-6 justify-center items-center min-h-[250px] text-2xl font-bold gap-4 cursor-pointer"
            onClick={handleImageClick}
          >
            {value.values.image ? (
              <img
                src={value.values.image}
                alt="Selected"
                className="rounded-2xl
                 max-h-[250px] 
                 object-cover"
              />
            ) : (
              <>
                <LuPlus className="h-8 w-8" />
                Add Photo
              </>
            )}
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={(e) => handleImageChange(index, e.target.files[0])}
            />
          </div>
        );
      case "Code":
        return (
          <div key={index}>
            <CodeEditor
              code={value.values.code || ""}
              setCode={(code) => handleCodeChange(index, code)}
            />
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
