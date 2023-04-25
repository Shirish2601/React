import React from "react";
import { Link } from "react-router-dom";
import Styles from "./Card.module.css";
const Card = (props) => {
  return (
    <div className={`${Styles["card"]}`}>
      <img src={props.img} alt="Company Logo" />
      <div className={`${Styles["job-content"]}`}>
        <div className={`${Styles["job-content-info"]}`}>
          <h2>{props.companyName}</h2>
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
          <Link to="/company/1/">
            <button className={`${Styles["btn-apply"]}`}>Apply Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
