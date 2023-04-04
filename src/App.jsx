import "./App.css";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Statistics from "./components/Statistics";
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
        <Route path="/" exact>
          <Welcome />
        </Route>
      </Switch>
      <Redirect to="/" />
    </Router>
  );
}

export default App;
