import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { TipProvider } from "./context/tipProvider";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TipProvider>
      <App />
    </TipProvider>
  </React.StrictMode>
);
