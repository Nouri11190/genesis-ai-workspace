const manager = require("../../app/documentation/manager");

const result = manager.generate();

console.log("================================");
console.log("Documentation Manager");
console.log("================================");
console.log("Success :", result.success);
console.log("File    :", result.file);
console.log("================================");
