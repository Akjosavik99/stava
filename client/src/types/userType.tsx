export type User = {
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
