const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    slash: new SlashCommandBuilder()
        .setName("test")
        .setDescription("test command"),
    async execute(interaction) {
        interaction.reply("test")
    }
}