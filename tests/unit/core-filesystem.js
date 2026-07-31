const path = require("path");

const filesystem = require("../../app/core/filesystem");

const target = path.join(
    process.cwd(),
    "runtime",
    "core-test.txt"
);

filesystem.write(
    target,
    "Genesis Core Filesystem Test"
);

console.log("================================");
console.log("Genesis Core Filesystem");
console.log("================================");
console.log("Exists :", filesystem.exists(target));
console.log("Content:", filesystem.read(target));
console.log("================================");
