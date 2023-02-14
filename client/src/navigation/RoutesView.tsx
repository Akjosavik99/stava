import React from "react";
import { Routes, Route } from "react-router-dom";

import App from "../App";
import LogInPage from "../pages/LogInPage";
import SignUpPage from "../pages/SignUpPage";
import ViewWorkouts from "../pages/ViewWorkouts";

const RoutesView: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<LogInPage />} />
      <Route path="/" element={<App />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/viewworkouts" element={<ViewWorkouts />} />
    </Routes>
  );
};

export default RoutesView;
