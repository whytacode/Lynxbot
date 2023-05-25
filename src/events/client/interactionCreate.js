module.exports = {
    name: "interactionCreate",
    async execute(client, interaction) {
        if (!interaction.isChatInputCommand()) return;

        const cmd = client.commands.get(interaction.commandName);
        if (!cmd) return;
        if (cmd.category == "developer" && interaction.user.id !== client.config.developerId) return;

        try {
            cmd.execute(interaction)
        } catch {
            interaction.reply({ content: "Произошла ошибка, попробуйте позже", ephemeral: true })
        }
    }
}