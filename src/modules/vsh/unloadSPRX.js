const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'unload-sprx',
    description: 'unload an sprx in slot (2)',
    aliases: ['uls'],
    async execute(message, args, client) {
        try {
            var API = await client.pkg.fetch(`${client.config.console.host}${client.config.console.urls.unloadslot2}`);
            client.utils.successEmbed('Successfully attempted to unload ValiantXMB to Slot(2) via WebmanAPI', message.channel, messageAuthor = message.author);
            client.utils.CCAPINotify('Successfully unloaded SPRX From Slot(2)')
            await API;
        } catch (err) {
            client.utils.logger(err, "error");
            client.utils.errorEmbed('There has been an unexpected error whilst executing this command.', message.channel, messageAuthor = message.author)
        }
    }
}