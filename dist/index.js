import { addUser, getUsers } from "./services/userService.js";
import { Status } from "./model/user.model.js";
addUser({ id: 1, name: "John", age: 25, isAdmin: true });
addUser({ id: 2, name: "Jane", age: 30, isAdmin: false });
addUser({ id: 1, name: "John", age: 24, isAdmin: true });
addUser({ id: "u2", name: "Jane", age: 28, isAdmin: false });
console.log(getUsers());
const task1 = {
    id: 1,
    title: "Learn TypeScript",
    status: Status.Pending,
};
console.log("Task:", task1);
function updateTaskStatus(task, status) {
    task.status = status;
    console.log(`Task "${task.title}" is now ${task.status}`);
}
updateTaskStatus(task1, Status.Completed);
const task2 = {
    id: 2,
    title: "Practice exercises",
    status: Status.Pending,
    extraStatus: "ON_HOLD",
};
console.log("Task 2:", task2);
//export {};
// const user1: User = { id: 1, name: "John", age: 25, isAdmin: true };
// const user2: User = { id: "u2", name: "Jane", age: 30, isAdmin: false };
// const user3: User = { id: 3, name: "Bob", age: 28, isAdmin: true };
const taskOne = {
    id: 1,
    title: "Learn TypeScript",
    status: Status.Pending,
};
const taskTwo = {
    id: 2,
    title: "Build a project",
    status: Status.Completed,
};
const taskThree = {
    id: 3,
    title: "Review code",
    status: Status.Failed,
};
function printCompletedTasks(tasks) {
    tasks.forEach((task) => {
        if (task.status === Status.Completed) {
            console.log(`Completed Task: ${task.title}`);
        }
    });
}
printCompletedTasks([taskOne, taskTwo, taskThree]);
function printTasks(tasks, status) {
    tasks.forEach((task) => {
        if (!status || task.status === status) {
            console.log(`Task: ${task.title} | Status: ${task.status}`);
        }
    });
}
printTasks([taskOne, taskTwo, taskThree], Status.Pending);
printTasks([taskOne, taskTwo, taskThree], Status.Completed); // prints only completed
printTasks([taskOne, taskTwo, taskThree], Status.Pending); // prints only pending
