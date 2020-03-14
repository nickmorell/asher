var github = require('octonode');


module.exports = {
    name: 'githubset',
    description: 'Set github username for discord user.',
    execute(client, message, args) {

        var client = github.client();
        let username = args[0];

        if(!username) {
            message.channel.send('You must provide a Github username.');
            return;
        }

        
        let githubClient = github.client();

        githubClient.user(username);

        const desiredChannel = client.find('name', 'devops');

        desiredChannel.send();
    }
}