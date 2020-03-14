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
        
		voice.join().then(connection => {
			const stream = ytdl('https://www.youtube.com/watch?v=D57Y1PruTlw', { filter: 'audioonly', quality: 'highestaudio' });
			const dispatcher = connection.play(stream);

			// dispatcher.on('discnnect', () => voice.disconnect());
		}); 
    }
};