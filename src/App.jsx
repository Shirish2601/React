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
function App() {
  return (
    <Router>
      <Navbar />
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
    </Router>
  );
}

export default App;
