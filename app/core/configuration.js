const path = require("path");

class ConfigurationService {

    workspace() {

        return {
            name: "Genesis AI Workspace",
            version: require("../../package.json").version,
            status: "Development",
            description: "Genesis AI Engineering Platform"
        };

    }

    environment() {

        return {
            development: true,
            production: false,
            debug: true
        };

    }

    paths() {

        const root = process.cwd();

        return {
            root,
            app: path.join(root, "app"),
            config: path.join(root, "config"),
            docs: path.join(root, "docs"),
            runtime: path.join(root, "runtime"),
            logs: path.join(root, "logs"),
            projects: path.join(root, "projects"),
            templates: path.join(root, "app", "templates"),
            tests: path.join(root, "tests")
        };

    }

    validate() {

        return {
            success: true,
            workspace: this.workspace(),
            environment: this.environment(),
            paths: this.paths()
        };

    }

}

module.exports = new ConfigurationService();
