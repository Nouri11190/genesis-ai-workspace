class Logger {

    timestamp() {
        return new Date().toISOString();
    }

    info(message) {
        console.log(
            `[INFO] ${this.timestamp()} ${message}`
        );
    }

    warn(message) {
        console.log(
            `[WARN] ${this.timestamp()} ${message}`
        );
    }

    error(message) {
        console.log(
            `[ERROR] ${this.timestamp()} ${message}`
        );
    }

}

module.exports = new Logger();
