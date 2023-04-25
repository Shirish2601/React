import React, { useContext, useState } from "react";
import { AuthContext } from "../context/auth-context";
import "./StudentSidebar.css";
import { Link } from "react-router-dom";
import StudentHome from "./StudentHome";
import StudentMain from "./StudentMain";
import CompanyRegister from "./StudentComponents/CompanyRegister";
const StudentSidebar = () => {
  const ctx = useContext(AuthContext);
  const logOutHandler = () => {
    ctx.logout();
  };
  const [toggle, setToggle] = useState(false);

  const toggleButtonHandler = () => {
    setToggle(!toggle);
  };

  const [active, setActive] = useState([
    { id: 1, name: "Home", active: true },
    { id: 2, name: "Profile", active: false },
    { id: 3, name: "Company Registration", active: false },
    { id: 4, name: "Interview Experiences", active: false },
    { id: 5, name: "Annoucements", active: false },
    { id: 6, name: "Notifications", active: false },
  ]);

  const activeHandler = (id) => {
    const newActive = active.map((item) => {
      if (item.id === id) {
        return { ...item, active: true };
      } else {
        return { ...item, active: false };
      }
    });
    setActive(newActive);
  };

  return (
    <aside className={`sidebar ${!toggle ? "close" : ""}`}>
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
              <Link
                to="/"
                style={{ textDecoration: "none" }}
                onClick={activeHandler.bind(this, 1)}
              >
                <i className="fa-solid fa-house icon"></i>
                <span className="text nav-text">Home</span>
              </Link>
            </li>

            <li className="nav-link">
              <Link
                to="/student/profile/"
                style={{ textDecoration: "none" }}
                onClick={activeHandler.bind(this, 2)}
              >
                <i className="fa-solid fa-user icon"></i>
                <span className="text nav-text">Profile</span>
              </Link>
            </li>
            <li className="nav-link">
              <Link
                to="/student/cregister/"
                style={{ textDecoration: "none" }}
                onClick={activeHandler.bind(this, 3)}
              >
                <i className="fa-solid fa-check-to-slot icon"></i>
                <span className="text nav-text">Company Registration</span>
              </Link>
            </li>

            <li className="nav-link">
              <Link
                to="/student/annoucements/"
                style={{ textDecoration: "none" }}
              >
                <i className="fa-solid fa-bullhorn icon"></i>
                <span className="text nav-text">Annoucements</span>
              </Link>
            </li>

            <li className="nav-link">
              <Link to="/student/calendar/" style={{ textDecoration: "none" }}>
                <i className="fa-solid fa-calendar icon"></i>
                <span className="text nav-text">Calendar</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="bottom-content">
          <li className="" onClick={logOutHandler}>
            <a href="#">
              <i className="fa-solid fa-arrow-right-from-bracket icon"></i>
              <span className="text nav-text">Logout</span>
            </a>
          </li>
        </div>
      </div>
    </aside>
  );
};

export default StudentSidebar;
