const fs = require("fs");
require("colors");

module.exports.init = async (client) => {
    fs.readdirSync("src/events").forEach(dir => {
        fs.readdirSync(`src/events/${dir}`).filter(end => end.endsWith(".js")).forEach(file => {
            const event = require(`../events/${dir}/${file}`);
            client.on(event.name, event.execute.bind(null, client));
        })
    })
    console.log("[EVENT]".green + ": Events were loaded successfully");
}