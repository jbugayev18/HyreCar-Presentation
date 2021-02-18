import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
// import LogIn from "./LogIn";
import SignIn from "./Signin";
import Listings from "./Listings";
import Moreinfo from "./MoreInfo";

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
        <Route exact path="/moreinfo/:id">
          <Moreinfo />
        </Route>
      </Switch>
    );
  }
}

export default Routes;
