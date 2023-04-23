import React from "react";
import HomeStyles from "./StudentHome.module.css";
const StudentHome = () => {
  return (
    <div className={HomeStyles["active-drive"]}>
      <h3>Active Drives</h3>
      <div className="card">
        <img
          src="data:image/png;base64,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"
          alt="Company Logo"
        />
        <div className="job-content">
          <div className={HomeStyles["job-content-info"]}>
            <h2>Google India</h2>
            <span>
              <i
                class="fa-regular fa-calendar"
                style={{ color: "#364fc7" }}
              ></i>{" "}
              &nbsp; 12 Dec 2023
            </span>
            <span>Salary: 10 Lakhs</span>
          </div>
          <span className={HomeStyles["job-title"]}>Job Title</span>
          <p>
            Job Description Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
          <div>
            <button className={HomeStyles["btn"]}>Upcoming</button>
          </div>
        </div>
      </div>
      <div className="card">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/2560px-Tata_Consultancy_Services_Logo.svg.png"
          alt="Company Logo"
        />
        <div className="job-content">
          <div className={HomeStyles["job-content-info"]}>
            <h2>TCS India</h2>
            <span>
              <i
                class="fa-regular fa-calendar"
                style={{ color: "#364fc7" }}
              ></i>{" "}
              &nbsp; 12 Dec 2023
            </span>
            <span>Salary: 10 Lakhs</span>
          </div>
          <p>
            Job Description Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
          <div>
            <button className={HomeStyles["btn"]}>Upcoming</button>
          </div>
        </div>
      </div>
      <div className="card">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1280px-Infosys_logo.svg.png"
          alt="Company Logo"
        />
        <div className="job-content">
          <div className={HomeStyles["job-content-info"]}>
            <h2>Infosys India</h2>
            <span>
              <i
                class="fa-regular fa-calendar"
                style={{ color: "#364fc7" }}
              ></i>{" "}
              &nbsp; 12 Dec 2023
            </span>
            <span>Salary: 10 Lakhs</span>
          </div>
          <p>
            Job Description Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
          <div>
            <button className={HomeStyles["btn"]}>Apply</button>
          </div>
        </div>
      </div>
      <h3 className={HomeStyles["applied-drives"]}>Applied Drives</h3>
      <div className="card">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1280px-Infosys_logo.svg.png"
          alt="Company Logo"
        />
        <div className="job-content">
          <div className={HomeStyles["job-content-info"]}>
            <h2>Infosys India</h2>
            <span>
              <i
                class="fa-regular fa-calendar"
                style={{ color: "#364fc7" }}
              ></i>{" "}
              &nbsp; 12 Dec 2023
            </span>
            <span>Salary: 10 Lakhs</span>
          </div>
          <p>
            Job Description Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
          <div>
            <button className={HomeStyles["btn"]}>View</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentHome;
