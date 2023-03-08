const { Client, GatewayIntentBits, Collection } = require("discord.js");
const preventCrash = require("./src/lib/handler");
const client = new Client({
    intents: [
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.Guilds,
    ]
});

preventCrash; // Prevents the app from hanging when an error occurs. (Usually node just crashes and you have to restart the app, this prevents that and continues the script.)

client.config = require("./src/data/config.js");
client.utils = {
    CCAPINotify: require("./src/functions/CCAPI"),
    console: require("./src/utils/console.json"),
    successEmbed: require("./src/functions/successEmbed"),
    errorEmbed: require("./src/functions/errorEmbed"),
    logger: require("./src/utils/logger.js"),
    readLine: require("readline"),
    colors: require("colors"),
};
client.commands = new Collection();

const consoleq = client.utils.readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

client.pkg = {
    fetch: require("cross-fetch"), // using cross-fetch instead of node-fetch because node-fetch lacks support for commonjs implementations in later versions.
}



setTimeout(() => {
    require("./src/handlers/commands")(client);
    require("./src/handlers/events")(client);
}, 1000);

consoleq.question(`\n${client.utils.colors.bgMagenta.white.bold("[SYSTEM]")} ${client.utils.colors.bgBlue.white.bold("[INFO]")} Do you have your PS3 on and is webman's webpage available? (Y/n): `, (response) => {
    if (response == "Y" || response == "y") {
        client.utils.logger("Thank you. Starting the bot...", "module");
        client.login(client.config.token);
    } else {
        client.utils.logger("Please turn on your PS3 and make sure webman's webpage is available.\n", "error");
        process.exit(0);
    }
});
