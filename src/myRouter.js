import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Help from "./pages/Help";
import About from "./pages/About";

function MyRouter() {
  return (
    <Router>
      <div className="App-header">
        <h1>SOLVEQA.COM</h1>
        <ul className="nav-app">
          <li>
            <Link className="App-link nav-app" to="/">Home</Link>
          </li>
          <li>
            <Link className="App-link" to="/about">About</Link>
          </li>
          <li>
            <Link className="App-link" to="/help">Help</Link>
          </li>
        </ul>
        <hr />
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/help">
            <Help />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}
export default MyRouter;
