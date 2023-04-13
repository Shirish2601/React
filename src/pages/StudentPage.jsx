import React from "react";
import StudentSidebar from "../components/StudentPage/StudentSidebar";
import StudentProfile from "../components/StudentPage/StudentProfile";
import StudentMain from "../components/StudentPage/StudentMain";
import "./StudentPage.css";
const StudentPage = () => {
  return (
    <div className="studentmainpage">
      <StudentSidebar className="studentmainpage-sidebar" />
      <StudentMain />
      <StudentProfile />
    </div>
  );
};

export default StudentPage;
