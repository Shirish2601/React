import React, { useContext, useState } from "react";
import "./StudentProfile.css";
import { AuthContext } from "../context/auth-context";
const StudentProfile = () => {
  const [status, setStatus] = useState(false);
  const setStatusHandler = () => {
    setStatus(!status);
  };
  const ctx = useContext(AuthContext);
  const logOutHandler = () => {
    ctx.logout();
  };
  return (
    <div className="action">
      <div className="profile" onClick={setStatusHandler}>
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
      </div>
      <div className={`menu ${status ? "active" : ""}`}>
        <h3>
          Hello World
          <br />
          <span>B.Tech, Computer Science and Engineering</span>
        </h3>
        <ul className="student-profile-link">
          <li>
            <a href="#">
              <i className="fa-solid fa-user student-profile__icon"></i>
              <span>My profile</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-solid fa-pen-to-square student-profile__icon"></i>
              <span>Edit profile</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-solid fa-bell student-profile__icon"></i>
              <span>My Notifications</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-solid fa-bullhorn student-profile__icon"></i>
              <span>Annoucements</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-solid fa-gear student-profile__icon"></i>
              <span>Account Settings</span>
            </a>
          </li>
          <li>
            <a href="#" onClick={logOutHandler}>
              <i className="fa-solid fa-arrow-right-from-bracket student-profile__icon"></i>
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StudentProfile;
