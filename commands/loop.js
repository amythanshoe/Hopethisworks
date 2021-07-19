module.exports ={
    name: 'loop',
    description: 'loops the queue',
    async execute(client, message, args){
        if(!message.member.voice.channel) return message.channel.send("please join a voice channel first!");
       client.player.setRepeatMode(message, parseInt(args[0]));
    }
}