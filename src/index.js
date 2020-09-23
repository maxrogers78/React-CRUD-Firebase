import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// other modules/packages
import "./firebase";
import "bootswatch/dist/lux/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
