export interface Workout {
    id: string,
    owner: string;
    workoutname: string;
    date: Date;
    exercises: {
      exerciseName: string;
      sets: number;
      reps: number;
    }[];
}