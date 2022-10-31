const { EmbedBuilder, Colors } = require('discord.js')

module.exports = {
    name: 'help',
    description: 'View the commands on the bot.',
    aliases: ['h'],
    async execute(message, args, client) {
        try {

            const embed = new EmbedBuilder()
                .setAuthor({ name: `${message.author.tag}`, iconURL: message.author.displayAvatarURL() })
                .setDescription(`${client.config.settings.name} Public Help Menu`)
                .addFields([
                    { name: `CCAPI Notify`, value: `${client.config.settings.prefix}ccapi-notify <args>`, inline: true },
                    { name: `Load [SPRX]`, value: `${client.config.settings.prefix}load-sprx`, inline: true },
                    { name: `UnLoad [SPRX]`, value: `${client.config.settings.prefix}unload-sprx`, inline: true },
                ])
                .setColor(Colors.Blurple)
            await message.channel.send({ embeds: [embed] })
        } catch (err) {
            client.utils.logger(err, "error");
            client.utils.errorEmbed('There has been an unexpected error whilst executing this command.', message.channel, messageAuthor = message.author)
        }

    }
}