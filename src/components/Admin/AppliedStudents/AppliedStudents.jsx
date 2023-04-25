import React, { useState } from "react";
import Styles from "./AppliedStudents.module.css";
const AppliedStudents = () => {
  const [selectedCheckbox, setSelectedCheckbox] = useState([]);

  const setSelectedRowsHandler = (e) => {
    const index = e.target.parentNode.rowIndex - 1;
    if (selectedCheckbox.includes(index)) {
      setSelectedCheckbox(selectedCheckbox.filter((item) => item !== index));
    } else {
      setSelectedCheckbox([...selectedCheckbox, index]);
    }
  };

  return (
    <div className={`marginleft` + ` ${Styles["applied-students"]}`}>
      <h3>
        Applied Students for <span>ABC</span>
      </h3>
      <div className={`${Styles["table-students"]}`}>
        <table>
          <tbody>
            <tr>
              <th>PRN</th>
              <th>Name</th>
              <th>Branch</th>
              <th>CGPA</th>
              <th>Resume</th>
              <th>Passout Batch</th>
              <th>Select</th>
            </tr>
          </tbody>
          <tbody>
            <tr onClick={setSelectedRowsHandler}>
              <td>20UCS001</td>
              <td>SHIRISH MANOHAR HADPAD</td>
              <td>COMPUTER SCIENCE AND ENGINEERING</td>
              <td>8.00</td>
              <td>VIEW</td>
              <td>2024</td>
              <td>
                <input type="checkbox" checked={selectedCheckbox.includes(0)} />
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr onClick={setSelectedRowsHandler}>
              <td>20UCS001</td>
              <td>SHIRISH MANOHAR HADPAD</td>
              <td>COMPUTER SCIENCE AND ENGINEERING</td>
              <td>8.00</td>
              <td>VIEW</td>
              <td>2024</td>
              <td>
                <input type="checkbox" checked={selectedCheckbox.includes(1)} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppliedStudents;
