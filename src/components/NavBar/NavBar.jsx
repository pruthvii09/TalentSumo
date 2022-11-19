import React, { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle((curr) => !curr);
  };
  return (
    <div className="navbar">
      <div className="brand-title">Talent Sumo</div>
      <p className="toggle-button" onClick={handleToggle}>
        <i className="bx bx-menu bar"></i>
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
      <div className={toggle ? "navbar-links profile" : "navbar-links active"}>
        <i className="bx bx-search-alt-2 bar hide"></i>
        <i className="bx bxs-user bar hide"></i>
        <button className="signup_btn btn">SignUp</button>
        <button className="login_btn btn">Login</button>
      </div>
    </div>
  );
};

export default NavBar;
