const Discord = require('discord.js');

module.exports = {
    name: 'opsrequest',
    description: 'Send a request to the Dev Ops team.',
    execute(message, args) {

        const embed = new Discord.RichEmbed()
            .setColor('#0099ff')
            .settitle('New Request')
            .setAuthor(message.author)
            .setDescription(args[0])


        message.channel.send(emded);
    }
}