export type Group = {
  groupName: String;
  isPrivate: Boolean;
  date: Date;
  owners: [{ userName: String; userID: String }];
  members: [{ userName: String; userID: String }];
  workouts: [{ workoutName: String; workoutID: String }];
  postIDs: [String];
};

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

export type submitGroup = {
  groupName: string;
  isPrivate: boolean;
  members: { username: string; userID: string }[];
}