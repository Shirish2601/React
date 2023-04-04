import React, { useState } from "react";
import "./Welcome.css";
import Statistics from "./Statistics";
import { Link } from "react-router-dom";
const Welcome = () => {
  const [year, setYear] = useState("2023");
  return (
    <>
      <div className="welcome-class">
        <h3>Welcome to Placement Portal</h3>
        <div>
          <div className="dropdown">
            <button className="btn">Placement Statistics</button>
            <div className="dropdown-content">
              <Link to="/" onClick={() => setYear("2023")}>
                Placement 2022-23
              </Link>
              <Link to="/" onClick={() => setYear("2022")}>
                Placement 2021-22
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Statistics value={year} />
    </>
  );
};
export default Welcome;
