import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";

import LogIn from "../pages/LogIn";

const RoutesView: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<LogIn />} />
      <Route path="/" element={<App />} />
    </Routes>
  );
};

export default RoutesView;
