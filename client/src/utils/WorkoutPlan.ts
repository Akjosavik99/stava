export interface WorkoutPlan {
  _id: string;
  owner: string;
  workoutPlanName: string;
  date: Date;
  followers: string[];
  workouts: [{ workoutID: string; workoutName: string; day: string[] }];
}
