class CommandRouter {

    route(command) {

        switch (command.module) {

            case "project":
                return "project";

            case "workspace":
                return "workspace";

            case "runtime":
                return "runtime";

            case "documentation":
            case "docs":
                return "documentation";

            case "verify":
                return "verify";

            case "export":
                return "export";

            default:
                return null;

        }

    }

}

module.exports = new CommandRouter();
