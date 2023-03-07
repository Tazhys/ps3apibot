const colors = require("colors");

module.exports = function(logMessage, type = "info") {

    const typeFormatting = { // Formatting for each type of log.
        system: colors.bgMagenta.white.bold("[SYSTEM]"),
        command: `${colors.bgMagenta.white.bold("[SYSTEM]")} ${colors.bgGreen.white.bold("[COMMAND]")}`, // Command message.
        module: `${colors.bgMagenta.white.bold("[SYSTEM]")} ${colors.bgGreen.white.bold("[MODULE]")}`, // Module message.
        error: `${colors.bgMagenta.white.bold("[SYSTEM]")} ${colors.bgRed.white.bold("[ERROR]")}`, // ERROR message.
        warn: `${colors.bgMagenta.white.bold("[SYSTEM]")} ${colors.bgYellow.white.bold("[WARN]")}`, // WARN message.
        info: `${colors.bgMagenta.white.bold("[SYSTEM]")} ${colors.bgBlue.white.bold("[INFO]")}` // INFO message.
    }

    const logString = colors.white(logMessage); // Formatting for the log message.
    const logFormatting = typeFormatting[type]; // Formatting for the log type.

    console.log(logFormatting, logString); // Log the message.
} // More optimised code.
