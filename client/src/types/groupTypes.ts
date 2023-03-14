export type Group = {
  groupName: String;
  isPrivate: Boolean;
  date: Date;
  owners: [{ userName: String; userID: String }];
  members: [{ userName: String; userID: String }];
  workouts: [{ workoutName: String; workoutID: String }];
  postIDs: [String];
};
