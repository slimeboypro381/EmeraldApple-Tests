const Discord = require("discord.js")

const TOKEN = "OTU2NjU5MjMwOTIyOTMyMjg0.YjzcVg.e1QnftUZtTuS_0o61t1xXz45jV8"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log("Bot is online!")
})

client.on("messagecreate", (message) => {
    const prefix = "-"
    if (!message.content.startsWith(prefix)) return;

    if (message.content === `${prefix}test`) {
        message.channel.send("your test has worked!")
    }
})

client.login(TOKEN)