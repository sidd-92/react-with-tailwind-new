import React, { useState, useRef, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
function App() {
  const [text, setText] = useState("");
  return (
    <div className="max-w-md mx-auto bg-red-600 m-2 p-4">
      <div className="font-bold text-4xl text-center text-white">
        Recipie Form
      </div>
      <div className="p-field my-4">
        <label htmlFor="rname" className="p-d-block text-white">
          Recipe Name
        </label>
        <InputText
          id="rname"
          aria-describedby="recipe-name"
          className="p-d-block w-full"
        />
        <small id="username1-help" className="p-d-block text-red-200">
          Enter Your Recipie Name
        </small>
      </div>
      <div className="p-field my-4">
        <label htmlFor="rname" className="p-d-block text-white">
          Recipe Name
        </label>
        <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from CKEditor 5!</p>"
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            setText(data);
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
      </div>
      <div className="p-field my-4">
        <label htmlFor="rname" className="p-d-block text-white">
          Recipe Name
        </label>
        <InputText
          id="rname"
          aria-describedby="recipe-name"
          className="p-d-block w-full"
        />
        <small id="username1-help" className="p-d-block text-red-200">
          Enter Your Recipie Name
        </small>
      </div>
      <div dangerouslySetInnerHTML={{ __html: `${text}` }}></div>
    </div>
  );
}

export default App;
