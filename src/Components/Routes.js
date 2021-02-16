import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import SignIn from "./Signin";
import Listings from "./Listings";
import Moreinfo from "./Moreinfo";

class Routes extends Component {
  render() {
    return (
      <Switch>
        {/* React Router Version 5 */}
        <Route exact path="/">
          <SignIn />
        </Route>
        <Route exact path="/listings">
          <Listings />
        </Route>

        <Route exact path="/moreinfo">
          <Moreinfo />
        </Route>
      </Switch>
    );
  }
}

export default Routes;
