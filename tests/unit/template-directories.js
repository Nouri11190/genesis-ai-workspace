const fs = require("fs");
const path = require("path");

const engine = require("../../app/templates/engine");

const project = path.join(
    process.cwd(),
    "projects",
    "template-test"
);

if (!fs.existsSync(project)) {
    fs.mkdirSync(project, { recursive: true });
}

const template = engine.loadTemplate();

engine.createDirectories(project, template);

console.log("================================");
console.log("Directory Generator");
console.log("================================");

template.directories.forEach(dir => {

    const exists = fs.existsSync(path.join(project, dir));

    console.log(
        `${dir.padEnd(12)} : ${exists ? "OK" : "FAILED"}`
    );

});

console.log("================================");
