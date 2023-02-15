import { Workout } from './Workout';

export interface WorkoutPlan {
  id: String,
  owner: string;
  workoutPlanName: string;
  date: Date;
  workouts: Workout[];
  followers: string[];
}
