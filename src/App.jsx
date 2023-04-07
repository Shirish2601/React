import "./App.css";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import LoginPage from "./pages/LoginPage";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/about" exact>
          <Welcome />
        </Route>
        <Route path="/login/student/" exact>
          <LoginPage user={"student"} />
        </Route>
        <Route path="/login/admin/" exact>
          <LoginPage user={"admin"} />
        </Route>
      </Switch>
      <Redirect to="/" />
    </Router>
  );
}

export default App;
