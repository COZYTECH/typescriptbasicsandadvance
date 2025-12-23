export interface User {
  id: number | string;
  name: string;
  age: number;
  isAdmin: boolean;
}
// Enums are fixed sets of named constants. Great for status, roles, etc.
export enum Status {
  Pending = "PENDING",
  Completed = "COMPLETED",
  Failed = "FAILED",
}

export interface Task {
  id: number;
  title: string;
  status: Status;
}

// ts will throw and errror if the enum status does noot have done inside of it
// task1.status = "DONE";

// const task1: Task = {
//   id: 1,
//   title: "Learn TypeScript",
//   status: Status.Pending,
// };
// console.log("Task:", task1);
