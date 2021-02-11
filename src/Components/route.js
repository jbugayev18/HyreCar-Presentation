import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "../History";
import Rentals from "./rentals";
import Registration from "./registration_form";

class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Registration} />
          <Route exact path="/Rentals" component={Rentals} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
