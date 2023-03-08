module.exports = {
    token: "DISCORD_BOT_TOKEN",

    whitelist: { //Decide who can use the bot. If you want to allow everyone, set enabled to false. (Default: false)
        enabled: false,
        users: ["USER_ID"]
    },

    settings: {
        prefix: "BOT_PREFIX",
        name: "BOT_NAME"
    },

    console: {
        urls: {
            unloadslot2: "/vshplugin.ps3mapi?unload_slot=2",
            loadslot2: "/vshplugin.ps3mapi?prx=%2Fdev_hdd0%2Fplugins%2FValiant.sprx&load_slot=2",
            notify: "/notify.ps3mapi?msg="
        },
        host: "http://192.168.x.x" //replace x.x with the end of your PS3's internal IP
    }
}