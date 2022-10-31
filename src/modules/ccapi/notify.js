module.exports = {
    name: 'ccapi-notify',
    description: 'Send an CCAPI Notify to your ps3.',
    aliases: ['capin'],
    async execute(message, args, client) {
        try {
            if (!args[0]) return client.utils.errorEmbed('Please enter an argument spaced with "+"', message.channel, messageAuthor = message.author)
            client.utils.CCAPINotify(args[0])
            client.utils.successEmbed('Successfully attempted to notify your console with WebmanAPI', message.channel, messageAuthor = message.author);
        } catch (err) {
            client.utils.logger(err, "error");
            client.utils.errorEmbed('There has been an unexpected error whilst executing this command.', message.channel, messageAuthor = message.author)
        }
    }
}