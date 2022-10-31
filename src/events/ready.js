const { ActivityType } = require("discord.js");

module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        Object.values(client.utils.console).forEach(line => console.log(line));
        client.user.setPresence({ activities: [{ name: 'with mapi api', type: ActivityType.Playing }] })
        client.utils.logger(`${client.config.settings.name} is now online and ready to manage PS3`, "system");
    }
}