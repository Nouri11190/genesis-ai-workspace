const generator = require("./generator");

class DocumentationManager {

    generate() {

        return generator.generate();

    }

}

module.exports = new DocumentationManager();
