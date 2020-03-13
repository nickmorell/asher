module.exports = {
    name: 'ping',
    description: 'Typical Ping! command',
    execute(client, message, args) {
        message.channel.send('Pong.');
    }
}