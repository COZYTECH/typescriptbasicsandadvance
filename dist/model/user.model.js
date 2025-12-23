// Enums are fixed sets of named constants. Great for status, roles, etc.
export var Status;
(function (Status) {
    Status["Pending"] = "PENDING";
    Status["Completed"] = "COMPLETED";
    Status["Failed"] = "FAILED";
})(Status || (Status = {}));
// ts will throw and errror if the enum status does noot have done inside of it
// task1.status = "DONE";
// const task1: Task = {
//   id: 1,
//   title: "Learn TypeScript",
//   status: Status.Pending,
// };
// console.log("Task:", task1);
