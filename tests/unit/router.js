const parser = require("../../app/terminal/parser");
const router = require("../../app/terminal/router");

const command = parser.parse([
    "node",
    "workspace.js",
    "project",
    "create",
    "demo"
]);

const destination = router.route(command);

console.log("================================");
console.log("Command Router");
console.log("================================");

console.log("Module      :", command.module);
console.log("Destination :", destination);

console.log("================================");

if (destination === "project") {
    console.log("Status : OK");
} else {
    console.log("Status : FAILED");
}
