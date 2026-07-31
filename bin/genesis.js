#!/usr/bin/env node

"use strict";

const pkg = require("../package.json");
const engine = require("../engine");

const command = process.argv[2];
const argument = process.argv[3];

switch (command) {

    case "version":
        console.log(`Genesis Ecosystem v${pkg.version}`);
        break;

    case "help":
    case undefined:
        console.log(`
Genesis AI Workspace

Usage:
  genesis help
  genesis version
  genesis new <project>

Commands:
  help       Show help
  version    Show version
  new        Create a new project
`);
        break;

    case "new":

        if (!argument) {
            console.log("Usage: genesis new <project>");
            process.exit(1);
        }

        const success = engine.createProject(argument);

        if (success) {
            console.log("Success : true");
            console.log("Project : " + argument);
            console.log("Location: " + process.cwd() + "/projects/" + argument);
        } else {
            console.log("Success : false");
            console.log("Project already exists.");
        }

        break;

    default:
        console.log(`Unknown command: ${command}`);
        console.log("Run 'genesis help' for available commands.");
}
