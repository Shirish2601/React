import React, { useState } from "react";
import "./Navbar.css";
const Navbar = () => {
  const loginMenu = ["Student", "Admin"];
  const registerMenu = ["Student", "Admin"];
  return (
    <nav className="navbar">
      Placement Portal
      <ul className="navbar-items">
        <li>
          <a href="/">Home</a>
        </li>
        <li className="login-class">
          <div className="dropdown">
            <a className="dropbtn">Login</a>
            <div className="dropdown-content">
              {loginMenu.map((item) => {
                return (
                  <a key={item} href="/">
                    {item}
                  </a>
                );
              })}
            </div>
          </div>
        </li>
        <li className="login-class">
          <div className="dropdown">
            <a className="dropbtn">Register</a>
            <div className="dropdown-content">
              {registerMenu.map((item) => {
                return (
                  <a key={item} href="/">
                    {item}
                  </a>
                );
              })}
            </div>
          </div>
        </li>
        <li>
          <a href="/">About Us</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
