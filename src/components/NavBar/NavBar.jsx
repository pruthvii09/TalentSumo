import React, { useState } from "react";
import "./NavBar.css";
import Profile from "../../assets/image.jpg";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle((curr) => !curr);
  };
  return (
    <div className="navbar">
      <div className="brand-title">Brand Name</div>
      <p className="toggle-button" onClick={handleToggle}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </p>
      <div className={toggle ? "navbar-links" : "navbar-links active"}>
        <ul>
          <li>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">{/* <img src={Profile} /> */}</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
