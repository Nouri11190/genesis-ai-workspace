const core = require("../../app/core");

console.log("================================");
console.log("Genesis Core Public API");
console.log("================================");

console.log("Workspace");
console.log(core.configuration.workspace());

console.log("");

core.logger.info("Genesis Core Loaded");

console.log("");

console.log("Validator");
console.log(
    core.validator.projectName("demo")
);

console.log("");

console.log("Errors");
console.log(
    core.errors.required("Project")
);

console.log("");

console.log("Filesystem");
console.log(
    typeof core.filesystem.write
);

console.log("================================");
