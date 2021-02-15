import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import Registration from "./Components/registration_form";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
// import Routes from "./Components/Routes";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Router>
        {/* <Routes /> */}
        <App />
      </Router>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
