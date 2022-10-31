const { EmbedBuilder, Colors } = require("discord.js");

module.exports = async(message, channel, messageAuthor) => {
    const embed = new EmbedBuilder()
        .setAuthor({ name: `${messageAuthor.tag}`, iconURL: messageAuthor.displayAvatarURL() })
        .setColor(Colors.Red)
        .setDescription(`<:SystemMessageCross:1010152713721479329> ${message}`)
    await channel.send({ embeds: [embed] })
}