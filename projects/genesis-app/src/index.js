const core = require("genesis-core");
const service = require("./runtime/services/service");
const runtime = require("./runtime/manager");
const discovery = require("./runtime/project-discovery");
const reader = require("./runtime/project-reader");

const configFile = "./config/app.json";

class Application {

    initialize() {

        this.config = core.config.load(configFile);

        core.logger.info(
            "Application initialized."
        );

    }

    validate() {

        if (!core.validation.isObject(this.config)) {

            throw new core.errors.GenesisError(
                "Invalid application configuration"
            );

        }

        core.logger.info(
            "Application validation passed."
        );

    }

    run() {

        core.logger.info(
            `${this.config.name} running.`
        );

        runtime.register(
            "Genesis Service",
            service
        );

        runtime.startAll();

        const projects = discovery.discover();

        console.log("");
        console.log("Genesis Projects");
        console.log("----------------");

        projects.forEach((project, index) => {

            const info = reader.read(project);

            if (info) {

                console.log(
                    `${index + 1}. ${info.name} (${info.version})`
                );

            } else {

                console.log(
                    `${index + 1}. ${project} (No project.json)`
                );

            }

        });

        console.log("");

        return true;

    }

    start() {

        this.initialize();
        this.validate();

        return this.run();

    }

}

const app = new Application();

if (require.main === module) {

    process.on("SIGINT", () => {

        runtime.stopAll();

        process.exit(0);

    });

    try {

        app.start();

    } catch (error) {

        console.error("[ERROR] Genesis App failed to start.");
        console.error(error.message);
        process.exit(1);

    }

}

module.exports = app;
