const parser = require("../../app/terminal/parser");

const command = parser.parse([
    "node",
    "workspace.js",
    "project",
    "create",
    "demo"
]);

console.log("================================");
console.log("Command Parser");
console.log("================================");

console.log(command);

console.log("================================");

if (
    command.module === "project" &&
    command.action === "create" &&
    command.target === "demo"
) {
    console.log("Status : OK");
} else {
    console.log("Status : FAILED");
}
