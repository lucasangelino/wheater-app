import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Forecast from "./Forecast";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="forecast" element={<Forecast />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
