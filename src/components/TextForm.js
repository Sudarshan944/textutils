import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("UpperCase was clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const handleLowClick = () => {
    // console.log("LowerCase was clicked" + text);
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  const handleClearClick = () => {
    let newtext = "";
    setText(newtext);
  };
  const handlecopyClick = () => {
    navigator.clipboard.writeText(text);
    alert("Text Copied");
  };
  const handleDownloadClick = () => {
    let newtext = text;
    const element = document.createElement("a");
    const file = new Blob([newtext], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element);
    element.click();
  };

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value); // used to change text in text area and changed text is placed
  };
  const [text, setText] = useState("");
  //   text = "new Text"; //Wrong way to change state
  //   setText("new Text"); //Correct way to change state
  return (
    <>
      <div class="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            rows="8"
            placeholder="Enter your Text here"
            onChange={handleOnChange}
            value={text} // we have to make use of onchange because we are using state variable text
          ></textarea>
        </div>
        <button className="btn btn-primary my-1 mx-1" onClick={handleUpClick}>
          Convert To UpperCase
        </button>
        <button className="btn btn-primary my-1 mx-1" onClick={handleLowClick}>
          Convert To LowerCase
        </button>
        <button
          className="btn btn-primary my-1 mx-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button className="btn btn-primary my-1 mx-1" onClick={handlecopyClick}>
          Copy To Clipboard
        </button>
        <button
          className="btn btn-primary my-1 mx-1"
          onClick={handleDownloadClick}
        >
          Download Text
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          <b>{text.length > 0 ? text.split(" ").length : text.length}</b> and{" "}
          <b>{text.length}</b> characters
        </p>
        <p>
          <b>{text.length > 0 ? 0.008 * text.split(" ").length : 0}</b> Minutes
          taken read
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
// We pass props but state belongs to a component
// Hooks are new edition
// we use to overcome function based components to use class based components mainly we use UseState
// without creating class we can use its features in function based components
