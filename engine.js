function createDirectories(projectPath, template) {

    const fs = require("fs");
    const path = require("path");

    template.directories.forEach(dir => {

        const target = path.join(projectPath, dir);

        if (!fs.existsSync(target)) {
            fs.mkdirSync(target, { recursive: true });
        }

    });

    return true;
}

function createFiles(projectPath, template) {
    const fs = require("fs");
    const path = require("path");

    template.files.forEach((file) => {

        const target = path.join(projectPath, file);

        if (!fs.existsSync(target)) {
            fs.writeFileSync(target, "");
        }

    });

    return true;
}
