const core = require("genesis-core");
const service = require("./runtime/services/service");
const runtime = require("./runtime/manager");
const discovery = require("./runtime/project-discovery");
const reader = require("./runtime/project-reader");
const validator = require("./runtime/project-validator");

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

        projects.forEach((project) => {

            const info = reader.read(project);
            const health = validator.validate(project);

            const healthy =
                health.project &&
                health.package &&
                health.source;

            const icon = healthy ? "✓" : "✗";

            if (info) {

                console.log(
                    `${icon} ${info.name} (${info.version})`
                );

            } else {

                console.log(
                    `${icon} ${project}`
                );

            }

            if (!health.package) {
                console.log("    Missing package.json");
            }

            if (!health.source) {
                console.log("    Missing src/");
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
