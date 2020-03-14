const ytdl = require('ytdl-core');

module.exports = {
    name: 'youtube:play',
    description: 'Play audio from a youtube video in a voice channel.',
    execute(client, message, args) {
        if (message.channel.type !== 'text') return;

		const { voice } = message.member;

		if (!voice) {
			return message.reply('please join a voice channel first!');
		}
        
        try{
            voice.connection.play(ytdl('https://www.youtube.com/watch?v=D57Y1PruTlw', { filter: 'audioonly', quality: 'highestaudio' })); 
        } catch(error) {
            return message.reply('There was an issue playing the provided link.');
        }
    }
};