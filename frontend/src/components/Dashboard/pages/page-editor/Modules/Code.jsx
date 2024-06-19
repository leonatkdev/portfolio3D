import React, { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';

const CodeEditor = () => {
  const [code, setCode] = useState(``);

  return (
      <div style={{ "> div": {
          background: "red"
        }}}>
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
     
        className=' bg-amber-300 [&>div:nth-child(1)]:hidden '
      />
      </div>
  );
};

export default CodeEditor;
