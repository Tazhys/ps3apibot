const config = require("../data/config");

module.exports = {
    name: 'messageCreate',
    once: false,
    async execute(message, client) {
        if (!message.content.startsWith(client.config.settings.prefix) || message.author.bot || !message.guild) return;

        const args = message.content.slice(client.config.settings.prefix.length).trim().split(/ +/g)
        const commandName = args.shift().toLowerCase()

        const command = client.commands.get(commandName) ||
            client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName))

        if (!command) return
        if(config.whitelist.enabled && !config.whitelist.users.includes(message.author.id)) return client.utils.errorEmbed(`You are not whitelisted to use this bot.`, message.channel, messageAuthor = message.author); // Whitelist check for commands

        try {
            command.execute(message, args, client)
            client.utils.logger(`${message.author.tag} (${message.author.id}) has executed the ${commandName} command.`, "command");
        } catch (e) {
            client.utils.logger(e, "error");
        }

    }
}