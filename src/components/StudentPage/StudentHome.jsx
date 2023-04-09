import React, { useContext, useState } from "react";
import { AuthContext } from "../context/auth-context";
import "./StudentHome.css";
const StudentHome = () => {
  const ctx = useContext(AuthContext);
  const logOutHandler = () => {
    ctx.logout();
  };
  const [toggle, setToggle] = useState(false);

  const toggleButtonHandler = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <nav className={`sidebar ${!toggle ? "close" : ""}`}>
        <header>
          <div className="image-text">
            <span className="image"> </span>
          </div>

          <i
            className="fa fa-bars toggle"
            aria-hidden="true"
            onClick={toggleButtonHandler}
          ></i>
        </header>

        <div className="menu-bar">
          <div className="menu">
            <ul className="menu-links">
              <li className="nav-link">
                <a href="#">
                  <i className="fa-solid fa-house icon"></i>
                  <span className="text nav-text">Home</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  <i className="fa-solid fa-user icon"></i>
                  <span className="text nav-text">Profile</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  <i className="fa-solid fa-check-to-slot icon"></i>
                  <span className="text nav-text">Company Registration</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  <i className="fa-solid fa-pen-nib icon"></i>
                  <span className="text nav-text">Interview Experiences</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  <i className="fa-solid fa-bullhorn icon"></i>
                  <span className="text nav-text">Annoucements</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  <i className="fa-solid fa-bell icon"></i>
                  <span className="text nav-text">Notifications</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  <i className="fa-solid fa-calendar icon"></i>
                  <span className="text nav-text">Calendar</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="bottom-content">
            <li className="">
              <a href="#">
                <i className="fa-solid fa-arrow-right-from-bracket icon"></i>
                <span className="text nav-text">Logout</span>
              </a>
            </li>
          </div>
        </div>
      </nav>

      {/* <button onClick={logOutHandler}>LogOut</button>; */}
    </>
  );
};

export default StudentHome;
