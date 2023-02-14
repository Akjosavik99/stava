import React from "react";
import ReactDOM from "react-dom/client";
import RoutesView from "./navigation/RoutesView";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <RoutesView />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);