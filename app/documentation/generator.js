const path = require("path");

const core = require("../core");

class DocumentationGenerator {

    generate() {

        const workspace = core.configuration.workspace();
        const paths = core.configuration.paths();

        core.filesystem.createDirectory(
            paths.docs
        );

        const content =
`# ${workspace.name}

## Generated Documentation

Workspace : ${workspace.name}

Version : ${workspace.version}

Status : ${workspace.status}
`;

        const file = path.join(
            paths.docs,
            "workspace.md"
        );

        core.filesystem.write(
            file,
            content
        );

        core.logger.info(
            "Workspace documentation generated."
        );

        return {
            success: true,
            file
        };

    }

}

module.exports = new DocumentationGenerator();
