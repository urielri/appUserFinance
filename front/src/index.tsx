import React from "react";
import ReactDOM from "react-dom";
import "./styles/global.scss";
import './styles/main.scss'
import App from "./app";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
