import React, { useContext } from "react";
import { AuthContext } from "../context/auth-context";
const StudentHome = () => {
  const ctx = useContext(AuthContext);
  const logOutHandler = () => {
    ctx.logout();
  };
  return (
    <>
      <button onClick={logOutHandler}>LogOut</button>;
    </>
  );
};

export default StudentHome;
