module.exports ={
    name: 'stop',
    description: 'stops the queue',
    async execute(client, message, args){
        if(!message.member.voice.channel) return message.channel.send("please join a voice channel first!");
       client.player.stop(message);
    }
}