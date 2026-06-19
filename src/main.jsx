import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";

import { AuthProvider } from "./context/AuthContext";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { EmployeeProvider } from "./context/EmployeeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <EmployeeProvider>
        <App />

        <ToastContainer />
      </EmployeeProvider>
    </AuthProvider>
  </React.StrictMode>,
);
