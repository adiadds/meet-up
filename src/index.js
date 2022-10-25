import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import Learning from "./Learning";

import { BrowserRouter } from "react-router-dom";
// import GetData from "./GetData";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
