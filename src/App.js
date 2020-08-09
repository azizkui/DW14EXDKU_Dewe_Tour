import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route>
          <Home />
        </Route>{" "}
      </Switch>{" "}
    </Router>
  );
}

export default App;
