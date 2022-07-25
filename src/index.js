import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./global.css";
import { ResultsContextProvider } from "./contexts/ResultContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ResultsContextProvider>
    <App />
  </ResultsContextProvider>
);
