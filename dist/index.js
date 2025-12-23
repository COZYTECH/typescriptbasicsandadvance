import { addUser, getUsers } from "./services/userService.js";
addUser({ id: 1, name: "John", age: 25, isAdmin: true });
addUser({ id: 2, name: "Jane", age: 30, isAdmin: false });
console.log(getUsers());
//export {};
