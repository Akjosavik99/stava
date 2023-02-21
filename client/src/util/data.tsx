import axios from "axios";
import { WorkoutPlan } from "./types";

export const getWorkoutPlan = async (id: string) => {
  await axios
    .get("/api/workout/plan/" + id)
    .then((res) => {
      return res.data as WorkoutPlan;
    })
    .catch((err) => {
      console.log(err);
    });
  return null;
};
