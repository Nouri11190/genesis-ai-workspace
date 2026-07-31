class CommandParser {

    parse(argv = []) {

        const args = argv.slice(2);

        return {
            module: args[0] || null,
            action: args[1] || null,
            target: args[2] || null,
            arguments: args
        };

    }

}

module.exports = new CommandParser();
