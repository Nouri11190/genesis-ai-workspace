#!/usr/bin/env node

"use strict";

const pkg = require("../package.json");

const command = process.argv[2];

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

Commands:
  help       Show help
  version    Show version
`);
        break;

    default:
        console.log(`Unknown command: ${command}`);
        console.log("Run 'genesis help' for available commands.");
}
