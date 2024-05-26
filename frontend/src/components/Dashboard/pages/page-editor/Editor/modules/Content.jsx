import React from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Content = ({ editorState, onEditorStateChange, setIsEditingText, onSave }) => {
  const handleSave = () => {
    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    const content = JSON.stringify(rawContentState);
    onSave(content); // Call the onSave function passed as a prop
  };

  const handleFocus = () => {
    setIsEditingText(true);
  };

  const handleBlur = () => {
    setIsEditingText(false);
  };

  return (
    <>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={onEditorStateChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <button
        onClick={handleSave}
        className="py-2 px-4 rounded-2xl bg-blue-700 text-white"
      >
        Save Text
      </button>
    </>
  );
};

export default Content;
