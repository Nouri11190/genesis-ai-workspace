const core = require("genesis-core");
const service = require("./service");

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

        service.start();

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

    try {

        app.start();

    } catch (error) {

        console.error("[ERROR] Genesis App failed to start.");
        console.error(error.message);
        process.exit(1);

    }

}

module.exports = app;
