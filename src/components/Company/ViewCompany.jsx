import React, { useContext, useEffect, useState } from "react";

import { AuthContext } from "../context/auth-context";
import Styles from "./ViewCompany.module.css";
import { Link, useParams } from "react-router-dom";

const ViewCompany = (props) => {
  const cid = useParams();
  const [companyData, setCompanyData] = useState();
  const ctx = useContext(AuthContext);

  useEffect(() => {
    const getCompanyDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:5500/api/admin/company/${cid.id}`
        );
        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message);
        } else {
          const data = await response.json();
          setCompanyData(data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getCompanyDetails();
  }, []);

  if (!companyData) return <h1>Loading...</h1>;

  return (
    <React.Fragment>
      {companyData && (
        <div className={`marginleft ${Styles["view-company"]}`}>
          <div className={`${Styles["company-info"]}`}>
            <img
              src={companyData.companydetails.companydetails.companylogo}
              alt="Company Logo"
              className={`${Styles["company-logo"]}`}
            />
            <h3 className={`${Styles["company-title"]}`}>
              {companyData.companydetails.companydetails.companyname}
            </h3>
            {ctx.userType === "student" && (
              <button className={`${Styles["btn-apply"]}`}>Apply Now</button>
            )}
            {ctx.userType === "admin" && (
              <Link
                to={`/admin/company/${companyData.companydetails.id}/applied`}
              >
                <button className={`${Styles["btn-apply"]}`}>
                  View Applied Students
                </button>
              </Link>
            )}
          </div>
          <hr />
          <section className={`${Styles["company-description"]}`}>
            <h3>About Company</h3>
            <p>
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas autem
          iusto esse magni voluptatem veritatis saepe, harum dolor labore rerum,
          tempore quisquam officiis mollitia, odio nulla numquam ipsum provident
          et! Atque fuga nemo repudiandae commodi harum non deleniti et, amet ab
          laboriosam corporis illo saepe nam doloremque recusandae animi minus
          voluptate optio eveniet perspiciatis qui dicta soluta. Rem, ipsum
          molestias! Similique suscipit laborum praesentium, inventore debitis a
          distinctio dolor ipsa. Quia, nisi! */}
            </p>
            <h3> Job Description</h3>
            <div className={`${Styles["shift-to-right"]}`}>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
                  quisquam aspernatur quia, quas facere optio incidunt
                  repellendus
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
                  quisquam aspernatur quia, quas facere optio incidunt
                  repellendus
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
                  quisquam aspernatur quia, quas facere optio incidunt
                  repellendus
                </li>
              </ul>
            </div>
            <h3> Eligibility Criteria</h3>
            <div className={`${Styles["shift-to-right"]}`}>
              <h4>CGPA</h4>
              <ul>
                <li>CGPA 7.0 and above</li>
              </ul>
              <h4>Branches</h4>
              <ul>
                <li>Computer Science</li>
                <li>Electronics and Communication</li>
                <li>Electrical Engineering</li>
              </ul>
              <h4>Backlogs</h4>
              <ul>
                <li>No Backlogs</li>
              </ul>
            </div>
            <h3>Selection Process</h3>
            <div className={`${Styles["shift-to-right"]}`}>
              <ul>
                <li>Online Test</li>
                <li>Technical Interview</li>
                <li>HR Interview</li>
              </ul>
            </div>
            <h3>Salary</h3>
            <div className={`${Styles["shift-to-right"]}`}>
              <ul>
                <li>CTC 3.6 LPA</li>
              </ul>
            </div>
            <h3>Job Location</h3>
            <div className={`${Styles["shift-to-right"]}`}>
              <ul>
                <li>Hyderabad</li>
              </ul>
            </div>
            <h3>Job Type</h3>
            <div className={`${Styles["shift-to-right"]}`}>
              <ul>
                <li>Full Time</li>
              </ul>
            </div>
            <h3>Job Role</h3>
            <div className={`${Styles["shift-to-right"]}`}>
              <ul>
                <li>Software Developer</li>
                <li>Software Tester</li>
              </ul>
            </div>
            <h3>Apply By</h3>
            <div className={`${Styles["shift-to-right"]}`}>
              <ul>
                <li>31st December 2023</li>
              </ul>
            </div>
            <h3>Skills Required</h3>
            <div className={`${Styles["shift-to-right"]}`}>
              <ul>
                <li>Java</li>
                <li>Python</li>
              </ul>
            </div>
          </section>
        </div>
      )}
    </React.Fragment>
  );
};

export default ViewCompany;
