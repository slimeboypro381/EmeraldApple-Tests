const Discord = require("discord.js")

const TOKEN = "OTU2NjU5MjMwOTIyOTMyMjg0.YjzcVg.e1QnftUZtTuS_0o61t1xXz45jV8"

client.on("ready", () => {
    console.log();(`logged in as ${client.user.tag}`);
    client.user.setActivity("Testing 101");
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello Papi!")
    }
})

client.login(TOKEN)

