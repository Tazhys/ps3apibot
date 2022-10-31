const fs = require("fs");

module.exports = async(client) => {
    const commandFolders = fs.readdirSync(`${process.cwd()}/src/modules`)

    for (const folder of commandFolders) {
        const commandFiles = fs.readdirSync(`${process.cwd()}/src/modules/${folder}`).filter(file => file.endsWith('.js'))

        for (const file of commandFiles) {
            const command = require(`${process.cwd()}/src/modules/${folder}/${file}`)
            client.commands.set(command.name, command)
        }
    }
}