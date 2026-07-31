const parser = require("../../app/terminal/parser");
const router = require("../../app/terminal/router");
const project = require("../../app/terminal/commands/project");

const command = parser.parse([
    "node",
    "workspace.js",
    "project",
    "create",
    "demo"
]);

const destination = router.route(command);

console.log("================================");
console.log("Project Command Test");
console.log("================================");

if (destination === "project") {

    project.execute(command);

    console.log("Status : OK");

} else {

    console.log("Status : FAILED");

}

console.log("================================");
