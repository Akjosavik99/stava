export type WorkoutPlan = {
  _id: string;
  owner: string;
  workoutPlanName: string;
  workouts: Workout[];
  date: string;
};

export type Workout = {
  day: string[];
  workoutID: string;
  workoutName: string;
  _id: string;
};
export type WorkoutPlanProps = {
  workoutplan: WorkoutPlan;
};

export type Exercises = {
  _id: string;
  owner: string;
  workoutname: string;
  exercises: Exercise[];
  date: string;
  __v: number;
};

export type Exercise = {
  exerciseName: string;
  sets: number;
  reps: number;
  _id: string;
};

export type ServerExerciseData = {
  data: Exercises;
  status: string;
};

export type ExerciseData = {
  name: string | undefined;
  url: string;
};
