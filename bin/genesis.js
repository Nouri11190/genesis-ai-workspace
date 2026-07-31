#!/usr/bin/env node

"use strict";

const fs = require("fs");
const path = require("path");

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
  genesis list

Commands:
  help       Show help
  version    Show version
  new        Create a new project
  list       List all projects
`);
        break;

    case "new":

        if (!argument) {
            console.log("Usage: genesis new <project>");
            process.exit(1);
        }

        if (engine.createProject(argument)) {
            console.log("Success : true");
            console.log("Project : " + argument);
            console.log("Location: " + process.cwd() + "/projects/" + argument);
        } else {
            console.log("Success : false");
            console.log("Project already exists.");
        }

        break;

    case "list":

        const projectsPath = path.join(process.cwd(), "projects");

        if (!fs.existsSync(projectsPath)) {
            console.log("Projects directory not found.");
            break;
        }

        const projects = fs.readdirSync(projectsPath)
            .filter(name =>
                fs.statSync(path.join(projectsPath, name)).isDirectory()
            )
            .sort();

        console.log("");
        console.log("Genesis Projects");
        console.log("----------------");

        if (projects.length === 0) {
            console.log("No projects found.");
            break;
        }

        projects.forEach((project, index) => {
            console.log(`${index + 1}. ${project}`);
        });

        break;

    default:
        console.log(`Unknown command: ${command}`);
        console.log("Run 'genesis help' for available commands.");
}
