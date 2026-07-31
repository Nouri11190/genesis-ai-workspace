const fs = require("fs");
const path = require("path");

const engine = require("../../app/templates/engine");

const project = path.join(
    process.cwd(),
    "projects",
    "template-test"
);

const template = engine.loadTemplate();

const metadata = {
    name: "template-test",
    version: "0.1.0",
    status: "development",
    template: template.name,
    createdAt: new Date().toISOString(),
    workspace: "Genesis AI Workspace"
};

const target = path.join(project, "project.json");

fs.writeFileSync(
    target,
    JSON.stringify(metadata, null, 2)
);

console.log("================================");
console.log("Metadata Generator");
console.log("================================");
console.log("Project :", metadata.name);
console.log("Version :", metadata.version);
console.log("Status  :", metadata.status);
console.log("Result  : OK");
console.log("================================");
