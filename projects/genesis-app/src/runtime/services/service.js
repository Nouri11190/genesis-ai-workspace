class GenesisService {

    start() {

        console.log("[SERVICE] Genesis runtime started.");

        this.interval = setInterval(() => {

            // Runtime heartbeat

        }, 1000);

        process.on("SIGINT", () => {

            this.stop();

            process.exit(0);

        });

    }

    stop() {

        if (this.interval) {
            clearInterval(this.interval);
        }

        console.log("[SERVICE] Genesis runtime stopped.");

    }

}

module.exports = new GenesisService();
