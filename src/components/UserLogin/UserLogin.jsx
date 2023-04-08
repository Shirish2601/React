import React from "react";
import "./UserLogin.css";
import { Link } from "react-router-dom";
const UserLogin = (props) => {
  return (
    <div className="wrapper">
      <img src="..\src\assets\LoginImageArt.svg" alt="Login Image" />
      <form className="login">
        <h2>Welcome, {props.userRole === "student" ? "Student" : "Admin"}!</h2>
        <p>Please log in</p>
        <input type="text" placeholder="PRN" />
        <input type="password" placeholder="Password" />
        <button type="submit">Log in</button>
        <div className="links">
          <Link to="/">Forgot password ?</Link>
        </div>
      </form>
    </div>
  );
};

export default UserLogin;
