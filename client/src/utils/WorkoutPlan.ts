import { Workout } from './Workout';
export type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';
export interface WorkoutPlan {
  id: string;
  owner: string;
  workoutPlanName: string;
  date: Date;
  followers: string[];
  workoutSchedule: {
    [weekday in Weekday]?: Workout[];
  };
}
