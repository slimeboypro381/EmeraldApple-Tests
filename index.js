const Discord = require("discord.js")

const TOKEN = "OTU2NjU5MjMwOTIyOTMyMjg0.YjzcVg.e1QnftUZtTuS_0o61t1xXz45jV8"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log();(`logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) -> {
    if (message.content == "hi"[
        message.reply("Hello Daddy")
    ])
})

client.login(TOKEN)
