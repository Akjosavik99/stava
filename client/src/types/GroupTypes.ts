export type GroupData = {
  _id: string;
  groupName: string;
  isPrivate: boolean;
  owners: { username: string; userID: string }[];
  members: { username: string; userID: string }[];
  workouts: { workoutName: string; workoutID: string }[];
  postIDs: string[];
  date: Date;
};
