import React, {useState} from 'react'
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"; // import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const Content = ({ content }) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  const handleSave = () => {
    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    const content = JSON.stringify(rawContentState);
  };

  return (
    <>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={onEditorStateChange}
      />
      <button onClick={handleSave} className='py-2 px-4 rounded-2xl bg-blue-700 text-white'>Save Text</button>
      {/* <div>{content}</div> */}
    </>
  );
};


export default Content;