import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./css/settings.css";
import App from "./App";
import "./js/jquery.themepunch.plugins.min.js";
import "./js/jquery.themepunch.revolution.min.js";
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// import './FrontPage/light.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
