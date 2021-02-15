import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import SingIn from "./Signin";
import Listings from "./Listings";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={SingIn} />
        <Route exact path="/listings" component={Listings} />
      </Switch>
    );
  }
}

export default Routes;
