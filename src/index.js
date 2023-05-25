console.time("Start time")
const { Client, Collection } = require("discord.js");
const { createAudioPlayer, NoSubscriberBehavior } = require("discord.js");

require("dotenv").config();
const config = require("../config.json")

const client = new Client({
    intents: config.intents
});

client.commands_array = [];
client.commands = new Collection();
client.config = require("../config.json");

require("./handlers/eventHandler").init(client);

client.login(process.env.CLIENT_TOKEN);

module.exports = client;