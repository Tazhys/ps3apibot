const { Client, GatewayIntentBits, Collection } = require("discord.js");
const client = new Client({
    intents: [
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.Guilds,
    ]
});

client.config = require("./src/data/config.js");
client.utils = {
    CCAPINotify: require("./src/functions/CCAPI"),
    console: require("./src/utils/console.json"),
    successEmbed: require("./src/functions/successEmbed"),
    errorEmbed: require("./src/functions/errorEmbed"),
    logger: require("./src/utils/logger.js"),
};
client.commands = new Collection();

client.pkg = {
    fetch: require("node-fetch"),
}

setTimeout(() => {
    require("./src/handlers/commands")(client);
    require("./src/handlers/events")(client);
}, 1000);

client.login(client.config.token)