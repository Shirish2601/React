import React, { useCallback, useState } from "react";
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
import { AuthContext } from "./components/context/auth-context";
import StudentSidebar from "./components/StudentPage/StudentSidebar";
import StudentProfile from "./components/StudentPage/StudentProfile";
import ViewCompany from "./components/Company/ViewCompany";
import CompanyRegister from "./components/StudentPage/StudentComponents/CompanyRegister";
import StudentMain from "./components/StudentPage/StudentMain";
import StudentHome from "./components/StudentPage/StudentHome";
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
          <Route path="/" exact>
            <StudentHome />
          </Route>
          <Route path="/student/profile" exact>
            <StudentMain />
          </Route>
          <Route path="/student/cregister/" exact>
            <CompanyRegister />
          </Route>
          <Route path="/company/:id/" exact>
            <ViewCompany />
          </Route>
        </Switch>
        <Redirect to="/" />
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
