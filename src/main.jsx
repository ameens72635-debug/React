// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppController from "./AppController.jsx"; // our manual page controller

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppController />
  </StrictMode>
);
