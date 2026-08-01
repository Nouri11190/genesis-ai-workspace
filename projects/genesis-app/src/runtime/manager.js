class RuntimeManager {

    constructor() {

        this.services = [];

    }

    register(name, service) {

        this.services.push({
            name,
            service,
            status: "stopped"
        });

    }

    startAll() {

        this.services.forEach((item) => {

            if (item.service.start) {

                item.service.start();

            }

            item.status = "running";

        });

    }

    stopAll() {

        this.services.forEach((item) => {

            if (item.service.stop) {

                item.service.stop();

            }

            item.status = "stopped";

        });

    }

    status() {

        return this.services.map((item) => ({

            name: item.name,
            status: item.status

        }));

    }

}

module.exports = new RuntimeManager();
