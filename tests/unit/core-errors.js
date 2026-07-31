const errors = require("../../app/core/errors");

console.log("================================");
console.log("Genesis Core Errors");
console.log("================================");

console.log(errors.required("Project Name"));

console.log("");

console.log(errors.invalid("Template"));

console.log("");

console.log(errors.notFound("Project", "demo"));

console.log("");

console.log(errors.alreadyExists("Project", "demo"));

console.log("");

console.log(errors.internal());

console.log("================================");
