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
        <ul>
          <li>
            <i className="fa-solid fa-user student-profile__icon"></i>
            <a href="#">My profile</a>
          </li>
          <li>
            <i className="fa-solid fa-pen-to-square student-profile__icon"></i>
            <a href="#">Edit profile</a>
          </li>
          <li>
            <i className="fa-solid fa-bell student-profile__icon"></i>
            <a href="#">My Notifications</a>
          </li>
          <li>
            <i className="fa-solid fa-bullhorn student-profile__icon"></i>
            <a href="#">Annoucements</a>
          </li>
          <li>
            <i className="fa-solid fa-gear student-profile__icon"></i>
            <a href="#">Account Settings</a>
          </li>
          <li>
            <i className="fa-solid fa-arrow-right-from-bracket student-profile__icon"></i>
            <a href="#" onClick={logOutHandler}>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StudentProfile;
