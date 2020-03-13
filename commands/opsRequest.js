module.exports = {
    name: 'opsrequest',
    description: 'Send a request to the Dev Ops team.',
    execute(client, message, args) {
        const desiredChannel = client.find('name', 'devops');

        desiredChannel.send();
    }
}