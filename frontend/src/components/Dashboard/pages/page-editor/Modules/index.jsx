import React from 'react';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const ModulesComponent = ({ value, index, itemsRef, handleContentChange, handleSave, setIsEditingText }) => {

  const getActionType = (action) => {
    if (action.includes("Content")) return "Content";
    if (action.includes("Code")) return "Code";
    if (action.includes("BlackQuoute")) return "BlackQuoute";
    return "default";
  };

  const renderContent = () => {
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
      default:
        return (
          <p key={index} className="px-4 py-2" ref={(el) => (itemsRef.current[index] = el)}>
            {value.content}
          </p>
        );
    }
  };

  return renderContent();
};

export default ModulesComponent;
