import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import LogIn from "./pages/LogIn";
import RoutesView from "./navigation/RoutesView";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <BrowserRouter>
      <RoutesView />
    </BrowserRouter>
  </React.StrictMode>
);
