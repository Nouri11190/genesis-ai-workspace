const core = require("genesis-core");

const configFile = "./config/app.json";

class Application {

    initialize() {

        this.config = core.config.load(configFile);

        core.logger.info(
            "Application initialized."
        );

    }

    validate() {

        if (
            !core.validation.isObject(this.config)
        ) {
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

        return true;

    }

    start() {

        this.initialize();
        this.validate();

        return this.run();

    }

}

module.exports = new Application();
