import React from "react";
import { Routes, Route } from "react-router-dom";

import App from "../App";
import LogInPage from "../pages/LogInPage";
import SignUpPage from "../pages/SignUpPage";
import ViewWorkouts from "../pages/ViewWorkouts";
import ViewExercises from "../pages/ViewExercises";

const RoutesView: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<LogInPage />} />
      <Route path="/" element={<App />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/viewworkouts/:id" element={<ViewWorkouts />} />
      <Route path="/viewexercises/:id" element={<ViewExercises />} />
    </Routes>
  );
};

export default RoutesView;
