import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [dropdownShow, setDropdownShow] = useState(false);
  const [dropdownValue, setDropdownValue] = useState("");
  const dropDownOptions = ["Yes", "Probably Not"];

  //method to handle the visibility of dropdown options
  const handleDropdownClick = () => {
    setDropdownShow(!dropdownShow);
  };
  const handleSetDropdownValue = (value) => {
    setDropdownValue(value);
    setDropdownShow(!dropdownShow);
  };

  return (
    <div className="container">
      <h3>Should you use a dropdown?</h3>
      <div className={`dropdown`}>
        <button onClick={handleDropdownClick} className="dropdown-btn">
          {dropdownValue === "" ? "Select" : dropdownValue}
          <span><i className="fa-solid fa-angle-down drop-icon"></i></span>
        </button>
        <div
          className={`dropdown-items ${
            dropdownShow ? "isVisible" : "isHidden"
          }`}
        >
          {
            dropDownOptions.map((op, index)=>{
              return(
                <div className="dropdown-item" key={index}>
            <div
              className="dropdown__link"
              onClick={() => handleSetDropdownValue(op)}
            >
              {op}
            </div>
          </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
