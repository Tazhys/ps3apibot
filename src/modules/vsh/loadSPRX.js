const { EmbedBuilder } = require('discord.js')

module.exports = {
    name: 'load-sprx',
    description: 'load an sprx in slot (2)',
    aliases: ['ls'],
    async execute(message, args, client) {
        try {

            var API = await client.pkg.fetch(`${client.config.console.host}${client.config.console.urls.loadslot2}`);
            client.utils.successEmbed('Successfully attempted to load ValiantXMB to Slot(2) via WebmanAPI', message.channel, messageAuthor = message.author);
            await API;

        } catch (err) {
            client.utils.logger(err, "error");
            client.utils.errorEmbed('There has been an unexpected error whilst executing this command.', message.channel, messageAuthor = message.author)
        }

    }
}