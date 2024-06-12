import React, { useCallback } from 'react';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Modules = ({ itemsRef, handleContentChange, handleSave, setIsEditingText, value, index }) => {
  const getActionType = useCallback((action) => {
    if (action.includes("costumeComponent")) return "Content";
    if (action.includes("Navigation")) return "Navigation";
    if (action.includes("Container")) return "Container";
    return "default";
  }, []);

  const renderContent = useCallback(() => {
    switch (getActionType(value.content)) {
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
      case "Navigation":
        return (
          <nav
            key={index}
            style={{ margin: "10px", padding: "8px 16px" }}
            ref={(el) => (itemsRef.current[index] = el)}
          >
            Nav
          </nav>
        );
      case "Container":
        return (
          <div key={index} className="border border-red-600 min-h-8 min-w-8"></div>
        );
      default:
        return (
          <p key={index} className="px-4 py-2" ref={(el) => (itemsRef.current[index] = el)}>
            {value.content}
          </p>
        );
    }
  }, [getActionType, handleContentChange, index, setIsEditingText, value.content, value.values.editorState]);

  return renderContent();
};

export default Modules;
