const Discord = require("discord.js")

const TOKEN = "OTU2NjU5MjMwOTIyOTMyMjg0.YjzcVg.e1QnftUZtTuS_0o61t1xXz45jV8"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

// notes is here test note 

client.login(TOKEN)

client.on("ready", () => {
    console.log();(`logged in as ${client.user.tag}`);
    client.user.setActivity("Testing 101");
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello Papi!")
    }
})

client.on("message", async message => {
    const prefix = "+";

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === "play") {
        let track = await client.player.play(message.member.voice.channel, args[0], message.member.user.tag);
        message.channel.send(`Currently playing ${track.name}! - Requested by ${track.requestedBy}`);
    }

    if (command === "stop") {
        let track = await client.player.stop(message.guild.id);
        message.channel.send("Stopped");
    }

})
