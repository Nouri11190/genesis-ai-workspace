const path = require("path");

const core = require("../core");
const templateEngine = require("../templates/engine");

class ProjectManager {

    createProject(name, templateName = "default") {

        const validation =
            core.validator.required(
                name,
                "Project Name"
            );

        if (!validation.success) {
            return core.errors.required(
                "Project Name"
            );
        }

        const config =
            core.configuration;

        const workspace =
            config.workspace();

        const paths =
            config.paths();

        const projectPath = path.join(
            paths.projects,
            name
        );

        core.filesystem.createDirectory(
            projectPath
        );

        const template =
            templateEngine.loadTemplate(
                templateName
            );

        templateEngine.createDirectories(
            projectPath,
            template
        );

        templateEngine.createFiles(
            projectPath,
            template
        );

        const metadata = {

            name,

            version:
                workspace.version,

            status:
                workspace.status.toLowerCase(),

            workspace:
                workspace.name,

            template:
                template.name,

            createdAt:
                new Date().toISOString()

        };

        core.filesystem.write(

            path.join(
                projectPath,
                "project.json"
            ),

            JSON.stringify(
                metadata,
                null,
                2
            )

        );

        core.logger.info(
            `Project '${name}' created.`
        );

        return {

            success: true,

            path: projectPath,

            metadata

        };

    }

}

module.exports = new ProjectManager();
