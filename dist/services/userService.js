const users = [
//   { id: 1, name: "Alice", age: 30, isAdmin: true },
//   { id: 2, name: "Bob", age: 25, isAdmin: false },
//   { id: 3, name: "Charlie", age: 35, isAdmin: true },
];
export function addUser(user) {
    users.push(user);
}
export function getUsers() {
    return users;
}
