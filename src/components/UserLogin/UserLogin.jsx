import React from "react";
import "./UserLogin.css";
import { Link } from "react-router-dom";
const UserLogin = (props) => {
  return (
    <form className="login">
      <h2>Welcome, {props.userRole === "student" ? "Student" : "Admin"}!</h2>
      <p>Please log in</p>
      <input type="text" placeholder="PRN" />
      <input type="password" placeholder="Password" />
      <input type="submit" value="Log In" />
      <div className="links">
        <Link to="/">Forgot password</Link>
      </div>
    </form>
  );
};

export default UserLogin;
