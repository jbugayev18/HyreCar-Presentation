import React, { Component } from "react";
import { Route } from "react-router-dom";
import SingIn from "./Signin";
import App from "../App";

class Routes extends Component {
  render() {
    return (
      <main>
        <Route exact path="/" component={SingIn} />
        <Route exact path="/listings" component={App} />
      </main>
    );
  }
}

export default Routes;
