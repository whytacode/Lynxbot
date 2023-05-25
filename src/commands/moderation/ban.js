const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    slash: new SlashCommandBuilder()
        .setName("ban")
        .setDescription("Блокирует участника на сервере")
        .addUserOption(option =>
            option.setName("username")
            .setDescription("Выберите участника, которого нужно заблокировать")
            .setRequired(true))
        .addStringOption(option =>
            option.setName("reason")
            .setDescription("Укажите причину блокировки")),
    async execute(interaction) {
        const member = interaction.options.getMember("username");
        const reason = interaction.options.getString("reason") ?? "Причина не указана";

        const banEmb = new EmbedBuilder()
            .setColor(0xFF0000)
            .setTitle(`Вы были заблокированы на сервере ${interaction.guild.name}`)
            .addFields(
                { name: "Никнейм модератора:", value: interaction.user.tag, inline: true },
                { name: "Причина блокировки:", value: reason, inline: true }
            )
            .setThumbnail(interaction.guild.iconURL());

        if (member.bannable) {
            try {
                await member.send({ embeds: [banEmb] })
            } catch (err) {
                interaction.reply({ content: "У участника закрыты личные сообщения", ephemeral: true });
            }

            member.ban({ reason: reason });
            interaction.reply({ content: `Участник ${member} успешно заблокирован по причине: ${reason}`, ephemeral: true })
        } else interaction.reply({ content: `Вы не можете заблокировать администратора`, ephemeral: true })
    }
}