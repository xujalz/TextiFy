import React, { useState } from "react";

export default function Textform(props) {
  const p = 0;

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text is converted to Upper Case", "success");
    if (text === "") {
      props.showAlert("Please enter the text first", "warning");
    }
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text is converted to Lower Case", "success");
    if (text === "") {
      props.showAlert("Please enter the text first", "warning");
    }
  };

  const handleCapitalize = () => {
    // Split the string into an array of words
    const words = text.split(" ");
    // Capitalize the first letter of each word
    const capitalizedWords = words.map((word) => {
      const firstLetter = word.charAt(0).toUpperCase();
      const restOfWord = word.slice(1);
      return firstLetter + restOfWord;
    });
    // Join the capitalized words back into a string
    const capitalizedString = capitalizedWords.join(" ");
    setText(capitalizedString);
    if (text === "") {
      props.showAlert("Please enter the text first", "warning");
    }
  };

  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text is cleared!", "success");
    if (text === "") {
      props.showAlert("Please enter the text first", "warning");
    }
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    if (text === null) {
      props.showAlert("Please enter the text first", "warning");
    }else{
      text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text is copied to clipboard", "success");
    }
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces are removed", "success");
    if (text === "") {
      props.showAlert("Please enter the text first", "warning");
    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div>
        <div
          className={`mb-6 my-3 container text-${props.mode === "secondary" ? "dark" : "light"
            }`}
        >
          <h2 className="form-label mb-4">{props.heading}</h2>
          <textarea
            className="form-control mb-3"
            placeholder="Enter Text Here . . ."
            onChange={handleOnChange}
            style={{backgroundColor: props.mode === 'dark'?'white':'white'}}
            value={text}
            id="myBox"
            rows="8"
          ></textarea>
          <button
            className={`btn btn-primary my-1 mx-1`}
            onClick={handleUpClick}
          >
            Convert to UpperCase
          </button>
          <button
            className={`btn btn-primary my-1 mx-1`}
            onClick={handleLoClick}
          >
            Convert to LowerCase
          </button>
          <button
            className={`btn btn-primary my-1 mx-1`}
            onClick={handleExtraSpaces}
          >
            Remove Extra Spaces
          </button>
          <button
            className={`btn btn-primary my-1 mx-1`}
            onClick={handleCapitalize}
          >
            Capitalize
          </button>
          <button className={`btn btn-primary my-1 mx-1`} onClick={handleCopy}>
            Copy Text
          </button>
          <button className={`btn btn-primary my-1 mx-1`} onClick={handleClear}>
            Clear Text
          </button>
        </div>
      </div>
      <div
        className={`my-3 container text-${props.mode === "secondary" ? "dark" : "light"
          }`}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(/\s+/).filter((t) => t !== "").length} words and{" "}
          {text.length} characters
        </p>
        <p>
          {0.008 * text.split(" ").filter((t) => t !== "").length} Minutes read
        </p>
      </div>
    </>
  );
}
