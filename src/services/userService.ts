import { User } from "../model/user.model";

const users: User[] = [
  //   { id: 1, name: "Alice", age: 30, isAdmin: true },
  //   { id: 2, name: "Bob", age: 25, isAdmin: false },
  //   { id: 3, name: "Charlie", age: 35, isAdmin: true },
];

export function addUser(user: User): void {
  users.push(user);
}

export function getUsers(): User[] {
  return users;
}
