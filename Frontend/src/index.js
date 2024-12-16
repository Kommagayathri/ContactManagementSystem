import React from "react";
import ReactDOM from "react-dom/client"; // Use 'react-dom/client' in React 18
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

// Create the root element with createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the app inside the root
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();
