const fs = require("fs");

module.exports = async(client) => {
    const eventFiles = fs.readdirSync(`${process.cwd()}/src/events`)
    for (const file of eventFiles) {
        const event = require(`${process.cwd()}/src/events/${file}`)
        if (event.once) {
            client.once(event.name, (...args) => event.execute(...args, client))
        } else {
            client.on(event.name, (...args) => event.execute(...args, client))
        }
    }
}