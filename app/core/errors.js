class ErrorService {

    create(code, message) {

        return {
            success: false,
            code,
            message
        };

    }

    required(field) {

        return this.create(
            "REQUIRED_FIELD",
            `${field} is required.`
        );

    }

    invalid(field) {

        return this.create(
            "INVALID_VALUE",
            `${field} is invalid.`
        );

    }

    notFound(type, value) {

        return this.create(
            "NOT_FOUND",
            `${type} '${value}' was not found.`
        );

    }

    alreadyExists(type, value) {

        return this.create(
            "ALREADY_EXISTS",
            `${type} '${value}' already exists.`
        );

    }

    internal(message = "Internal error.") {

        return this.create(
            "INTERNAL_ERROR",
            message
        );

    }

}

module.exports = new ErrorService();
