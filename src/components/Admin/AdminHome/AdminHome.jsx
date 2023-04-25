import React from "react";
import Styles from "./AdminHome.module.css";
import Card from "../../../shared/Card";
const AdminHome = () => {
  return (
    <div className={`marginleft ${Styles["admin-home"]}`}>
      <h3>Current Drives</h3>
      <Card
        img={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1280px-Infosys_logo.svg.png"
        }
        companyName={"Infosys"}
        date={"12 Dec 2023"}
        salary={"10 Lakhs"}
      />
      <Card
        img={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/2560px-Tata_Consultancy_Services_Logo.svg.png"
        }
        companyName={"Tata Consultancy Services"}
        date={"13 Dec 2023"}
        salary={"3 Lakhs"}
      />
    </div>
  );
};

export default AdminHome;
