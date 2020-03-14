const clientUtils = require('./util/clientUtil');

const Discord = require('discord.js');
const {prefix} = require('./config.json');
const token = process.env.TOKEN;

const client = new Discord.Client();

clientUtils.setupCommands(client);

client.once('ready', () => {
    console.log('Asher is ready and running!');
});

client.once('reconnecting', () => {
    console.log('Asher is Reconnecting!');
});
client.once('disconnect', () => {
    console.log('Asher has Disconnected!');
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

process.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error));

client.login(token);