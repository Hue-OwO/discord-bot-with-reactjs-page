const { Client, Intents, Collection } = require("discord.js");
const fs = require("fs");

const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});
const config = require("../react website/src/bot info/config.json");

client.config = config;
client.commands = new Collection();

client.on('messageCreate', message => {
    if (message.content.startsWith("!")) {
        const events = fs.readdirSync("./events").filter(file => file.endsWith(".js"));
        for (const file of events) {
            const eventName = file.split(".")[0];
            const event = require(`./events/${file}`);
            client.on(eventName, event.bind(null, client));
        }

        const commands = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
        for (const file of commands) {
            const commandName = file.split(".")[0];
            const command = require(`./commands/${file}`);

            console.log(`Attempting to load command ${commandName}`);
            client.commands.set(command.name, command,);

        }
    }
})
client.login(config.token).then();