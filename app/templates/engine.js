const path = require("path");

const core = require("../core");

function loadTemplate(name = "default") {

    const templateFile = path.join(
        core.configuration.paths().templates,
        "definitions",
        name,
        "template.json"
    );

    if (!core.filesystem.exists(templateFile)) {
        return core.errors.notFound(
            "Template",
            name
        );
    }

    core.logger.info(
        `Loading template '${name}'.`
    );

    return JSON.parse(
        core.filesystem.read(templateFile)
    );

}

function createDirectories(projectPath, template) {

    template.directories.forEach((directory) => {

        core.filesystem.createDirectory(
            path.join(projectPath, directory)
        );

    });

    return true;

}

function createFiles(projectPath, template) {

    template.files.forEach((file) => {

        const target = path.join(
            projectPath,
            file
        );

        if (!core.filesystem.exists(target)) {

            core.filesystem.write(
                target,
                ""
            );

        }

    });

    return true;

}

module.exports = {

    loadTemplate,

    createDirectories,

    createFiles

};
