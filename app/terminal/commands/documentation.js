const documentationManager = require("../../documentation/manager");

class DocumentationCommand {

    execute(command) {

        switch (command.action) {

            case "generate": {

                const result = documentationManager.generate();

                console.log("");
                console.log("================================");
                console.log("Documentation Manager");
                console.log("================================");
                console.log("Success :", result.success);
                console.log("File    :", result.file);
                console.log("================================");
                console.log("");

                return result;
            }

            default:

                console.log(
                    "Unknown documentation action:",
                    command.action
                );

                return null;

        }

    }

}

module.exports = new DocumentationCommand();
