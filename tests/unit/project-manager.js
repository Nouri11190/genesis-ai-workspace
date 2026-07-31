const manager = require("../../app/projects/manager");

const result = manager.createProject("demo");

console.log("================================");
console.log("Project Manager");
console.log("================================");
console.log("Success :", result.success);
console.log("Path    :", result.path);
console.log("Project :", result.metadata.name);
console.log("================================");
