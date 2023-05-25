const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    slash: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("ping command"),
    async execute(interaction) {
        const pingEmb = new EmbedBuilder()
            .setTitle("Pong!")
            .setDescription(`**WebSocket**: ${interaction.client.ws.ping}ms`)
        interaction.reply({ embeds: [pingEmb] })
    }
}