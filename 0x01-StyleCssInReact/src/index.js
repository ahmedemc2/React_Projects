import ReactDOM from "react-dom";
import React, { Component, StrictMode } from "react";
import App from "./App";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
