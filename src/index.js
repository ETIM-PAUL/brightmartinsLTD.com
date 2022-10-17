import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import "./css/styles.css";
import "./css/settings.css";
import App from "./App";
import "bootstrap/dist/js/bootstrap.min.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
