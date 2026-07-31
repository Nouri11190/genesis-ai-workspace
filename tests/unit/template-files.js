const fs = require("fs");
const path = require("path");

const engine = require("../../app/templates/engine");

const project = path.join(
    process.cwd(),
    "projects",
    "template-test"
);

const template = engine.loadTemplate();

engine.createFiles(project, template);

console.log("================================");
console.log("File Generator");
console.log("================================");

template.files.forEach((file) => {

    const exists = fs.existsSync(path.join(project, file));

    console.log(
        `${file.padEnd(15)} : ${exists ? "OK" : "FAILED"}`
    );

});

console.log("================================");
