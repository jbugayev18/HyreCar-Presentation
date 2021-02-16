import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from "@autho0/auth0-react";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Auth0Provider
    domain="jbuga.us.auth0.com"
    clientId="bmrerfBu4jjaAMYlcUnDF2ynprTT5sGW"
    redirectUri={window.location.origin}
  >
    <React.StrictMode>
      <BrowserRouter>
        <Router>
          <App />
        </Router>
      </BrowserRouter>
    </React.StrictMode>
  </Auth0Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
