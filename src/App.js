import React from "react";
import Home from "../src/component/Home";
import UserDetails from "./component/UserDetails";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/userdetails" component={UserDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
