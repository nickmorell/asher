module.exports = {
    name: 'ping',
    description: 'Typical Ping! command',
    execute(message, args) {
        message.channel.send('Pong.');
    }
}