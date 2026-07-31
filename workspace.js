const parser = require("./app/terminal/parser");
const router = require("./app/terminal/router");

const projectCommand = require("./app/terminal/commands/project");
const documentationCommand = require("./app/terminal/commands/documentation");

function banner() {

    console.log("");
    console.log("==================================");
    console.log(" GENESIS AI WORKSPACE");
    console.log("==================================");
    console.log("Name     : Genesis AI Workspace");
    console.log("Version  : 0.1.0");
    console.log("Status   : Development");
    console.log("Location : " + process.cwd());
    console.log("==================================");
    console.log("");

}

function main() {

    banner();

    const command = parser.parse(process.argv);

    if (!command.module) {
        return;
    }

    const destination = router.route(command);

    switch (destination) {

        case "project":
            return projectCommand.execute(command);

        case "documentation":
            return documentationCommand.execute(command);

        default:
            console.log("Unknown command.");
            return null;

    }

}

main();
