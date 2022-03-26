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

