import React, { useRef, useState } from "react";
import { Link, Redirect } from "react-router-dom";

import "./UserLogin.css";

const UserLogin = (props) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [authorized, setAuthorized] = useState(false);

  const buttonSubmitHandler = (e) => {
    e.preventDefault();
    const userData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      authorized: false,
    };
    if (
      emailRef.current.value === "abc" &&
      passwordRef.current.value === "abc"
    ) {
      userData.authorized = true;
    } else {
      userData.authorized = false;
    }
    setAuthorized(userData.authorized);
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <div className="wrapper">
      <img src="..\src\assets\LoginImageArt.svg" alt="Login Image" />
      <form className="login">
        <h2>Welcome, {props.userRole === "student" ? "Student" : "Admin"}!</h2>
        <p>Please log in</p>
        <input
          type="text"
          placeholder={props.userRole === "student" ? "PRN" : "Email"}
          ref={emailRef}
        />
        <input type="password" placeholder="Password" ref={passwordRef} />
        <button
          className="user-login__button"
          type="submit"
          onClick={buttonSubmitHandler}
        >
          Log in
        </button>
        {authorized && <Redirect to="/student/" />}
        {!authorized && <Redirect to="/login/student/" />}
        <div className="links">
          <Link to="/">Forgot password ?</Link>
        </div>
      </form>
    </div>
  );
};

export default UserLogin;
