#!/usr/bin/env node

"use strict";

const fs = require("fs");
const path = require("path");

const pkg = require("../package.json");
const engine = require("../engine");

function findWorkspaceRoot(start) {

    let current = start;

    while (true) {

        if (
            fs.existsSync(path.join(current, "workspace.js")) &&
            fs.existsSync(path.join(current, "engine.js")) &&
            fs.existsSync(path.join(current, "projects"))
        ) {
            return current;
        }

        const parent = path.dirname(current);

        if (parent === current) {
            return null;
        }

        current = parent;
    }
}

const workspace = findWorkspaceRoot(process.cwd()) || path.resolve(__dirname, "..");

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
        } else {
            console.log("Success : false");
            console.log("Project already exists.");
        }

        break;

    case "list": {

        const projectsPath = path.join(workspace, "projects");

        if (!fs.existsSync(projectsPath)) {
            console.log("Projects directory not found.");
            process.exit(1);
        }

        const projects = fs.readdirSync(projectsPath)
            .filter(name =>
                fs.statSync(path.join(projectsPath, name)).isDirectory()
            )
            .sort();

        console.log("");
        console.log("Genesis Projects");
        console.log("----------------");

        projects.forEach((project, index) => {
            console.log(`${index + 1}. ${project}`);
        });

        break;
    }

    default:
        console.log(`Unknown command: ${command}`);
        console.log("Run 'genesis help' for available commands.");
}
