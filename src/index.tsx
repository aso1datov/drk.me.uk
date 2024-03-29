/* eslint-disable simple-import-sort/imports */
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./styles/styles.scss";
import { App } from "./app";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(document.getElementById("app")!);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
