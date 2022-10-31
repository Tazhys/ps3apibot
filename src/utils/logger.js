const colors = require("colors");

module.exports = function(logMessage, type = "info") {

    let logString;
    let logFormatting;

    switch (type) {
        case "system":
            logString = colors.white(logMessage)
            logFormatting = colors.bgMagenta(colors.white(colors.bold("[SYSTEM]")));
            break;
        case "command":
            logString = colors.white(logMessage)
            logFormatting = colors.bgMagenta(colors.white(colors.bold("[SYSTEM]"))) + " " + colors.bgGreen(colors.white(colors.bold("[COMMAND]")));
            break;
        case "module":
            logString = colors.white(logMessage)
            logFormatting = colors.bgMagenta(colors.white(colors.bold("[SYSTEM]"))) + " " + colors.bgGreen(colors.white(colors.bold("[MODULE]")));
            break;
        case "error":
            logString = colors.white(logMessage)
            logFormatting = colors.bgMagenta(colors.white(colors.bold("[SYSTEM]"))) + " " + colors.bgRed(colors.white(colors.bold("[ERROR]")));
            break;
        case "warn":
            logString = colors.white(logMessage)
            logFormatting = colors.bgMagenta(colors.white(colors.bold("[SYSTEM]"))) + " " + colors.bgYellow(colors.white(colors.bold("[WARN]")));
            break;
    }
    console.log(logFormatting, logString);
}