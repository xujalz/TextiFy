import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const toggleMode = () => {
    if (mode === "secondary") {
      setmode("dark");
      setbtnText("Light Mode");
      showAlert("Dark Mode has been enabled", "success");
      document.body.style.backgroundColor = "#051d34";
    } else {
      setmode("secondary");
      setbtnText("Dark Mode");
      showAlert("Light Mode has been enabled", "success");
      document.body.style.backgroundColor = "white";
    }
  };

  const [mode, setmode] = useState("secondary");

  const [btnText, setbtnText] = useState("Dark Mode");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
      {/* <Router basename={process.env.PUBLIC_URL}> */}
        <Navbar
          title="TextiFy"
          mode={mode}
          toggleMode={toggleMode}
          btnText={btnText}
        />
        <Alert alert={alert} />
        <div className="contaier my-3">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />} mode={mode}/> */}
            {/* <Route exact path="/" element={}/> */}
        <Textform
            showAlert={showAlert}
            heading="Try TextiFy - Word Counter, Character Counter, Remove Extra Spaces"
            mode={mode}
          />
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
