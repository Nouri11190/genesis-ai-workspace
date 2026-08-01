const fs = require("fs");
const path = require("path");

class ProjectDiscovery {

    discover() {

        const workspace = path.resolve(
            __dirname,
            "../../../../projects"
        );

        if (!fs.existsSync(workspace)) {

            return [];

        }

        return fs.readdirSync(workspace)
            .filter((item) => {

                const project = path.join(workspace, item);

                return fs.statSync(project).isDirectory();

            });

    }

}

module.exports = new ProjectDiscovery();
