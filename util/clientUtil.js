const fs = require('fs');
const Discord = require('discord.js');

module.exports = {
    setupCommands(client) { 
        client.commands = new Discord.Collection();
        const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

        for(const file of commandFiles) {
            const command = require(`../commands/${file}`);
            client.commands.set(command.name, command);
        }
    }
}