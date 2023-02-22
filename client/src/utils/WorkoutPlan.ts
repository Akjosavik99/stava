export interface WorkoutPlan {
  _id: string;
  owner: string;
  workoutPlanName: string;
  date: Date;
  followers: string[];
  workouts: [{workout: string; day: string[]}]
}
