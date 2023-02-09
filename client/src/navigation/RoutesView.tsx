import React from "react";
import { Routes, Route } from "react-router-dom";

import App from "../App";
import LogIn from "../pages/LogIn";
import SignUpPage from "../pages/SignUpPage";

const RoutesView: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<LogIn />} />
      <Route path="/" element={<App />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
};

export default RoutesView;
