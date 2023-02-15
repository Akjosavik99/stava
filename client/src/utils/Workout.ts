export interface Workout {
    id: String,
    owner: string;
    workoutname: string;
    date: Date;
    exercises: {
      exerciseName: string;
      sets: number;
      reps: number;
    }[];
  }  