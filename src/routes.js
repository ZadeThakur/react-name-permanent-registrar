import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./containers/Homepage";
import About from "./components/About";
import Favourite from "./components/Favourite";

export default () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Route path="/" exact component={Homepage} />
    <Route path="/about" exact component={About} />
    <Route path="/favourite" exact component={Favourite} />
  </Router>
);
