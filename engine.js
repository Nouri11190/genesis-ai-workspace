"use strict";

const fs = require("fs");
const path = require("path");

const template = require("./template.json");

/**
 * Create a new Genesis project.
 */
function createProject(projectName) {

    const projectPath = path.join(__dirname, "projects", projectName);

    if (fs.existsSync(projectPath)) {
        return false;
    }

    fs.mkdirSync(projectPath, { recursive: true });

    createDirectories(projectPath, template);
    createFiles(projectPath, template);

    return true;
}

/**
 * Create project directories.
 */
function createDirectories(projectPath, template) {

    template.directories.forEach((dir) => {

        const target = path.join(projectPath, dir);

        if (!fs.existsSync(target)) {
            fs.mkdirSync(target, { recursive: true });
        }

    });

    return true;
}

/**
 * Create project files.
 */
function createFiles(projectPath, template) {

    template.files.forEach((file) => {

        const target = path.join(projectPath, file);

        if (!fs.existsSync(target)) {
            fs.writeFileSync(target, "");
        }

    });

    return true;
}

module.exports = {
    createProject,
    createDirectories,
    createFiles
};
