import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./context/auth";
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "./styles/main.scss";
import React from "react";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
