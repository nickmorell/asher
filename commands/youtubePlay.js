const ytdl = require('ytdl-core');

module.exports = {
    name: 'youtube:play',
    description: 'Play audio from a youtube video in a voice channel.',
    execute(client, message, args) {
        if (message.channel.type !== 'text') return;

		const { voiceChannel } = message.member;

		if (!voiceChannel) {
			return message.reply('please join a voice channel first!');
		}

		voiceChannel.join().then(connection => {
			const stream = ytdl('https://www.youtube.com/watch?v=D57Y1PruTlw', { filter: 'audioonly' });
			const dispatcher = connection.playStream(stream);

			dispatcher.on('end', () => voiceChannel.leave());
		}); 
    }
};