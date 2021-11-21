import React from "react";
import ReactDOM from "react-dom";
import Router from "./router";
import { Provider } from "react-redux";
import "./sass/main.scss";
import store from "./state/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
  document.querySelector("#root")
);
