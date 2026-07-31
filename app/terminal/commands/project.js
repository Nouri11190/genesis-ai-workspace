const projectManager = require("../../projects/manager");

class ProjectCommand {

    execute(command) {

        switch (command.action) {

            case "create": {

                const result = projectManager.createProject(
                    command.target
                );

                console.log("");
                console.log("================================");
                console.log("Project Created");
                console.log("================================");
                console.log("Success :", result.success);
                console.log("Project :", result.metadata.name);
                console.log("Location:", result.path);
                console.log("================================");
                console.log("");

                return result;
            }

            default:

                console.log(
                    "Unknown project action:",
                    command.action
                );

                return null;

        }

    }

}

module.exports = new ProjectCommand();
