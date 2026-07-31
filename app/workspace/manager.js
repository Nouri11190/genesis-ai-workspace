const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();

function load(file) {
    try {
        return JSON.parse(fs.readFileSync(path.join(ROOT, file), "utf8"));
    } catch {
        return {};
    }
}

function info() {
    const runtime = load("runtime/workspace.json");
    const config = load("config/workspace.json");

    console.log("");
    console.log("==================================");
    console.log(" GENESIS AI WORKSPACE");
    console.log("==================================");
    console.log("Name     :", config.name || "Genesis AI Workspace");
    console.log("Version  :", config.version || "0.1.0");
    console.log("Status   :", runtime.status || "Development");
    console.log("Location :", ROOT);
    console.log("==================================");
    console.log("");
}

module.exports = {
    info
};
