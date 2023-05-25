require("colors");

module.exports = {
    name: "ready",
    once: true,
    async execute(client) {
        require("../../handlers/commandHandler").init(client);
        console.log("[EVENT]".green + ": Bot was started successfully");
        console.timeEnd("Start time")
    }
}