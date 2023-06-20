import React, { useState } from "react";

export default function About(props) {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  if (props.mode === "secondary") {
    setMyStyle({
      color: "white",
      backgroundColor: "black",
    });
  }

  return (
    <div className="my-5 container">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <h2 className="mx-3 my-2">About Us</h2>
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong> Introduction</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Welcome to TextiFy, where transforming text
              has never been easier! Are you tired of manually converting text
              to uppercase, lowercase, or capitalize? Look no further! Our
              user-friendly platform offers a range of text modification tools
              designed to save you time and effort. With our intuitive
              interface, all you need to do is input your text and select the
              desired modification option. Within seconds, our website will
              generate the modified text, ready for use in your documents,
              emails, social media posts, or any other text-based content. Our
              platform not only provides seamless text modification but also
              ensures the utmost privacy and security of your data. Your text
              will be processed securely, and we do not store any of your
              information, giving you peace of mind.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Developer</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            The inspiration for 'TextiFy' stemmed from Sujal's observation of the widespread need for text modification in various contexts, including academic writing, social media posts, and professional communication. Recognizing the time-consuming nature of manually editing text, Sujal sought to streamline the process and make it accessible to everyone.
            Sujal Gupta is an accomplished programmer and problem-solver, with a strong background in web development and user experience design. His goal was to develop a tool that would empower users to modify their text effortlessly, making it more readable and visually appealing.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Contact Us</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Mail : sujalgupta1104@gmail.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
