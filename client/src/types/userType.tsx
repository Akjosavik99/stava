export type User = {
  _id: string;
  username: string;
  password: string;
  date: Date;
  groups: string[];
  plans: string[];
  exercises: string[];
  log: Log[];
};

export type Log = {
  date: string;
  text: string;
};
