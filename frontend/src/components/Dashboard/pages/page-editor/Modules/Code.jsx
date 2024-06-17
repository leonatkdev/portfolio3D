import React, { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';

const CodeEditor = () => {
  const [code, setCode] = useState(``);



  return (
    <div style={{ margin: '20px' }}>
      <h1>Code Editor</h1>
      
      <CodeMirror
        value={code}
        options={{
          mode: 'javascript',
          theme: 'material',
          lineNumbers: true,
        }}
        onBeforeChange={(editor, data, value) => {
          setCode(value);
        }}
        onChange={(editor, data, value) => {
          // Optional: handle change if needed
        }}
        style={{ border: '1px solid #ddd', borderRadius: '4px', minHeight: '200px',      background: "blue",   "& > div": {
          background: "red"
        } }}
        className=' bg-amber-300'
      />
    </div>
  );
};

export default CodeEditor;
