class RuntimeRegistry {

    constructor() {

        this.items = new Map();

    }

    register(name, instance) {

        this.items.set(name, instance);

    }

    get(name) {

        return this.items.get(name);

    }

    all() {

        return Array.from(this.items.entries());

    }

}

module.exports = new RuntimeRegistry();
