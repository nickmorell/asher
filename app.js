const Discord = require('discord.js');
const fs = require('fs');
const {prefix} = require('./config.json');
const token = process.env.TOKEN;

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for(const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Asher is ready and running!');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return; // Return if bot or does not use prefix

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    try {
        client.commands.get(command).execute(client, message, args);
    } catch(error) {
        console.error(error);
        message.reply("There was an error trying to execute the command!");
    }

});

client.login(token);