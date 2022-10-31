const fetch = require("node-fetch");
const config = require("../data/config");

async function CCAPINotify(message) {
    var CCAPI = await fetch(`${config.console.host}${config.console.urls.notify}${message}`);
    return CCAPI;
}

module.exports = CCAPINotify;