export type WorkoutPlan = {
  _id: string;
  owner: string;
  workoutPlanName: string;
  workouts: Workout[];
  date: string;
};

export type Workout = {
  day: string[];
  workout: string;
  _id: string;
};
export type WorkoutPlanProps = {
  workoutplan: WorkoutPlan;
};
