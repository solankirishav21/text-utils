// import React from "react";
import React, { useState } from "react";

export default function Textarea(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleCopy = () => {
    let text = document.getElementById("textarea");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const handleClearText = () => {
    setText("");
  };

  return (
    <>
      <div className="container">
        <h1>{props.head}</h1>
        <div className="mb-3">
          <label htmlFor="inputarea" className="form-label"></label>

          <textarea
            className="form-control"
            rows="6"
            value={text}
            onChange={handleOnChange}
            id="textarea"
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-secondary mx-2 my-1"
          onClick={handleUpperCase}
        >
          Convert to UPPERCASE
        </button>
        <button
          type="button"
          className="btn btn-secondary mx-2 my-1"
          onClick={handleLowerCase}
        >
          Convert to LOWERCASE
        </button>
        <button
          type="button"
          className="btn btn-secondary mx-2 my-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          type="button"
          className="btn btn-secondary mx-2 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          type="button"
          className="btn btn-secondary mx-2 my-1"
          onClick={handleClearText}
        >
          Clear
        </button>
      </div>
      <div className="container my-3 my-2">
        <h2> Text Summary</h2>
        <p>
          {" "}
          {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <h3> Preview</h3>
        <p>{text.length>0?text:"Enter the text to preview" }</p>
      </div>
    </>
  );
}
