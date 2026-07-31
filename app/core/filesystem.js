const fs = require("fs");
const path = require("path");

class FileSystemService {

    exists(target) {
        return fs.existsSync(target);
    }

    createDirectory(target) {
        if (!this.exists(target)) {
            fs.mkdirSync(target, {
                recursive: true
            });
        }
    }

    write(target, content) {

        const directory = path.dirname(target);

        this.createDirectory(directory);

        fs.writeFileSync(target, content);

        return target;
    }

    read(target) {
        return fs.readFileSync(target, "utf8");
    }

    list(target) {
        return fs.readdirSync(target);
    }

}

module.exports = new FileSystemService();
