import React from "react";
import Styles from "./StudentSettings.module.css";
const StudentSettings = () => {
  return (
    <div className={`marginleft ${Styles["student-settings"]}`}>
      <h3>Account Settings</h3>
      <div
        className={`${Styles["student-settings__form"]} ${Styles["student-settings_content"]} `}
      >
        <div className={Styles["form-content"]}>
          <label>Current Password</label>
          <input type="password" placeholder="Enter Your Current Password" />
        </div>
        <div className={Styles["form-content"]}>
          <label>New Password</label>
          <input type="password" placeholder="Enter Your New Password" />
        </div>
        <div className={Styles["form-content"]}>
          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm Your New Password" />
        </div>
        <div className={Styles["form-content"]}>
          <button className="user-login__button" type="submit">
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentSettings;
