import {useCallback} from 'react'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Modules = ({itemsRef, handleContentChange,handleSave, setIsEditingText }) => useCallback(
    ({ value, index }) => {
      function getActionType(action) {
        if (action.includes("costumeComponent")) return "Content";
        if (action.includes("Navigation")) return "Navigation";
        if (action.includes("Container")) return "Container";
        return "default";
      }

      switch (getActionType(value.content)) {
        case "Content":
          return (
            <>
              {/* <Content
              setIsEditingText={setIsEditingText}
              onSave={(content) => handleSave(index, content)}
            > */}
            {console.log('value.values.editorState', value.values.editorState)}
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
                  setIsEditingText(true);
                }}
              />
              {/* </Content> */}
            </>
          );
        case "Navigation":
          return (
            <nav
              style={{ margin: "10px", padding: "8px 16px" }}
              ref={(el) => (itemsRef.current[index] = el)}
            >
              Nav
            </nav>
          );
        case "Container":
          return <div className="border border-red-600 min-h-8 min-w-8"></div>;
        default:
          return (
            <p
              className="px-4 py-2"
              ref={(el) => (itemsRef.current[index] = el)}
            >
              {value.content}
            </p>
          );
      }
    },
    [handleContentChange, handleSave]
  );

export default Modules