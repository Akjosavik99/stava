import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "@/App";
import LogInPage from "@/pages/LogInPage";
import NewProgramPage from "@/pages/NewProgramPage";
import ProgramsPage from "@/pages/ProgramsPage";
import SignUpPage from "@/pages/SignUpPage";
import CreateWorkout from "@/pages/CreateWorkout";
import ViewWorkouts from "@/pages/ViewWorkouts";
import ViewExercises from "@/pages/ViewExercises";

const RoutesView: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<LogInPage />} />
      <Route path="/" element={<App />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/createworkout" element={<CreateWorkout />} />
      <Route path="/viewworkouts/:id" element={<ViewWorkouts />} />
      <Route path="/viewexercises/:id" element={<ViewExercises />} />
      <Route path="/programs" element={<ProgramsPage />} />
      <Route path="/newprogram" element={<NewProgramPage />} />
    </Routes>
  );
};

export default RoutesView;
