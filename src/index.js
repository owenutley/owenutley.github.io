import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Optional, if you want to include some styles
import App from "./App"; // Make sure this path matches your file structure

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals(); // Optional
