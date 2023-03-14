export type Post = {
  _id: string;
  date: Date;
  author: string;
  title: string;
  text: string;
  workoutPlan: { workoutPlanName: string; workoutPlanID: string };
  picture: string;
};
