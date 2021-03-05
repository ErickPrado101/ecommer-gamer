import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GeneralContext } from "./Context/AppContext";
import { ModalContext } from "./Context/ModalCarrinhoContext";
import "./index.css";

ReactDOM.render(
  <GeneralContext>
    <ModalContext>
      <App />
    </ModalContext>
  </GeneralContext>,
  document.getElementById("root")
);
