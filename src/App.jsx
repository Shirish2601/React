import "./App.css";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import LoginPage from "./pages/LoginPage";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import StudentPage from "./pages/StudentPage";
import { AuthContext } from "./components/context/auth-context";
import React, { useCallback, useState } from "react";
import StudentSidebar from "./components/StudentPage/StudentSidebar";
import CompanyRegister from "./components/StudentPage/StudentComponents/CompanyRegister";
import StudentHome from "./components/StudentPage/StudentHome";
import StudentProfile from "./components/StudentPage/StudentProfile";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <React.Fragment>
        <StudentSidebar />
        <StudentProfile />
        <Switch>
          {/* <Route path="/" exact></Route> */}
          {/* <Route path="/student/profile" exact>
            <StudentPage />
          </Route> */}
          {/* <Route path="/student/cregister/" exact>
            <CompanyRegister />
          </Route> */}
        </Switch>
        <Redirect to="/student/profile" />
      </React.Fragment>
    );
  } else {
    routes = (
      <React.Fragment>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <Welcome />
          </Route>
          <Route path="/login/student/" exact>
            <LoginPage user={"student"} />
          </Route>
          <Route path="/login/admin/" exact>
            <LoginPage user={"admin"} />
          </Route>
          <Route path="/register/student" exact>
            <RegisterPage />
          </Route>
        </Switch>
        <Redirect to="/" />
      </React.Fragment>
    );
  }
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        <Navbar />
        <Switch>{routes}</Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
