const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    slash: new SlashCommandBuilder()
        .setName("send")
        .setDescription("Отправляет сообщения с помощью бота")
}