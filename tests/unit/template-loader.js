const engine = require("../../app/templates/engine");

try {
    const template = engine.loadTemplate();

    console.log("================================");
    console.log("Template Loaded");
    console.log("================================");
    console.log("Name        :", template.name);
    console.log("Version     :", template.version);
    console.log("Directories :", template.directories.length);
    console.log("Files       :", template.files.length);
    console.log("Status      : OK");
    console.log("================================");

} catch (err) {
    console.error("FAILED");
    console.error(err.message);
}
