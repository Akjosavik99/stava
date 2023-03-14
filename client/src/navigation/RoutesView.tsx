import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import LogInPage from "../pages/LogInPage";
import NewProgramPage from "../pages/NewProgramPage";
import ProgramsPage from "../pages/ProgramsPage";
import SignUpPage from "../pages/SignUpPage";
import CreateWorkout from "../pages/CreateWorkout";
import ViewWorkouts from "../pages/ViewWorkouts";
import ViewExercises from "../pages/ViewExercises";
import PrivateRoute from "./PrivateRoute";
import PageNotFound from "../pages/PageNotFound";
import SubmitPost from "../pages/SubmitPost";
import ViewProgress from "../pages/ViewProgress";

const RoutesView: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<LogInPage />} />
      <Route path="/" element={<PrivateRoute element={<App />} />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route
        path="/createworkout"
        element={<PrivateRoute element={<CreateWorkout />} />}
      />
      <Route
        path="/viewworkouts/:id"
        element={<PrivateRoute element={<ViewWorkouts />} />}
      />
      <Route
        path="/viewexercises/:id"
        element={<PrivateRoute element={<ViewExercises />} />}
      />
      <Route path="/programs" element={<ProgramsPage />} />
      <Route
        path="/newprogram"
        element={<PrivateRoute element={<NewProgramPage />} />}
      />
       <Route
        path="/post"
        element={<PrivateRoute element={<SubmitPost />} />}
        />
      <Route
        path="/viewProgress"
        element={<PrivateRoute element={<ViewProgress />} />}
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>

  );
};

export default RoutesView;
