import React from "react";
import Styles from "./AdminHome.module.css";
import Card from "../../shared/Card";
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
    </div>
  );
};

export default AdminHome;
