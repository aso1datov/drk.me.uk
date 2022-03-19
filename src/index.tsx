// eslint-disable-next-line simple-import-sort/imports
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./styles/styles.scss";
import { App } from "./app";

import { ROOT_ELEMENT_ID } from "./constants";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById(ROOT_ELEMENT_ID)
);
