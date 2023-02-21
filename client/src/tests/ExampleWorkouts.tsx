import { Workout } from "../utils/Workout";

export const workout1: Workout = {
  id: '1' as string,
  owner: 'John',
  workoutname: 'Workout A',
  date: new Date(),
  exercises: [
    {
      exerciseName: 'Squats',
      sets: 3,
      reps: 10,
    },
    {
      exerciseName: 'Bench Press',
      sets: 3,
      reps: 10,
    },
  ],
};
export const workout2: Workout = {
  id: '2' as string,
  owner: 'John',
  workoutname: 'Workout B',
  date: new Date(),
  exercises: [
    {
      exerciseName: 'Deadlifts',
      sets: 3,
      reps: 10,
    },
    {
      exerciseName: 'Overhead Press',
      sets: 3,
      reps: 10,
    },
  ],
};
