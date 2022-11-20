import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle((curr) => !curr);
  };
  return (
    <div className="navbar">
      <div className="brand-title">
        <Link to="/">Talent Sumo</Link>
      </div>
      <p className="toggle-button" onClick={handleToggle}>
        <i className="bx bx-menu bar"></i>
      </p>
      <div className={toggle ? "navbar-links" : "navbar-links active"}>
        <ul>
          <li>
            <Link to="/home">Home</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/about">About</Link>
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
