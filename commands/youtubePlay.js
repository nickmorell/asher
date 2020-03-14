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
        
        voice.channel.join()
            .then(connection => {

                connection.play(ytdl(args[0], { filter: 'audioonly', quality: 'highestaudio' }));
            })
            .catch(error => {
                console.warn(error);
                return message.reply('There was an issue playing the provided link.');
            });
    }
};