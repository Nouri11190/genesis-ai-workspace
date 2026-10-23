"use strict";

const fs = require("fs");
const os = require("os");
const path = require("path");
const { spawnSync } = require("child_process");

const repo = path.resolve(__dirname, "..");
const unitDir = path.join(repo, "tests", "unit");
const tests = fs.readdirSync(unitDir)
    .filter((file) => file.endsWith(".js"))
    .sort();

const tempRoot = fs.mkdtempSync(
    path.join(os.tmpdir(), "genesis-workspace-tests-")
);
const isolatedRepo = path.join(tempRoot, "workspace");

let failed = 0;

try {
    fs.cpSync(repo, isolatedRepo, {
        recursive: true,
        filter(source) {
            const relative = path.relative(repo, source);
            if (!relative) return true;

            const parts = relative.split(path.sep);
            if (parts.includes(".git")) return false;
            if (relative === "tests/index.js") return false;

            return true;
        }
    });

    console.log("================================");
    console.log("Genesis AI Workspace Test Suite");
    console.log("================================");
    console.log(`Tests discovered: ${tests.length}`);
    console.log("");

    for (const file of tests) {
        const result = spawnSync(
            process.execPath,
            [path.join(isolatedRepo, "tests", "unit", file)],
            {
                cwd: isolatedRepo,
                encoding: "utf8",
                timeout: 60000
            }
        );

        const output = `${result.stdout || ""}\n${result.stderr || ""}`;
        const explicitFailure =
            /\bFAILED\b/i.test(output) ||
            /Status\s*:\s*FAILED/i.test(output);

        const passed =
            result.status === 0 &&
            !result.error &&
            !explicitFailure;

        console.log(`${passed ? "PASS" : "FAIL"}  ${file}`);

        if (!passed) {
            failed++;
            if (result.error) console.log(`      ${result.error.message}`);
            if (result.status !== null && result.status !== 0) {
                console.log(`      exit code: ${result.status}`);
            }

            output.split(/\r?\n/)
                .filter(line => /FAILED|ERROR|Error|error/i.test(line))
                .slice(0, 5)
                .forEach(line => console.log(`      ${line.trim()}`));
        }
    }

    console.log("");
    console.log("================================");
    console.log(`Passed : ${tests.length - failed}`);
    console.log(`Failed : ${failed}`);
    console.log(`Total  : ${tests.length}`);
    console.log("================================");

    if (failed > 0) process.exitCode = 1;
} catch (error) {
    console.error("TEST RUNNER ERROR:", error.message);
    process.exitCode = 1;
} finally {
    fs.rmSync(tempRoot, { recursive: true, force: true });
}
