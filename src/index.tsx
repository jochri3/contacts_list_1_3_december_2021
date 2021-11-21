import React from "react";
import ReactDOM from "react-dom";
import Router from "./router";
import "./sass/main.scss";

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.querySelector("#root")
);
