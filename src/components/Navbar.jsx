import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const loginMenu = ["Student", "Admin"];
  const registerMenu = ["Student", "Admin"];
  return (
    <nav className="navbar">
      Placement Portal
      <ul className="navbar-items">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="login-class">
          <div className="dropdown">
            <a className="dropbtn">Login</a>
            <div className="dropdown-content">
              <Link to="/login/student">Student</Link>
              <Link to="/login/admin">Admin</Link>
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
