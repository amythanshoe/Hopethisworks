module.exports ={
    name: 'skip',
    description: 'skips the queue',
    async execute(client, message, args){
        if(!message.member.voice.channel) return message.channel.send("please join a voice channel first!");
       client.player.skip(message);
    }
}