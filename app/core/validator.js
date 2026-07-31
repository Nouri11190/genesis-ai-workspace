const fs = require("fs");
const configuration = require("./configuration");

class ValidatorService {

    required(value, name) {

        return {
            success: value !== undefined &&
                     value !== null &&
                     value !== "",
            field: name
        };

    }

    projectName(name) {

        const valid = /^[a-zA-Z0-9_-]+$/.test(name);

        return {
            success: valid,
            value: name
        };

    }

    directory(target) {

        return {
            success: fs.existsSync(target),
            path: target
        };

    }

    file(target) {

        return {
            success: fs.existsSync(target),
            path: target
        };

    }

    configuration() {

        return configuration.validate();

    }

}

module.exports = new ValidatorService();
