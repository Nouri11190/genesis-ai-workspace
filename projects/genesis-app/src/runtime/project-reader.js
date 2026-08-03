const fs = require("fs");
const path = require("path");

class ProjectReader {

    read(projectName) {

        const file = path.resolve(
            __dirname,
            "../../../",
            projectName,
            "project.json"
        );

        if (!fs.existsSync(file)) {
            return null;
        }

        return JSON.parse(
            fs.readFileSync(file, "utf8")
        );

    }

}

module.exports = new ProjectReader();
