import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "../History";
import Rentals from "./rentals";

class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/Rentals" component={Rentals} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
