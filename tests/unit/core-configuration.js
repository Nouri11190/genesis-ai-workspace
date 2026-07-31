const configuration = require("../../app/core/configuration");

const result = configuration.validate();

console.log("================================");
console.log("Genesis Core Configuration");
console.log("================================");

console.log("Workspace");
console.log(result.workspace);

console.log("");

console.log("Environment");
console.log(result.environment);

console.log("");

console.log("Paths");
console.log(result.paths);

console.log("");

console.log("Status :", result.success);

console.log("================================");
