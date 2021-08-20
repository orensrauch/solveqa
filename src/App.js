//                DEPENDENCIES
//----------------------------------------//
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';

//                PAGES
//----------------------------------------//

import Home from "./pages/home/Home";
import Help from "./pages/Help/Help";
import About from "./pages/About/About";
import ReturnOfTheTester from "./challenges/return_of_the_tester/returnOfTheTester";
import NewHope from "./challenges/NewHope/NewHope";
import TODO from "./challenges/toDo/toDo";
import Documentation from './pages/documentation/Documentation';

//                components
//----------------------------------------//
import Navbar from './components/navbar/navbar.component';
import FOOTER from "./components/footer/Footer";



function App() {

  return (
    <Router>
      {/* <ul className="nav-app">
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
      <hr /> */}
      <Switch>
        <div className="app">
          <div className="navbar">
            <Navbar />
          </div>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/help">
            <Help />
          </Route>

          <Route path="/returnofthetester">
            <ReturnOfTheTester />
          </Route>

          <Route path="/newHope">
            <NewHope />
          </Route>

          <Route path="/todo">
            <TODO />
          </Route>

          <Route path="/documentation">
            <Documentation />
          </Route>

          <div className="app-footer">
            <FOOTER />
          </div>
        </div>


      </Switch>
    </Router>

  );
}

export default App;

