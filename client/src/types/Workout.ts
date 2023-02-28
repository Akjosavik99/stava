export interface Workout {
  _id: string;
  owner: string;
  workoutname: string;
  date: Date;
  exercises: [
    {
      exerciseName: string;
      sets: number;
      reps: number;
    }
  ];
}
