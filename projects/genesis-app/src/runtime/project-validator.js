const fs = require("fs");
const path = require("path");

class ProjectValidator {

    validate(projectName) {

        const root = path.resolve(
            __dirname,
            "../../../",
            projectName
        );

        return {
            project: fs.existsSync(path.join(root, "project.json")),
            package: fs.existsSync(path.join(root, "package.json")),
            source: fs.existsSync(path.join(root, "src"))
        };

    }

}

module.exports = new ProjectValidator();
