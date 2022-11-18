import React, { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle((curr) => !curr);
  };
  return (
    <div className="navbar">
      <div className="brand-title">Brand Name</div>
      <a href="#" className="toggle-button" onClick={handleToggle}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <div className={toggle ? "navbar-links" : "navbar-links active"}>
        <ul>
          <li>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
