import React from "react";
import "./Welcome.css";
import Statistics from "./Statistics";
const Welcome = () => {
  return (
    <>
      <div className="welcome-class">
        <h3>Welcome to Placement Portal</h3>
        <div>
          <div className="dropdown">
            <button className="btn">Placement Statistics</button>
            <div className="dropdown-content">
              <a href="/">Placements 2022-23</a>
              <a href="/">Placements 2021-22</a>
            </div>
          </div>
        </div>
      </div>
      <Statistics />
    </>
  );
};
export default Welcome;
