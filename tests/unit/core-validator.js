const configuration = require("../../app/core/configuration");
const validator = require("../../app/core/validator");

console.log("================================");
console.log("Genesis Core Validator");
console.log("================================");

console.log("Project Name");
console.log(
    validator.projectName("demo-project")
);

console.log("");

console.log("Required");
console.log(
    validator.required("Genesis", "Workspace")
);

console.log("");

console.log("Configuration");
console.log(
    validator.configuration().success
);

console.log("");

console.log("Projects Directory");
console.log(
    validator.directory(
        configuration.paths().projects
    )
);

console.log("================================");
