import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TipProvider } from "./context/tipContext.jsx";

import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <TipProvider>
        <App />
      </TipProvider>
    </BrowserRouter>
  </React.StrictMode>
);
