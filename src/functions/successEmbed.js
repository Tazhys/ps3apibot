const { EmbedBuilder, Colors } = require("discord.js");

module.exports = async(message, channel, messageAuthor) => {
    const embed = new EmbedBuilder()
        .setAuthor({ name: `${messageAuthor.tag}`, iconURL: messageAuthor.displayAvatarURL() })
        .setColor(Colors.Green)
        .setDescription(`<:SystemMessageCheck:1010152711561433131> ${message}`)
    await channel.send({ embeds: [embed] })
}