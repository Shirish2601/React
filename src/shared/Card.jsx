import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../components/context/auth-context";

import Styles from "./Card.module.css";
const Card = (props) => {
  const ctx = useContext(AuthContext);

  return (
    <div className={`${Styles["card"]}`}>
      <img src={props.img} alt="Company Logo" />
      <div className={`${Styles["job-content"]}`}>
        <div className={`${Styles["job-content-info"]}`}>
          {ctx.userType === "admin" && (
            <Link to="/company/1/" className={`${Styles["hover-effect"]}`}>
              <h2>{props.companyName}</h2>
            </Link>
          )}
          {ctx.userType === "student" && <h2>{props.companyName}</h2>}
          <span>
            <i
              className="fa-regular fa-calendar"
              style={{ color: "#364fc7" }}
            ></i>{" "}
            &nbsp; {props.date}
          </span>
          <span>Salary: {props.salary}</span>
        </div>
        <h3 className={`${Styles["job-title"]}`}>Job Title</h3>
        <p>
          Job Description Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.
        </p>
        <div>
          {ctx.userType === "student" && (
            <Link to="/company/1/">
              <button className={`${Styles["btn-apply"]}`}>Apply Now</button>
            </Link>
          )}
          {ctx.userType === "admin" && (
            <React.Fragment>
              <button className={`${Styles["btn-delete"]} btn-apply`}>
                Delete
              </button>
              <button className={`${Styles["btn-view"]} btn-apply`}>
                Edit
              </button>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
