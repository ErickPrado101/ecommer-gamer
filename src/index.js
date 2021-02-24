import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GeneralContext } from "./Context/AppContext";
import "./index.css";

ReactDOM.render(
  <GeneralContext>
    <App />
  </GeneralContext>,
  document.getElementById("root")
);
